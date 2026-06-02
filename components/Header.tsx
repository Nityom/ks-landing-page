"use client";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

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
            <Image src="/assets/logo.svg" alt="Logo" width={80} height={80} style={{ width: '5rem', height: 'auto' }} />
          </Link>
        </div>
        <nav className="hidden md:flex gap-10 mr-6 items-center">
          <Link className="text-black hover:text-gray-600 transition-colors" href="/about">About</Link>
          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-black hover:text-gray-600 transition-colors">
              Our Products
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#31473A]/10 overflow-hidden z-50">
                <Link
                  href="/products/cups"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-[#E9EFE6] transition-colors"
                >
                  <Image src="/assets/img-1.png" alt="Paper Cups" width={36} height={36} className="w-9 h-auto object-contain flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#31473A] text-sm">Paper Cups</div>
                    <div className="text-xs text-[#31473A]/50">Single, Double Wall &amp; Ripple</div>
                  </div>
                </Link>
                <div className="h-px bg-[#31473A]/10 mx-5" />
                <Link
                  href="/products/plates"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-3 px-5 py-4 hover:bg-[#E9EFE6] transition-colors"
                >
                  <Image src="/assets/plate.png" alt="Buffet Plates" width={36} height={36} className="w-9 h-auto object-contain flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-[#31473A] text-sm">Buffet Plates</div>
                    <div className="text-xs text-[#31473A]/50">Premium food-safe serving</div>
                  </div>
                </Link>
              </div>
            )}
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
              <Image src="/assets/logo.svg" alt="Logo" width={48} height={48} style={{ width: '3rem', height: 'auto' }} />
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
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="/products/cups"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-[#31473A]/10 transition-all duration-200"
                >
                  <Image src="/assets/img-1.png" alt="Paper Cups" width={32} height={32} className="w-8 h-auto object-contain flex-shrink-0" />
                  <span className="text-[#31473A] font-medium flex-1">Paper Cups</span>
                  <ChevronRight className="w-4 h-4 text-[#31473A]/40" />
                </Link>
                <Link
                  onClick={() => setIsMenuOpen(false)}
                  href="/products/plates"
                  className="flex items-center gap-3 px-4 py-3 border-t border-[#31473A]/10 hover:bg-[#31473A]/10 transition-all duration-200"
                >
                  <Image src="/assets/plate.png" alt="Buffet Plates" width={32} height={32} className="w-8 h-auto object-contain flex-shrink-0" />
                  <span className="text-[#31473A] font-medium flex-1">Buffet Plates</span>
                  <ChevronRight className="w-4 h-4 text-[#31473A]/40" />
                </Link>
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
