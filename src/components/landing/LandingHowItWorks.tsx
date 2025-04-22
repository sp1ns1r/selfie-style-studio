import { BadgeCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function LandingHowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get professional headshots in three simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-studio-purple/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-studio-purple">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Upload Your Selfies</h3>
              <p className="text-gray-600">
                Submit 6-8 good quality selfies with different angles and expressions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-studio-purple/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-studio-purple">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Choose Your Styles</h3>
              <p className="text-gray-600">
                Select from various professional backgrounds, attire, and settings.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-studio-purple/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-studio-purple">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Get Your Headshots</h3>
              <p className="text-gray-600">
                Receive high-quality, professional headshots in hours.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90" asChild>
              <Link to="/upload">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-4 text-gray-500">
              <BadgeCheck className="inline h-5 w-5 text-green-500 align-text-bottom mr-1" /> 
              100% Money-back guarantee if you're not completely satisfied
            </p>
          </div>
        </div>
    </section>
  );
}
