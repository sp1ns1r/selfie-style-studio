
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProgressSteps, Step } from "@/components/ProgressSteps";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Pencil, Info, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const Review = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmUpload, setConfirmUpload] = useState(false);
  const navigate = useNavigate();
  
  const steps: Step[] = [
    { id: 1, name: "Upload", status: "complete" },
    { id: 2, name: "Style", status: "complete" },
    { id: 3, name: "Review", status: "current" },
    { id: 4, name: "Results", status: "upcoming" },
  ];

  // Mock data for review page
  const userData = {
    name: "Bob",
    gender: "Male"
  };
  
  const selectedStyles = [
    { name: "Office Professional", count: 2 },
    { name: "Business Casual", count: 2 }
  ];
  
  const uploadedPhotos = Array(11).fill(null).map((_, i) => ({
    id: i,
    src: "public/placeholder.svg",
    name: `Photo ${i+1}`
  }));
  
  const handleSubmit = () => {
    if (!confirmUpload) return;
    
    setIsSubmitting(true);
    
    // Simulate submission process
    setTimeout(() => {
      navigate("/processing");
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header showBackButton email="spencerkier@gmail.com" />
      
      <div className="container max-w-5xl py-6">
        <ProgressSteps steps={steps} />
        
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden mb-6">
          <div className="p-6 border-b bg-gray-50">
            <h1 className="text-xl font-semibold">Review information</h1>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-studio-purple/10 flex items-center justify-center">
                  <span className="text-studio-purple">👤</span>
                </div>
                <div>
                  <h3 className="font-medium">{userData.name}</h3>
                  <p className="text-sm text-gray-600">{userData.gender}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Pencil className="h-4 w-4" />
                Edit info
              </Button>
            </div>
            
            <div className="flex items-center justify-between border-b py-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-studio-purple/10 flex items-center justify-center">
                  <span className="text-studio-purple">🎨</span>
                </div>
                <div>
                  <h3 className="font-medium">{selectedStyles.length} styles selected</h3>
                  <div className="text-sm text-gray-600">
                    {selectedStyles.map(style => (
                      <p key={style.name}>{style.name}: {style.count} photos</p>
                    ))}
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Pencil className="h-4 w-4" />
                Edit styles
              </Button>
            </div>
            
            <div className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-studio-purple/10 flex items-center justify-center">
                    <span className="text-studio-purple">📸</span>
                  </div>
                  <h3 className="font-medium">{uploadedPhotos.length} photos uploaded</h3>
                </div>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Pencil className="h-4 w-4" />
                  Edit photos
                </Button>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 gap-3">
                {uploadedPhotos.map(photo => (
                  <div key={photo.id} className="aspect-square rounded-md overflow-hidden bg-gray-100">
                    <img 
                      src={photo.src} 
                      alt={photo.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-800 mb-1">What's next?</h3>
              <p className="text-sm text-gray-700">
                When you click "Submit", we'll hand the photos off to our "AI photographer", then send you an email when your photos are ready.
                This usually takes &lt;1 hour.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-2 mb-6">
          <Checkbox 
            id="confirm" 
            checked={confirmUpload}
            onCheckedChange={(checked) => setConfirmUpload(checked as boolean)}
          />
          <label htmlFor="confirm" className="text-sm text-gray-700 cursor-pointer">
            I have uploaded my best photos and understand these will influence the final result.
          </label>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={() => navigate("/styles")}
            className="px-6 py-2"
          >
            Back
          </Button>
          <Button 
            className="bg-studio-purple hover:bg-studio-purple/90 px-8 py-6 text-lg rounded-xl"
            onClick={handleSubmit}
            disabled={isSubmitting || !confirmUpload}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit & Pay"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Review;
