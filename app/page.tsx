"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cupRef = useRef<HTMLImageElement>(null);
  const targetSpotRef = useRef<HTMLDivElement>(null);

  const heroCups = [
    { img: "/assets/img-1.png", name: "FRESH MIX JUICE", desc: "Vibrant, fruit-filled designs that bring your brand to life. Our paper cups are built for freshness — keeping every sip as lively as the design." },
    { img: "/assets/img-2.png", name: "COCA-COLA", desc: "Iconic branding meets premium packaging. Crafted to hold your favourite beverages with precision, strength, and eye-catching style." },
    { img: "/assets/img-3.png", name: "NEWCAFE", desc: "Bold and distinctive — our double-wall paper cups deliver superior insulation for hot beverages while showcasing your brand powerfully." },
    { img: "/assets/img-4.png", name: "CREATIVE COFFEE CO.", desc: "Premium roasts deserve premium cups. Crafted with passion — our paper cups combine artisan aesthetics with eco-conscious materials." },
    { img: "/assets/img-5.png", name: "HARVEST HARMONY", desc: "Farm-fresh flavour, beautifully packaged. Our cups for Harvest Harmony Organic Orchards reflect the purity and integrity behind every pour." }
  ];

  const [activeCup, setActiveCup] = useState(0);

  const handleNextCup = () => setActiveCup((prev) => (prev + 1) % heroCups.length);
  const handlePrevCup = () => setActiveCup((prev) => (prev === 0 ? heroCups.length - 1 : prev - 1));

  const currentCup = heroCups[activeCup];
  const nextCup = heroCups[(activeCup + 1) % heroCups.length];

  useGSAP(() => {
    if (!cupRef.current || !containerRef.current) return;

    let i = window.innerHeight < 1050;
    let mm = gsap.matchMedia();

    mm.add("(min-width: 991px)", () => {
      gsap.to(cupRef.current, {
        scrollTrigger: { trigger: "#section2", start: "top bottom", end: "center center", scrub: true },
        y: "85vh", x: "18vw", width: "32vw", rotate: 90, ease: "power1.inOut", immediateRender: false
      });
      gsap.to(cupRef.current, {
        scrollTrigger: { trigger: "#section3", start: "top bottom", end: "bottom bottom", scrub: true },
        y: "218vh", x: "0", width: "35vw", rotate: 35, ease: "power1.inOut", immediateRender: false
      });
      gsap.to(cupRef.current, {
        scrollTrigger: { trigger: "#section4", start: "top bottom", end: "center center", scrub: true },
        y: "308vh", width: "42vw", rotate: 0, ease: "power1.inOut", immediateRender: false
      });

      // Infinite "burst" explosion scale-up transition for the three floating cups emerging from behind the headphone cup
      gsap.fromTo([".img1", ".img2", ".img3"],
        {
          scale: 0.1,
          opacity: 0,
          x: (index) => {
            if (index === 0) return 200;
            if (index === 1) return -250;
            return 150;
          },
          y: (index) => {
            if (index === 0) return 200;
            if (index === 1) return 100;
            return -200;
          }
        },
        {
          scrollTrigger: {
            trigger: "#section4",
            start: "top 70%",
            end: "center 40%",
            scrub: true
          },
          scale: 1,
          opacity: 1,
          x: 0,
          y: 0,
          ease: "power2.out",
          immediateRender: false
        }
      );
      gsap.to(cupRef.current, {
        scrollTrigger: { trigger: "#section5", start: "top bottom", end: "center bottom", scrub: true },
        y: i ? "360vh" : "344vh", width: "28vw", ease: "power1.inOut", immediateRender: false
      });
      gsap.to(cupRef.current, {
        scrollTrigger: { trigger: "#section5", start: "center bottom", end: "bottom bottom", scrub: true },
        y: i ? "432vh" : "419vh", width: "300px", ease: "power1.inOut", immediateRender: false
      });
    });

    mm.add("(max-width: 990px)", () => {
      // On mobile: animate cup into the "Sip sustainably!" section, then fade out
      gsap.to(cupRef.current, {
        scrollTrigger: { trigger: "#section2", start: "top bottom", end: "center center", scrub: true },
        y: "40vh", rotate: 75, ease: "power1.inOut", immediateRender: false
      });
      gsap.to(cupRef.current, {
        scrollTrigger: { trigger: "#section2", start: "center center", end: "bottom bottom", scrub: true },
        opacity: 0, y: "55vh", ease: "power1.inOut", immediateRender: false
      });
    });

  }, { scope: containerRef });

  useGSAP(() => {
    // Kill any existing tweens to prevent overlaps
    gsap.killTweensOf(".carousel-text-animate");
    gsap.killTweensOf(".carousel-main-img-animate");
    gsap.killTweensOf(".carousel-next-img-animate");

    // Animate the text beautifully
    gsap.fromTo(".carousel-text-animate",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out" }
    );

    // Animate the main product image with a nice organic scaling entrance
    gsap.fromTo(".carousel-main-img-animate",
      { opacity: 0, scale: 0.82, rotate: -6 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.9, ease: "back.out(1.4)" }
    );

    // Animate the next product preview image
    gsap.fromTo(".carousel-next-img-animate",
      { opacity: 0, x: 50, scale: 0.8 },
      { opacity: 0.8, x: 0, scale: 0.9, duration: 0.9, ease: "power3.out" }
    );
  }, { dependencies: [activeCup], scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#E9EFE6] text-[#1E1E1E] font-inter text-base sm:text-lg leading-[1.5] min-h-screen pt-[80px]">
      <style>{`
        @keyframes scroll-marquee-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-marquee-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .marquee-up-wrapper {
          animation: scroll-marquee-up 15s linear infinite;
        }
        .marquee-down-wrapper {
          animation: scroll-marquee-down 15s linear infinite;
        }
        .marquee-column-container {
          height: 380px;
          overflow: hidden;
          position: relative;
        }
        .marquee-column-container::before,
        .marquee-column-container::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: 40px;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-column-container::before {
          top: 0;
          background: linear-gradient(to bottom, #E9EFE6 0%, transparent 100%);
        }
        .marquee-column-container::after {
          bottom: 0;
          background: linear-gradient(to top, #E9EFE6 0%, transparent 100%);
        }
      `}</style>
      <div className="font-inter">
        <div>
          <div className="relative z-0">
            {/* Top Gourmet Section */}
            <div className="min-h-screen font-montserrat relative overflow-hidden select-none">
              <div style={{ backgroundColor: '#E9EFE6' }} className="absolute inset-0 z-0 transition-bg">
                <div style={{ backgroundColor: '#E9EFE6', animation: 'circleRevealAnim 1s cubic-bezier(.66,.34,.29,1.2) forwards', clipPath: 'circle(0% at 63% 55%)', zIndex: 1 }} className="absolute inset-0"></div>
              </div>
              <main className="min-h-[calc(100vh-64px)] md:h-[calc(100vh-64px)] flex md:flex-row flex-col-reverse w-full relative pt-16 pb-12 md:pb-0">
                <section className="flex flex-col justify-center px-6 sm:px-8 py-8 md:py-0 w-full md:w-[48%] md:border-r border-[#31473A]/10 z-10 relative">
                  <h1 key={`title-${activeCup}`} className="carousel-text-animate font-montserrat text-3xl sm:text-4xl md:text-[3.2vw] lg:text-[3vw] font-bold text-left text-[#31473A] mb-4">{currentCup.name}</h1>
                  <p key={`desc-${activeCup}`} className="carousel-text-animate text-[#31473A] mb-8 text-sm sm:text-base max-w-[90%] md:max-w-none">
                    {currentCup.desc}
                  </p>
                  <Link href="/about">
                    <button className="bg-[#1E1E1E] text-white px-8 py-2 rounded-full font-montserrat font-semibold w-fit hover:bg-[#31473A] transition-all shadow-md">know more</button>
                  </Link>
                </section>
                <section className="w-full md:w-[52%] flex flex-row items-center relative overflow-x-visible z-10">
                  <div className="flex flex-row items-center h-full w-full relative gap-10">
                    <div className="flex flex-col items-center justify-center w-2/3 h-full relative">
                      <Image key={`img1-${activeCup}`} src={currentCup.img} alt={currentCup.name} width={500} height={500} className="carousel-main-img-animate object-contain h-[55vh] mt-6" />
                      <figcaption className="font-montserrat text-[#31473A] font-bold text-base text-center mt-3 hidden md:block">{currentCup.name}</figcaption>
                    </div>
                    <div className="w-1/3 h-full flex items-center justify-center relative overflow-visible">
                      <Image key={`img2-${activeCup}`} src={nextCup.img} alt={nextCup.name} width={300} height={300} className="carousel-next-img-animate object-contain h-[41vh] opacity-80 translate-x-[-30%] scale-90" />
                      <figcaption style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)' }} className="font-montserrat text-[#31473A] font-bold text-xs text-center mt-3 w-28 truncate">{nextCup.name}</figcaption>
                    </div>
                    <div className="absolute left-0 top-0 h-full border-l border-[#31473A]/10 z-10"></div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
                    <button onClick={handlePrevCup} aria-label="Previous Product" className="bg-[#31473A]/10 border border-[#31473A]/30 rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#31473A] hover:bg-[#31473A]/20 transition-all shadow-sm">&lt;</button>
                    <button onClick={handleNextCup} aria-label="Next Product" className="bg-[#31473A]/10 border border-[#31473A]/30 rounded-full w-10 h-10 flex items-center justify-center font-bold text-[#31473A] hover:bg-[#31473A]/20 transition-all shadow-sm">&gt;</button>
                  </div>
                </section>
              </main>
            </div>

            {/* Our Products Mini Section */}
            <div className="w-full bg-[#E9EFE6] py-8 px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-left">Our Products</h2>
                <div className="flex flex-wrap justify-around gap-6 md:gap-8">
                  {[
                    { name: 'Single Wall Paper Cups', img: '/assets/img-1.png', color: '#CBB89D' },
                    { name: 'Double Wall Paper Cups', img: '/assets/img-3.png', color: '#FFB6B9' },
                    { name: 'Rippled Paper Cups', img: '/assets/img-5.png', color: '#F9E79F' },
                    { name: 'Paper Food Container', img: '/assets/img-2.png', color: '#CBB89D' },
                    { name: 'Paper Straws', img: '/assets/img-4.png', color: '#D7BDE2' },
                    { name: 'Lid for Paper Cups', img: '/assets/img-1.png', color: '#CBB89D' },
                  ].map((product, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center max-w-[120px] mx-4">
                      <div className={`w-40 h-40 rounded-full flex items-center justify-center mb-3 cursor-pointer hover:scale-105 transition-transform duration-200 overflow-hidden`} style={{ backgroundColor: product.color }}>
                        <Image alt={product.name} src={product.img} width={120} height={120} className="object-contain" />
                      </div>
                      <p className="text-sm font-medium text-gray-800 leading-tight">{product.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Sections Wrapper for GSAP */}
            <main className="w-full max-w-[1440px] mx-auto relative px-4 sm:px-8 lg:px-16 xl:px-20" id="main">
              {/* The animated headphone cup */}
              <img
                ref={cupRef}
                src="/assets/img-5.png"
                alt=""
                id="headphone"
                className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[60vw] sm:w-[50vw] lg:w-[40vw] max-w-[560px] z-10 drop-shadow-[8px_35px_6px_rgba(0,0,0,0.13)]"
                style={{ willChange: 'transform' }}
              />

              <section id="section1" className="h-screen w-full max-w-[90vw] lg:max-w-[60vw] mx-auto flex items-center justify-center text-center px-4">
                <h1 className="heading font-montserrat font-bold text-[clamp(2rem,8vw,11.5vw)] lg:text-[11.5vw] leading-[0.85] uppercase text-[#31473A] mb-0">
                  Paper Cups & Straws
                </h1>
              </section>

              <section id="section2" className="min-h-screen pt-8 sm:pt-16 lg:pt-[4vw]">
                <div className="content-wrapper max-w-[500px] px-4 sm:px-0">
                  <h2 className="heading font-montserrat font-bold text-4xl sm:text-6xl lg:text-8xl uppercase text-[#31473A] mb-6">Sip sustainably!</h2>
                  <p className="pb-6 sm:pb-10 text-sm sm:text-base">Our eco-friendly paper cups & straws are designed to serve your favorite brew while caring for the planet. Because great taste should never come at nature's expense.</p>
                  <Link href="/compostable" className="btn bg-[#1E1E1E] mt-4 sm:mt-8 text-white px-4 sm:px-5 py-2 font-medium rounded-[10px] text-sm sm:text-base">Know More</Link>
                </div>
                <div className="feature-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-[1.8rem] mt-8 sm:mt-12 lg:mt-[8vw] px-4 sm:px-0">
                  <div className="feature-box border-2 border-[#1E1E1E] px-4 sm:px-5 py-4 sm:py-6 rounded-[10px]">
                    <div className="feature-name font-montserrat uppercase text-base sm:text-lg mb-2">Eco-Friendly by Design</div>
                    <div className="feature-detail text-sm sm:text-base">Made from biodegradable, food-grade materials that are safe for you and gentle on the planet.</div>
                  </div>
                  <div className="feature-box border-2 border-[#1E1E1E] px-4 sm:px-5 py-4 sm:py-6 rounded-[10px]">
                    <div className="feature-name font-montserrat uppercase text-base sm:text-lg mb-2">Sustainable & Responsible</div>
                    <div className="feature-detail text-sm sm:text-base">A smart alternative to plastic, reducing waste while keeping your beverage experience intact.</div>
                  </div>
                  <div className="feature-box border-2 border-[#1E1E1E] px-4 sm:px-5 py-4 sm:py-6 rounded-[10px] sm:col-span-2 lg:col-span-1">
                    <div className="feature-name font-montserrat uppercase text-base sm:text-lg mb-2">Strong, Stylish & Green</div>
                    <div className="feature-detail text-sm sm:text-base">Durable, spill-proof, and crafted to complement every coffee, chai, or cold brew; without harming nature.</div>
                  </div>
                </div>
              </section>

              <section id="section3" className="min-h-screen pt-8 sm:pt-16 lg:pt-[4vw] pb-8 sm:pb-16 lg:pb-[4vw] px-4 sm:px-0">
                <h2 className="heading font-montserrat font-bold text-center mb-8 sm:mb-12 lg:mb-[3vw] text-[clamp(2rem,8vw,13.5rem)] text-[#31473A] uppercase">About Us</h2>
                <div className="content-wrapper flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-24 items-center">
                  <Image src="/assets/plant-1.jpg" alt="About Us" width={500} height={500} className="rounded-[10px] border-4 sm:border-[10px] border-white shadow-lg w-full max-w-[500px] order-2 lg:order-1" style={{ height: 'auto' }} />
                  <div className="content max-w-[500px] lg:ml-auto order-1 lg:order-2">
                    <p className="mt-4 text-sm sm:text-base">For over 27 years, WorldStar Packaging Industry has been shaping the way beverages are served with packaging that blends innovation, sustainability, and trust. From gourmet coffee brands to quick-service restaurants and leading airlines, we have earned the confidence of clients who value both quality and responsibility.</p>
                    <p className="mt-4 text-sm sm:text-base">Our journey has always been guided by a simple belief that packaging is more than just a container. It is an extension of the product, the brand, and the experience. Every cup and straw we create is designed to be safe, durable, and stylish, while also being eco-friendly and mindful of tomorrow's world.</p>
                    <p className="mt-4 text-sm sm:text-base">What began as a vision to provide reliable food-grade packaging has today grown into a legacy of excellence, serving diverse industries with solutions that carry not just beverages, but also the values of care, innovation, and sustainability. At Worldstar, every sip matters and so does the planet.</p>
                  </div>
                </div>
              </section>

              <section id="section4" className="min-h-screen relative px-4 sm:px-0 hidden md:block">
                <Image src="/assets/img-2.png" alt="img1" width={260} height={260} className="img1 rounded-[10px] border-4 sm:border-[10px] border-white shadow-lg absolute w-[120px] sm:w-[180px] lg:w-[260px] top-[5%] sm:top-[12%] left-[2%] sm:left-[3%] rotate-[15deg]" />
                <Image src="/assets/img-3.png" alt="img2" width={470} height={470} className="img2 rounded-[10px] border-4 sm:border-[10px] border-white shadow-lg absolute w-[200px] sm:w-[300px] lg:max-w-[470px] top-[35%] sm:top-[22%] right-[2%] sm:right-[4%] rotate-[14deg]" style={{ height: 'auto' }} />
                <Image src="/assets/img-4.png" alt="img3" width={340} height={340} className="img3 rounded-[10px] border-4 sm:border-[10px] border-white shadow-lg absolute w-[150px] sm:w-[220px] lg:w-[340px] left-[5%] sm:left-[10%] bottom-[5%] sm:bottom-[12%] -rotate-[12deg]" />
              </section>

              <section id="section5" className="text-center pt-8 sm:pt-16 lg:pt-[4vw] pb-16 sm:pb-24 lg:pb-[8vw] min-h-[94vh] px-4 sm:px-0">
                <h2 className="heading font-montserrat font-bold text-[clamp(2rem,6.5vw,6.5vw)] uppercase text-[#31473A] mb-6">Top Picks</h2>
                <div className="product-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 mt-8 sm:mt-18">
                  <div className="product flex flex-col items-center justify-end">
                    <Image src="/assets/img-3.png" alt="green" width={300} height={300} className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mb-4 sm:mb-6 drop-shadow-[6px_15px_5px_rgba(0,0,0,0.09)]" style={{ height: 'auto' }} />
                    <div className="name text-lg sm:text-xl font-medium">Double Wall Paper Cups</div>
                  </div>
                  {/* The Target Spot */}
                  <div ref={targetSpotRef} className="hidden lg:flex product flex-col items-center justify-end">
                    <div className="name text-lg sm:text-xl font-medium text-center">Rippled Paper Cups</div>
                  </div>
                  <div className="product flex flex-col items-center justify-end sm:col-span-2 lg:col-span-1">
                    <Image src="/assets/img-1.png" alt="black" width={300} height={300} className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] mb-4 sm:mb-6 drop-shadow-[6px_15px_5px_rgba(0,0,0,0.09)]" />
                    <div className="name text-lg sm:text-xl font-medium">Single Wall Paper Cups</div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>

      {/* ── Trusted by Brands ── */}
      <section className="w-full bg-[#E9EFE6] px-6 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          {/* Left text */}
          <div className="lg:w-2/5 flex-shrink-0">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl leading-tight text-[#31473A]">
              Trusted by <span className="text-[#31473A]">Brands,</span><br />Served with Care
            </h2>
            <p className="mt-5 text-[#31473A]/80 max-w-md leading-relaxed">
              From your favourite cafés to leading food chains, our eco-friendly cups and straws carry the mark of quality and reliability. Each brand you see here partners with us to ensure their beverages are served in style — sustainably, safely, and with a touch of innovation.
            </p>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 bg-[#1E1E1E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#31473A] transition-colors shadow-md">
              Explore Integration <span aria-hidden>›</span>
            </Link>
          </div>
          {/* Right scrolling columns of brand logos */}
          <div className="lg:w-3/5 grid grid-cols-3 gap-4 h-[380px] overflow-hidden">
            {/* Column 1: Scrolls Up */}
            <div className="marquee-column-container">
              <div className="flex flex-col gap-4 marquee-up-wrapper">
                {[
                  "/images/cl-1.png", "/images/cl-2.png", "/images/cl-3.png", "/images/cl-5.png",
                  "/images/cl-1.png", "/images/cl-2.png", "/images/cl-3.png", "/images/cl-5.png"
                ].map((src, i) => (
                  <div key={i} className="bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow aspect-video w-full" style={{ height: '80px' }}>
                    <Image src={src} alt="Brand logo" width={120} height={60} className="object-contain max-h-10 w-auto" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Scrolls Down */}
            <div className="marquee-column-container">
              <div className="flex flex-col gap-4 marquee-down-wrapper">
                {[
                  "/images/cl-5.png", "/images/cl-3.png", "/images/cl-2.png", "/images/cl-1.png",
                  "/images/cl-5.png", "/images/cl-3.png", "/images/cl-2.png", "/images/cl-1.png"
                ].map((src, i) => (
                  <div key={i} className="bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow aspect-video w-full" style={{ height: '80px' }}>
                    <Image src={src} alt="Brand logo" width={120} height={60} className="object-contain max-h-10 w-auto" />
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: Scrolls Up */}
            <div className="marquee-column-container">
              <div className="flex flex-col gap-4 marquee-up-wrapper">
                {[
                  "/images/cl-3.png", "/images/cl-5.png", "/images/cl-1.png", "/images/cl-2.png",
                  "/images/cl-3.png", "/images/cl-5.png", "/images/cl-1.png", "/images/cl-2.png"
                ].map((src, i) => (
                  <div key={i} className="bg-white rounded-2xl flex items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow aspect-video w-full" style={{ height: '80px' }}>
                    <Image src={src} alt="Brand logo" width={120} height={60} className="object-contain max-h-10 w-auto" />
                  </div>
                ))}
              </div>
            </div>
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
                  sizes="220px"
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
                  sizes="220px"
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
                  sizes="220px"
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
                  sizes="220px"
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
    </div>
  );
}

