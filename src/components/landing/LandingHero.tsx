
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, BadgeCheck, ArrowRight, Clock, DollarSign } from "lucide-react";

export default function LandingHero() {
  const [email, setEmail] = useState("");
  return (
    <section className="bg-gradient-to-b from-studio-purple/5 to-studio-blue/5 border-b">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Professional Headshots in <span className="bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">Hours, Not Days</span>
          </h1>
          <p className="text-xl text-gray-600">
            Turn your selfies into professional headshots. Save hours and hundreds of dollars.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <div className="flex-1">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-12 w-full" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button size="lg" className="bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90 h-12 whitespace-nowrap" asChild>
              <Link to="/upload">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Check className="h-4 w-4 text-green-500" />
            <span>40 professional headshots</span>
            <span className="mx-2">•</span>
            <Check className="h-4 w-4 text-green-500" />
            <span>Up to 5 styles</span>
            <span className="mx-2">•</span>
            <BadgeCheck className="h-4 w-4 text-green-500" />
            <span>100% Money-back guarantee</span>
          </div>
        </div>
        <div className="w-full max-w-lg">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img src="/placeholder.svg" alt="Professional headshot" className="w-full aspect-square object-cover rounded-lg shadow-lg" />
              <img src="/placeholder.svg" alt="Professional headshot" className="w-full aspect-square object-cover rounded-lg shadow-lg" />
              <img src="/placeholder.svg" alt="Professional headshot" className="w-full aspect-square object-cover rounded-lg shadow-lg" />
              <img src="/placeholder.svg" alt="Professional headshot" className="w-full aspect-square object-cover rounded-lg shadow-lg" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 border w-64">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Quick Turnaround</h4>
                  <p className="text-sm text-gray-500">Results in hours</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-xl p-4 border w-64">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Cost Effective</h4>
                  <p className="text-sm text-gray-500">Save up to 90% vs pros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
