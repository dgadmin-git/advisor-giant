import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AdvisorForm from "@/app/components/AdvisorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life, Home, Auto: How to Compare Insurance Quotes and Save with Advisor Giant",
  description: "Learn how to compare insurance quotes for life, home, and auto insurance. Discover strategies to save money while getting the coverage you need.",
  keywords: [
    "insurance quotes",
    "life insurance",
    "home insurance",
    "auto insurance",
    "compare insurance",
    "insurance savings",
    "insurance specialist",
    "best insurance rates"
  ],
  openGraph: {
    title: "Life, Home, Auto: How to Compare Insurance Quotes and Save with Advisor Giant",
    description: "Learn how to compare insurance quotes for life, home, and auto insurance. Discover strategies to save money while getting the coverage you need.",
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
              <span className="text-zinc-900">Compare Insurance Quotes</span>
            </nav>

            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Insurance
                </span>
                <span>•</span>
                <time dateTime="2026-01-31">January 31, 2026</time>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                Life, Home, Auto: How to Compare Insurance Quotes and Save with Advisor Giant
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                Learn how to compare insurance quotes for life, home, and auto insurance. Discover strategies to save money while getting the coverage you need.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Introduction</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Insurance is one of those financial necessities that most people don't enjoy thinking about. It feels like money going out without anything tangible coming back—until you actually need it. Yet insurance is one of the most important financial protection tools available to you.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The challenge? Navigating the insurance landscape is complicated. There are dozens of insurance companies, hundreds of coverage options, and countless variables that affect your premiums. How do you know if you're getting the best rates? How do you ensure you have adequate coverage? And how do you avoid overpaying for insurance you don't need?
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Many people simply stick with their current insurance provider because the process of comparing alternatives feels overwhelming. But this approach can cost you thousands of dollars over your lifetime. Studies show that people who shop around for insurance can save 10-40% on their premiums, depending on the type of insurance and their circumstances.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                In this article, we'll explore the different types of insurance, how to compare quotes effectively, and how to ensure you're getting the best coverage at the best price.
              </p>

              {/* Four Main Types */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Four Main Types of Insurance You Need to Consider</h2>

              <p className="text-lg mb-8 leading-relaxed text-zinc-700">
                Most people need to think about four primary types of insurance: life, home, auto, and health. Let's break down each one and why it matters.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">1. Life Insurance: Protecting Your Family's Financial Future</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Life insurance provides a financial safety net for your loved ones if you pass away. It's designed to replace your income and help your family cover expenses like mortgage payments, education costs, and daily living expenses.
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    If you have dependents—a spouse, children, or others who rely on your income—life insurance is essential. Without it, your family could face serious financial hardship if something happens to you.
                  </p>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Types of Life Insurance:</p>
                  <ul className="space-y-2 text-lg text-zinc-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Term Life Insurance:</strong> Provides coverage for a specific period (10, 20, or 30 years). It's typically the most affordable option.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Whole Life Insurance:</strong> Provides lifetime coverage and includes a cash value component.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Universal Life Insurance:</strong> Offers flexibility in premiums and death benefits.</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">2. Home Insurance: Protecting Your Biggest Asset</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Home insurance protects your house and belongings against damage from fire, theft, weather, and other covered events. It also provides liability protection if someone is injured on your property.
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Your home is likely your largest asset. Without adequate insurance, a major loss could be financially devastating. Additionally, if you have a mortgage, your lender requires you to carry home insurance.
                  </p>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">What Home Insurance Covers:</p>
                  <ul className="space-y-2 text-lg text-zinc-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Dwelling Coverage:</strong> Covers the structure of your home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Personal Property Coverage:</strong> Covers your belongings inside the home</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Liability Coverage:</strong> Protects you if someone is injured on your property</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Additional Living Expenses:</strong> Covers temporary housing if your home is uninhabitable</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">3. Auto Insurance: Required by Law</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Auto insurance is required by law in virtually every state. It provides protection if you're in an accident, and it protects you against liability if you cause damage to someone else's vehicle or property.
                  </p>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Types of Auto Insurance Coverage:</p>
                  <ul className="space-y-2 text-lg text-zinc-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Liability Coverage:</strong> Covers damage you cause to others (required by law)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Collision Coverage:</strong> Covers damage to your car from collisions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Comprehensive Coverage:</strong> Covers damage from non-collision events (theft, weather, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span><strong>Uninsured/Underinsured Motorist Coverage:</strong> Protects you if hit by an uninsured driver</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">4. Health Insurance: Protecting Against Medical Costs</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    While health insurance is primarily about healthcare access, it also protects you financially against catastrophic medical costs. Medical emergencies can be financially devastating, and health insurance helps protect you against these costs.
                  </p>
                </div>
              </div>

              {/* Hidden Costs */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Hidden Costs of Not Shopping Around for Insurance</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Many people don't realize how much they could save by shopping around for insurance. Let's look at some real-world examples:
              </p>

              <div className="my-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">$3,600</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Life Insurance Savings</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Over 20 years by shopping around
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">$3,000</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Home Insurance Savings</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Over 10 years by comparing quotes
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">$5,000</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Auto Insurance Savings</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Over 10 years by adjusting coverage
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6 ring-1 ring-[#1E3A5F]/10">
                  <div className="mb-3 text-3xl font-bold text-[#C13741]">$11,600+</div>
                  <div className="text-base font-medium text-[#1E3A5F]">Total Potential Savings</div>
                  <div className="mt-2 text-sm text-zinc-600">
                    Over 10 years across all insurance
                  </div>
                </div>
              </div>

              {/* How to Compare */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">How to Compare Insurance Quotes Effectively</h2>

              <p className="text-lg mb-8 leading-relaxed text-zinc-700">
                Comparing insurance quotes can be time-consuming, but it's worth the effort. Here's how to do it effectively:
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-white">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Determine Your Coverage Needs</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Before comparing quotes, you need to know what coverage you need. Calculate based on your income, debts, and family needs for life insurance. Determine the replacement cost of your home and the value of your belongings for home insurance. Check your state's minimum requirements and consider your vehicle's value for auto insurance.
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
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Get Multiple Quotes</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Don't just get one or two quotes. Get quotes from at least 3-5 different companies. This gives you a good sense of the market and helps you identify the best deals. You can visit company websites directly, work with insurance brokers, use online comparison tools, or contact independent agents.
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
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Compare Apples to Apples</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        When comparing quotes, make sure you're comparing the same coverage levels. Ensure the liability limits are the same, note the deductible amounts, check what's not covered, look for available discounts, and check customer service ratings.
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
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Look for Discounts</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Insurance companies offer numerous discounts that can significantly reduce your premiums. Look for multi-policy discounts, safe driver discounts, good student discounts, home security system discounts, and more. Always ask about available discounts.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-white">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Review and Adjust</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Once you've compared quotes and identified the best options, review your coverage one more time to ensure it meets your needs. Don't sacrifice necessary coverage just to save money, but also don't overpay for coverage you don't need.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Common Mistakes */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Common Insurance Mistakes to Avoid</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Choosing Coverage Based Solely on Price</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      The cheapest option isn't always the best. Consider the company's reputation, customer service, and claims handling process.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Not Reviewing Your Coverage Regularly</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Your insurance needs change over time. Review your coverage annually and after major life events to ensure you still have appropriate coverage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Ignoring Bundling Opportunities</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Many insurance companies offer significant discounts if you bundle multiple policies. Bundling can save 10-25% on your premiums.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Not Taking Advantage of Available Discounts</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Insurance companies offer numerous discounts, but you often have to ask for them. Review available discounts and take advantage of any that apply to you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Callout Box */}
              <div className="my-10 rounded-lg border-l-4 border-[#C13741] bg-[#FEF2F3] p-6">
                <p className="text-lg font-semibold leading-relaxed text-[#1E3A5F]">
                  People who shop around for insurance can save 10-40% on their premiums. Don't leave money on the table—compare quotes today.
                </p>
              </div>

              {/* Conclusion Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Conclusion</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Insurance is an essential part of your financial protection strategy. Whether you're shopping for life, home, or auto insurance, taking the time to compare quotes and ensure you have adequate coverage is worth the effort.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                By shopping around, taking advantage of discounts, and working with a qualified insurance specialist, you can ensure you have the coverage you need at a price you can afford. And that peace of mind—knowing you're protected against financial risks—is invaluable.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Don't let insurance be an afterthought. Take action today to review your coverage, compare quotes, and ensure you're getting the best deal. Your financial security depends on it.
              </p>

              {/* Final CTA Section */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] p-10 text-center shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Ready to find the right insurance coverage at the best price?
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Connect with an insurance specialist through Advisor Giant today.
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
                  Advisor Giant is a matching service connecting consumers with independent insurance professionals. Results may vary. This is not insurance advice. The information provided in this article is for educational purposes only and should not be construed as specific insurance recommendations. Insurance requirements and options vary by state and individual circumstances. Always consult with qualified insurance professionals before making insurance decisions. The examples and scenarios provided are for illustrative purposes only and do not guarantee specific savings or coverage.
                </p>
              </div>

              {/* About the Author */}
              <div className="mt-8 rounded-lg bg-[#F0F4F8] p-6">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">About the Author</h3>
                <p className="text-sm leading-relaxed text-zinc-700">
                  Advisor Giant connects individuals with insurance specialists who can help them compare quotes, find adequate coverage, and save money on life, home, and auto insurance. Whether you're shopping for insurance for the first time or looking to optimize your current coverage, our network of verified specialists can help. Learn more at AdvisorGiant.com.
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
