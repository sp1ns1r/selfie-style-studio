
import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Processing = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          return 100;
        }
        return prev + 5;
      });
    }, 500);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header email="spencerkier@gmail.com" />
      
      <div className="container max-w-3xl py-12">
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <div className="p-8 text-center">
            <h1 className="text-2xl font-semibold mb-6">
              {isComplete ? "Your photos are ready!" : "Creating your photos..."}
            </h1>
            
            <Progress 
              value={progress} 
              className={`h-3 mb-2 ${isComplete ? "bg-studio-purple/20" : ""}`}
              indicatorClassName={isComplete ? "bg-green-500" : "bg-studio-purple"}
            />
            
            <p className="text-sm text-gray-600 mb-8">
              {isComplete ? (
                <span className="text-green-600 font-medium">4/4 photos</span>
              ) : (
                <>
                  <span>{Math.floor(progress / 25)}/4 photos</span>
                  <span className="block mt-2">Our AI photographer is hard at work. This can take up to two hours.</span>
                </>
              )}
            </p>
            
            {isComplete && (
              <Button 
                className="bg-studio-purple hover:bg-studio-purple/90 px-8 py-6 text-lg rounded-xl"
                onClick={() => navigate("/results")}
              >
                View your photos
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Processing;
