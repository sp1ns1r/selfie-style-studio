
import { useState } from "react";
import { Upload, X } from "lucide-react";

interface PhotoUploaderProps {
  onPhotosSelected: (files: File[]) => void;
}

export function PhotoUploader({ onPhotosSelected }: PhotoUploaderProps) {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };
  
  const handleFiles = (files: File[]) => {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setSelectedFiles(prev => [...prev, ...imageFiles]);
    onPhotosSelected(imageFiles);
  };
  
  const removeFile = (index: number) => {
    setSelectedFiles(files => files.filter((_, i) => i !== index));
  };
  
  const totalSize = selectedFiles.reduce((acc, file) => acc + file.size, 0);
  const formattedSize = (totalSize / (1024 * 1024)).toFixed(2);
  
  return (
    <div className="space-y-6">
      <div 
        className={`border-2 border-dashed rounded-lg transition-all duration-300 flex flex-col items-center justify-center cursor-pointer
          ${dragActive 
            ? 'border-blue-400 bg-blue-50' 
            : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
          } p-6`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <div className={`p-3 rounded-full mb-3 ${dragActive ? 'bg-blue-100' : 'bg-gray-100'}`}>
          <Upload className={`h-6 w-6 ${dragActive ? 'text-blue-500' : 'text-gray-400'}`} />
        </div>
        <p className="text-base font-medium mb-1">Drag photos here or click to upload</p>
        <p className="text-xs text-gray-500">Upload 10+ photos for best results (5MB max per image)</p>
        <input 
          id="file-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </div>
      
      {selectedFiles.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">
              Selected Photos <span className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full">{selectedFiles.length}</span>
            </h3>
            <p className="text-xs text-gray-500">Total size: {formattedSize}MB</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {selectedFiles.map((file, index) => (
              <div key={index} className="relative group">
                <div className="h-20 w-full bg-gray-50 rounded-md relative overflow-hidden border border-gray-200">
                  <img 
                    src={URL.createObjectURL(file)} 
                    alt={`Preview ${index}`}
                    className="h-full w-full object-cover"
                  />
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFile(index);
                    }} 
                    className="absolute top-1 right-1 bg-black/60 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-all hover:bg-black"
                  >
                    <X className="h-3 w-3 text-white" />
                  </button>
                </div>
                <p className="text-xs truncate mt-1 text-gray-600">
                  {file.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
