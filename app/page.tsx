import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Image
              src="/logo.png"
              alt="Advisor Giant"
              width={240}
              height={60}
              priority
              className="h-auto w-48"
            />
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
                The Overlooked Strategy That's Quietly Transforming Ultra High Net Worth Portfolio Management in 2025
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                While most financial advisors chase the latest investment trends, a select group of elite wealth managers
                are leveraging a proven—yet surprisingly underutilized—approach to sustainable portfolio growth. Here's what
                the experts say you need to know before your competitors catch on.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A5F]">
                  <span className="text-sm font-semibold text-white">MJ</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-900">Michael Johnson</div>
                  <div className="text-sm text-zinc-600">Senior Wealth Management Analyst</div>
                </div>
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <p className="text-lg leading-relaxed text-zinc-700">
                In private wealth management offices across the country, financial advisors are grappling with a persistent
                challenge: how to deliver meaningful, lasting value to ultra high net worth clients in an increasingly
                competitive marketplace. Traditional approaches—aggressive portfolio rebalancing, niche alternative investments,
                technology platforms—often deliver short-term gains but fail to create the sustainable client relationships
                wealth managers truly need.
              </p>

              <p className="text-lg leading-relaxed text-zinc-700">
                Yet a small but growing number of successful advisory practices have discovered something different.
                Something that doesn't require massive capital investment or wholesale operational changes. Something
                that works for advisors of all sizes, from independent RIAs to established wealth management firms.
              </p>

              {/* Section 1 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                What Elite Wealth Managers Know That You Don't
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                According to recent research from leading financial consultancies, advisory practices that have implemented
                this strategic approach report average client acquisition improvements of 300% within the first year. More
                importantly, these gains compound over time, creating exponential value rather than diminishing returns.
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
                      Wealth management practices implementing this network methodology see a 300% increase in ultra high
                      net worth client referrals and a 45% reduction in client acquisition costs within 12 months, according
                      to industry analysis.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-zinc-700">
                "We were skeptical at first," admits Sarah Chen, founder of a boutique wealth management firm that adopted
                the strategy in early 2024. "But the results spoke for themselves. Within six months, we had access to
                ultra high net worth clients we'd been struggling to reach for years. Our referral network expanded
                exponentially, our clients were more engaged, and our AUM reflected it."
              </p>

              {/* Section 2 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                The Three Pillars of Elite Client Networks
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                After analyzing hundreds of successful implementations, researchers have identified three core elements
                that distinguish this approach from conventional wealth management strategies:
              </p>

              {/* Benefits List */}
              <div className="my-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#1E3A5F]">
                      Curated Ultra High Net Worth Networks
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-700">
                      Rather than casting a wide net, elite advisors focus exclusively on verified ultra high net worth
                      individuals. This targeted approach ensures every connection has genuine potential for meaningful,
                      long-term client relationships worth managing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#1E3A5F]">
                      Strategic Matching & Introductions
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-700">
                      Every client introduction is backed by comprehensive due diligence and compatibility assessment.
                      This removes guesswork and ensures your time is allocated to prospects with the highest probability
                      of conversion and long-term engagement.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-[#1E3A5F]">
                      Exclusive Access & Community
                    </h3>
                    <p className="text-base leading-relaxed text-zinc-700">
                      The most successful networks don't treat this as a one-time referral but as an ongoing ecosystem.
                      Advisors gain continuous access to new opportunities while building relationships with peers who
                      can provide collaborative value.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                Why Now? The Window of Opportunity
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                Market analysts suggest we're at a critical inflection point. As more wealth managers discover this
                network approach, the competitive advantage it offers will diminish. Early adopters are positioning
                themselves for sustained growth, while late entrants may find themselves permanently playing catch-up
                in their respective markets.
              </p>

              {/* Pull Quote */}
              <blockquote className="my-10 border-l-4 border-[#C13741] pl-6 italic">
                <p className="text-2xl font-medium leading-relaxed text-[#1E3A5F]">
                  "The advisors who embrace strategic networking today will be the market leaders of tomorrow. The
                  question isn't whether to join an elite network—it's whether you'll do it before your competitors do."
                </p>
                <footer className="mt-4 text-base text-zinc-600">
                  — Dr. Robert Martinez, Professor of Wealth Management, Wharton School of Business
                </footer>
              </blockquote>

              <p className="text-lg leading-relaxed text-zinc-700">
                Consider the case of Wellington Advisory Group, a struggling independent RIA that was losing market
                share to larger institutional competitors. After joining an elite advisor network, they not only
                stabilized their client base but grew AUM by 180% over 18 months. Their secret? They stopped cold
                prospecting and started building strategic relationships.
              </p>

              {/* Section 4 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                What You Can Expect from Elite Networks
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                Wealth management practices that have successfully joined elite advisor networks consistently report
                several tangible outcomes:
              </p>

              {/* Results Grid */}
              <div className="my-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">300%</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Referral Increase</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Verified ultra high net worth client introductions deliver unprecedented growth opportunities
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">45%</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Lower Acquisition Costs</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Eliminate expensive marketing spend while maintaining or improving client quality
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">24/7</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Network Access</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Continuous connection to verified prospects whenever you're ready to expand your practice
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">$1M+</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Minimum Portfolio Size</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Every prospect is pre-qualified as an ultra high net worth individual worth your time
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                Is This Right for Your Practice?
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                This strategic networking approach has proven effective for advisors across diverse specialties and
                firm sizes. However, it's particularly valuable for practices that:
              </p>

              <ul className="my-6 space-y-3 text-lg leading-relaxed text-zinc-700">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Struggle to access ultra high net worth prospects despite strong credentials</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Face increasing competitive pressure from larger institutional players</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Want sustainable AUM growth rather than short-term client churn</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Are ready to invest in long-term relationship building with qualified prospects</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-zinc-700">
                "The beauty of elite advisor networks is their scalability," notes James Peterson, a practice management
                consultant who has guided over 50 successful network integrations. "Whether you're a solo practitioner
                or a multi-advisor firm, the fundamental principles remain the same. The network adapts to your unique
                practice needs."
              </p>

              {/* Final CTA Section */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] p-10 text-center shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Ready to Access America's #1 Ultra High Net Worth Network?
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Join Advisor Giant and connect with verified ultra high net worth investors actively seeking elite
                  wealth management services. Get started today and position your practice for sustainable, long-term growth.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#"
                    className="w-full sm:w-auto rounded-lg bg-[#C13741] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#D94651] transition-colors"
                  >
                    Join the Network Today
                  </a>
                  <a
                    href="#"
                    className="w-full sm:w-auto text-base font-semibold text-white hover:text-white/80 transition-colors"
                  >
                    Learn more about membership <span aria-hidden="true">→</span>
                  </a>
                </div>
                <p className="mt-6 text-sm text-white/70">
                  Exclusive membership. Limited availability. Connect with qualified prospects immediately.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <p className="text-xs leading-relaxed text-zinc-600">
                  <strong>Editorial Disclosure:</strong> This article contains information about wealth management
                  networking strategies and services. Results may vary based on individual circumstances, market
                  conditions, and advisor expertise. Past performance and testimonials do not guarantee future results.
                  Advisor Giant may receive compensation when advisors join the network through this article. Always
                  conduct your own research and consult with compliance professionals before making business decisions.
                  Securities and advisory services offered through registered representatives.
                </p>
              </div>
            </div>
          </article>

          {/* Right Sidebar - 1/3 width */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Quick Connect Form */}
              <div className="rounded-2xl border-2 border-[#1E3A5F] bg-white p-6 shadow-lg">
                <h2 className="mb-2 text-2xl font-bold text-[#1E3A5F]">Quick Connect with Us</h2>
                <p className="mb-6 text-sm text-zinc-600">
                  Get exclusive access to ultra high net worth investors. Fill out the form below.
                </p>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="firm" className="block text-sm font-medium text-zinc-700 mb-1">
                      Firm Name
                    </label>
                    <input
                      type="text"
                      id="firm"
                      name="firm"
                      className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                      placeholder="Your Firm"
                    />
                  </div>
                  <div>
                    <label htmlFor="aum" className="block text-sm font-medium text-zinc-700 mb-1">
                      Assets Under Management
                    </label>
                    <select
                      id="aum"
                      name="aum"
                      className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                    >
                      <option value="">Select range</option>
                      <option value="0-10m">$0 - $10M</option>
                      <option value="10m-50m">$10M - $50M</option>
                      <option value="50m-100m">$50M - $100M</option>
                      <option value="100m-500m">$100M - $500M</option>
                      <option value="500m+">$500M+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                      placeholder="Tell us about your practice..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#C13741] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#D94651] transition-colors"
                  >
                    Get Connected Now
                  </button>
                  <p className="text-xs text-zinc-500 text-center">
                    By submitting, you agree to our privacy policy
                  </p>
                </form>
              </div>

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
