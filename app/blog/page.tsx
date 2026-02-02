import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Financial Planning Insights | Advisor Giant",
  description: "Expert insights on retirement planning, insurance, investing, and financial advice. Learn from verified financial specialists.",
  keywords: [
    "financial planning blog",
    "retirement planning tips",
    "investment advice",
    "insurance guides",
    "financial education",
    "wealth management insights"
  ],
};

const blogPosts = [
  {
    id: 1,
    title: "What is Advisor Giant? Your Guide to Finding Verified Financial Specialists",
    slug: "what-is-advisor-giant",
    excerpt: "Discover how Advisor Giant connects you with verified financial specialists across retirement, insurance, mortgages, and more. Find the right expert in minutes.",
    date: "January 31, 2026",
    readTime: "6 min read",
    category: "Getting Started",
  },
  {
    id: 2,
    title: "The Vetting Process: How Advisor Giant Ensures You Connect with Verified Financial Specialists",
    slug: "vetting-process-verified-specialists",
    excerpt: "Learn how Advisor Giant vets financial specialists. Discover the rigorous standards and verification processes that ensure you work with trusted, qualified professionals.",
    date: "January 31, 2026",
    readTime: "7 min read",
    category: "Trust & Security",
  },
  {
    id: 3,
    title: "Feeling Lost? 4 Key Concerns When Choosing a Retirement Specialist",
    slug: "retirement-planning-key-concerns",
    excerpt: "Discover the four biggest retirement planning concerns and how a retirement specialist can help you navigate taxes, longevity, market volatility, and healthcare costs.",
    date: "January 31, 2026",
    readTime: "8 min read",
    category: "Retirement Planning",
  },
  {
    id: 4,
    title: "Life, Home, Auto: How to Compare Insurance Quotes and Save with Advisor Giant",
    slug: "compare-insurance-quotes-save-money",
    excerpt: "Learn how to compare insurance quotes for life, home, and auto insurance. Discover strategies to save money while getting the coverage you need.",
    date: "January 31, 2026",
    readTime: "8 min read",
    category: "Insurance",
  },
  {
    id: 5,
    title: "First Home or Refinance? Navigating the Mortgage Maze with a Trusted Specialist",
    slug: "mortgage-guide-first-home-refinance",
    excerpt: "Learn how to navigate the mortgage process, from securing a new loan to refinancing. Discover strategies to find competitive rates and work with a trusted mortgage specialist.",
    date: "January 31, 2026",
    readTime: "9 min read",
    category: "Mortgages",
  },
  {
    id: 6,
    title: "Fiduciary vs. Financial Advisor: Why It Matters and How to Find the Right Fit",
    slug: "fiduciary-vs-financial-advisor",
    excerpt: "Understand the difference between fiduciary and non-fiduciary advisors. Learn what to look for when choosing a financial advisor and why it matters for your wealth.",
    date: "January 31, 2026",
    readTime: "9 min read",
    category: "Financial Advisors",
  },
  {
    id: 7,
    title: "From IRA Rollovers to Brokerage Accounts: A Beginner's Guide to Investing",
    slug: "ira-rollovers-brokerage-accounts",
    excerpt: "Learn the basics of investing for beginners. Discover IRA rollovers, brokerage accounts, and investment strategies to help you grow your wealth.",
    date: "January 31, 2026",
    readTime: "10 min read",
    category: "Investing",
  },
  {
    id: 8,
    title: "The 2026 Tax Deadline is Approaching: Proactive Steps to Take Now",
    slug: "2026-tax-deadline-planning",
    excerpt: "Don't wait until tax season. Learn proactive tax planning strategies to optimize your taxes before current tax rates expire on December 31, 2025.",
    date: "January 31, 2026",
    readTime: "9 min read",
    category: "Tax Planning",
  },
  {
    id: 9,
    title: "Protecting Your Legacy: A Comprehensive Guide to Estate Planning",
    slug: "estate-planning-guide",
    excerpt: "Learn why estate planning matters and how to protect your family's financial future. Discover wills, trusts, and strategies to minimize taxes and ensure your wishes are followed.",
    date: "January 28, 2026",
    readTime: "10 min read",
    category: "Estate Planning",
  },
  {
    id: 10,
    title: "Beyond Buy and Hold: Advanced Investment Strategies for Building Lasting Wealth",
    slug: "advanced-investment-strategies",
    excerpt: "Learn advanced investment strategies to build a diversified portfolio, manage risk, and achieve your financial goals. Discover asset allocation, rebalancing, and strategies for different life stages.",
    date: "January 29, 2026",
    readTime: "11 min read",
    category: "Investing",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-[#1E3A5F]">
            Financial Insights & Expert Advice
          </h1>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            Learn from verified financial specialists about retirement planning, investing, insurance, and more. Your guide to making informed financial decisions.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Category Badge */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-[#C13741] rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-xl font-bold text-[#1E3A5F] group-hover:text-[#C13741] transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="mb-4 text-zinc-600 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-sm text-zinc-500">
                      <time>{post.date}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2C5282] rounded-2xl p-12 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Find Your Financial Specialist?
          </h2>
          <p className="mb-8 text-lg text-zinc-100 max-w-2xl mx-auto">
            Stop reading and start doing. Connect with verified financial professionals who can help you achieve your financial goals.
          </p>
          <Link
            href="/quiz"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C13741] px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-[#D94651] transition-all"
          >
            Find My Financial Advisor
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
