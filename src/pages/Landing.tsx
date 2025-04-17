import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, 
  Check, 
  BadgeCheck 
} from "lucide-react";

export default function Landing() {
  const [email, setEmail] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-studio-purple/5 to-studio-blue/5 border-b">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-md bg-gradient-to-br from-studio-purple to-studio-blue flex items-center justify-center text-white mr-2">
                <span className="font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">
                Selfie Style Studio
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
        
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Professional Headshots in <span className="bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">Minutes, Not Days</span>
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
        
        <div className="bg-white/70 backdrop-blur-sm border-t border-b py-6">
          <div className="container mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-8 text-center md:text-left">
            <div>
              <p className="text-3xl font-bold text-gray-900">500,000+</p>
              <p className="text-gray-500">Professional headshots generated</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">4.9/5</p>
              <p className="text-gray-500">Average customer rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">5+</p>
              <p className="text-gray-500">Professional styles</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-gray-500">Satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

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

      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Professional Image</h2>
            <p className="text-xl text-gray-600">
              Our AI technology creates stunning professional headshots from your regular selfies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <Image className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">High Quality Results</h3>
                <p className="text-gray-600">
                  Our AI produces photorealistic images that closely resemble your appearance while looking professional.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
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
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Team Solutions</h3>
                <p className="text-gray-600">
                  Perfect for companies looking to create consistent, professional headshots for their entire team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
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
      
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Thousands of professionals trust Selfie Style Studio for their headshots
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "I was skeptical at first, but the results amazed me. The headshots look incredibly professional and have helped me revamp my LinkedIn profile with impressive results."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "As someone who dreads traditional photo shoots, this service was perfect. I got professional headshots without the stress and at a fraction of the cost."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-semibold">Michael Torres</p>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Our entire team needed professional headshots with consistent quality. Selfie Style Studio delivered excellent results for all 23 team members within days."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <p className="font-semibold">Jennifer Reeves</p>
                    <p className="text-sm text-gray-500">HR Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
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
      
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our service
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>What makes our AI headshots unique?</AccordionTrigger>
                <AccordionContent>
                  Our AI technology analyzes your selfies to generate professional headshots that look like they were taken by a professional photographer.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>How many photos do I need to upload?</AccordionTrigger>
                <AccordionContent>
                  We recommend uploading 6-8 selfies with different angles and expressions for the best results.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>What is your refund policy?</AccordionTrigger>
                <AccordionContent>
                  We offer a 100% no-questions-asked money-back guarantee. If you're not completely satisfied with your headshots, we'll refund your full payment.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>How long does it take to get my headshots?</AccordionTrigger>
                <AccordionContent>
                  Most headshots are generated within a few hours. During peak times, it may take up to 24 hours.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>What do you do with my data?</AccordionTrigger>
                <AccordionContent>
                  We prioritize your privacy. Your photos are processed securely and never shared with third parties. They are deleted after processing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gradient-to-r from-studio-purple to-studio-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Professional Image?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Get started with Selfie Style Studio today and receive professional headshots in hours.
          </p>
          
          <Button size="lg" className="bg-white text-studio-purple hover:bg-gray-100" asChild>
            <Link to="/upload">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <p className="text-white/80 mt-6 flex items-center justify-center">
            <BadgeCheck className="h-5 w-5 text-white mr-2" />
            100% Money-back guarantee if you're not satisfied
          </p>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 rounded-md bg-white flex items-center justify-center text-gray-900 mr-2">
                  <span className="font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-bold text-white">
                  Selfie Style Studio
                </span>
              </div>
              
              <p className="text-gray-400 mb-6">
                Transform your selfies into professional headshots with our advanced AI technology.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Product</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#samples" className="text-gray-400 hover:text-white transition-colors">Sample Photos</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GDPR</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left md:flex md:items-center md:justify-between">
            <p className="text-gray-400">© 2025 Selfie Style Studio. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400">Made with ♥ for professionals worldwide</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
