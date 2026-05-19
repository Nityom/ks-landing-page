import Image from "next/image";
import type { Metadata } from "next";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | WorldStar Packaging Industry",
  description:
    "We are India's Largest Paper Cup Manufacturers and Exporter. Each piece demonstrates sophisticated craftsmanship, blending traditional techniques with contemporary design principles.",
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
                We are India&apos;s Largest Paper Cup Manufacturers and Exporter
              </p>
              <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8 text-[#31473A] uppercase leading-none">
                ABOUT<br />
                <span className="text-4xl md:text-6xl text-[#31473A]">— US</span>
              </h1>
            </div>
            <div className="md:text-right">
              <p className="text-sm md:text-base mb-4 font-light text-gray-800 max-w-md md:ml-auto leading-relaxed">
                Each piece demonstrates sophisticated craftsmanship, blending traditional techniques with contemporary design principles.
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
              At WorldStar Packaging, we are proud to be India&apos;s largest paper cup manufacturer and exporter, with over 27 years of experience delivering premium packaging solutions. Our expertise spans across RTD (Ready-to-Drink) packaging, serving a wide spectrum of businesses, from iconic Indian brands to global clients.
            </p>
            <p>
              Some of our valued customers include Nestlé India, Café Coffee Day, Chaayos, IRCTC, Haldiram&apos;s, AirAsia, IndiGo Airlines, and many others. In recent years, we have also expanded our footprint to Europe, offering our globally compliant packaging solutions to meet international standards.
            </p>
            <p>
              Every product we create reflects precision, craftsmanship, and innovative design. Equipped with state-of-the-art machinery and a fully integrated in-house production process, we have the capacity to produce over 4 million cups daily, all backed by a robust traceability system.
            </p>
            <p>
              Quality and safety are at the core of our operations. We are ISO 9000 and SEDEX certified, and all our products undergo stringent food safety testing by SGS.
            </p>
            <p>
              At WorldStar Packaging, we are committed to sustainability, reliability, and innovation, helping brands serve every sip with style, safety, and care.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              alt="Metal WorldStar Factory Production"
              src="/images/cup10.jpg"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Card 1: BRC */}
            <div className="bg-white rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col items-center justify-between min-h-[520px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-full flex justify-center items-center h-20 mb-6 relative">
                <Image
                  alt="BRC Logo"
                  src="/images/cl-1.png"
                  width={160}
                  height={64}
                  className="object-contain max-h-16"
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md"
                style={{ width: '220px', height: '308px' }}
              >
                <Image
                  alt="BRC Certificate"
                  src="/images/BRC.jpg"
                  fill
                  className="object-contain p-2 bg-white"
                />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-[#31473A] tracking-wide">
                BRC
              </h3>
            </div>

            {/* Card 2: FSSC 22000 */}
            <div className="bg-white rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col items-center justify-between min-h-[520px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-full flex justify-center items-center h-20 mb-6 relative">
                <Image
                  alt="FSSC Logo"
                  src="/images/cl-2.png"
                  width={160}
                  height={64}
                  className="object-contain max-h-16"
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md"
                style={{ width: '220px', height: '308px' }}
              >
                <Image
                  alt="FSSC Certificate"
                  src="/images/fssc.jpg"
                  fill
                  className="object-contain p-2 bg-white"
                />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-[#31473A] tracking-wide">
                FSSC 22000
              </h3>
            </div>

            {/* Card 3: SEDEX */}
            <div className="bg-white rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col items-center justify-between min-h-[520px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-full flex justify-center items-center h-20 mb-6 relative">
                <Image
                  alt="Sedex Logo"
                  src="/images/cl-3.png"
                  width={160}
                  height={64}
                  className="object-contain max-h-16"
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md"
                style={{ width: '220px', height: '308px' }}
              >
                <Image
                  alt="Sedex Certificate"
                  src="/images/smet2-sEDXE.jpg"
                  fill
                  className="object-contain p-2 bg-white"
                />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-[#31473A] tracking-wide">
                SEDEX
              </h3>
            </div>

            {/* Card 4: ISO 22000:2005 */}
            <div className="bg-white rounded-3xl p-8 border border-white/20 shadow-xl flex flex-col items-center justify-between min-h-[520px] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <div className="w-full flex justify-center items-center h-20 mb-6 relative">
                <Image
                  alt="ISO Logo"
                  src="/images/cl-5.png"
                  width={160}
                  height={64}
                  className="object-contain max-h-16"
                />
              </div>
              <div
                className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md"
                style={{ width: '220px', height: '308px' }}
              >
                <Image
                  alt="ISO Certificate"
                  src="/images/ISO-22000-2005.jpg"
                  fill
                  className="object-contain p-2 bg-white"
                />
              </div>
              <h3 className="text-2xl font-bold mt-6 text-[#31473A] tracking-wide">
                ISO 22000:2005
              </h3>
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
                  At WorldStar Packaging, we are dedicated to delivering premium paper cups and related products that combine superior quality with true value. Meeting and exceeding our customers’ expectations is at the heart of everything we do.
                </p>
                <p className="mt-6 max-w-2xl text-base font-semibold text-[#31473A] md:text-lg">
                  Why Choose Us:
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "Trusted wholesale supplier at affordable prices",
                    "No hidden costs—transparent pricing always",
                    "Wide variety of paper cups and accessories, including Ripples Paper Cups and Paper Straws",
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
                src="/images/cup8.png"
                width={500}
                height={600}
                className="w-full object-cover"
                priority
              />
            </div>
            <div>
              <h3 className="text-4xl font-light mb-6 text-[#31473A]">
                &ldquo;Where Design Meets Function&rdquo;
              </h3>
              <p className="font-light mb-8 leading-relaxed text-[#1E1E1E] text-lg">
                Our paper cups and straws are more than just packaging, they&apos;re a canvas for creativity.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { src: "/images/cup6.png", alt: "Embossed Design Thumbnail" },
                  { src: "/images/ab1.png", alt: "Latte Coffee Thumbnail" },
                  { src: "/images/ab2.png", alt: "Eco Straws Thumbnail" },
                ].map((thumb, idx) => (
                  <div key={idx} className="relative w-full aspect-square">
                    <Image
                      alt={thumb.alt}
                      src={thumb.src}
                      width={180}
                      height={180}
                      className="w-full h-full object-contain"
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
