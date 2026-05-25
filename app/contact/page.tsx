"use client";
import Image from "next/image";
import { useState } from "react";
import { Phone, Mail, MapPin, Check, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ fullName: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  return (
    <div className="min-h-screen bg-[#E9EFE6] text-[#31473A]">
      {/* Hero Banner Section - Height 500px to sit perfectly under transparent nav */}
      <section className="relative overflow-hidden h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bg3.jpg"
            alt="Contact background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F5D50]/10 via-[#E9EFE6]/30 to-[#31473A]/90"></div>
        <div className="relative mx-auto max-w-6xl px-4 py-32 sm:py-36 md:py-40 text-center">
          <h1 className="text-5xl md:text-6xl text-white font-bold tracking-tight drop-shadow-lg">
            Contact Us
          </h1>
          <nav className="mt-3 flex items-center justify-center gap-2 text-sm text-white/80">
            <Link className="hover:text-white transition-colors" href="/">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 opacity-60 text-white" />
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </section>

      {/* Main Form + Info Cards Grid */}
      <section className="mx-auto max-w-7xl p-8 sm:p-12 lg:p-20">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column: Form Card */}
          <div className="rounded-2xl border border-[#2F5D50] bg-[#E9EFE6] p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col justify-between">
            <div>
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.2em] text-[#2F5D50] font-medium">
                  Contact Us
                </p>
                <h2 className="text-3xl font-semibold tracking-tight text-[#31473A]">
                  Let&apos;s Connect
                </h2>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-[#31473A]/10 flex items-center justify-center mb-6">
                    <Check className="w-10 h-10 text-[#31473A]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#31473A]">Message Sent!</h3>
                  <p className="mt-3 text-[#2F5D50] max-w-sm text-sm sm:text-base leading-relaxed">
                    Thank you for reaching out. One of our packaging experts will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ fullName: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-8 text-[#31473A] font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-[#2F5D50]">
                      Name
                    </label>
                    <input
                      required
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your Name..."
                      className="flex w-full px-4 py-3 text-base shadow-inner outline-none h-11 rounded-md border border-[#2F5D50] bg-[#E9EFE6] text-[#31473A] placeholder:text-[#2F5D50] focus-visible:ring-2 focus-visible:ring-[#2F5D50] transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-[#2F5D50]">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@yourmail.com"
                      className="flex w-full px-4 py-3 text-base shadow-inner outline-none h-11 rounded-md border border-[#2F5D50] bg-[#E9EFE6] text-[#31473A] placeholder:text-[#2F5D50] focus-visible:ring-2 focus-visible:ring-[#2F5D50] transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-[#2F5D50]">
                      Subject
                    </label>
                    <input
                      required
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Title..."
                      className="flex w-full px-4 py-3 text-base shadow-inner outline-none h-11 rounded-md border border-[#2F5D50] bg-[#E9EFE6] text-[#31473A] placeholder:text-[#2F5D50] focus-visible:ring-2 focus-visible:ring-[#2F5D50] transition-all text-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-widest text-[#2F5D50]">
                      Message
                    </label>
                    <textarea
                      required
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Type here..."
                      rows={5}
                      className="flex w-full px-4 py-3 text-base shadow-inner outline-none rounded-md border border-[#2F5D50] bg-[#E9EFE6] text-[#31473A] placeholder:text-[#2F5D50] focus-visible:ring-2 focus-visible:ring-[#2F5D50] transition-all text-sm resize-none min-h-[120px]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center gap-2 px-8 h-11 rounded-full border border-[#2F5D50] bg-[#31473A] text-white font-medium hover:bg-[#2F5D50] transition-all shadow-md disabled:opacity-75"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          SENDING...
                        </>
                      ) : (
                        "SEND MESSAGE"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Details Cards & Google Map */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="max-w-xl text-[#31473A] leading-relaxed text-base">
                Have a question or are you ready to take your packaging to the next level? Our team at KS Manufactory is always happy to help. Reach out today—let&apos;s create eco-friendly, innovative solutions together!
              </p>

              <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Phone Card */}
                <div className="flex items-start gap-4 rounded-xl border border-[#2F5D50] bg-[#E9EFE6] p-6 shadow-md">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5D50] text-white flex-shrink-0 shadow-sm">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#31473A]">Phone Number</p>
                    <p className="text-sm text-[#31473A] mt-1 font-medium select-all">
                      +91 7796308778
                    </p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-start gap-4 rounded-xl border border-[#2F5D50] bg-[#E9EFE6] p-6 shadow-md">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5D50] text-white flex-shrink-0 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#31473A]">Email Address</p>
                    <p className="text-sm text-[#31473A] mt-1 font-medium break-all [overflow-wrap:anywhere] select-all" title="ksmanufactory@gmail.com">
                      ksmanufactory@gmail.com.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-4 rounded-xl border border-[#2F5D50] bg-[#E9EFE6] p-6 shadow-md">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5D50] text-white flex-shrink-0 shadow-sm">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#31473A]">Our Office</p>
                  <p className="text-sm text-[#31473A] mt-1 leading-relaxed font-medium">
                    KS Manufactory, Muzaffarpur, Bihar
                  </p>
                </div>
              </div>

              {/* Map Embed */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-[#2F5D50] h-[360px] shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3493.866680019917!2d77.12625837550966!3d28.872583275534417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDUyJzIxLjMiTiA3N8KwMDcnNDMuOCJF!5e0!3m2!1sen!2sin!4v1756450103796!5m2!1sen!2sin"
                  className="h-full w-full border-0"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KS Manufactory Map Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
