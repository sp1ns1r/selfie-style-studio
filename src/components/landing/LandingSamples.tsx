import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function LandingSamples() {
  return (
    <section id="samples" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Professional Styles</h2>
          <p className="text-xl text-gray-600">
            See the high-quality results you'll get with our AI headshot technology
          </p>
        </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Corporate style" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h4 className="text-white font-medium">Corporate</h4>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-center">Corporate</h3>
            </div>
            
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Studio style" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h4 className="text-white font-medium">Studio</h4>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-center">Studio</h3>
            </div>
            
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Outdoor style" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h4 className="text-white font-medium">Outdoor</h4>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-center">Outdoor</h3>
            </div>
            
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Casual style" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h4 className="text-white font-medium">Casual</h4>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-center">Casual</h3>
            </div>
            
            <div className="space-y-4">
              <div className="relative group overflow-hidden rounded-lg">
                <img 
                  src="/placeholder.svg" 
                  alt="Creative style" 
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h4 className="text-white font-medium">Creative</h4>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-center">Creative</h3>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90" asChild>
              <Link to="/upload">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
      </div>
    </section>
  );
}
