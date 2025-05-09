
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProgressSteps, Step } from "@/components/ProgressSteps";
import { PhotoUploader } from "@/components/PhotoUploader";
import { UserInfoForm } from "@/components/UserInfoForm";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight, Camera, UserCircle } from "lucide-react";
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-studio-purple/10 to-studio-blue/10 border-b p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-studio-purple/20 rounded-full">
                  <Camera className="h-5 w-5 text-studio-purple" />
                </div>
                <h2 className="text-xl font-semibold">Upload your photos</h2>
              </div>
            </CardHeader>
            
            <CardContent className="p-6">
              <PhotoUploader onPhotosSelected={handlePhotosSelected} />
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-studio-purple/10 to-studio-blue/10 border-b p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-studio-purple/20 rounded-full">
                  <UserCircle className="h-5 w-5 text-studio-purple" />
                </div>
                <h2 className="text-xl font-semibold">Your Information</h2>
              </div>
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
