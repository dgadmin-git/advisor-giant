import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AdvisorForm from "@/app/components/AdvisorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feeling Lost? 4 Key Concerns When Choosing a Retirement Specialist",
  description: "Discover the four biggest retirement planning concerns and how a retirement specialist can help you navigate taxes, longevity, market volatility, and healthcare costs.",
  keywords: [
    "retirement planning",
    "retirement concerns",
    "tax planning retirement",
    "longevity risk",
    "market volatility",
    "healthcare costs",
    "retirement specialist",
    "retirement advisor"
  ],
  openGraph: {
    title: "Feeling Lost? 4 Key Concerns When Choosing a Retirement Specialist",
    description: "Discover the four biggest retirement planning concerns and how a retirement specialist can help you navigate taxes, longevity, market volatility, and healthcare costs.",
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
              <span className="text-zinc-900">4 Key Retirement Concerns</span>
            </nav>

            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Retirement Planning
                </span>
                <span>•</span>
                <time dateTime="2026-01-31">January 31, 2026</time>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                Feeling Lost? 4 Key Concerns When Choosing a Retirement Specialist
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                Discover the four biggest retirement planning concerns and how a retirement specialist can help you navigate taxes, longevity, market volatility, and healthcare costs.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Introduction</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Retirement is supposed to be the reward for decades of hard work. Yet for many people, the transition into retirement creates more anxiety than excitement. The questions pile up: Do I have enough? Will my money last? How do I minimize taxes? What about healthcare costs?
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                These aren't abstract worries. They're real concerns that can significantly impact your quality of life in retirement. And they're not something you should navigate alone.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                According to recent research, more than half of Americans report feeling stressed about their finances, and those concerns intensify as retirement approaches. The gap between what people have saved and what they think they'll need to retire comfortably continues to widen. For many, this creates a sense of uncertainty and fear.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The good news? You don't have to figure this out on your own. A retirement specialist can help you address these concerns and create a comprehensive plan that gives you confidence and peace of mind. In this article, we'll explore the four biggest retirement planning concerns and how working with a qualified retirement specialist can help you navigate each one.
              </p>

              {/* Four Key Concerns */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Four Key Retirement Planning Concerns</h2>

              <p className="text-lg mb-8 leading-relaxed text-zinc-700">
                When we talk to people about retirement, four concerns consistently emerge. These aren't unique to you—they're shared by millions of Americans approaching or already in retirement. Understanding these concerns is the first step toward addressing them.
              </p>

              <div className="space-y-12">
                {/* Concern 1: Taxes */}
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Concern #1: Avoiding Unnecessary Taxes in Retirement</h3>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    For many retirees, especially those with substantial assets, taxes represent one of the largest ongoing expenses. Yet many people don't realize how much they can reduce their tax burden through strategic planning.
                  </p>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Consider this scenario: You've worked hard and accumulated $1 million in retirement savings. You're now taking distributions to live on. Without tax-efficient planning, you might pay significantly more in federal and state taxes than necessary. Over a 20-year retirement, this could mean paying an extra $100,000, $200,000, or even more in taxes.
                  </p>

                  <p className="text-lg font-semibold text-[#1E3A5F] mb-3">How a Retirement Specialist Can Help:</p>
                  <ul className="space-y-2 text-lg text-zinc-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Sequence your withdrawals strategically (which accounts to withdraw from first)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Manage Roth conversions to reduce future tax liability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Time capital gains and losses strategically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Optimize Social Security claiming strategies to minimize taxation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Consider tax-advantaged charitable giving strategies</span>
                    </li>
                  </ul>
                </div>

                {/* Concern 2: Longevity */}
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Concern #2: Running Out of Money in Retirement</h3>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Perhaps the most fundamental retirement concern is longevity risk—the fear that you'll outlive your money. This concern is particularly acute given increasing life expectancies.
                  </p>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    According to the Social Security Administration, a 65-year-old man has approximately a 1 in 4 chance of living to age 90, while a 65-year-old woman has approximately a 1 in 3 chance. For couples, there's a roughly 50% chance that at least one spouse will live to age 90 or beyond.
                  </p>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    This means you might spend 25, 30, or even 35+ years in retirement. That's a long time to make your money last, especially when you factor in inflation and rising healthcare costs.
                  </p>

                  <p className="text-lg font-semibold text-[#1E3A5F] mb-3">How a Retirement Specialist Can Help:</p>
                  <ul className="space-y-2 text-lg text-zinc-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Analyze whether your current savings are sufficient for your desired retirement lifestyle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Create a withdrawal plan that balances current spending with long-term sustainability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Incorporate Social Security and pension income strategically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Use annuities or other guaranteed income sources to create a floor of income you can't outlive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Monitor your progress and make adjustments if needed</span>
                    </li>
                  </ul>
                </div>

                {/* Concern 3: Market Volatility */}
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Concern #3: Managing Market Volatility</h3>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    The stock market can be volatile, and that volatility can feel especially threatening when you're living off your investments in retirement.
                  </p>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    When you're working and saving, market downturns can actually be beneficial—you're buying investments at lower prices. But when you're retired and withdrawing money, a market downturn can be devastating. You're forced to sell investments at low prices to fund your living expenses, which can significantly deplete your portfolio.
                  </p>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    This phenomenon is called "sequence of returns risk," and it's one of the most significant risks retirees face.
                  </p>

                  <p className="text-lg font-semibold text-[#1E3A5F] mb-3">How a Retirement Specialist Can Help:</p>
                  <ul className="space-y-2 text-lg text-zinc-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Create an appropriate asset allocation based on your risk tolerance and time horizon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Diversify investments across different asset classes and sectors to reduce risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Systematically rebalance your portfolio to maintain your target allocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Help you avoid emotional decision-making during market downturns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Create a strategy that reduces your need to sell investments during market downturns</span>
                    </li>
                  </ul>
                </div>

                {/* Concern 4: Healthcare */}
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Concern #4: Planning for Healthcare and Medicare Costs</h3>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Healthcare is often one of the largest expenses in retirement, yet many people don't plan adequately for it.
                  </p>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    According to research, a 65-year-old couple retiring in 2024 can expect to spend approximately $315,000 on healthcare throughout their retirement (not including long-term care). That's a substantial sum that many people don't anticipate.
                  </p>

                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Beyond the cost, healthcare planning involves navigating complex decisions about Medicare, supplemental insurance, prescription drug coverage, and long-term care planning.
                  </p>

                  <p className="text-lg font-semibold text-[#1E3A5F] mb-3">How a Retirement Specialist Can Help:</p>
                  <ul className="space-y-2 text-lg text-zinc-700 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Help you understand Medicare options and choose the right coverage for your situation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Identify appropriate supplemental insurance to fill gaps in Medicare coverage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Help you understand prescription drug coverage options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Discuss long-term care risks and strategies to address them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Incorporate realistic healthcare costs into your retirement budget</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Interconnected Nature */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Interconnected Nature of Retirement Concerns</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                It's important to recognize that these four concerns don't exist in isolation. They're interconnected, and addressing one often affects the others.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Example: If you implement a tax-efficient withdrawal strategy that reduces your income, you might lower your Medicare premiums (IRMAA). This saves you money on healthcare costs, which means your portfolio needs to sustain fewer withdrawals, which reduces your exposure to market volatility.
              </p>

              <p className="text-lg leading-relaxed text-zinc-700">
                This is why working with a comprehensive retirement specialist is so valuable. They understand how these pieces fit together and can help you create an integrated plan that addresses all four concerns simultaneously.
              </p>

              {/* Callout Box */}
              <div className="my-10 rounded-lg border-l-4 border-[#C13741] bg-[#FEF2F3] p-6">
                <p className="text-lg font-semibold leading-relaxed text-[#1E3A5F]">
                  A comprehensive retirement specialist understands how taxes, longevity, market volatility, and healthcare costs are all interconnected—and can help you create an integrated plan that addresses all four concerns.
                </p>
              </div>

              {/* Comprehensive Plan */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">What a Comprehensive Retirement Plan Looks Like</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A comprehensive retirement plan addresses all four concerns and creates an integrated strategy. Here's what it typically includes:
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Income Planning</h3>
                  <ul className="space-y-2 text-lg text-zinc-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Analysis of Social Security claiming strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Pension optimization (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Withdrawal sequencing from various accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Tax-efficient distribution planning</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Investment Strategy</h3>
                  <ul className="space-y-2 text-lg text-zinc-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Asset allocation based on your risk tolerance and time horizon</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Diversification across asset classes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Rebalancing strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Risk management strategies</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Tax Planning</h3>
                  <ul className="space-y-2 text-lg text-zinc-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Tax-efficient withdrawal strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Roth conversion analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Charitable giving strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>State tax optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Healthcare Planning</h3>
                  <ul className="space-y-2 text-lg text-zinc-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Medicare optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Supplemental insurance analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Long-term care planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Healthcare cost budgeting</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Conclusion Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Conclusion</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Retirement should be a time to enjoy the fruits of your labor, not a time filled with financial anxiety. Yet many people approach retirement without a comprehensive plan to address the four key concerns: taxes, longevity, market volatility, and healthcare costs.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The good news is that you don't have to navigate these concerns alone. A qualified retirement specialist can help you create a comprehensive plan that addresses all four issues and gives you confidence that you're prepared for retirement.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Whether you're concerned about running out of money, paying too much in taxes, managing market volatility, or planning for healthcare costs, a retirement specialist can help. The key is to start the conversation now, before retirement or early in your retirement years.
              </p>

              {/* Final CTA Section */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] p-10 text-center shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Ready to address your retirement concerns?
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Connect with a retirement specialist through Advisor Giant today.
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
                  Advisor Giant is a matching service connecting consumers with independent financial professionals. Results may vary. This is not financial advice. The information provided in this article is for educational purposes only and should not be construed as specific financial advice or a recommendation to buy or sell any particular security. Always consult with qualified financial professionals before making financial decisions. Past performance does not guarantee future results. The examples and scenarios provided are for illustrative purposes only.
                </p>
              </div>

              {/* About the Author */}
              <div className="mt-8 rounded-lg bg-[#F0F4F8] p-6">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">About the Author</h3>
                <p className="text-sm leading-relaxed text-zinc-700">
                  Advisor Giant connects individuals with retirement specialists who understand tax-efficient strategies, income planning, and wealth preservation. Whether you're concerned about running out of money, managing taxes, or planning for healthcare costs, our network of verified specialists can help you create a comprehensive retirement plan. Learn more at AdvisorGiant.com.
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
                  <Link href="/blog/what-is-advisor-giant" className="block group">
                    <p className="text-sm font-semibold text-[#1E3A5F] group-hover:text-[#C13741] transition-colors">
                      What is Advisor Giant? →
                    </p>
                  </Link>
                  <Link href="/quiz" className="block group">
                    <p className="text-sm font-semibold text-[#1E3A5F] group-hover:text-[#C13741] transition-colors">
                      Find Your Perfect Financial Advisor →
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
