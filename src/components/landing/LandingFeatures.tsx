import { Card, CardContent } from "@/components/ui/card";
import { Camera, Clock, FileCheck, ImageIcon, Shield } from "lucide-react";

export default function LandingFeatures() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Professional Image</h2>
          <p className="text-xl text-gray-600">
            Our AI technology creates stunning professional headshots from your regular selfies
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 items-stretch justify-center">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Camera className="h-6 w-6 text-studio-purple" />
              </div>
              <h3 className="text-xl font-bold mb-3">Minimal Photo Requirements</h3>
              <p className="text-gray-600">
                Just upload 6-8 good quality selfies and our AI will do the rest, generating various professional styles.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-studio-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Results</h3>
              <p className="text-gray-600">
                Get your professional headshots within hours, not days. Perfect for urgent professional needs.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Customizable Styles</h3>
              <p className="text-gray-600">
                Choose from a variety of professional settings, backgrounds, and attire options for your headshots.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg md:col-start-2">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                <ImageIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">High Quality Results</h3>
              <p className="text-gray-600">
                Our AI produces photorealistic images that closely resemble your appearance while looking professional.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg md:col-start-2">
            <CardContent className="pt-6">
              <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy Protected</h3>
              <p className="text-gray-600">
                Your photos are processed securely and never shared with third parties. Your privacy is our priority.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
