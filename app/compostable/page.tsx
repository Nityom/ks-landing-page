import Image from "next/image";
import type { Metadata } from "next";
import { Shield, Leaf, Recycle, Award, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Compostable Paper Cups | WorldStar Packaging Industry",
  description:
    "CPCB certified compostable paper cups — eco-friendly, food-safe, and sustainably produced by WorldStar Packaging Industry.",
};

export default function CompostablePage() {
  return (
    <div className="min-h-screen bg-[#E9EFE6] font-inter text-[#31473A]" style={{ paddingTop: '160px', paddingBottom: '120px' }}>

      {/* Page Header (Centered) */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide mb-6 text-[#31473A]">
          COMPOSTABLE PAPER CUPS
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-[#31473A]/80">
          Sip Sustainably, Save the Future!
        </h2>
      </div>

      {/* Main 2-Column Content */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">
        <div className="space-y-6 text-[15px] font-medium opacity-90">
          <div>
            <span className="inline-block bg-white text-[#31473A] font-bold px-4 py-4 rounded-full text-xs mb-4 shadow-sm">
              CPCB Certified
            </span>
          </div>
          <p className="leading-7">
            At <strong>WorldStar Packaging Industry</strong>, we take pride in being leaders in sustainable and eco-friendly packaging solutions. Our <strong>CPCB Certified Compostable Paper Cups</strong> are thoughtfully designed to meet the highest environmental and safety standards, making them a responsible choice for businesses committed to sustainability.
          </p>
          <p className="leading-7">
            Crafted from 100% biodegradable materials, these cups naturally break down after use, reducing waste and minimizing environmental impact. Perfect for cafes, restaurants, and events, they combine durability, functionality, and eco-conscious design, so you can serve your beverages confidently while contributing to a greener planet.
          </p>
          <p className="leading-7">
            By choosing our compostable cups, you&apos;re not just serving drinks—you&apos;re making a statement about your brand&apos;s commitment to the environment.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/comp-1.png"
            alt="Pure Flavour Zero Plastic Cup"
            width={380}
            height={480}
            className="w-full max-w-[320px] md:max-w-[380px] object-contain drop-shadow-xl"
            priority
          />
        </div>
      </div>

      {/* Key Highlights Card */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="bg-[#E9EFE6] rounded-2xl py-12 px-10 shadow-sm border border-[#E9EFE6]/50">
          <h3 className="text-2xl font-bold text-center mb-10">
            Key Highlights of Our Certified Compostable Paper Cups
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Item 1 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-6 h-6 text-[#31473A] opacity-40 flex-shrink-0" strokeWidth={1.5} />
                <h4 className="font-bold text-[#31473A] text-lg">CPCB Certified</h4>
              </div>
              <p className="text-[#31473A] text-sm leading-relaxed opacity-90 pl-9">
                Our cups are officially recognized by the Central Pollution Control Board, affirming our commitment to environmental sustainability.
              </p>
            </div>

            {/* Item 2 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Leaf className="w-6 h-6 text-[#31473A] opacity-40 flex-shrink-0" strokeWidth={1.5} />
                <h4 className="font-bold text-[#31473A] text-lg">Eco-friendly Materials</h4>
              </div>
              <p className="text-[#31473A] text-sm leading-relaxed opacity-90 pl-9">
                Made from biodegradable and compostable materials, our cups are designed to minimize environmental impact.
              </p>
            </div>

            {/* Item 3 */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Recycle className="w-6 h-6 text-[#31473A] opacity-40 flex-shrink-0" strokeWidth={1.5} />
                <h4 className="font-bold text-[#31473A] text-lg">Sustainable Choice</h4>
              </div>
              <p className="text-[#31473A] text-sm leading-relaxed opacity-90 pl-9">
                Ideal for businesses aiming to reduce their carbon footprint and support a greener future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CPCB Certification Verification Card */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="bg-[#E9EFE6] rounded-2xl py-12 px-10 shadow-sm border border-[#E9EFE6]/50">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Award className="w-7 h-7 text-[#31473A] opacity-60" strokeWidth={1.5} />
            <h3 className="text-2xl font-bold">CPCB Certification Verification</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: QR Code */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-4 inline-block">
                <Image
                  src="/images/qr.png"
                  alt="Certificate QR Code"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
              <p className="text-[#31473A] text-sm font-medium">Scan QR Code to View Certificate</p>
            </div>

            {/* Right: Details */}
            <div className="flex justify-center md:justify-start">
              <div className="space-y-6">
                <h4 className="font-bold text-[#31473A] text-lg">Certificate Details</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E9EFE6]" strokeWidth={2} />
                    <span className="text-[#31473A] text-sm font-medium">Certification Date: April 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E9EFE6]" strokeWidth={2} />
                    <span className="text-[#31473A] text-sm font-medium">Product Category: Compostable Food Packaging</span>
                  </div>
                </div>
                <p className="text-xs text-[#31473A] opacity-70 pt-2">
                  Verified by Central Pollution Control Board
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer Card */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#E9EFE6] rounded-2xl py-8 px-10 shadow-sm border border-[#E9EFE6]/50 text-center">
          <p className="italic font-medium text-[#31473A] text-[15px]">
            All products are tested as per global food safety and packaging standards at an internationally accredited laboratory (SGS) annually. The test reports are shared on demand.
          </p>
        </div>
      </div>

    </div>
  );
}
