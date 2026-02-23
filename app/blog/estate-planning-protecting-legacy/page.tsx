import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AdvisorForm from "@/app/components/AdvisorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Estate Planning: Protecting Your Legacy and Securing Your Family's Future | Advisor Giant",
  description: "Learn the essentials of estate planning and wealth transfer. Discover how Advisor Giant connects you with specialists to protect your assets, minimize taxes, and ensure your legacy is passed on smoothly.",
  keywords: [
    "estate planning",
    "wealth transfer",
    "wills and trusts",
    "probate",
    "estate taxes",
    "power of attorney",
    "healthcare directive",
    "beneficiary designations"
  ],
  openGraph: {
    title: "Estate Planning: Protecting Your Legacy and Securing Your Family's Future | Advisor Giant",
    description: "Learn the essentials of estate planning and wealth transfer. Discover how Advisor Giant connects you with specialists to protect your assets, minimize taxes, and ensure your legacy is passed on smoothly.",
    type: "article",
    publishedTime: "2026-02-22T00:00:00.000Z",
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
              <span className="text-zinc-900">Estate Planning: Protecting Your Legacy</span>
            </nav>

            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Estate Planning
                </span>
                <span>•</span>
                <time dateTime="2026-02-22">February 22, 2026</time>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                Estate Planning with Advisor Giant: Protecting Your Legacy and Securing Your Family's Future
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                Learn the essentials of estate planning and wealth transfer. Discover how Advisor Giant connects you with specialists to protect your assets, minimize taxes, and ensure your legacy is passed on smoothly.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Introduction</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                After a lifetime of hard work, you have built a legacy you can be proud of. However, without a proper plan, that legacy could be at risk. Estate planning is not just for the ultra-wealthy; it is a critical process for anyone who wants to ensure their assets are distributed according to their wishes, while minimizing potential taxes and legal complications. The reality is that without a clear estate plan, your family could face a lengthy, expensive, and emotionally draining probate process.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Many people delay estate planning because it feels complex or uncomfortable to think about. Yet, the consequences of not having a plan can be devastating. Your assets could be distributed in a way you never intended, your family could be burdened with unnecessary taxes, and disputes could arise among your loved ones. This is where Advisor Giant comes in, connecting you with verified estate planning specialists who can make all the difference, guiding you through the process and providing peace of mind.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                In this article, we will explore the key components of estate planning, why it is so important, and how Advisor Giant can help you find a specialist to secure your legacy.
              </p>

              {/* What is Estate Planning? */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">What is Estate Planning?</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Estate planning is the process of arranging for the management and disposal of your estate during your lifetime and after your death. It involves making decisions about how your assets will be distributed, who will be responsible for carrying out your wishes, and how to minimize taxes and other expenses. A comprehensive estate plan can include a variety of legal documents and strategies tailored to your specific situation.
              </p>

              {/* Key Components */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Key Components of an Estate Plan</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A well-structured estate plan typically includes the following documents:
              </p>

              <div className="space-y-6 my-8">
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Will</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    A legal document that outlines your wishes for the distribution of your property and the care of any minor children.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Trust</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    A legal arrangement that allows a third party (the trustee) to hold and manage assets on behalf of a beneficiary or beneficiaries. Trusts can help you avoid probate, reduce estate taxes, and provide more control over how your assets are distributed.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Power of Attorney</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    A document that gives someone the authority to make financial decisions on your behalf if you become incapacitated.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Healthcare Directive (Living Will)</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    A document that outlines your wishes for medical treatment if you are unable to communicate them yourself.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Beneficiary Designations</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Naming beneficiaries on your retirement accounts, life insurance policies, and other financial accounts is a simple yet powerful way to ensure these assets pass directly to your chosen heirs without going through probate.
                  </p>
                </div>
              </div>

              {/* Why is Estate Planning So Important? */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Why is Estate Planning So Important?</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Estate planning is about more than just distributing your assets; it is about protecting your family and ensuring your legacy is preserved. Here are some of the key reasons why estate planning is so crucial:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Ensures Your Assets Go to the Right People:</strong> Without a will, the state will decide how your assets are distributed, which may not align with your wishes.</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Minimizes Taxes and Expenses:</strong> A well-designed estate plan can help you minimize estate taxes, gift taxes, and other expenses, preserving more of your wealth for your heirs.</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Avoids Probate:</strong> Probate is the legal process of validating a will and distributing assets. It can be a long, expensive, and public process. A trust can help your estate avoid probate, allowing for a quicker and more private transfer of assets.</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Protects Your Beneficiaries:</strong> You can use a trust to protect your beneficiaries from creditors, lawsuits, and their own financial mismanagement. You can also set up a trust to provide for a special needs child without jeopardizing their government benefits.</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Provides for Your Minor Children:</strong> A will allows you to name a guardian for your minor children, ensuring they are cared for by someone you trust.</span>
                </li>
              </ul>

              {/* How an Estate Planning Specialist Can Help */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">How an Estate Planning Specialist Can Help</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Navigating the complexities of estate planning on your own can be overwhelming. An experienced estate planning specialist can provide invaluable guidance and support. Here is how a specialist can help:
              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Expertise and Knowledge:</strong> An estate planning specialist has a deep understanding of the laws and regulations governing estates and trusts. They can help you create a plan that is legally sound and tailored to your specific needs.</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Personalized Strategy:</strong> A specialist will take the time to understand your family dynamics, financial situation, and goals. They will then work with you to create a personalized estate plan that reflects your wishes.</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Tax Minimization:</strong> A specialist can help you implement strategies to minimize estate taxes, gift taxes, and income taxes, preserving more of your wealth for your heirs.</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Coordination with Other Professionals:</strong> An estate planning specialist can work with your financial advisor, accountant, and other professionals to ensure your estate plan is integrated with your overall financial plan.</span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed text-zinc-700">
                  <span className="text-[#C13741] font-bold flex-shrink-0">•</span>
                  <span><strong>Peace of Mind:</strong> Knowing that you have a comprehensive estate plan in place can provide you with peace of mind, knowing that your family will be taken care of and your legacy will be protected.</span>
                </li>
              </ul>

              {/* Finding the Right Specialist */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Finding the Right Estate Planning Specialist with Advisor Giant</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Advisor Giant makes it easy to find a qualified estate planning specialist who can help you create a comprehensive plan. Our platform connects you with verified specialists who have been carefully vetted for their expertise, credibility, and client service. Here is how it works:
              </p>

              <ol className="space-y-3 mb-6 list-decimal list-inside">
                <li className="text-lg leading-relaxed text-zinc-700"><strong>Tell Us Your Needs:</strong> Start by providing some basic information about your estate planning needs.</li>
                <li className="text-lg leading-relaxed text-zinc-700"><strong>Get Matched:</strong> Our matching algorithm will connect you with a specialist who is a good fit for your situation.</li>
                <li className="text-lg leading-relaxed text-zinc-700"><strong>Consult with a Specialist:</strong> You will have the opportunity to consult with the specialist to discuss your goals and determine if they are the right fit for you.</li>
              </ol>

              {/* Conclusion */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Conclusion</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Estate planning is a critical process that can help you protect your assets, provide for your loved ones, and ensure your legacy is preserved. While it may seem like a daunting task, working with a qualified estate planning specialist can make the process much easier and more effective. Advisor Giant is here to help you find the right specialist for your needs, so you can have peace of mind knowing that your legacy is secure.
              </p>

              {/* Final CTA Section */}
              <div className="mt-16 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2B4A70] p-10 text-center shadow-xl">
                <h3 className="mb-4 text-2xl font-bold text-white">
                  Ready to protect your legacy?
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-white/90">
                  Connect with a verified estate planning specialist through Advisor Giant today.
                </p>
                <Link
                  href="/quiz"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C13741] px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#D94651] transition-colors"
                >
                  Find My Estate Planning Specialist
                </Link>
              </div>

              {/* Disclaimer */}
              <div className="mt-12 rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <h3 className="text-lg font-bold text-[#1E3A5F] mb-2">Disclaimer</h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Advisor Giant is a matching service connecting consumers with independent financial professionals. Results may vary. This is not financial advice. Always consult with qualified financial professionals before making financial decisions. The information provided in this article is for educational purposes only and should not be construed as specific financial advice or a recommendation.
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

          {/* Right Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <AdvisorForm />

              <div className="rounded-xl bg-[#F0F4F8] p-6 text-center">
                <div className="mb-3 flex justify-center">
                  <svg className="h-12 w-12 text-[#1E3A5F]" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#1E3A5F]">Protect Your Legacy</h3>
                <p className="text-sm text-zinc-600">
                  A comprehensive estate plan ensures your assets are distributed according to your wishes
                </p>
              </div>

              <div className="rounded-xl bg-white border-2 border-[#1E3A5F] p-6">
                <h3 className="mb-3 text-lg font-bold text-[#1E3A5F]">Key Documents</h3>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Will</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Trust</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Power of Attorney</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Healthcare Directive</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-zinc-50 p-6 border border-zinc-200">
                <h3 className="mb-4 text-lg font-bold text-[#1E3A5F]">Related Articles</h3>
                <div className="space-y-3">
                  <Link href="/blog/estate-planning-guide" className="block group">
                    <p className="text-sm font-semibold text-[#1E3A5F] group-hover:text-[#C13741] transition-colors">
                      Comprehensive Estate Planning Guide →
                    </p>
                  </Link>
                  <Link href="/blog/business-succession-planning" className="block group">
                    <p className="text-sm font-semibold text-[#1E3A5F] group-hover:text-[#C13741] transition-colors">
                      Business Succession Planning →
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
