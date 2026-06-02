import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#31473A] relative overflow-visible mt-20">
      {/* CSS @keyframes declaration for extremely robust custom slow-spin animation */}
      <style>{`
        @keyframes footer-badge-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-footer-badge {
          animation: footer-badge-spin 25s linear infinite;
        }
        .footer-badge-container {
          position: absolute !important;
          z-index: 30 !important;
          right: 1.5rem !important;
          left: auto !important;
          width: 8rem !important;
          height: 8rem !important;
          top: -4rem !important;
        }
        @media (min-width: 768px) {
          .footer-badge-container {
            right: 4rem !important;
            width: 9rem !important;
            height: 9rem !important;
            top: -4.5rem !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 relative overflow-visible">
        {/* Circular spinning badge — top-right, half-peeking out of the top border, aligned with content right edge */}
        <div className="footer-badge-container">
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-xl animate-footer-badge">
            <svg viewBox="0 0 100 100" className="w-full h-full p-1" aria-label="Eco First • Style Next • Value Always">
              <defs>
                <path id="footerCirclePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text className="text-[6.8px]" fontSize="6.8" fill="#31473A" fontFamily="sans-serif" fontWeight="700" letterSpacing="2.8">
                <textPath href="#footerCirclePath">Eco First • Style Next • Value Always •</textPath>
              </text>
            </svg>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Column 1: Logo & Text */}
          <div>
            <div className="flex items-center gap-3">
              <Image src="/assets/logo.svg" alt="KS Manufactory logo" width={128} height={128} priority style={{ width: '8rem', height: 'auto' }} />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-gray-200">
              KS Manufactory specialises in high-quality paper cups and buffet plates, combining innovation, sustainability, and trust in every product we make.
            </p>
           
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white tracking-wide uppercase text-sm">Quick Links</h4>
            <ul className="mt-6 space-y-4 text-sm font-medium text-gray-200">
              <li><Link className="hover:text-white transition-colors" href="/">Home</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/about">About</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/">Our Products</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/compostable">Compostable Paper Cups</Link></li>
              <li><Link className="hover:text-white transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h4 className="text-lg font-bold text-white tracking-wide uppercase text-sm">Get In Touch</h4>
            <ul className="mt-6 space-y-5 text-gray-200">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-white flex-shrink-0" />
                <span className="flex-1 text-sm leading-relaxed">
                  KS Manufactory, Muzaffarpur, Bihar
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-white flex-shrink-0" />
                <span className="flex-1 text-sm select-all font-medium">+91 77963 08778</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-white flex-shrink-0" />
                <span className="text-sm flex-1 break-all select-all">ksmanufactory@gmail.com</span>
              </li>
            </ul>
            <div className="pt-2">
              <a
                href="/images/KS Manufactory Brochure.pdf"
                download
                className="mt-6 inline-block bg-white text-[#31473A] px-6 py-3 rounded-md text-sm font-bold hover:bg-[#E9EFE6] transition-colors shadow-md text-center"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      {/* <div className="border-t border-white/10 bg-black/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-xs tracking-wider text-gray-300">
          Copyright © 2026 KS Manufactory | Designed by{' '}
          <a
            href="https://apacedigitalcargo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white underline underline-offset-4 font-semibold"
          >
            Apace Digital Cargo
          </a>
        </div>
      </div> */}
    </footer>
  );
}
