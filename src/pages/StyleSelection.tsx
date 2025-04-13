
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProgressSteps, Step } from "@/components/ProgressSteps";
import { StyleCard, Style } from "@/components/StyleCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Info } from "lucide-react";

// Placeholder image URLs - in a real app, these would be proper style preview images
const placeholderImage = "public/placeholder.svg";

const styles: Style[] = [
  {
    id: "office",
    name: "Office Professional",
    description: "Professional indoor studio lighting with neutral background, perfect for LinkedIn and resumes.",
    imageSrc: placeholderImage
  },
  {
    id: "business-casual",
    name: "Business Casual",
    description: "Indoor setting with soft lighting, wearing smart casual attire. Ideal for social media profiles.",
    imageSrc: placeholderImage
  },
  {
    id: "property",
    name: "Property Display",
    description: "Indoor setting showing a tasteful housing background, wearing business attire. Great for real estate professionals.",
    imageSrc: placeholderImage
  },
  {
    id: "outdoor",
    name: "Outdoor Greenery",
    description: "Natural outdoor setting with greenery, wearing business casual attire. Shows you as approachable and connected.",
    imageSrc: placeholderImage
  },
  {
    id: "residential",
    name: "Residential",
    description: "Outdoor setting with a home visible in the background, wearing professional attire. Perfect for realtors.",
    imageSrc: placeholderImage
  },
];

const StyleSelection = () => {
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const navigate = useNavigate();
  
  const steps: Step[] = [
    { id: 1, name: "Upload", status: "complete" },
    { id: 2, name: "Style", status: "current" },
    { id: 3, name: "Review", status: "upcoming" },
    { id: 4, name: "Results", status: "upcoming" },
  ];
  
  const toggleStyleSelection = (styleId: string) => {
    setSelectedStyles(prev => {
      if (prev.includes(styleId)) {
        return prev.filter(id => id !== styleId);
      } else {
        return [...prev, styleId];
      }
    });
  };
  
  const handleContinue = () => {
    if (selectedStyles.length === 0) {
      return;
    }
    navigate("/review");
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header showBackButton email="spencerkier@gmail.com" />
      
      <div className="container max-w-5xl py-6">
        <ProgressSteps steps={steps} />
        
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="p-6 border-b bg-gray-50">
            <h1 className="text-xl font-semibold">Select your styles</h1>
          </div>
          
          <div className="p-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3 mb-6">
              <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-gray-700">
                  Select as many styles as you want. You'll get 4 photos total across your selections.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {styles.map(style => (
                <StyleCard
                  key={style.id}
                  style={style}
                  selected={selectedStyles.includes(style.id)}
                  onSelect={() => toggleStyleSelection(style.id)}
                />
              ))}
            </div>
            
            {selectedStyles.length > 0 && (
              <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
                <h3 className="font-medium mb-2">Your selections:</h3>
                <ul className="space-y-2">
                  {selectedStyles.map(styleId => {
                    const style = styles.find(s => s.id === styleId);
                    return (
                      <li key={styleId} className="flex items-center gap-2 text-sm">
                        <span className="w-2 h-2 bg-studio-purple rounded-full"></span>
                        {style?.name}: 2 photos
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          <Button 
            variant="outline"
            onClick={() => navigate("/upload")}
            className="px-6 py-2"
          >
            Back
          </Button>
          <Button 
            className="bg-studio-purple hover:bg-studio-purple/90 px-8 py-6 text-lg rounded-xl"
            onClick={handleContinue}
            disabled={selectedStyles.length === 0}
          >
            Continue to Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StyleSelection;
