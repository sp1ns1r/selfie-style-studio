
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProgressSteps, Step } from "@/components/ProgressSteps";
import { PhotoUploader } from "@/components/PhotoUploader";
import { UserInfoForm } from "@/components/UserInfoForm";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, Check, X } from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-white">
      <Header showBackButton email="spencerkier@gmail.com" />
      
      <div className="container max-w-5xl py-6">
        <ProgressSteps steps={steps} />
        
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Upload Your Photos</h1>
          <p className="text-center text-gray-600 mt-2">We'll use these to generate your professional headshots</p>
        </div>
        
        {/* Simplified Best Results Section */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <h3 className="text-lg font-semibold mb-3">For Best Results:</h3>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="flex items-center mb-2 text-green-700">
                <Check className="h-4 w-4 mr-1.5" />
                <span className="font-semibold">Do</span>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
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
                  <span>Include different angles (10+ photos)</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center mb-2 text-red-700">
                <X className="h-4 w-4 mr-1.5" />
                <span className="font-semibold">Don't</span>
              </div>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wear sunglasses or hats</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use exaggerated expressions</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Upload group photos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Upload Photos Card - Simplified */}
          <Card className="shadow-sm rounded-lg">
            <CardHeader className="border-b p-4">
              <h2 className="text-lg font-medium">Upload photos</h2>
            </CardHeader>
            
            <CardContent className="p-6">
              <PhotoUploader onPhotosSelected={handlePhotosSelected} />
            </CardContent>
          </Card>
          
          {/* User Information Card - Simplified */}
          <Card className="shadow-sm rounded-lg">
            <CardHeader className="border-b p-4">
              <h2 className="text-lg font-medium">Your information</h2>
            </CardHeader>
            
            <CardContent className="p-6">
              <UserInfoForm onSubmit={handleUserDataChange} />
              
              <div className="mt-8">
                <Button 
                  className="w-full py-6 text-lg"
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
