import Image from "next/image";
import AdvisorForm from "../components/AdvisorForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/">
              <Image
                src="/logo.webp"
                alt="Advisor Giant"
                width={240}
                height={60}
                priority
                className="h-auto w-48"
              />
            </a>
            <time dateTime="2025-01-15" className="text-sm text-zinc-600">
              January 15, 2025
            </time>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar Layout */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content - 2/3 width */}
          <article className="lg:col-span-2">
            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Special Report
                </span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                The Overlooked Strategy Transforming Wealth Management Client Acquisition in 2025: Why Your Marketing Needs Data Lists.
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                While most financial advisors are throwing capital at expensive SEO campaigns, pay-per-click ads, and outdated seminars, a select group of elite wealth managers are achieving sustainable, high-net-worth client growth using a simpler, proven, and far more cost-effective approach: Precision Data Lists. Here are the strategic secret experts say you need to know before your competitors secure the best prospects.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A5F]">
                  <span className="text-sm font-semibold text-white">MJ</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-900">M.J. Megan Jones</div>
                  <div className="text-sm text-zinc-600">Senior Wealth Management Analyst</div>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <p className="text-lg leading-relaxed text-zinc-700">
                In advisory practices nationwide, the race for high-value clients is consuming marketing budgets. Firms spend tens of thousands on digital campaigns that yield low-quality, high-volume leads—or worse, unqualified tire-kickers. Traditional strategies often deliver short-term, unsustainable engagement and fail to connect advisors with clients truly ready to move their assets.
              </p>

              <p className="text-lg leading-relaxed text-zinc-700">
                Yet, a small, highly successful segment of the industry has discovered a pivot point. They've realized that the true differentiator isn't how widely you market, but <strong>how accurately you target</strong>. This approach doesn't require massive operational overhaul or reliance on algorithmic luck—it works by accessing premium, pre-qualified investor data.
              </p>

              {/* Section 1 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                What Successful Advisors Know That You Don't
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                According to a recent industry analysis, advisory firms that switched from general digital marketing to verified, high-intent data lists reported an average <strong>client acquisition improvement of 300% in meeting-to-close rates</strong> within the first year. These gains dramatically reduce the time advisors spend on unproductive outreach.
              </p>

              {/* Callout Box */}
              <div className="my-10 rounded-lg border-l-4 border-[#C13741] bg-[#FEF2F3] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#C13741] flex-shrink-0">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-[#1E3A5F]">Key Finding</h3>
                    <p className="text-base leading-relaxed text-zinc-700">
                      Wealth management practices implementing Verified Data Targeting see a <strong>300% increase</strong> in initial contact-to-meeting rate and a <strong>90% reduction</strong> in effective cost-per-qualified-lead compared to broad-market digital campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-zinc-700">
                "We were spending a fortune on LinkedIn ads and getting nowhere," admits one of the advisors, founder of a $750M RIA. "Our cost-per-lead was through the roof, and the quality was poor. When we started with pre-qualified investor lists, our entire sales cycle collapsed from months to weeks. We were suddenly talking to people who fit our exact asset profile and were already searching for a new advisor. The ROI was immediate."
              </p>

              {/* Section 2 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                The Three Pillars of Data-Driven Acquisition
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                After analyzing the most effective data strategies, researchers have identified three core elements that allow verified data lists to outperform all other marketing channels:
              </p>

              {/* Benefits List */}
              <div className="my-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#1E3A5F]">
                      Hyper-Curated Investor Profiles
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-700">
                      Unlike generic market data, premium lists focus exclusively on verified high-net-worth individuals with authenticated assets, professional profiles, and, critically, <strong>intent signals</strong>. This eliminates wasted time and ensures every outreach effort is directed at a prospect with genuine potential for a $1M+ portfolio.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#1E3A5F]">
                      Predictive Targeting & Segmentation
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-700">
                      The best lists are not static. They leverage machine learning to segment prospects based on <strong>life-event triggers</strong> (e.g., recent equity event, career transition, sale of business) and geographic proximity. This ensures your message arrives at the exact right time, turning a cold call into a perfectly timed introduction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#1E3A5F]">
                      Compliance-First Sourcing
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-700">
                      The foundation of any sustainable strategy is trust and legality. Elite data providers adhere to strict compliance standards, ensuring all lists are meticulously vetted and legally sourced. This protects your firm from regulatory risk and maintains the integrity of your marketing funnel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                Why Now? The Window of Opportunity
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                The market is currently flooded with mediocre leads generated by automated bots and broad-net digital campaigns. As the market saturates, the ability to bypass the noise and speak directly to a pre-qualified, high-intent investor is becoming the definitive competitive advantage.
              </p>

              {/* Pull Quote */}
              <blockquote className="my-10 border-l-4 border-[#C13741] pl-6 italic">
                <p className="text-2xl font-medium leading-relaxed text-[#1E3A5F]">
                  "The advisors who prioritize data quality and precision targeting today will be the growth leaders of tomorrow. The question isn't if you can afford premium data—it's whether you can afford to keep paying for useless, low-quality leads."
                </p>
              </blockquote>

              {/* Section 4 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                What You Can Expect From Elite Data Lists
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                Firms that transition to a data-first strategy consistently report several tangible, bottom-line outcomes:
              </p>

              {/* Results Grid */}
              <div className="my-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">300%</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Meeting Rate Increase</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Spend less time prospecting, more time advising.
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">90%</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Lower Acquisition Cost</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Eliminate expensive, low-ROI digital marketing spend.
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">$1M+</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Minimum Asset Size</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Every prospect is pre-qualified as worth your time.
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">100%</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Data Verification</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Guaranteed accurate contact information.
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                Ready to Start Closing?
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                The only difference between successful advisors and those struggling is who they talk to. Stop relying on luck and start leveraging intelligence. Access the same verified, high-intent investor lists that America's fastest-growing wealth managers are using right now.
              </p>

              {/* Final CTA Section */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] p-10 text-center shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Get Your Exclusive Data List & Connect with High-Intent Investors Today
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Access verified, high-intent investor lists that America's fastest-growing wealth managers are using right now. Position your practice for immediate, sustainable growth.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="/quiz"
                    className="w-full sm:w-auto rounded-lg bg-[#C13741] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#D94651] transition-colors"
                  >
                    Get Started Now
                  </a>
                  <a
                    href="#"
                    className="w-full sm:w-auto text-base font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
                <p className="mt-6 text-sm text-white/70">
                  Limited list availability. Premium segments sell out quickly.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <p className="text-xs leading-relaxed text-zinc-600">
                  <strong>Editorial Disclosure:</strong> This article discusses the effectiveness of verified data lists and precision targeting in wealth management. Results may vary based on market conditions, advisor experience, and specific targeting parameters.
                </p>
              </div>
            </div>
          </article>

          {/* Right Sidebar - 1/3 width */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Quick Connect Form */}
              <AdvisorForm />

              {/* Quiz CTA with Image */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#F0F4F8] to-white shadow-lg border border-zinc-200">
                <div className="relative h-48 bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] flex items-center justify-center">
                  <div className="text-center px-6">
                    <svg className="mx-auto h-16 w-16 text-white mb-3" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                    <h3 className="text-xl font-bold text-white">Are You Ready?</h3>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-[#1E3A5F]">
                    Take Our Advisor Readiness Quiz
                  </h3>
                  <p className="mb-4 text-sm text-zinc-700 leading-relaxed">
                    Discover if your practice is positioned to attract ultra high net worth clients. Get personalized insights in just 2 minutes.
                  </p>
                  <ul className="mb-6 space-y-2 text-sm text-zinc-600">
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#C13741] flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>5 quick questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#C13741] flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Instant results</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#C13741] flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Custom recommendations</span>
                    </li>
                  </ul>
                  <a
                    href="/quiz"
                    className="block w-full rounded-lg bg-[#C13741] px-6 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-[#D94651] transition-colors"
                  >
                    Start the Quiz
                  </a>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="rounded-xl bg-[#F0F4F8] p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <svg className="h-12 w-12 text-[#1E3A5F]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1E3A5F]">Trusted by 1,000+ Advisors</h3>
                <p className="text-sm text-zinc-600">
                  Join elite wealth managers who've grown their AUM by an average of 180%
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Minimal Footer */}
      <footer className="border-t border-zinc-200 bg-[#F0F4F8]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="Advisor Giant"
              width={200}
              height={50}
              className="h-auto w-40 opacity-90"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:gap-16">
            <div>
              <h3 className="text-sm font-semibold text-[#1E3A5F]">Network</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-zinc-600 hover:text-[#C13741]">Join Now</a></li>
                <li><a href="#" className="text-sm text-zinc-600 hover:text-[#C13741]">Member Benefits</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1E3A5F]">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-zinc-600 hover:text-[#C13741]">Success Stories</a></li>
                <li><a href="#" className="text-sm text-zinc-600 hover:text-[#C13741]">Research</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1E3A5F]">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-zinc-600 hover:text-[#C13741]">Privacy</a></li>
                <li><a href="#" className="text-sm text-zinc-600 hover:text-[#C13741]">Terms</a></li>
                <li><a href="#" className="text-sm text-zinc-600 hover:text-[#C13741]">Disclosures</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1E3A5F]">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-sm text-zinc-600 hover:text-[#C13741]">Support</a></li>
                <li><a href="#" className="text-sm text-zinc-600 hover:text-[#C13741]">About Us</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-zinc-300 pt-8">
            <p className="text-center text-xs text-zinc-600">
              © 2025 Advisor Giant. America's #1 Ultra High Net Worth Investor Network. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
