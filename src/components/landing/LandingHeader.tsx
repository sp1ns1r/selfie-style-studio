
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function LandingHeader() {
  return (
    <header className="bg-gradient-to-b from-studio-purple/5 to-studio-blue/5 border-b">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-md bg-gradient-to-br from-[#6E41C0] to-[#3A7BD5] flex items-center justify-center text-white mr-2">
              <span role="img" aria-label="camera" className="opacity-80">🕹️</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">
              Portro
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
            <a href="#samples" className="text-gray-600 hover:text-gray-900 font-medium">Sample Photos</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 font-medium">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 font-medium">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/upload">Sign In</Link>
            </Button>
            <Button className="bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90" asChild>
              <Link to="/upload">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

