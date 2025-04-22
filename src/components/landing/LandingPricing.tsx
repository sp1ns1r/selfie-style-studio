import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, BadgeCheck } from "lucide-react";

export default function LandingPricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">
            One affordable option for professional headshots
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          <Card className="border-0 shadow-xl relative bg-gradient-to-b from-studio-purple/5 to-studio-blue/5">
            <CardContent className="pt-8 px-8 pb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Professional Package</h3>
                <div className="flex items-center justify-center">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-gray-500 ml-2">/ one-time</span>
                </div>
                <p className="text-gray-500 mt-2">No subscription, no hidden fees</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-medium">40 professional headshots</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>Up to 5 different styles</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>High-resolution downloads</span>
                </li>
                <li className="flex items-center">
                  <BadgeCheck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-bold">100% Money-back guarantee</span>
                </li>
              </ul>
              
              <Button size="lg" className="w-full bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90" asChild>
                <Link to="/upload">
                  Get Started
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
