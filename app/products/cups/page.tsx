import Image from "next/image";
import type { Metadata } from "next";
import { Droplets, Package, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Paper Cups | KS Manufactory",
  description:
    "Premium single wall, double wall, and ripple paper cups manufactured by KS Manufactory, Muzaffarpur, Bihar.",
};

const cupProducts = [
  {
    name: "Single Wall Paper Cups",
    img: "/assets/img-1.png",
    desc: "Lightweight and cost-effective, ideal for cold beverages, water dispensers, and everyday use.",
    tag: "Most Popular",
  },
  {
    name: "Double Wall Paper Cups",
    img: "/assets/img-2.png",
    desc: "Insulated double-layer wall keeps hot beverages warm and protects hands from heat — no sleeve needed.",
    tag: "Best for Hot",
  },
  {
    name: "Ripple Wall Paper Cups",
    img: "/assets/img-3.png",
    desc: "Triple-layer ripple texture provides superior insulation and an elegant grip without a sleeve.",
    tag: "Premium",
  },
];

export default function PaperCupsPage() {
  return (
    <div
      className="min-h-screen bg-[#E9EFE6] font-inter text-[#31473A]"
      style={{ paddingTop: "160px", paddingBottom: "120px" }}
    >
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide mb-6 text-[#31473A]">
          PAPER CUPS
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-[#31473A]/80">
          Premium Quality for Every Pour
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
            At <strong>KS Manufactory</strong>, we manufacture premium paper
            cups designed for every beverage occasion. From a refreshing sip of
            cold water to a comforting hot coffee, our cups combine durability,
            style, and food safety in every layer.
          </p>
          <p className="leading-7">
            Our paper cups are produced using food-grade PE-coated paperboard,
            ensuring leak-proof performance and safe contact with your
            beverages. Available in a range of sizes and wall types to suit any
            business need.
          </p>
          <p className="leading-7">
            Whether you run a café, restaurant, office canteen, or large event,
            our cups are trusted by businesses across India for their consistent
            quality and competitive pricing.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/assets/img-2.png"
            alt="Double Wall Paper Cup"
            width={380}
            height={480}
            className="w-full max-w-[320px] md:max-w-[380px] object-contain drop-shadow-xl h-auto"
            priority
          />
        </div>
      </div>

      {/* Product Range */}
      <div className="max-w-5xl mx-auto px-6 mb-8">
        <div className="bg-[#E9EFE6] rounded-2xl py-12 px-10 shadow-sm border border-[#E9EFE6]/50">
          <h3 className="text-2xl font-bold text-center mb-10">
            Our Cup Range
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {cupProducts.map((product) => (
              <div
                key={product.name}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  width={200}
                  height={240}
                  className="w-[140px] md:w-[160px] h-auto object-contain drop-shadow-lg mb-4"
                />
                <span className="inline-block bg-white text-[#31473A] text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-sm">
                  {product.tag}
                </span>
                <h4 className="font-bold text-[#31473A] text-base mb-2">
                  {product.name}
                </h4>
                <p className="text-sm text-[#31473A] opacity-80 leading-relaxed">
                  {product.desc}
                </p>
              </div>
            ))}
          </div>
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
                <Droplets
                  className="w-6 h-6 text-[#31473A] opacity-40 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <h4 className="font-bold text-[#31473A] text-lg">
                  Leak-Proof
                </h4>
              </div>
              <p className="text-[#31473A] text-sm leading-relaxed opacity-90 pl-9">
                PE-coated inner lining ensures a completely leak-proof seal for
                both hot and cold beverages.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Package
                  className="w-6 h-6 text-[#31473A] opacity-40 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <h4 className="font-bold text-[#31473A] text-lg">
                  Custom Branding
                </h4>
              </div>
              <p className="text-[#31473A] text-sm leading-relaxed opacity-90 pl-9">
                Available with custom printing to showcase your brand on every
                cup served.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Star
                  className="w-6 h-6 text-[#31473A] opacity-40 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <h4 className="font-bold text-[#31473A] text-lg">
                  Food-Safe Materials
                </h4>
              </div>
              <p className="text-[#31473A] text-sm leading-relaxed opacity-90 pl-9">
                Manufactured from food-grade paperboard, tested annually for
                compliance with food safety standards.
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
