import Image from "next/image";
import type { Metadata } from "next";
import { Shield, Package, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Buffet Plates | KS Manufactory",
  description:
    "Heavy-duty food-safe buffet plates manufactured by KS Manufactory, Chata chok, B.R.Ambedkar Bihar University, Muzaffarpur, Bihar 842001.",
};

export default function BuffetPlatesPage() {
  return (
    <div
      className="min-h-screen bg-[#E9EFE6] font-inter text-[#31473A]"
      style={{ paddingTop: "160px", paddingBottom: "120px" }}
    >
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide mb-6 text-[#31473A]">
          BUFFET PLATES
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-[#31473A]/80">
          Elegant Serving, Built to Hold
        </h2>
      </div>

      {/* Main 2-Column Intro */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">
        <div className="space-y-6 text-[15px] font-medium opacity-90">
          <div>
            <span className="inline-block bg-white text-[#31473A] font-bold px-4 py-4 rounded-full text-xs mb-4 shadow-sm">
              Food-Safe Certified
            </span>
          </div>
          <p className="leading-7">
            <strong>KS Manufactory&apos;s Buffet Plates</strong> are engineered
            for professional food service — from wedding catering and hotel
            buffets to canteens, corporate events, and street food stalls.
          </p>
          <p className="leading-7">
            Constructed from high-density food-grade paperboard, our plates are
            sturdy enough to hold full servings of rice, curries, snacks, and
            more without sagging or leaking. Their rigid design ensures a
            premium experience for every guest.
          </p>
          <p className="leading-7">
            Available in multiple sizes to suit every serving requirement, these
            plates balance cost-efficiency with quality, making them the go-to
            choice for high-volume food service operations across India.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/assets/plate.png"
            alt="Buffet Plate"
            width={380}
            height={380}
            className="w-full max-w-[320px] md:max-w-[380px] object-contain drop-shadow-xl h-auto"
            priority
          />
        </div>
      </div>

      {/* Key Highlights */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="bg-[#E9EFE6] rounded-2xl py-12 px-10 shadow-sm border border-[#E9EFE6]/50">
          <h3 className="text-2xl font-bold text-center mb-10">
            Key Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Shield
                  className="w-6 h-6 text-[#31473A] opacity-40 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <h4 className="font-bold text-[#31473A] text-lg">
                  Heavy-Duty Build
                </h4>
              </div>
              <p className="text-[#31473A] text-sm leading-relaxed opacity-90 pl-9">
                High-density paperboard construction holds full meals without
                bending or sagging, even with gravies and curries.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Package
                  className="w-6 h-6 text-[#31473A] opacity-40 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <h4 className="font-bold text-[#31473A] text-lg">
                  Grease-Resistant
                </h4>
              </div>
              <p className="text-[#31473A] text-sm leading-relaxed opacity-90 pl-9">
                PE-coated base prevents oil and moisture from soaking through,
                keeping plates clean and presentable throughout service.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Star
                  className="w-6 h-6 text-[#31473A] opacity-40 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <h4 className="font-bold text-[#31473A] text-lg">
                  Bulk-Ready
                </h4>
              </div>
              <p className="text-[#31473A] text-sm leading-relaxed opacity-90 pl-9">
                Manufactured for large-scale food service operations with
                consistent quality and dimensions across every batch.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Disclaimer */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-[#E9EFE6] rounded-2xl py-8 px-10 shadow-sm border border-[#E9EFE6]/50 text-center">
          <p className="italic font-medium text-[#31473A] text-[15px]">
            All products are tested as per global food safety and packaging
            standards at an internationally accredited laboratory (SGS)
            annually. The test reports are shared on demand.
          </p>
        </div>
      </div>
    </div>
  );
}
