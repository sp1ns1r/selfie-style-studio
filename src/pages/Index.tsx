
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Camera, ChevronRight, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header email="spencerkier@gmail.com" />
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-2xl shadow-sm border p-8 md:p-12">
            <div className="text-center space-y-6 max-w-2xl mx-auto">
              <div className="inline-block p-4 bg-studio-purple/10 rounded-full">
                <Camera className="h-8 w-8 text-studio-purple" />
              </div>
              
              <h1 className="text-4xl font-bold bg-gradient-to-r from-studio-purple to-studio-blue text-transparent bg-clip-text">
                Transform your selfies into professional photos
              </h1>
              
              <p className="text-lg text-gray-600">
                Upload your selfies, select your styles, and our AI will create stunning professional photos of you in minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Link to="/upload">
                  <Button className="bg-studio-purple hover:bg-studio-purple/90 text-lg px-8 py-6 rounded-xl w-full">
                    Get started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
                <div className="p-4 rounded-xl border bg-white">
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-studio-purple/10 flex items-center justify-center text-studio-purple font-medium">
                      1
                    </div>
                    <h3 className="font-medium">Upload Selfies</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Upload 10-15 clear selfies with consistent lighting and expressions
                  </p>
                </div>
                
                <div className="p-4 rounded-xl border bg-white">
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-studio-purple/10 flex items-center justify-center text-studio-purple font-medium">
                      2
                    </div>
                    <h3 className="font-medium">Select Styles</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Choose from professional, casual, or custom photo styles
                  </p>
                </div>
                
                <div className="p-4 rounded-xl border bg-white">
                  <div className="flex gap-3 items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-studio-purple/10 flex items-center justify-center text-studio-purple font-medium">
                      3
                    </div>
                    <h3 className="font-medium">Get Results</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Receive your AI-generated professional photos in under an hour
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>Our AI technology creates high-quality professional photos while preserving your natural look</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
