
import { useState } from "react";
import { Upload, Info, X } from "lucide-react";

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
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
        <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-blue-700">For the best results, we strongly recommend </span>  
            snapping 10-15 selfies in a single session, in good indoor-outdoor lighting, with the same facial expression you want in your generated photos.
          </p>
          <p className="text-sm text-gray-700 mt-1">
            Avoid anything covering your face, like sunglasses, hats, or cropping.
          </p>
        </div>
      </div>
      
      <div 
        className={`border-2 border-dashed rounded-lg ${dragActive ? 'border-studio-purple bg-studio-purple/5' : 'border-gray-300'} 
          p-8 transition-all duration-200 flex flex-col items-center justify-center cursor-pointer`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload')?.click()}
      >
        <Upload className={`h-12 w-12 ${dragActive ? 'text-studio-purple' : 'text-gray-400'} mb-4`} />
        <p className="text-lg font-medium mb-2">Drag photos here or click to upload</p>
        <p className="text-sm text-gray-500 mb-4">PNG, JPG (MIN. 10, MAX. 20 images, 5MB max per image)</p>
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
            <h3 className="font-medium">Selected Files ({selectedFiles.length}/20)</h3>
            <p className="text-sm text-gray-500">Total size: {formattedSize}MB / 50MB</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {selectedFiles.map((file, index) => (
              <div key={index} className="relative group">
                <div className="h-24 w-full bg-gray-100 rounded-md relative overflow-hidden">
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
                    className="absolute top-1 right-1 bg-black/70 rounded-full p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
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
