
import { DollarSign, Clock, Image as ImageIcon } from "lucide-react";

export default function LandingBenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-12 text-[#181C26]">
          Studio-quality, faster,{" "}
          <span className="bg-gradient-to-r from-studio-purple to-studio-blue bg-clip-text text-transparent">
            cheaper
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Value Props */}
          <div>
            <ul className="space-y-7">
              <li className="flex items-start gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100">
                  <DollarSign className="h-5 w-5 text-green-500" />
                </span>
                <div>
                  <span className="text-lg md:text-xl font-bold text-[#181C26]">90% cheaper</span>
                  <p className="text-gray-500 text-base mt-1">Professional photoshoots can cost $300+</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100">
                  <Clock className="h-5 w-5 text-blue-500" />
                </span>
                <div>
                  <span className="text-lg md:text-xl font-bold text-[#181C26]">Ready in under 2 hours</span>
                  <p className="text-gray-500 text-base mt-1">Just minutes to upload, finished photos delivered in under 2 hours</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-100">
                  <ImageIcon className="h-5 w-5 text-studio-purple" />
                </span>
                <div>
                  <span className="text-lg md:text-xl font-bold text-[#181C26]">40 professional photos</span>
                  <p className="text-gray-500 text-base mt-1">Choose up to 5 different professional styles</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="h-10 w-10 flex items-center justify-center rounded-full bg-yellow-100">
                  <DollarSign className="h-5 w-5 text-yellow-500" />
                </span>
                <div>
                  <span className="text-lg md:text-xl font-bold text-[#181C26]">Expense it</span>
                  <p className="text-gray-500 text-base mt-1">Invoice provided for business write-off</p>
                </div>
              </li>
            </ul>
          </div>
          {/* Right: Price card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-2xl shadow-md border bg-white p-12 text-center">
              <div className="text-5xl font-extrabold text-[#181C26] mb-2">$29</div>
              <div className="text-xl font-semibold text-[#3C4251] mb-5">One-time payment</div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <svg width="22" height="22" fill="none" className="text-green-600" viewBox="0 0 24 24">
                  <path d="M12 21C12 21 18.5714 17.7143 18.5714 12.8571V7.85714L12 3L5.42859 7.85714V12.8571C5.42859 17.7143 12 21 12 21Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
                  <path d="M9.42856 12.1429L11.1429 14.1429L14.5714 10.2857" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-green-600 font-semibold text-base">
                  100% Money-back Guarantee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
