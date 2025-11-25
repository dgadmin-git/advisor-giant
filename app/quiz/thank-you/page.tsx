import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F0F4F8]">
      <Header />

      <div className="mx-auto max-w-3xl px-6 py-12">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl text-center sm:p-12">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-[#1E3A5F] sm:text-5xl">
            Thank You!
          </h1>

          <p className="mb-8 text-xl text-zinc-600">
            We've received your information and are matching you with qualified financial advisors.
          </p>

          <div className="mb-8 rounded-lg bg-[#F0F4F8] p-6 text-left">
            <h2 className="mb-4 text-lg font-semibold text-[#1E3A5F]">What happens next?</h2>
            <ul className="space-y-3 text-zinc-700">
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-[#5B4FE9]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Our team will review your information within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-[#5B4FE9]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>We'll match you with advisors who specialize in your needs</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="h-6 w-6 flex-shrink-0 text-[#5B4FE9]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>A qualified advisor will reach out to you directly</span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <p className="mb-4 text-sm text-zinc-600">
              Check your email for a confirmation message with more details.
            </p>
          </div>

          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#5B4FE9] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-[#4D42D7]"
          >
            Return to Homepage
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
