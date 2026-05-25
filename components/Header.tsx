"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`w-full flex items-center justify-between border-b px-6 py-2 z-50 fixed transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#E9EFE6]/95 backdrop-blur-md shadow-md border-b-[#31473A]/30 py-3' 
          : 'bg-transparent border-b-[#31473A]/25 py-4'
      }`}>
        <div className="flex-shrink-0 flex items-center">
          <Link href="/">
            <Image src="/assets/logo.svg" alt="Logo" width={80} height={80} className="w-20 h-20" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-10 mr-6 items-center">
          <Link className="text-black hover:text-gray-600 transition-colors" href="/about">About</Link>
          <div className="relative">
            <button className="flex items-center gap-1 text-black hover:text-gray-600 transition-colors">
              Our Products
              <ChevronDown className="w-4 h-4 transition-transform" />
            </button>
          </div>
          <Link className="text-black hover:text-gray-600 transition-colors" href="/compostable">Compostable Paper Cups</Link>
          <Link className="text-black hover:text-gray-600 transition-colors" href="/contact">Contact</Link>
        </nav>
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Toggle mobile menu"
          className="md:hidden p-2 text-black hover:text-gray-600 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-50 md:hidden transform transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#E9EFE6] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#31473A] rounded-full animate-pulse"></div>
            <div className="absolute top-60 right-16 w-24 h-24 bg-[#31473A] rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-28 h-28 bg-[#31473A] rounded-full animate-pulse animation-delay-2000"></div>
          </div>
        </div>
        <div className="relative h-full flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-[#31473A]/10">
            <div className="flex items-center space-x-3">
              <Image src="/assets/logo.svg" alt="Logo" width={48} height={48} className="w-12 h-12" />
              <span className="text-[#31473A] font-bold text-xl">Menu</span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 text-[#31473A] hover:text-[#31473A]/80 transition-colors rounded-full hover:bg-[#31473A]/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="space-y-2">
              <Link onClick={() => setIsMenuOpen(false)} href="/about" className="block text-[#31473A] text-lg font-medium py-4 px-4 rounded-lg hover:bg-[#31473A]/10 hover:text-[#31473A]/80 transition-all duration-300 transform hover:translate-x-2">About</Link>
              <div className="bg-[#31473A]/5 rounded-lg overflow-hidden">
                <div className="text-[#31473A] text-lg font-medium py-4 px-4 border-b border-[#31473A]/10">Our Products</div>
                <div className="px-4">
                  <button className="flex items-center justify-between w-full text-left text-[#31473A] font-medium py-3 hover:text-[#31473A]/80 transition-colors">
                    Beverage Serving <ChevronRight className="w-[18px] h-[18px] transition-transform duration-300" />
                  </button>
                </div>
                <div className="px-4 border-t border-[#31473A]/10">
                  <button className="flex items-center justify-between w-full text-left text-[#31473A] font-medium py-3 hover:text-[#31473A]/80 transition-colors">
                    Food Serving <ChevronRight className="w-[18px] h-[18px] transition-transform duration-300" />
                  </button>
                </div>
                <div className="px-4 border-t border-[#31473A]/10">
                  <button className="flex items-center justify-between w-full text-left text-[#31473A] font-medium py-3 hover:text-[#31473A]/80 transition-colors">
                    Serving Add-on <ChevronRight className="w-[18px] h-[18px] transition-transform duration-300" />
                  </button>
                </div>
              </div>
              <Link onClick={() => setIsMenuOpen(false)} href="/compostable" className="block text-[#31473A] text-lg font-medium py-4 px-4 rounded-lg hover:bg-[#31473A]/10 hover:text-[#31473A]/80 transition-all duration-300 transform hover:translate-x-2">Compostable Paper Cups</Link>
              <Link onClick={() => setIsMenuOpen(false)} href="/contact" className="block text-[#31473A] text-lg font-medium py-4 px-4 rounded-lg hover:bg-[#31473A]/10 hover:text-[#31473A]/80 transition-all duration-300 transform hover:translate-x-2">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
