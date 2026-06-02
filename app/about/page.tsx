import Image from "next/image";
import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | KS Manufactory",
  description:
    "KS Manufactory manufactures premium paper cups and buffet plates — eco-friendly, food-safe, and crafted with care.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E9EFE6] text-[#31473A]">
      {/* Hero Section - Height 500px to sit perfectly under transparent nav */}
      <section className="relative overflow-hidden h-[500px] flex items-center">
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm mb-4 font-light text-gray-200">
                Manufacturers of Premium Paper Cups &amp; Buffet Plates
              </p>
              <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 text-[#31473A] uppercase leading-none">
                ABOUT<br />
                <span className="text-4xl md:text-6xl text-[#31473A]">— US</span>
              </h1>
            </div>
            <div className="md:text-right">
              <p className="text-sm md:text-base mb-4 font-light text-gray-800 max-w-md md:ml-auto leading-relaxed">
                Every product we make reflects careful craftsmanship, blending quality materials with functional design for food service businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro/Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-[#31473A]">
              &ldquo;Crafting Every Sip with Excellence&rdquo;
            </h2>
          </div>
          <div className="text-left mb-16 text-[#31473A] space-y-4 max-w-5xl mx-auto leading-relaxed tracking-wider text-base md:text-lg">
            <p>
              KS Manufactory is a trusted manufacturer of paper cups and buffet plates, delivering premium packaging solutions backed by years of experience. Our focus spans food-service packaging, serving a wide spectrum of businesses, from local brands to regional clients.
            </p>
            <p>
              We serve a wide spectrum of businesses — from local cafés and restaurants to catering companies and food service providers — who trust us for consistent quality and on-time delivery.
            </p>
            <p>
              Every product we create reflects precision, craftsmanship, and thoughtful design. Our paper cups and buffet plates are manufactured with food-safe materials to meet the highest safety and quality standards.
            </p>
            <p>
              Quality and safety are at the core of our operations. We are ISO 9000 and SEDEX certified, and all our products undergo stringent food safety testing by SGS.
            </p>
            <p>
              At KS Manufactory, we are committed to sustainability, reliability, and innovation, helping brands serve every sip with style, safety, and care.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              alt="KS Manufactory Production"
              src="/assets/img-6.png"
              width={1200}
              height={600}
              className="w-full object-cover h-[450px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-[#E9EFE6]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#31473A] mb-16 tracking-tight">
            Our Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Card 1: BRC */}
            <div className="bg-white rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col items-center justify-between min-h-[520px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-full flex justify-center items-center h-20 mb-6 relative">
                <Image
                  alt="BRC Logo"
              src="/assets/indiamart-logo.png"
                  width={160}
                  height={64}
                  className="object-contain"
                  style={{ width: 'auto', height: 'auto', maxHeight: '4rem' }}
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md"
                style={{ width: '220px', height: '308px' }}
              >
                <Image
                  alt="BRC Certificate"
                  src="/assets/certificate-1.jpg"
                  fill
                  sizes="220px"
                  className="object-contain p-2 bg-white"
                />
              </div>
          
            </div>

            {/* Card 2: FSSC 22000 */}
            <div className="bg-white rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col items-center justify-between min-h-[520px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-full flex justify-center items-center h-20 mb-6 relative">
                <Image
                  alt="FSSC Logo"
                  src="/assets/indiamart-logo.png"
                  width={160}
                  height={64}
                  className="object-contain"
                  style={{ width: 'auto', height: 'auto', maxHeight: '4rem' }}
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md"
                style={{ width: '220px', height: '308px' }}
              >
                <Image
                  alt="FSSC Certificate"
                  src="/assets/certificate-1.jpg"
                  fill
                  sizes="220px"
                  className="object-contain p-2 bg-white"
                />
              </div>
             
            </div>

            {/* Card 3: SEDEX */}
            <div className="bg-white rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col items-center justify-between min-h-[520px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-full flex justify-center items-center h-20 mb-6 relative">
                <Image
                  alt="Sedex Logo"
                  src="/assets/indiamart-logo.png"
                  width={160}
                  height={64}
                  className="object-contain"
                  style={{ width: 'auto', height: 'auto', maxHeight: '4rem' }}
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md"
                style={{ width: '220px', height: '308px' }}
              >
                <Image
                  alt="Sedex Certificate"
                  src="/assets/certificate-1.jpg"
                  fill
                  sizes="220px"
                  className="object-contain p-2 bg-white"
                />
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="px-4 py-8 md:px-8 md:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <section className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="relative rounded-3xl bg-[#E9EFE6] p-6 md:p-10 lg:p-12 border border-[#2F5D50] flex flex-col justify-between shadow-xl">
              <div>
                <h2 className="text-3xl font-light leading-[1.15] tracking-[-0.02em] sm:text-4xl md:text-5xl lg:text-6xl text-[#31473A]">
                  Our Commitment: Quality, Value, and Service
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[#2F5D50] md:text-lg md:leading-8">
                  At KS Manufactory, we are dedicated to delivering premium paper cups and buffet plates that combine superior quality with true value. Meeting and exceeding our customers' expectations is at the heart of everything we do.
                </p>
                <p className="mt-6 max-w-2xl text-base font-semibold text-[#31473A] md:text-lg">
                  Why Choose Us:
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "Trusted wholesale supplier at affordable prices",
                    "No hidden costs—transparent pricing always",
                    "Wide variety of paper cups and buffet plates at every size and specification",
                    "Fast and reliable shipment to ensure your business runs smoothly",
                  ].map((bullet, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 rounded-2xl border border-[#2F5D50] bg-[#E9EFE6] px-4 py-3 shadow-sm md:px-5 md:py-4"
                    >
                      <span className="inline-flex items-center justify-center rounded-full bg-[#2F5D50] p-1.5 md:p-2 text-white">
                        <Check className="h-4 w-4 md:h-5 md:w-5" />
                      </span>
                      <span className="text-sm font-medium text-[#31473A] md:text-base">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-8 max-w-2xl text-base leading-7 text-[#2F5D50] md:text-lg md:leading-8 font-light italic">
                We are committed to supporting your brand with packaging solutions that are innovative, sustainable, and dependable.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-[#2F5D50] shadow-xl bg-[#E9EFE6] min-h-[450px]">
              <Image
                alt="Ripple Cups stacked"
                src="/images/bg.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </section>
        </div>
      </section>

      {/* Design Meets Function Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative w-full max-w-[500px] mx-auto">
              <Image
                alt="Ripple Cup Red"
                src="/assets/img-3.png"
                width={500}
                height={600}
                className="w-full object-contain"
                style={{ height: 'auto' }}
                priority
              />
            </div>
            <div>
              <h3 className="text-4xl font-light mb-6 text-[#31473A]">
                &ldquo;Where Design Meets Function&rdquo;
              </h3>
              <p className="font-light mb-8 leading-relaxed text-[#1E1E1E] text-lg">
                Our paper cups and buffet plates are more than just packaging, they&apos;re a canvas for creativity.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { src: "/assets/img-1.png", alt: "Single Wall Paper Cup" },
                  { src: "/assets/img-2.png", alt: "Double Wall Paper Cup" },
                  { src: "/assets/plate.png", alt: "Buffet Plate" },
                ].map((thumb, idx) => (
                  <div key={idx} className="relative w-full aspect-square">
                    <Image
                      alt={thumb.alt}
                      src={thumb.src}
                      width={180}
                      height={180}
                      className="w-full object-contain"
                      style={{ height: 'auto' }}
                    />
                  </div>
                ))}
              </div>
              <p className="font-light text-[#31473A] leading-relaxed text-base md:text-lg">
                Blending modern aesthetics with practical functionality, every design is crafted to enhance your brand and make every sip memorable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
