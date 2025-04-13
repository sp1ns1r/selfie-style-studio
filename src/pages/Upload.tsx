
import { useState } from "react";
import { Header } from "@/components/Header";
import { ProgressSteps, Step } from "@/components/ProgressSteps";
import { PhotoUploader } from "@/components/PhotoUploader";
import { UserInfoForm } from "@/components/UserInfoForm";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [userData, setUserData] = useState({ name: "", gender: "" });
  const { toast } = useToast();
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
  
  const handleSubmit = async () => {
    if (files.length < 10) {
      toast({
        title: "Not enough photos",
        description: "Please upload at least 10 photos for best results.",
        variant: "destructive"
      });
      return;
    }
    
    if (!userData.name || !userData.gender) {
      toast({
        title: "Incomplete information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      navigate("/styles");
    }, 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header showBackButton email="spencerkier@gmail.com" />
      
      <div className="container max-w-5xl py-6">
        <ProgressSteps steps={steps} />
        
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="p-6 border-b bg-gray-50">
            <h1 className="text-xl font-semibold">Upload your photos</h1>
          </div>
          
          <div className="p-6">
            <PhotoUploader onPhotosSelected={handlePhotosSelected} />
          </div>
        </div>
        
        <div className="mt-6 bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="p-6 border-b bg-gray-50">
            <h1 className="text-xl font-semibold">Your Information</h1>
          </div>
          
          <div className="p-6">
            <UserInfoForm onSubmit={handleUserDataChange} />
          </div>
        </div>
        
        <div className="mt-8 flex justify-end">
          <Button 
            className="bg-studio-purple hover:bg-studio-purple/90 px-8 py-6 text-lg rounded-xl"
            onClick={handleSubmit}
            disabled={uploading}
          >
            {uploading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                Continue to Styles
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
