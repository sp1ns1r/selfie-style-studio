
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, Camera, Shield, Clock, Star, Users, FileCheck, Image } from "lucide-react";

export default function Landing() {
  const [email, setEmail] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-studio-purple/5 to-studio-blue/5 border-b">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Logo and navigation */}
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
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Professional AI Headshots in <span className="bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">Minutes</span>, Not Days
            </h1>
            
            <p className="text-xl text-gray-600">
              Transform your selfies into stunning professional headshots using our AI. Perfect for LinkedIn, company websites, and professional profiles.
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
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Check className="h-4 w-4 text-green-500" />
              <span>No credit card required</span>
              <span className="mx-2">•</span>
              <Check className="h-4 w-4 text-green-500" />
              <span>3 free headshots</span>
              <span className="mx-2">•</span>
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
          </div>
          
          <div className="w-full max-w-lg">
            <div className="relative">
              {/* Example headshots grid */}
              <div className="grid grid-cols-2 gap-3">
                <img src="/placeholder.svg" alt="Professional headshot" className="w-full aspect-square object-cover rounded-lg shadow-lg" />
                <img src="/placeholder.svg" alt="Professional headshot" className="w-full aspect-square object-cover rounded-lg shadow-lg" />
                <img src="/placeholder.svg" alt="Professional headshot" className="w-full aspect-square object-cover rounded-lg shadow-lg" />
                <img src="/placeholder.svg" alt="Professional headshot" className="w-full aspect-square object-cover rounded-lg shadow-lg" />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 border w-64">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Quick Turnaround</h4>
                    <p className="text-sm text-gray-500">Results in minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats bar */}
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
              <p className="text-3xl font-bold text-gray-900">15+</p>
              <p className="text-gray-500">Professional styles</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">100%</p>
              <p className="text-gray-500">Satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
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
                  Get your professional headshots within minutes, not days. Perfect for urgent professional needs.
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
      
      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
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
                Receive high-quality, professional headshots in minutes.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button size="lg" className="bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90" asChild>
              <Link to="/upload">
                Try It Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
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
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for you
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Basic</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-gray-500 ml-2">/ one-time</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>10 professional headshots</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>5 different styles</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>High-resolution downloads</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>7-day support</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-gray-800 hover:bg-gray-700" asChild>
                  <Link to="/upload">
                    Choose Basic
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-xl relative bg-gradient-to-b from-studio-purple/5 to-studio-blue/5">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-studio-purple to-studio-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Professional</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-gray-500 ml-2">/ one-time</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>25 professional headshots</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>10 different styles</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>High-resolution downloads</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>30-day support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Background removal tool</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90" asChild>
                  <Link to="/upload">
                    Choose Professional
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Business</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-gray-500 ml-2">/ one-time</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>50 professional headshots</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>All available styles</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>High-resolution downloads</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Advanced editing tools</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>Team collaboration features</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-gray-800 hover:bg-gray-700" asChild>
                  <Link to="/upload">
                    Choose Business
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 max-w-2xl mx-auto">
              All plans include a 100% satisfaction guarantee. If you're not happy with your headshots, we'll refund your purchase.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our service
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
                <TabsTrigger value="billing">Billing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">How does Selfie Style Studio work?</h4>
                  <p className="text-gray-600">
                    Our AI technology analyzes your selfies to understand your facial features, expressions, and unique characteristics. Then it generates professional headshots that look like they were taken by a professional photographer.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">How many photos do I need to upload?</h4>
                  <p className="text-gray-600">
                    We recommend uploading 6-8 selfies with different angles and expressions for best results. This helps our AI understand your features better.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">How long does it take to get my headshots?</h4>
                  <p className="text-gray-600">
                    Most headshots are generated within 15-30 minutes. During peak times, it may take up to an hour.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="technical" className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">What type of photos should I upload?</h4>
                  <p className="text-gray-600">
                    Upload clear selfies with good lighting where your face is clearly visible. Avoid heavy filters, sunglasses, or photos where your face is partially obscured.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">What is the resolution of the final headshots?</h4>
                  <p className="text-gray-600">
                    Our AI generates high-resolution headshots suitable for professional use, typically 1024x1024 pixels or higher.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Can I request specific backgrounds or attire?</h4>
                  <p className="text-gray-600">
                    Yes, you can select from a variety of professional backgrounds, settings, and attire options when customizing your headshots.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="billing" className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">What payment methods do you accept?</h4>
                  <p className="text-gray-600">
                    We accept all major credit cards, PayPal, and Apple Pay.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Is there a refund policy?</h4>
                  <p className="text-gray-600">
                    Yes, we offer a 100% satisfaction guarantee. If you're not happy with your headshots, contact us within 14 days of purchase for a full refund.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Are there any hidden fees?</h4>
                  <p className="text-gray-600">
                    No, the price you see is the price you pay. There are no hidden fees or subscription charges unless you specifically select a subscription plan.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-studio-purple to-studio-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Transform Your Professional Image?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Get started with Selfie Style Studio today and receive professional headshots in minutes.
          </p>
          
          <Button size="lg" className="bg-white text-studio-purple hover:bg-gray-100" asChild>
            <Link to="/upload">
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <p className="text-white/80 mt-6">
            No credit card required • 3 free headshots • Cancel anytime
          </p>
        </div>
      </section>
      
      {/* Footer */}
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
