
import { Check, X } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const ComparisonTable = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">Selfie Style Studio?</span>
          </h2>
          <p className="text-xl text-gray-600">
            See how our service compares to traditional professional photoshoots
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <Table className="w-full border-collapse">
            <TableHeader>
              <TableRow className="border-b-2 border-gray-200">
                <TableHead className="text-lg font-bold text-gray-800 p-4">Feature</TableHead>
                <TableHead className="text-lg font-bold text-center p-4 bg-gradient-to-r from-studio-purple/10 to-studio-blue/10">
                  <span className="bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">
                    Selfie Style Studio
                  </span>
                </TableHead>
                <TableHead className="text-lg font-bold text-center p-4 bg-gray-100">Traditional Photoshoot</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell className="font-medium text-lg p-5">Location</TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium">From home</span>
                  </div>
                </TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">Studio visit required</span>
                  </div>
                </TableCell>
              </TableRow>
              
              <TableRow className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell className="font-medium text-lg p-5">Time</TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium">As quick as 30 min</span>
                  </div>
                </TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">2-3 days</span>
                  </div>
                </TableCell>
              </TableRow>
              
              <TableRow className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell className="font-medium text-lg p-5">Number of headshots</TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium">40 photos</span>
                  </div>
                </TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">10-20</span>
                  </div>
                </TableCell>
              </TableRow>
              
              <TableRow className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell className="font-medium text-lg p-5">Outfits</TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium">Multiple styles</span>
                  </div>
                </TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">1-2 outfits</span>
                  </div>
                </TableCell>
              </TableRow>
              
              <TableRow className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell className="font-medium text-lg p-5">Backgrounds</TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium">Multiple options</span>
                  </div>
                </TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">Limited options</span>
                  </div>
                </TableCell>
              </TableRow>
              
              <TableRow className="border-b border-gray-200 hover:bg-gray-50">
                <TableCell className="font-medium text-lg p-5">Cost</TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-bold text-studio-purple">Only $29</span>
                  </div>
                </TableCell>
                <TableCell className="text-center p-5">
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
                      <X className="h-5 w-5 text-red-600" />
                    </div>
                    <span className="font-medium">$200-$500+</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl mb-6 text-gray-700">
            Why pay more and wait longer when you can get professional headshots at a fraction of the cost?
          </p>
          <div className="flex justify-center">
            <a href="/upload" className="bg-gradient-to-r from-studio-purple to-studio-blue hover:opacity-90 text-white font-bold py-3 px-8 rounded-lg text-lg">
              Get Your Headshots Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
