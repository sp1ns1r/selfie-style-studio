
import { useState } from "react";
import { Check } from "lucide-react";

export interface Style {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
}

interface StyleCardProps {
  style: Style;
  selected: boolean;
  onSelect: () => void;
}

export function StyleCard({ style, selected, onSelect }: StyleCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div 
      className={`border rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md
        ${selected ? 'ring-2 ring-studio-purple border-studio-purple' : 'border-gray-200'}`}
      onClick={onSelect}
    >
      <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <p className="text-sm text-gray-500">Style Preview</p>
          </div>
        )}
        <img 
          src={style.imageSrc} 
          alt={style.name}
          className={`w-full h-full object-cover ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {selected && (
          <div className="absolute top-3 right-3 bg-studio-purple text-white rounded-full p-1">
            <Check className="h-4 w-4" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{style.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{style.description}</p>
      </div>
    </div>
  );
}
