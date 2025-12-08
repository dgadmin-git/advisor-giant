'use client';

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    consentTCPA: false,
    consentPrivacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const canSubmit = () => {
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.email !== '' &&
      formData.message !== '' &&
      formData.consentTCPA &&
      formData.consentPrivacy
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit()) return;

    setIsSubmitting(true);

    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          formType: 'contact',
          source: 'Contact Page',
        }),
      });

      setIsSubmitted(true);
    } catch (error) {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-zinc-50 py-12">
          <div className="mx-auto max-w-2xl px-6">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
              <div className="mb-6">
                <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-[#1E3A5F] mb-4">Thank You!</h1>
              <p className="text-zinc-600 mb-8">
                Your message has been sent successfully. We'll get back to you as soon as possible.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C13741] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-[#D94651] transition-colors"
              >
                Return Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Contact Us</h1>
            <p className="text-xl text-zinc-600">
              Have questions? We're here to help. Fill out the form below and we'll get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-4">Get in Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-[#C13741] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <p className="font-medium text-zinc-800">Email</p>
                      <a href="mailto:privacy@advisorgiant.com" className="text-[#C13741] hover:underline">
                        privacy@advisorgiant.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="h-6 w-6 text-[#C13741] mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-zinc-800">Mailing Address</p>
                      <p className="text-zinc-600">
                        Giant Partners, Inc.<br />
                        1461 Lawrence Dr #2<br />
                        Thousand Oaks, CA 91362
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1E3A5F] rounded-xl shadow-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Looking for an Advisor?</h3>
                <p className="text-zinc-300 mb-4">
                  Take our quick quiz to get matched with a financial advisor who fits your needs.
                </p>
                <Link
                  href="/quiz"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#C13741] px-4 py-2 font-semibold hover:bg-[#D94651] transition-colors"
                >
                  Take the Quiz
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-[#5B4FE9] focus:outline-none focus:ring-1 focus:ring-[#5B4FE9]"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-[#5B4FE9] focus:outline-none focus:ring-1 focus:ring-[#5B4FE9]"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-[#5B4FE9] focus:outline-none focus:ring-1 focus:ring-[#5B4FE9]"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-[#5B4FE9] focus:outline-none focus:ring-1 focus:ring-[#5B4FE9]"
                      placeholder="Phone Number (Optional)"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={5}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:border-[#5B4FE9] focus:outline-none focus:ring-1 focus:ring-[#5B4FE9]"
                    placeholder="How can we help you?"
                    required
                  />
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4 mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentTCPA}
                      onChange={(e) => setFormData(prev => ({ ...prev, consentTCPA: e.target.checked }))}
                      className="mt-1 h-5 w-5 rounded border-zinc-300 text-[#5B4FE9] focus:ring-[#5B4FE9]"
                    />
                    <span className="text-sm text-zinc-600">
                      I consent to receive marketing and informational calls, emails, and text messages (including those using an automated dialer or prerecorded voice) from Advisor Giant and its financial partners at the phone number and email address I provide. Message and data rates may apply. I can opt out at any time by replying STOP. Consent is not required as a condition of purchase.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentPrivacy}
                      onChange={(e) => setFormData(prev => ({ ...prev, consentPrivacy: e.target.checked }))}
                      className="mt-1 h-5 w-5 rounded border-zinc-300 text-[#5B4FE9] focus:ring-[#5B4FE9]"
                    />
                    <span className="text-sm text-zinc-600">
                      I have read and agree to the{" "}
                      <Link href="/terms-of-use" target="_blank" className="text-[#5B4FE9] underline hover:text-[#4D42D7]">Terms of Use</Link>
                      {" "}and{" "}
                      <Link href="/privacy-policy" target="_blank" className="text-[#5B4FE9] underline hover:text-[#4D42D7]">Privacy Policy</Link>.
                      For California residents, see our{" "}
                      <Link href="/do-not-sell" target="_blank" className="text-[#5B4FE9] underline hover:text-[#4D42D7]">Do Not Sell</Link> page.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit() || isSubmitting}
                  className={`w-full flex items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all ${
                    canSubmit() && !isSubmitting
                      ? 'bg-[#C13741] hover:bg-[#D94651] shadow-lg'
                      : 'cursor-not-allowed bg-zinc-300'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
