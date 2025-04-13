
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProgressSteps, Step } from "@/components/ProgressSteps";
import { StyleCard, Style } from "@/components/StyleCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Info, ArrowRight, ArrowLeft } from "lucide-react";

// Placeholder image URLs - in a real app, these would be proper style preview images
const placeholderImage = "/placeholder.svg";

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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Header showBackButton email="spencerkier@gmail.com" />
      
      <div className="container max-w-5xl py-6">
        <ProgressSteps steps={steps} />
        
        <div className="bg-white rounded-2xl shadow-lg border-0 overflow-hidden">
          <div className="p-6 border-b bg-gradient-to-r from-studio-purple/10 to-studio-blue/10">
            <h1 className="text-xl font-semibold">Select your styles</h1>
          </div>
          
          <div className="p-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-full bg-blue-100 flex-shrink-0">
                  <Info className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-700">
                    Select your preferred professional styles below. You'll get 4 photos total across all your selected styles.
                  </p>
                </div>
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
              <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100">
                <h3 className="font-medium mb-3 text-purple-800">Your selections</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedStyles.map(styleId => {
                    const style = styles.find(s => s.id === styleId);
                    return style && (
                      <div key={styleId} className="flex items-center gap-2 bg-white p-2 rounded-lg border border-purple-100 shadow-sm">
                        <div className="h-4 w-4 rounded-full bg-gradient-to-r from-studio-purple to-studio-blue"></div>
                        <span className="text-sm font-medium">{style.name}</span>
                        <span className="text-xs bg-studio-purple/10 text-studio-purple px-2 py-0.5 rounded-full ml-auto">2 photos</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="mt-8 flex justify-between">
          <Button 
            variant="outline"
            onClick={() => navigate("/upload")}
            className="px-6 py-2 border-gray-200 flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <Button 
            className="bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90 px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            onClick={handleContinue}
            disabled={selectedStyles.length === 0}
          >
            Continue to Review <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StyleSelection;
