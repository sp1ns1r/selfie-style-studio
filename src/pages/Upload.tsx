
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProgressSteps, Step } from "@/components/ProgressSteps";
import { PhotoUploader } from "@/components/PhotoUploader";
import { UserInfoForm } from "@/components/UserInfoForm";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, Check, X, Info, Image as ImageIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [userData, setUserData] = useState({ name: "", gender: "" });
  const navigate = useNavigate();
  
  const steps: Step[] = [
    { id: 1, name: "Upload", status: "current" },
    { id: 2, name: "Style", status: "upcoming" },
    { id: 3, name: "Review", status: "upcoming" },
    { id: 4, name: "Results", status: "upcoming" },
  ];
  
  const handlePhotosSelected = (selectedFiles: File[]) => {
    setFiles(prev => [...prev, ...selectedFiles]);
  };
  
  const handleUserDataChange = (data: { name: string; gender: string }) => {
    setUserData(data);
  };
  
  const handleSubmit = () => {
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      navigate("/styles");
    }, 500);
  };
  
  const isSubmitDisabled = files.length < 10 || !userData.name || !userData.gender || uploading;
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-slate-50">
      <Header showBackButton email="spencerkier@gmail.com" />
      
      <div className="container max-w-5xl py-6">
        <ProgressSteps steps={steps} />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Upload Your Photos</h1>
          <p className="text-center text-gray-600 mt-2">We'll use these to generate your professional headshots</p>
        </div>
        
        {/* How to Get Best Results Section - Now spanning horizontally above the cards */}
        <div className="bg-blue-50/80 border border-blue-100 rounded-xl p-5 mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center text-studio-purple">
            <span className="p-1.5 bg-studio-purple/10 rounded-full mr-2">
              <ImageIcon className="h-4 w-4 text-studio-purple" />
            </span>
            How to Get the Best Results
          </h3>
          
          <ol className="space-y-2 text-gray-700 mb-4">
            <li className="flex gap-2">
              <span className="font-medium text-gray-600">1.</span> 
              <span className="font-medium text-gray-600">Get ready:</span> Style your hair and face how you want them to appear.
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-gray-600">2.</span>
              <span className="font-medium text-gray-600">Take clear photos:</span> Use good lighting and neutral expressions.
            </li>
            <li className="flex gap-2">
              <span className="font-medium text-gray-600">3.</span>
              <span className="font-medium text-gray-600">Upload 10-15 selfies:</span> Include slightly different angles for best results.
            </li>
          </ol>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-green-50 border border-green-100 rounded-lg p-3 flex-1">
              <div className="flex items-center mb-2 text-green-700">
                <Check className="h-4 w-4 mr-1.5" />
                <span className="font-semibold">Do</span>
              </div>
              <ul className="space-y-1 text-sm text-green-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span> 
                  <span>Look directly at the camera</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> 
                  <span>Use good, consistent lighting</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> 
                  <span>Include slightly different angles</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex-1">
              <div className="flex items-center mb-2 text-red-700">
                <X className="h-4 w-4 mr-1.5" />
                <span className="font-semibold">Don't</span>
              </div>
              <ul className="space-y-1 text-sm text-red-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span> 
                  <span>Wear sunglasses or hats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> 
                  <span>Use silly faces or exaggerated expressions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span> 
                  <span>Upload group photos or busy backgrounds</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Photos Card - Simplified header */}
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-studio-purple/10 to-studio-blue/10 border-b p-4">
              <h2 className="text-lg font-semibold">Upload your photos</h2>
            </CardHeader>
            
            <CardContent className="p-6">
              <PhotoUploader onPhotosSelected={handlePhotosSelected} />
            </CardContent>
          </Card>
          
          {/* User Information Card - Simplified header */}
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-studio-purple/10 to-studio-blue/10 border-b p-4">
              <h2 className="text-lg font-semibold">Your Information</h2>
            </CardHeader>
            
            <CardContent className="p-6">
              <UserInfoForm onSubmit={handleUserDataChange} />
              
              <div className="mt-8">
                <Button 
                  className="w-full bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90 py-6 text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={handleSubmit}
                  disabled={isSubmitDisabled}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      Continue to Styles
                      <ArrowRight className="h-5 w-5 ml-1" />
                    </>
                  )}
                </Button>
                
                {files.length < 10 && (
                  <p className="text-center text-amber-600 text-sm mt-3">
                    Please upload at least 10 photos to continue
                  </p>
                )}
                
                {files.length >= 10 && (!userData.name || !userData.gender) && (
                  <p className="text-center text-amber-600 text-sm mt-3">
                    Please complete your information to continue
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;
