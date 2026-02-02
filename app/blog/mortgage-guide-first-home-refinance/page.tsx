import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AdvisorForm from "@/app/components/AdvisorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "First Home or Refinance? Navigating the Mortgage Maze with a Trusted Specialist",
  description: "Learn how to navigate the mortgage process, from securing a new loan to refinancing. Discover strategies to find competitive rates and work with a trusted mortgage specialist.",
  keywords: [
    "mortgage guide",
    "first home buyer",
    "mortgage refinance",
    "mortgage rates",
    "home loan",
    "mortgage specialist",
    "mortgage process",
    "best mortgage rates"
  ],
  openGraph: {
    title: "First Home or Refinance? Navigating the Mortgage Maze with a Trusted Specialist",
    description: "Learn how to navigate the mortgage process, from securing a new loan to refinancing. Discover strategies to find competitive rates and work with a trusted mortgage specialist.",
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
              <span className="text-zinc-900">Mortgage Guide</span>
            </nav>

            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Mortgages
                </span>
                <span>•</span>
                <time dateTime="2026-01-31">January 31, 2026</time>
                <span>•</span>
                <span>9 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                First Home or Refinance? Navigating the Mortgage Maze with a Trusted Specialist
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                Learn how to navigate the mortgage process, from securing a new loan to refinancing. Discover strategies to find competitive rates and work with a trusted mortgage specialist.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Introduction</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                For most people, buying a home is the largest financial decision they'll ever make. And for many, refinancing an existing mortgage is a close second. Yet despite the significance of these decisions, many people approach mortgages with limited knowledge and no professional guidance.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The result? They often pay more than they need to. Studies show that homeowners who shop around for mortgages can save thousands of dollars over the life of their loan. Similarly, homeowners who refinance at the right time can save tens of thousands of dollars. Yet many people never shop around—they simply accept the first offer they receive or stick with their current lender.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The mortgage landscape is complex. There are dozens of loan types, countless variables that affect your rate, and numerous fees and costs to navigate. How do you know if you're getting the best rate? How do you understand all the options? And how do you avoid costly mistakes?
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                In this article, we'll explore the mortgage process, help you understand your options, and show you how to navigate the mortgage maze to get the best deal possible.
              </p>

              {/* Understanding Basics */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Understanding the Mortgage Basics</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Before diving into the specifics of getting a mortgage, let's cover the fundamentals.
              </p>

              <p className="text-lg mb-4 leading-relaxed text-zinc-700">
                A mortgage is a loan used to purchase real estate. The property itself serves as collateral for the loan, which means if you fail to pay the loan, the lender can foreclose on the property and sell it to recover their money.
              </p>

              <p className="text-lg font-semibold text-[#1E3A5F] mb-3">A mortgage typically includes:</p>
              <ul className="space-y-2 text-lg text-zinc-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Principal:</strong> The amount you borrow</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Interest:</strong> The cost of borrowing the money</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Taxes:</strong> Property taxes (often included in your monthly payment)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Insurance:</strong> Homeowners insurance and potentially mortgage insurance (often included in your monthly payment)</span>
                </li>
              </ul>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Together, these components make up your monthly mortgage payment, often referred to as PITI (Principal, Interest, Taxes, and Insurance).
              </p>

              {/* Types of Mortgages */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Types of Mortgages: Finding the Right Fit</h2>

              <p className="text-lg mb-8 leading-relaxed text-zinc-700">
                There are several types of mortgages available, each with different characteristics. Understanding the differences will help you choose the right one for your situation.
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Fixed-Rate Mortgages</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    A fixed-rate mortgage has an interest rate that remains the same throughout the life of the loan.
                  </p>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Advantages:</p>
                  <ul className="space-y-1 text-lg text-zinc-700 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Predictable monthly payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Protection against rising interest rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Easier to budget and plan for the future</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Best For:</p>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Borrowers who plan to stay in the home for a long time, those who want payment predictability, and those who expect interest rates to rise.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Adjustable-Rate Mortgages (ARMs)</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    An adjustable-rate mortgage has an interest rate that changes over time, typically starting with a lower initial rate that adjusts periodically.
                  </p>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Advantages:</p>
                  <ul className="space-y-1 text-lg text-zinc-700 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Lower initial interest rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Lower initial monthly payments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Good if you plan to sell or refinance before rates adjust</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Best For:</p>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Borrowers who plan to sell or refinance within a few years, those who can afford potential payment increases, and those who expect interest rates to fall.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">FHA Loans</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    FHA (Federal Housing Administration) loans are government-backed mortgages designed to help borrowers with lower credit scores or smaller down payments.
                  </p>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Advantages:</p>
                  <ul className="space-y-1 text-lg text-zinc-700 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Lower down payment requirements (as low as 3.5%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>More lenient credit requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Lower interest rates than conventional loans for some borrowers</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Best For:</p>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    First-time homebuyers, borrowers with lower credit scores, and those with limited down payment savings.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">VA Loans</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    VA (Veterans Affairs) loans are available to eligible veterans and active-duty service members.
                  </p>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Advantages:</p>
                  <ul className="space-y-1 text-lg text-zinc-700 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>No down payment required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>No mortgage insurance required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C13741] mt-1">•</span>
                      <span>Competitive interest rates</span>
                    </li>
                  </ul>
                  <p className="text-lg font-semibold text-[#1E3A5F] mb-2">Best For:</p>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Eligible veterans and active-duty service members.
                  </p>
                </div>
              </div>

              {/* The Mortgage Process */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Mortgage Process: Step by Step</h2>

              <p className="text-lg mb-8 leading-relaxed text-zinc-700">
                Whether you're buying a home for the first time or refinancing an existing mortgage, understanding the process will help you navigate it successfully.
              </p>

              <div className="space-y-6">
                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1E3A5F] flex-shrink-0 mt-1">
                      <span className="text-sm font-bold text-white">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Get Pre-Approved</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Before you start shopping for a home, get pre-approved for a mortgage. Pre-approval involves providing financial information to a lender, who then determines how much you can borrow. This shows sellers you're a serious buyer, helps you understand your budget, speeds up the closing process, and doesn't commit you to a specific lender.
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
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Shop for Rates and Terms</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Don't just accept the first mortgage offer you receive. Shop around with multiple lenders to compare rates and terms. Get quotes from at least 3-5 different lenders. This gives you a good sense of the market and helps you identify the best deals. Compare interest rates, APR (which includes fees), loan terms, closing costs, and discount points.
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
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Lock Your Rate</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        Once you've chosen a lender and found a rate you like, lock in that rate. A rate lock guarantees that your interest rate won't change for a specified period (typically 30-60 days). This protects you if rates rise before closing and gives you certainty about your monthly payment.
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
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Get a Home Appraisal</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        The lender will order an appraisal to ensure the home's value supports the loan amount. You typically pay for this appraisal. The appraisal typically costs $300-$500, takes 1-2 weeks, and the appraiser evaluates the home's condition and compares it to similar properties.
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
                      <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Closing</h3>
                      <p className="text-lg leading-relaxed text-zinc-700">
                        At closing, you'll sign all final documents, provide your down payment, and receive the keys to your new home. This typically takes 1-2 hours. Bring valid ID, proof of homeowners insurance, and a cashier's check or wire transfer for down payment and closing costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Refinancing */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Refinancing: When and How</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Refinancing involves paying off your existing mortgage with a new mortgage, typically with different terms or a lower interest rate.
              </p>

              <p className="text-lg font-semibold text-[#1E3A5F] mb-3">When to Consider Refinancing:</p>
              <ul className="space-y-3 text-lg text-zinc-700 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Lower Interest Rates:</strong> If interest rates have dropped since you got your mortgage, refinancing could lower your monthly payment and total interest paid.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Shorter Loan Term:</strong> If you want to pay off your mortgage faster, refinancing to a shorter term (e.g., from 30 years to 15 years) could help.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Switching Loan Types:</strong> If you have an ARM and want to switch to a fixed-rate mortgage before rates adjust, refinancing is an option.</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span><strong>Cash-Out Refinance:</strong> If you've built equity in your home, you can refinance for more than you owe and use the extra cash for home improvements, debt consolidation, or other purposes.</span>
                </li>
              </ul>

              {/* How to Get Best Rate */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">How to Get the Best Mortgage Rate</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Your mortgage rate is the most important factor in determining your monthly payment and total cost. Here's how to get the best rate:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Improve Your Credit Score</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Your credit score is one of the biggest factors affecting your interest rate. A higher score gets better rates. Pay bills on time, reduce credit card balances, don't close old credit accounts, and limit new credit inquiries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Shop Around</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Don't accept the first rate you're offered. Get quotes from multiple lenders and compare. Get at least 3-5 quotes. Multiple inquiries within a short period (typically 45 days) count as a single inquiry for credit scoring purposes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Increase Your Down Payment</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      A larger down payment means a smaller loan, which typically results in a better interest rate. Additionally, a down payment of 20% or more eliminates the need for PMI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Work with a Mortgage Specialist</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      A mortgage specialist can help you navigate options, compare rates, and find the best deal for your situation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Common Mistakes */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Common Mortgage Mistakes to Avoid</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Not Shopping Around</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Many people accept the first mortgage offer they receive. Shopping around can save you tens of thousands of dollars.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Focusing Only on Interest Rate</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      While interest rate is important, also consider APR (which includes fees), loan terms, and other factors.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Making Large Purchases Before Closing</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Large purchases can affect your credit score and debt-to-income ratio, potentially affecting your mortgage approval or rate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Not Getting a Home Inspection</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      While not required, a home inspection can reveal problems that could cost thousands to fix.
                    </p>
                  </div>
                </div>
              </div>

              {/* Callout Box */}
              <div className="my-10 rounded-lg border-l-4 border-[#C13741] bg-[#FEF2F3] p-6">
                <p className="text-lg font-semibold leading-relaxed text-[#1E3A5F]">
                  Homeowners who shop around for mortgages can save thousands of dollars over the life of their loan. Don't settle for the first offer you receive.
                </p>
              </div>

              {/* Conclusion Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Conclusion</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Whether you're buying your first home or refinancing an existing mortgage, the process can feel overwhelming. But with the right information and professional guidance, you can navigate it successfully and get the best mortgage for your situation.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The key is to shop around, understand your options, and avoid common mistakes. By taking the time to compare rates, understand terms, and work with a qualified mortgage specialist, you can save thousands of dollars over the life of your mortgage.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Your home is likely your largest asset and your mortgage is likely your largest debt. It's worth taking the time to get it right.
              </p>

              {/* Final CTA Section */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] p-10 text-center shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Ready to navigate the mortgage process with confidence?
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Connect with a mortgage specialist through Advisor Giant today.
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
                  Advisor Giant is a matching service connecting consumers with independent mortgage professionals. Results may vary. This is not mortgage or financial advice. The information provided in this article is for educational purposes only and should not be construed as specific mortgage recommendations. Mortgage rates, terms, and availability vary based on individual circumstances, credit scores, and market conditions. Always consult with qualified mortgage professionals before making mortgage decisions. The examples and scenarios provided are for illustrative purposes only and do not guarantee specific rates or savings.
                </p>
              </div>

              {/* About the Author */}
              <div className="mt-8 rounded-lg bg-[#F0F4F8] p-6">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">About the Author</h3>
                <p className="text-sm leading-relaxed text-zinc-700">
                  Advisor Giant connects individuals with mortgage specialists who can help them navigate the mortgage process, compare rates, and find the best loan for their situation. Whether you're a first-time homebuyer, looking to refinance, or exploring different mortgage options, our network of verified specialists can help. Learn more at AdvisorGiant.com.
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
