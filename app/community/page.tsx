import Image from "next/image";
import AdvisorForm from "../components/AdvisorForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ConsumerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content with Sidebar Layout */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content - 2/3 width */}
          <article className="lg:col-span-2">
            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Wealth Management
                </span>
                <span>•</span>
                <span>6 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                Why High-Net-Worth Investors Are Joining Private Advisor Networks to Protect Their Wealth
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                For investors with seven- and eight-figure portfolios, the challenge isn't simply "making money." It's keeping it—across market cycles, tax law changes, geopolitical shifts, and multi-generational transitions.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <p className="text-lg leading-relaxed text-zinc-700">
                While many wealthy individuals hire individual advisors, a growing trend among ultra-high-net-worth families is <strong>joining private networks of vetted financial experts</strong>, rather than relying on a single firm or generalist wealth manager.
              </p>

              <p className="text-lg leading-relaxed text-zinc-700">
                These networks are not consumer-facing platforms or public investment groups. They operate quietly, connecting accomplished investors with specialists in areas like tax mitigation, estate restructuring, private markets, philanthropic trusts, and cross-border wealth strategy.
              </p>

              <p className="text-lg leading-relaxed text-zinc-700">
                This shift is driven by one simple reality:
              </p>

              {/* Callout Box */}
              <div className="my-10 rounded-lg border-l-4 border-[#C13741] bg-[#FEF2F3] p-6">
                <p className="text-lg font-semibold leading-relaxed text-[#1E3A5F]">
                  The wealth challenges of a $1M+ portfolio are fundamentally different from those of traditional retail investors—yet most advisors treat them the same.
                </p>
              </div>

              {/* Section 1 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                The Rising Complexity of Wealth Above $1M
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                Once an investor crosses the seven-figure threshold, common issues emerge:
              </p>

              <ul className="my-6 space-y-3 text-lg leading-relaxed text-zinc-700">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Estate structures become tax-exposed</strong>, especially after liquidity events.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Private equity and alternative investment access widens</strong>, but due diligence becomes critical.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Trusts and succession planning start affecting multiple generations.</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Regulatory oversight increases</strong>, and penalties for misfilings can quickly reach six figures.</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-zinc-700">
                At this level, wealth planning expands beyond returns and into <strong>strategy, governance, and risk insulation</strong>.
              </p>

              <p className="text-lg leading-relaxed text-zinc-700">
                That's why families increasingly seek <strong>collective wisdom from advisors who work exclusively with high-net-worth individuals</strong>, rather than generalist planners who manage mixed portfolios.
              </p>

              {/* Section 2 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                Why Elite Investors Are Turning to Shared-Intelligence Networks
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                Instead of relying on one advisor's worldview, these networks allow members to:
              </p>

              <ul className="my-6 space-y-3 text-lg leading-relaxed text-zinc-700">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Compare approaches across multiple top-tier experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Identify blind spots in tax, trusts, and asset protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Discover vetted opportunities outside public markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Receive insights normally reserved for private-bank clients</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-zinc-700">
                This model mirrors how family offices operate—except adapted for individuals managing between <strong>$1M and $25M</strong> who may not yet have full-time teams in-house.
              </p>

              {/* Pull Quote */}
              <blockquote className="my-10 border-l-4 border-[#C13741] pl-6 italic">
                <p className="text-2xl font-medium leading-relaxed text-[#1E3A5F]">
                  "It's not about replacing your advisor—it's about augmenting them with more sophisticated perspectives."
                </p>
              </blockquote>

              {/* Section 3 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                Why This Matters Now
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                Recent shifts in U.S. tax law, global markets, and inflation have made wealth more vulnerable than in previous decades.
              </p>

              <div className="my-10 rounded-lg border-l-4 border-[#C13741] bg-[#FEF2F3] p-6">
                <p className="text-lg font-semibold leading-relaxed text-[#1E3A5F]">
                  For affluent investors, the biggest financial risk is no longer market volatility—it's strategy gaps.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-zinc-700">
                Whether that's an overlooked trust clause, unhedged concentration, an LLC improperly structured, or a missing estate mechanism, high-impact mistakes often arise from a <strong>lack of specialist insight</strong> rather than a lack of capital.
              </p>

              {/* Section 4 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                A New Option for High-Net-Worth Individuals
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                One example of this emerging model is <strong>Advisor Giant</strong>, a private network designed specifically for investors with $1M+ in managed assets.
              </p>

              <p className="text-lg leading-relaxed text-zinc-700">
                Rather than acting as a brokerage or advisory firm, the network:
              </p>

              <ul className="my-6 space-y-3 text-lg leading-relaxed text-zinc-700">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Curates elite U.S. advisors with UHNW expertise</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Offers confidential strategic reviews</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Helps members identify risks and opportunities tailored to their wealth tier</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-zinc-700">
                It operates more like a <strong>community boardroom</strong> than a sales organization—members join to learn from experts, compare strategies, and connect with advisors who already serve sophisticated clients.
              </p>

              {/* Section 5 */}
              <h2 className="mt-12 mb-6 text-3xl font-bold tracking-tight text-[#1E3A5F]">
                How to Request Access
              </h2>

              <p className="text-lg leading-relaxed text-zinc-700">
                Membership is limited and reserved for investors with portfolios above <strong>$1M</strong>.
              </p>

              <p className="text-lg leading-relaxed text-zinc-700">
                If you'd like to be considered, you can submit a profile for review and a member of the advisory team will contact you privately.
              </p>

              {/* Final CTA Section */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] p-10 text-center shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Request Private Access
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Join a private network of high-net-worth investors and connect with elite financial advisors who specialize in sophisticated wealth management.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="/quiz"
                    className="w-full sm:w-auto rounded-lg bg-[#C13741] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#D94651] transition-colors"
                  >
                    Submit Profile for Review
                  </a>
                </div>
                <p className="mt-6 text-sm text-white/70">
                  Limited membership. Reserved for portfolios $1M+.
                </p>
              </div>
            </div>
          </article>

          {/* Right Sidebar - 1/3 width */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Quick Connect Form */}
              <AdvisorForm />

              {/* Trust Badge */}
              <div className="rounded-xl bg-[#F0F4F8] p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <svg className="h-12 w-12 text-[#1E3A5F]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1E3A5F]">Private & Confidential</h3>
                <p className="text-sm text-zinc-600">
                  All member information is kept strictly confidential
                </p>
              </div>

              {/* Info Box */}
              <div className="rounded-xl bg-white border-2 border-[#1E3A5F] p-6">
                <h3 className="mb-3 text-lg font-bold text-[#1E3A5F]">Who This Is For</h3>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Investors with $1M+ portfolios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Business owners planning exits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Families managing wealth transitions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Executives with stock compensation</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
