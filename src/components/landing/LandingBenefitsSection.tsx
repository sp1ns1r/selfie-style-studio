
import { DollarSign, Clock, Check, ImageIcon, BadgeCheck } from "lucide-react";

export default function LandingBenefitsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Value Props */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Studio-quality, faster, <span className="bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">cheaper</span>
            </h2>
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </span>
                <div>
                  <span className="text-lg md:text-xl font-semibold">Only $29</span>
                  <p className="text-gray-500 text-base leading-snug">Professional photoshoots can cost $300+</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100">
                  <Clock className="h-5 w-5 text-blue-600" />
                </span>
                <div>
                  <span className="text-lg md:text-xl font-semibold">Ready in Less Than 2 Hours</span>
                  <p className="text-gray-500 text-base leading-snug">Just minutes to upload, finished photos delivered in under 2 hours</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-100">
                  <ImageIcon className="h-5 w-5 text-studio-purple" />
                </span>
                <div>
                  <span className="text-lg md:text-xl font-semibold">40 Professional Photos</span>
                  <p className="text-gray-500 text-base leading-snug">Choose up to 5 different professional styles</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100">
                  <DollarSign className="h-5 w-5 text-yellow-600" />
                </span>
                <div>
                  <span className="text-lg md:text-xl font-semibold">Business Expense</span>
                  <p className="text-gray-500 text-base leading-snug">Invoice provided for business write-off</p>
                </div>
              </li>
              <li className="flex items-center gap-4 mt-2">
                <span className="h-9 w-9 flex items-center justify-center rounded-full bg-green-50 border border-green-200">
                  <BadgeCheck className="h-5 w-5 text-green-600" />
                </span>
                <span className="text-base font-semibold text-green-700">
                  100% Money-back Guarantee
                </span>
              </li>
            </ul>
          </div>
          {/* Right: Steps + Price */}
          <div className="bg-white rounded-xl shadow-lg p-8 border">
            <div className="text-center mb-6">
              <span className="text-5xl font-bold text-gray-900">$29</span>
              <span className="block text-lg text-gray-700 mt-1 font-semibold">One-time payment</span>
              <div className="flex items-center justify-center mt-2">
                <BadgeCheck className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-green-700 font-medium text-base">100% Money-back Guarantee</span>
              </div>
            </div>
            <ol className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  1
                </div>
                <div>
                  <span className="font-semibold text-lg">Upload your selfies</span>
                  <p className="text-sm text-gray-500">Takes just 3-5 minutes</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  2
                </div>
                <div>
                  <span className="font-semibold text-lg">Our AI processes your photos</span>
                  <p className="text-sm text-gray-500">In less than 2 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-lg font-bold">
                  3
                </div>
                <div>
                  <span className="font-semibold text-lg">Download your professional headshots</span>
                  <p className="text-sm text-gray-500">40 high-resolution images</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
