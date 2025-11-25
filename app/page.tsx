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
            <div className="flex items-center gap-8">
              <Link href="/advisor" className="text-white hover:text-zinc-200 font-medium transition-colors">
                For Advisors
              </Link>
              <Link href="/community" className="text-white hover:text-zinc-200 font-medium transition-colors">
                For Investors
              </Link>
              <Link
                href="/quiz"
                className="rounded-lg bg-[#C13741] px-6 py-2.5 text-white font-semibold hover:bg-[#D94651] transition-colors shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-zinc-50 to-zinc-100 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1E3A5F]/10 px-4 py-2">
                <span className="text-sm font-semibold text-[#1E3A5F]">Trusted by 10,000+ Advisors</span>
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-6xl lg:text-7xl">
                Connect With Your Ideal Clients
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-zinc-700">
                Access premium data lists of high-net-worth individuals and qualified investors actively seeking financial guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C13741] px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-[#D94651] transition-all"
                >
                  Find Your Match
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/advisor"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#1E3A5F] px-8 py-4 text-lg font-semibold text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2A4F7F] p-8 shadow-2xl">
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 rounded-xl bg-white/10 p-4 backdrop-blur">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C13741]">
                        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 w-32 rounded bg-white/30 mb-2"></div>
                        <div className="h-2 w-24 rounded bg-white/20"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1E3A5F] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2 text-5xl font-bold text-white">10,000+</div>
              <div className="text-lg text-zinc-300">Active Advisors</div>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold text-white">$2.5B+</div>
              <div className="text-lg text-zinc-300">Assets Connected</div>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold text-white">95%</div>
              <div className="text-lg text-zinc-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#1E3A5F] sm:text-5xl">
              Why Choose Advisor Giant?
            </h2>
            <p className="text-xl text-zinc-600">
              The most trusted platform for connecting advisors with qualified investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-zinc-200 p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#C13741]/10">
                <svg className="h-7 w-7 text-[#C13741]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1E3A5F]">Verified Data Lists</h3>
              <p className="text-zinc-600 leading-relaxed">
                Access pre-qualified high-net-worth individuals with verified contact information and asset profiles.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-zinc-200 p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#C13741]/10">
                <svg className="h-7 w-7 text-[#C13741]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1E3A5F]">300% Better ROI</h3>
              <p className="text-zinc-600 leading-relaxed">
                Advisors report 3x higher conversion rates compared to traditional marketing methods.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-zinc-200 p-8 hover:shadow-xl transition-shadow">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#C13741]/10">
                <svg className="h-7 w-7 text-[#C13741]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#1E3A5F]">Compliance First</h3>
              <p className="text-zinc-600 leading-relaxed">
                All data is sourced ethically and complies with financial industry regulations and privacy standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2A4F7F] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
            Ready to Grow Your Practice?
          </h2>
          <p className="mb-8 text-xl text-zinc-200">
            Join thousands of advisors who are connecting with qualified investors every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quiz"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C13741] px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-[#D94651] transition-all"
            >
              Start Matching Now
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/advisor"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#1E3A5F] transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3A5F] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image
                src="/logo.webp"
                alt="Advisor Giant"
                width={160}
                height={40}
                className="h-auto w-32 mb-4"
              />
              <p className="text-sm text-zinc-300">
                Connecting financial advisors with qualified investors.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                For Advisors
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Data Lists
                  </Link>
                </li>
                <li>
                  <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                For Investors
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/community" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Find an Advisor
                  </Link>
                </li>
                <li>
                  <Link href="/quiz" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Take Quiz
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-700 pt-8 text-center">
            <p className="text-sm text-zinc-400">
              © 2025 Advisor Giant. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
