import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-50 to-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6 inline-block">
                <span className="rounded-full bg-[#C13741] px-4 py-2 text-sm font-semibold text-white">
                  Elite Advisors Available Now
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-6xl lg:text-7xl">
                Maximize Your Wealth With <span className="text-[#F59E0B]">Strategic Roth Conversions</span>
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-zinc-700">
                Connect with elite financial advisors who specialize in retirement planning strategies for investors with $1M+ in assets. The 2026 tax deadline is approaching—don't leave six figures on the table.
              </p>

              <div className="mb-8">
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C13741] px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-[#D94651] transition-all"
                >
                  Find My Financial Advisor
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm text-zinc-600">
                <span className="font-medium">As Featured In:</span>
                <div className="flex items-center gap-4">
                  <span className="font-semibold">WSJ</span>
                  <span className="font-semibold">Forbes</span>
                  <span className="font-semibold">CNBC</span>
                  <span className="font-semibold">Bloomberg</span>
                  <span className="font-semibold">FT</span>
                </div>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/shutterstock_2532299941.jpg"
                  alt="Professional Financial Advisors"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[600px]"
                  priority
                />
                {/* Floating badges overlay */}
                <div className="absolute top-6 right-6 rounded-xl bg-white/95 backdrop-blur px-4 py-3 shadow-lg border border-zinc-200">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#091c3d]">Secured Private Advisory</span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 rounded-xl bg-white/95 backdrop-blur px-4 py-3 shadow-lg border border-zinc-200">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                    </svg>
                    <span className="text-sm font-semibold text-[#091c3d]">Experienced Advisors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="bg-[#C13741] py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-start gap-3">
              <svg className="h-6 w-6 text-[#F59E0B] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <div className="text-white">
                <span className="font-bold">2026 Tax Law Changes:</span> Current tax rates expire December 31, 2025. High net worth investors have a limited window to execute optimal Roth conversions before rates increase by 3-8%. <span className="font-semibold">Act now or pay significantly more later.</span>
              </div>
            </div>
            <Link
              href="/quiz"
              className="flex-shrink-0 rounded-lg bg-white px-6 py-3 text-[#C13741] font-semibold hover:bg-zinc-100 transition-colors shadow-lg whitespace-nowrap"
            >
              Calculate My Retirement Savings
            </Link>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1E3A5F] sm:text-5xl">
              Why High Net Worth Investors Choose AdvisorGiant
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
              We're not a general financial advisor directory. We specialize exclusively in connecting investors with $1M+ in assets to advisors who understand high net worth retirement planning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-[#C13741]">14M+</div>
              <div className="text-lg font-medium text-[#1E3A5F]">Verified High Net Worth Individuals in Database</div>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-[#C13741]">$247K</div>
              <div className="text-lg font-medium text-[#1E3A5F]">Average Retirement Savings for Our Clients</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-[#C13741]">24 Hours</div>
              <div className="text-lg font-medium text-[#1E3A5F]">Average Response Time to Match You</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
