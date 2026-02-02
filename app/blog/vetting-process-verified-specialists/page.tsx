import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AdvisorForm from "@/app/components/AdvisorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Vetting Process: How Advisor Giant Ensures You Connect with Verified Financial Specialists",
  description: "Learn how Advisor Giant vets financial specialists. Discover the rigorous standards and verification processes that ensure you work with trusted, qualified professionals.",
  keywords: [
    "vetting process",
    "verified financial specialists",
    "financial advisor credentials",
    "background checks",
    "compliance review",
    "specialist verification",
    "trusted advisors",
    "financial professional vetting"
  ],
  openGraph: {
    title: "The Vetting Process: How Advisor Giant Ensures You Connect with Verified Financial Specialists",
    description: "Learn how Advisor Giant vets financial specialists. Discover the rigorous standards and verification processes that ensure you work with trusted, qualified professionals.",
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
              <span className="text-zinc-900">The Vetting Process</span>
            </nav>

            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Trust & Security
                </span>
                <span>•</span>
                <time dateTime="2026-01-31">January 31, 2026</time>
                <span>•</span>
                <span>7 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                The Vetting Process: How Advisor Giant Ensures You Connect with Verified Financial Specialists
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                Learn how Advisor Giant vets financial specialists. Discover the rigorous standards and verification processes that ensure you work with trusted, qualified professionals.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Introduction</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                When it comes to your finances, trust is everything. You're not just looking for any financial professional—you're looking for someone qualified, ethical, and genuinely committed to helping you achieve your financial goals. But how do you know if an advisor truly meets these standards?
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                This is a question that keeps many people from seeking the professional financial guidance they need. The fear of working with an unqualified or unethical advisor can be paralyzing, leading people to either make financial decisions alone or delay important planning altogether.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                At Advisor Giant, we understand this concern. That's why we've implemented a comprehensive vetting process designed to ensure that every specialist on our platform meets rigorous standards for credentials, experience, ethics, and client service. In this article, we'll walk you through exactly how we verify our specialists and why this process matters for your financial security.
              </p>

              {/* Why Vetting Matters */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Why Vetting Matters: The Stakes of Financial Advice</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Before diving into how we vet specialists, it's important to understand why this process is so critical.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Financial advisors have significant influence over major life decisions—retirement planning, investment strategies, insurance coverage, tax planning, and more. Poor advice or unethical practices can cost you thousands, tens of thousands, or even hundreds of thousands of dollars over your lifetime. Beyond the financial impact, working with an untrustworthy advisor can create stress, anxiety, and a sense of betrayal.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                These aren't hypothetical scenarios. They happen regularly, and they're precisely why vetting matters. When you work with a verified specialist from Advisor Giant, you're protected against these risks.
              </p>

              {/* Five Key Stages */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Advisor Giant Vetting Process: Five Key Stages</h2>

              <p className="text-lg mb-8 leading-relaxed text-zinc-700">
                Our vetting process is comprehensive and multi-layered. Here's exactly what we do to ensure every specialist on our platform is trustworthy and qualified:
              </p>

              <div className="space-y-8">
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Stage 1: Credential Verification</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    The first step in our vetting process is verifying that a specialist has the appropriate credentials for their area of practice. We verify Series 7, Series 65, Series 66, or other relevant securities licenses for financial advisors. We confirm CPA certification and state licensing for tax advisors. For mortgage specialists, we verify broker or loan officer licenses and NMLS registration. For insurance professionals, we verify appropriate insurance licenses and current licensing status.
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    This stage ensures that every specialist has the legal right to practice in their field and has met baseline educational and testing requirements.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Stage 2: Background and Compliance Review</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Credentials alone don't tell the whole story. We conduct a thorough background and compliance review to identify any red flags. We search regulatory databases for any complaints, violations, or disciplinary actions. We conduct background checks to identify any criminal history. We review whether the specialist has filed for personal bankruptcy, which could indicate financial mismanagement.
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    A specialist might have valid credentials but have a history of complaints, violations, or unethical behavior. This stage helps us identify those individuals and exclude them from our network.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Stage 3: Experience and Specialization Verification</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    We verify that specialists have genuine experience in their area of practice and understand the specific needs of their clients. We confirm how long the specialist has been practicing in their field, the types of clients they typically serve, and their specific areas of expertise.
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Experience matters. A financial advisor with 15 years of experience managing retirement portfolios is fundamentally different from someone with 6 months of experience. We want to match you with someone who has genuine experience in your specific situation.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Stage 4: Client Satisfaction and Performance Review</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Beyond credentials and compliance, we look at how specialists actually perform in the real world—from the perspective of their clients. We collect and review feedback from past clients, monitor ratings and reviews on third-party platforms, and review examples of successful client engagements.
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Client satisfaction is a key indicator of whether a specialist will be a good fit for you.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">Stage 5: Ongoing Monitoring and Recertification</h3>
                  <p className="text-lg leading-relaxed text-zinc-700 mb-4">
                    Our vetting process doesn't end once a specialist joins our network. We continuously monitor specialists to ensure they maintain high standards. We regularly check regulatory databases for any new complaints or violations, verify that licenses remain current and in good standing, and collect ongoing feedback from clients matched through our platform.
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Standards can slip over time. Ongoing monitoring ensures that specialists maintain the high standards we expect and that you can trust.
                  </p>
                </div>
              </div>

              {/* What Sets Us Apart */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">What Sets Advisor Giant's Vetting Process Apart</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Comprehensive Multi-Stage Process</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Many platforms conduct basic credential checks but don't go as deep as we do. Our five-stage process is more comprehensive than most.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Ongoing Monitoring</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      Some platforms vet specialists when they join but don't monitor them afterward. We continuously monitor to ensure standards are maintained.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Client Feedback Integration</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      We don't just rely on regulatory data—we actively collect and review client feedback to understand real-world performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="h-6 w-6 flex-shrink-0 text-[#C13741] mt-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Transparency</h3>
                    <p className="text-lg leading-relaxed text-zinc-700">
                      We're transparent about our vetting process. We don't hide behind vague claims of "verified specialists"—we explain exactly what we verify and why.
                    </p>
                  </div>
                </div>
              </div>

              {/* How to Verify Yourself */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">How to Verify a Specialist's Credentials Yourself</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                While we handle the heavy lifting of vetting, you can also verify a specialist's credentials yourself. Visit FINRA BrokerCheck to verify licenses and check for complaints for financial advisors. Contact your state's accounting board to verify CPA licensing. Use the NMLS Consumer Access tool to verify mortgage licenses. Contact your state's insurance department to verify insurance licenses.
              </p>

              <p className="text-lg leading-relaxed text-zinc-700">
                These resources allow you to independently verify that a specialist is who they claim to be and has no serious regulatory issues.
              </p>

              {/* Callout Box */}
              <div className="my-10 rounded-lg border-l-4 border-[#C13741] bg-[#FEF2F3] p-6">
                <p className="text-lg font-semibold leading-relaxed text-[#1E3A5F]">
                  The Advisor Giant seal means you can trust that you're working with a qualified, ethical, and accountable professional.
                </p>
              </div>

              {/* Conclusion Section */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Conclusion</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Financial decisions are too important to leave to chance. You deserve to work with a specialist you can trust—someone who is qualified, ethical, and genuinely committed to helping you achieve your financial goals.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Advisor Giant's comprehensive vetting process is designed to ensure that every specialist on our platform meets rigorous standards. From credential verification to ongoing monitoring, we're committed to protecting you and ensuring you have access to the best financial professionals.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                When you're matched with a specialist through Advisor Giant, you can feel confident that they've been thoroughly vetted and verified. You can focus on your financial goals rather than worrying about whether your advisor is trustworthy.
              </p>

              {/* Final CTA Section */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] p-10 text-center shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Ready to connect with a verified financial specialist?
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Visit Advisor Giant today and find the right professional for your needs.
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
                  Advisor Giant is a matching service connecting consumers with independent financial professionals. Results may vary. This is not financial advice. The vetting process described in this article represents Advisor Giant's standards and procedures. While we take vetting seriously, no process is perfect, and you should always conduct your own due diligence when selecting a financial professional. Always consult with qualified financial professionals before making financial decisions. The information provided in this article is for educational purposes only.
                </p>
              </div>

              {/* About the Author */}
              <div className="mt-8 rounded-lg bg-[#F0F4F8] p-6">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">About the Author</h3>
                <p className="text-sm leading-relaxed text-zinc-700">
                  Advisor Giant maintains a network of over 500 verified financial specialists across eight service categories. Our comprehensive vetting process ensures that every specialist on our platform meets rigorous standards for credentials, compliance, experience, and client satisfaction. Learn more about how we verify specialists at AdvisorGiant.com.
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
