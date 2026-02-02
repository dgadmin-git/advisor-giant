import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AdvisorForm from "@/app/components/AdvisorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What is Advisor Giant? Your Guide to Finding Verified Financial Specialists",
  description: "Discover how Advisor Giant connects you with verified financial specialists across retirement, insurance, mortgages, and more. Find the right expert in minutes.",
  keywords: [
    "Advisor Giant",
    "financial specialists",
    "retirement planning",
    "insurance advisors",
    "mortgage specialists",
    "financial advisors",
    "verified financial professionals",
    "financial matching service"
  ],
  openGraph: {
    title: "What is Advisor Giant? Your Guide to Finding Verified Financial Specialists",
    description: "Discover how Advisor Giant connects you with verified financial specialists across retirement, insurance, mortgages, and more. Find the right expert in minutes.",
    type: "article",
    publishedTime: "2026-01-31T00:00:00.000Z",
  },
};

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Main Content with Sidebar Layout */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Article Content - 2/3 width */}
          <article className="lg:col-span-2">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-zinc-600">
              <Link href="/" className="hover:text-[#C13741] transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-[#C13741] transition-colors">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-zinc-900">What is Advisor Giant?</span>
            </nav>

            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Getting Started
                </span>
                <span>•</span>
                <time dateTime="2026-01-31">January 31, 2026</time>
                <span>•</span>
                <span>6 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                What is Advisor Giant? Your Guide to Finding Verified Financial Specialists
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                Discover how Advisor Giant connects you with verified financial specialists across retirement, insurance, mortgages, and more. Find the right expert in minutes.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Introduction</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Financial decisions can feel overwhelming. Whether you're planning for retirement, shopping for insurance, looking to refinance your home, or trying to grow your investments, the choices seem endless. And the stakes are high—these decisions directly impact your financial security and future.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The problem? Finding the right financial professional to guide you through these decisions is often just as challenging as the decisions themselves. How do you know which advisor to trust? Where do you even start looking? And how can you be sure they have your best interests in mind?
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                This is where Advisor Giant comes in. Advisor Giant is a comprehensive financial matching platform designed to simplify the process of finding verified financial specialists across multiple service categories. Instead of spending hours researching advisors, comparing credentials, and making cold calls, Advisor Giant connects you with qualified professionals who match your specific needs—in as little as 48 hours.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                In this guide, we'll explore what Advisor Giant is, how it works, and why thousands of satisfied clients nationwide have chosen it as their trusted resource for finding financial expertise.
              </p>

              {/* What is Advisor Giant Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">What is Advisor Giant?</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Advisor Giant is a financial matching service that bridges the gap between consumers seeking financial guidance and independent financial professionals offering specialized expertise. Think of it as a vetted marketplace where you can find the right financial specialist for virtually any financial need.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Rather than operating as a financial advisory firm itself, Advisor Giant functions as a trusted intermediary. The platform maintains a network of over 500 verified specialists across eight distinct financial service categories. These professionals have been carefully vetted to ensure they meet high standards of expertise, credibility, and client service.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The company's mission is straightforward: to make finding qualified financial guidance accessible, efficient, and trustworthy for everyone. Whether you're a first-time homebuyer, a business owner, someone approaching retirement, or an investor seeking to optimize your portfolio, Advisor Giant has a specialist ready to help.
              </p>

              {/* Key Statistics Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Key Statistics That Speak to Advisor Giant's Success</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The platform's track record demonstrates its effectiveness:
              </p>

              <div className="my-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">10,000+</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Successful Matches</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Between clients and specialists
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">500+</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Verified Specialists</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Across multiple financial disciplines
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">4.8/5</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Average Rating</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    High client satisfaction
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">48 Hours</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Average Match Time</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Get connected quickly
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-zinc-700">
                These numbers aren't just impressive—they reflect a platform that consistently delivers on its promise to connect people with the right financial professional.
              </p>

              {/* Eight Service Categories */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Eight Service Categories Advisor Giant Offers</h2>

              <p className="text-lg mb-8 leading-relaxed text-zinc-700">
                Advisor Giant's comprehensive approach means you can find specialists across multiple financial areas. Here's an overview of the eight main service categories:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">1. Retirement Planning</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Retirement is one of life's most significant financial milestones, and it requires careful planning. Advisor Giant connects you with retirement specialists who understand tax-efficient strategies, income planning, and wealth preservation. Whether you're concerned about running out of money, managing market volatility, avoiding unnecessary taxes, or planning for healthcare costs, a retirement specialist can help you create a comprehensive strategy.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">2. Insurance</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Insurance protects your financial security against unexpected events. Advisor Giant helps you compare quotes and find coverage for life insurance, Medicare, auto insurance, and home insurance. Rather than contacting multiple insurers individually, you can leverage Advisor Giant's network to find competitive rates and the right coverage for your situation.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">3. Mortgages</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Whether you're purchasing your first home, buying an investment property, or refinancing an existing loan, mortgage specialists on the Advisor Giant platform can help you navigate the process. They can assist with conventional mortgages, VA loans, FHA loans, and refinancing options to help you secure competitive rates.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">4. Financial Advisors</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    For comprehensive wealth management and financial planning, Advisor Giant connects you with fiduciary advisors who are legally obligated to act in your best interest. These specialists can help with portfolio management, investment strategy, and overall financial planning tailored to your goals and risk tolerance.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">5. Investing</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Whether you're considering an IRA rollover, opening a brokerage account, exploring alternative investments, or seeking guidance from an investment advisor, Advisor Giant can match you with an investing specialist. These professionals can help you build and manage an investment strategy aligned with your financial objectives.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">6. Banking</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Finding the right banking products can help you maximize your returns on savings. Advisor Giant connects you with banking specialists who can help you compare high-yield savings accounts, certificates of deposit (CDs), checking accounts, and business banking options to find the best rates and features for your needs.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">7. Tax Planning</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Strategic tax planning can significantly impact your financial bottom line. Advisor Giant connects you with CPAs and tax advisors who can help with tax preparation and, more importantly, proactive tax planning strategies to minimize your tax liability and keep more of your money.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">8. Business Services</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Entrepreneurs and small business owners have unique financial needs. Advisor Giant helps business owners find specialists who can assist with business loans, business insurance, financial advisory services, and other financial solutions to support business growth and stability.
                  </p>
                </div>
              </div>

              {/* How It Works Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">How Advisor Giant Works: A Simple Four-Step Process</h2>

              <p className="text-lg mb-8 leading-relaxed text-zinc-700">
                The beauty of Advisor Giant lies in its simplicity. The process is designed to be straightforward and efficient:
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-white">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Identify Your Need</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Start by selecting the financial service category that matches your current need. Are you planning for retirement? Shopping for insurance? Looking for a mortgage? Each category has its own entry point on the platform.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-white">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Share Your Specific Concern</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Once you've selected a category, you'll provide more details about your specific situation. For example, if you're interested in retirement planning, you might indicate whether your primary concern is avoiding unnecessary taxes in retirement, ensuring you don't run out of money, managing market volatility, or planning for healthcare costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-white">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Get Matched with Specialists</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Advisor Giant's matching algorithm considers your needs, location, and preferences to identify the best-fit specialists from its network. The platform prioritizes specialists with relevant expertise and strong track records of client satisfaction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-white">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Connect and Consult</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Within 48 hours on average, you'll be connected with your matched specialist. You can then discuss your financial situation, goals, and concerns directly with the professional. This is your opportunity to ask questions, understand their approach, and determine if they're the right fit for your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Why Choose Advisor Giant? The Key Benefits</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Access to Verified Specialists</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Not all financial professionals are created equal. Advisor Giant's vetting process ensures that every specialist on the platform meets rigorous standards for credentials, experience, and client service. You can feel confident that you're working with a qualified professional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Time Savings</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Finding the right financial advisor traditionally requires significant research, multiple phone calls, and numerous consultations. Advisor Giant streamlines this process, connecting you with pre-screened specialists in as little as 48 hours. This means less time spent searching and more time spent actually addressing your financial needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Comprehensive Coverage</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Rather than needing to find different specialists for different financial needs, Advisor Giant offers a one-stop resource. Whether you need help with retirement planning, insurance, mortgages, or investing, you can access specialists across all these areas through a single platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Transparent Ratings and Reviews</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      The platform features a 4.8/5 average rating based on thousands of client reviews. These ratings provide transparency and help you understand what to expect from specialists before you connect with them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Personalized Matching</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Rather than a generic directory where you browse profiles, Advisor Giant uses a matching process that considers your specific situation and needs. This personalized approach increases the likelihood that you'll be connected with a specialist who truly understands your financial circumstances and goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">No Obligation</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Connecting with a specialist through Advisor Giant doesn't obligate you to hire them. It's an opportunity to have a consultation, ask questions, and determine if they're the right fit for your needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Who Should Use Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Who Should Use Advisor Giant?</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Advisor Giant is designed for anyone seeking professional financial guidance. This includes:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Individuals approaching retirement who need help with tax-efficient strategies and income planning</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Homebuyers and homeowners seeking competitive mortgage rates and refinancing options</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Business owners needing financial advice and business services</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Investors looking to optimize their investment strategy</span>
                </li>
              </ul>

              <p className="text-lg leading-relaxed text-zinc-700">
                In essence, if you have a financial need and want to find a qualified specialist to help address it, Advisor Giant is designed for you.
              </p>

              {/* Callout Box */}
              <div className="my-10 rounded-lg border-l-4 border-[#C13741] bg-[#FEF2F3] p-6">
                <p className="text-lg font-semibold leading-relaxed text-[#1E3A5F]">
                  With over 10,000 successful matches and a 4.8/5 average rating, Advisor Giant has earned the trust of thousands of satisfied clients nationwide.
                </p>
              </div>

              {/* Conclusion Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Conclusion</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Financial decisions don't have to be overwhelming. With Advisor Giant, you have access to a vetted network of over 500 verified specialists across eight financial service categories. Whether you're planning for retirement, shopping for insurance, seeking a mortgage, or looking for comprehensive financial advice, Advisor Giant connects you with the right professional—quickly and efficiently.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The platform's track record speaks for itself: 10,000+ successful matches, 500+ verified specialists, a 4.8/5 average rating, and an average match time of just 48 hours. These numbers reflect a genuine commitment to helping people find the financial guidance they need.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Your financial security and future matter. Don't leave them to chance. Let Advisor Giant help you find the verified specialist who can guide you toward your financial goals.
              </p>

              {/* Final CTA Section */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] p-10 text-center shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Ready to get started?
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Visit Advisor Giant today and find your next financial specialist in minutes.
                </p>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C13741] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#D94651] transition-colors"
                >
                  Get Started Now
                </Link>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Disclaimer</h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Advisor Giant is a matching service connecting consumers with independent financial professionals. Results may vary. This is not financial advice. Always consult with qualified financial professionals before making financial decisions. The information provided in this article is for educational purposes only and should not be construed as specific financial advice or a recommendation to buy or sell any particular security.
                </p>
              </div>

              {/* About the Author */}
              <div className="mt-8 rounded-lg bg-[#F0F4F8] p-6">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">About the Author</h3>
                <p className="text-sm leading-relaxed text-zinc-700">
                  Advisor Giant helps thousands of people find the right financial specialist for their needs. Whether you're planning for retirement, shopping for insurance, or seeking comprehensive financial advice, our platform connects you with verified professionals across eight financial service categories. Learn more at AdvisorGiant.com.
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
                <h3 className="mb-2 text-lg font-bold text-[#1E3A5F]">Trusted by Thousands</h3>
                <p className="text-sm text-zinc-600">
                  Join thousands of satisfied clients who found their perfect financial specialist
                </p>
              </div>

              {/* Info Box */}
              <div className="rounded-xl bg-white border-2 border-[#1E3A5F] p-6">
                <h3 className="mb-3 text-lg font-bold text-[#1E3A5F]">What You Get</h3>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Verified financial specialists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>48-hour average match time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>No obligation consultations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>8 service categories available</span>
                  </li>
                </ul>
              </div>

              {/* Related Articles */}
              <div className="rounded-xl bg-zinc-50 p-6 border border-zinc-200">
                <h3 className="mb-4 text-lg font-bold text-[#1E3A5F]">Related Articles</h3>
                <div className="space-y-3">
                  <Link href="/quiz" className="block group">
                    <p className="text-sm font-semibold text-[#1E3A5F] group-hover:text-[#C13741] transition-colors">
                      Find Your Perfect Financial Advisor →
                    </p>
                  </Link>
                  <Link href="/" className="block group">
                    <p className="text-sm font-semibold text-[#1E3A5F] group-hover:text-[#C13741] transition-colors">
                      Retirement Planning Services →
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
