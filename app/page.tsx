import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-[#1E3A5F] sticky top-0 z-50 shadow-lg">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Advisor Giant"
                width={200}
                height={50}
                priority
                className="h-auto w-40"
              />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-zinc-200 font-medium transition-colors">
                Home
              </Link>
              <Link href="/advisor" className="text-white hover:text-zinc-200 font-medium transition-colors">
                For Advisors
              </Link>
              <Link href="/community" className="text-white hover:text-zinc-200 font-medium transition-colors">
                For Investors
              </Link>
              <Link href="/advisor" className="text-white hover:text-zinc-200 font-medium transition-colors">
                About
              </Link>
              <Link
                href="/quiz"
                className="rounded-lg bg-[#C13741] px-6 py-2.5 text-white font-semibold hover:bg-[#D94651] transition-colors shadow-lg"
              >
                Get Matched With An Advisor
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-50 to-white py-20 lg:py-32">
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
                Connect with elite financial advisors who specialize in tax-efficient strategies for investors with $1M+ in assets. The 2026 tax deadline is approaching—don't leave six figures on the table.
              </p>

              <div className="mb-8 flex flex-wrap gap-4">
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C13741] px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-[#D94651] transition-all"
                >
                  Find My Tax Advisor
                </Link>
                <Link
                  href="/advisor"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1E3A5F] px-8 py-4 text-lg font-semibold text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all"
                >
                  Learn About 2026 Deadline
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
              <div className="rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2A4F7F] p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Feature Badge 1 */}
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-6 backdrop-blur border border-white/20">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#F59E0B]">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#F59E0B]">Secured</div>
                      <div className="text-sm text-white">Private Advisory</div>
                    </div>
                  </div>

                  {/* Feature Badge 2 */}
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-6 backdrop-blur border border-white/20">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#3B82F6]">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#F59E0B]">Explore Returns</div>
                      <div className="text-sm text-white">with Advisor</div>
                    </div>
                  </div>

                  {/* Feature Badge 3 */}
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-6 backdrop-blur border border-white/20">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-[#F59E0B]">Experienced</div>
                      <div className="text-sm text-white">Advisors</div>
                    </div>
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
              Calculate My Tax Savings
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
              We're not a general financial advisor directory. We specialize exclusively in connecting investors with $1M+ in assets to advisors who understand high net worth tax planning.
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
              <div className="text-lg font-medium text-[#1E3A5F]">Average Tax Savings for Our Clients</div>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="mb-4 text-5xl font-bold text-[#C13741]">24 Hours</div>
              <div className="text-lg font-medium text-[#1E3A5F]">Average Response Time to Match You</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4F7F] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Ready to Optimize Your Tax Strategy?
          </h2>
          <p className="mb-8 text-xl text-zinc-200">
            Connect with elite advisors who specialize in high net worth tax planning and Roth conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C13741] px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-[#D94651] transition-all"
            >
              Find An Advisor
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/advisor"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#1E3A5F] transition-all"
            >
              Roth Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A5F] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Column 1 */}
            <div>
              <Image
                src="/logo.webp"
                alt="Advisor Giant"
                width={160}
                height={40}
                className="h-auto w-32 mb-4"
              />
              <p className="text-sm text-zinc-300">
                Connecting High Net Worth Investors With Elite Tax Strategy Specialists
              </p>
            </div>

            {/* Column 2 - For Investors */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                For Investors
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/quiz" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Find An Advisor
                  </Link>
                </li>
                <li>
                  <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Roth Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    2026 Guide
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 - For Advisors */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                For Advisors
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Join Our Network
                  </Link>
                </li>
                <li>
                  <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    14M Database Access
                  </Link>
                </li>
                <li>
                  <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Advisor Benefits
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Advisor Login
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Company */}
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
              <p>© 2025 AdvisorGiant. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Form ADV</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
