
import { useState } from "react";
import { Upload, Info, X, Image as ImageIcon } from "lucide-react";

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
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
        <div className="p-1.5 rounded-full bg-blue-100 flex-shrink-0">
          <Info className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-blue-700">For the best results:</span> Upload 
            10-15 clear selfies with consistent lighting and neutral expressions. Focus on your face without cropping or obstructions.
          </p>
        </div>
      </div>
      
      <div 
        className={`border-2 border-dashed rounded-xl transition-all duration-300 flex flex-col items-center justify-center cursor-pointer
          ${dragActive 
            ? 'border-studio-purple bg-gradient-to-r from-studio-purple/5 to-studio-blue/5' 
            : 'border-gray-200 hover:border-studio-purple/50 hover:bg-gray-50'
          } p-8`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <div className={`p-4 rounded-full mb-4 ${dragActive ? 'bg-studio-purple/20' : 'bg-gray-100'}`}>
          <Upload className={`h-8 w-8 ${dragActive ? 'text-studio-purple' : 'text-gray-400'}`} />
        </div>
        <p className="text-lg font-medium mb-2">Drag photos here or click to upload</p>
        <p className="text-sm text-gray-500 mb-4">PNG, JPG (10-20 photos recommended, 5MB max per image)</p>
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
        <div className="mt-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-studio-purple" />
              Selected Photos <span className="bg-studio-purple/10 text-studio-purple text-xs px-2 py-0.5 rounded-full">{selectedFiles.length}/20</span>
            </h3>
            <p className="text-sm text-gray-500">Total size: {formattedSize}MB</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {selectedFiles.map((file, index) => (
              <div key={index} className="relative group">
                <div className="h-24 w-full bg-gray-50 rounded-lg relative overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 group-hover:shadow-md">
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
                    className="absolute top-1 right-1 bg-black/70 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all hover:bg-black"
                  >
                    <X className="h-3 w-3 text-white" />
                  </button>
                </div>
                <p className="text-xs truncate mt-1 text-gray-600">
                  {file.name}
                </p>
                <p className="text-xs text-gray-400">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
