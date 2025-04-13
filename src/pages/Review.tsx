
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProgressSteps, Step } from "@/components/ProgressSteps";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Pencil, Info, Loader2, CheckCircle, User, Palette, Camera, ArrowRight, ArrowLeft } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
    src: "/placeholder.svg",
    name: `Photo ${i+1}`
  }));
  
  const handleSubmit = () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      navigate("/processing");
    }, 500);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Header showBackButton email="spencerkier@gmail.com" />
      
      <div className="container max-w-5xl py-6">
        <ProgressSteps steps={steps} />
        
        <Card className="border-0 shadow-lg rounded-2xl overflow-hidden mb-6">
          <CardHeader className="bg-gradient-to-r from-studio-purple/10 to-studio-blue/10 border-b p-6">
            <h1 className="text-xl font-semibold">Review information</h1>
          </CardHeader>
          
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-studio-purple to-studio-blue/70 flex items-center justify-center text-white">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{userData.name}</h3>
                    <p className="text-sm text-gray-600">{userData.gender}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1 text-studio-purple border-studio-purple/30 hover:bg-studio-purple/5">
                  <Pencil className="h-3 w-3" />
                  Edit info
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-studio-purple to-studio-blue/70 flex items-center justify-center text-white">
                    <Palette className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{selectedStyles.length} styles selected</h3>
                    <div className="text-sm text-gray-600">
                      {selectedStyles.map(style => (
                        <div key={style.name} className="flex items-center gap-1">
                          <CheckCircle className="h-3 w-3 text-studio-purple" />
                          <span>{style.name}: {style.count} photos</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="flex items-center gap-1 text-studio-purple border-studio-purple/30 hover:bg-studio-purple/5">
                  <Pencil className="h-3 w-3" />
                  Edit styles
                </Button>
              </div>
              
              <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-studio-purple to-studio-blue/70 flex items-center justify-center text-white">
                      <Camera className="h-6 w-6" />
                    </div>
                    <h3 className="font-medium text-lg">{uploadedPhotos.length} photos uploaded</h3>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center gap-1 text-studio-purple border-studio-purple/30 hover:bg-studio-purple/5">
                    <Pencil className="h-3 w-3" />
                    Edit photos
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {uploadedPhotos.slice(0, 6).map(photo => (
                    <div key={photo.id} className="aspect-square rounded-lg overflow-hidden bg-gray-100 border border-gray-200 shadow-sm transition-transform hover:scale-105 duration-300">
                      <img 
                        src={photo.src} 
                        alt={photo.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  {uploadedPhotos.length > 6 && (
                    <div className="aspect-square rounded-lg overflow-hidden bg-studio-purple/10 border border-studio-purple/20 flex items-center justify-center text-studio-purple font-medium shadow-sm">
                      +{uploadedPhotos.length - 6} more
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-blue-100 flex-shrink-0">
              <Info className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-blue-800 mb-1">What happens next?</h3>
              <p className="text-sm text-gray-700">
                When you click "Submit", we'll hand the photos off to our AI models and generate your professional portraits.
                You'll receive an email when your photos are ready, typically in less than an hour.
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start gap-3 mb-6 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <Checkbox 
            id="confirm" 
            checked={confirmUpload}
            onCheckedChange={(checked) => setConfirmUpload(checked as boolean)}
            className="data-[state=checked]:bg-studio-purple data-[state=checked]:border-studio-purple"
          />
          <label htmlFor="confirm" className="text-sm text-gray-700 cursor-pointer">
            I have uploaded my best photos and understand these will influence the final result.
          </label>
        </div>
        
        <div className="flex justify-between">
          <Button 
            variant="outline"
            onClick={() => navigate("/styles")}
            className="px-6 py-2 border-gray-200 flex items-center gap-1"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <Button 
            className="bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90 px-8 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            onClick={handleSubmit}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit & Pay <ArrowRight className="h-4 w-4 ml-1" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Review;
