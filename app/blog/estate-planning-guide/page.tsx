import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AdvisorForm from "@/app/components/AdvisorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protecting Your Legacy: A Comprehensive Guide to Estate Planning",
  description: "Learn why estate planning matters and how to protect your family's financial future. Discover wills, trusts, and strategies to minimize taxes and ensure your wishes are followed.",
  keywords: [
    "estate planning",
    "wills",
    "trusts",
    "estate taxes",
    "legacy planning",
    "financial planning",
    "inheritance",
    "probate",
    "power of attorney",
    "healthcare directive"
  ],
  openGraph: {
    title: "Protecting Your Legacy: A Comprehensive Guide to Estate Planning",
    description: "Learn why estate planning matters and how to protect your family's financial future. Discover wills, trusts, and strategies to minimize taxes and ensure your wishes are followed.",
    type: "article",
    publishedTime: "2026-01-28T00:00:00.000Z",
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
              <span className="text-zinc-900">Protecting Your Legacy: A Comprehensive Guide to Estate Planning</span>
            </nav>

            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Estate Planning
                </span>
                <span>•</span>
                <time dateTime="2026-01-28">January 28, 2026</time>
                <span>•</span>
                <span>10 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                Protecting Your Legacy: A Comprehensive Guide to Estate Planning
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                Learn why estate planning matters and how to protect your family's financial future. Discover wills, trusts, and strategies to minimize taxes and ensure your wishes are followed.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Introduction</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Most people don't like to think about what happens after they're gone. It's uncomfortable, and it feels premature. Yet one of the most important financial decisions you can make is planning for the transfer of your assets to the people and causes you care about.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Estate planning isn't just for the wealthy. It's for anyone with assets, family members who depend on them, or causes they care about. Without a proper estate plan, your assets may be distributed according to state law rather than your wishes. Your family may face lengthy and expensive court proceedings. Your minor children may not be cared for according to your preferences. Significant taxes may be owed, reducing the amount your family receives.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The good news is that estate planning doesn't have to be complicated or expensive. With proper guidance, you can create a plan that protects your family, minimizes taxes, and ensures your wishes are carried out.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                In this article, we'll explore why estate planning matters, explain the key components of an estate plan, and show you how to get started protecting your legacy.
              </p>

              {/* Why Estate Planning Matters */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Why Estate Planning Matters: The Real Consequences of Not Planning</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Many people put off estate planning because they think they don't have enough assets to warrant it, or they're uncomfortable thinking about death. But the consequences of not planning can be significant.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Scenario 1: The Intestate Estate</h3>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Michael</strong>, a 55-year-old with $500,000 in assets and two teenage children, dies suddenly without a will or estate plan. Because he didn't have a will, his estate goes through probate—a lengthy and expensive court process. His assets are distributed according to state law, which may not match his wishes. His children's guardianship is decided by the court rather than by Michael's choice. The probate process takes two years and costs $50,000 in legal fees and court costs. His family receives $450,000 instead of $500,000.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Scenario 2: The Unplanned Estate</h3>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Sarah</strong>, a 60-year-old with $2 million in assets, dies without an updated estate plan. Her estate is subject to federal estate taxes. Because she didn't plan for this, her heirs owe $400,000 in estate taxes. Additionally, because she didn't have a trust, her assets go through probate, costing another $50,000 in legal fees. Her heirs receive $1.55 million instead of $2 million—a loss of $450,000.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Scenario 3: The Blended Family Disaster</h3>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>James</strong>, a 65-year-old with $1 million in assets and a second wife, dies without an updated estate plan. His will from his first marriage leaves everything to his adult children. His current wife receives nothing. His family ends up in litigation, and significant assets are spent on legal fees. The family is divided, and relationships are damaged.
                </p>
              </div>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                These scenarios illustrate why estate planning matters. Without proper planning, your family may face costly legal proceedings, your assets may be distributed contrary to your wishes, and significant taxes may be owed.
              </p>

              {/* Key Components */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Key Components of an Estate Plan</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A comprehensive estate plan typically includes several components. The specific components you need depend on your situation, but here are the most important ones.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">1. A Will</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A will is a legal document that specifies how your assets will be distributed after your death. It also allows you to name a guardian for minor children and an executor to manage your estate.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Key Elements of a Will:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Distribution of Assets:</strong> Specifies who receives your assets and in what proportions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Guardian Designation:</strong> Names a guardian for minor children</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Executor Designation:</strong> Names someone to manage your estate and carry out your wishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Specific Bequests:</strong> Allows you to leave specific items to specific people</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Advantages:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Simple and straightforward</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Allows you to specify how assets are distributed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Allows you to name a guardian for minor children</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Relatively inexpensive to create</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Disadvantages:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Must go through probate, which is lengthy and expensive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Becomes public record</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Can be challenged by family members</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Doesn't avoid estate taxes</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">2. A Trust</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A trust is a legal arrangement where you (the grantor) transfer assets to a trustee, who manages them for the benefit of beneficiaries. Trusts can be revocable or irrevocable and can be used during your lifetime or after your death.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Revocable Living Trust:</h4>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A revocable living trust is created during your lifetime and can be modified or revoked. Assets are transferred to the trust, and you typically serve as the trustee during your lifetime. Upon your death, a successor trustee takes over and distributes assets according to your instructions.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Advantages:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Avoids probate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Maintains privacy (not public record)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Allows for management of assets if you become incapacitated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Can be modified if circumstances change</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Reduces family conflict</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Disadvantages:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>More expensive to create than a will</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Requires transferring assets to the trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Doesn't reduce estate taxes (revocable trusts are included in your taxable estate)</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Irrevocable Trust:</h4>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                An irrevocable trust cannot be modified or revoked after creation. Assets transferred to an irrevocable trust are no longer part of your taxable estate, which can reduce estate taxes.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Advantages:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Reduces estate taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Protects assets from creditors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Removes assets from your control, which can be beneficial for Medicaid planning</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Disadvantages:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Cannot be modified or revoked</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Less flexibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>More complex to administer</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">3. Power of Attorney</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A power of attorney is a legal document that designates someone to manage your financial affairs if you become incapacitated. Without a power of attorney, your family may need to go to court to get authority to manage your affairs.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Types of Powers of Attorney:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>General Power of Attorney:</strong> Grants broad authority to manage all financial affairs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Limited Power of Attorney:</strong> Grants authority for specific purposes (e.g., selling a property)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Durable Power of Attorney:</strong> Remains in effect even if you become incapacitated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Springing Power of Attorney:</strong> Becomes effective only if you become incapacitated</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Why It Matters:</h4>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Without a power of attorney, if you become incapacitated, your family must go to court to get authority to manage your affairs. This is costly and time-consuming. A power of attorney avoids this process.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">4. Healthcare Directive (Living Will)</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A healthcare directive is a legal document that specifies your wishes regarding medical treatment if you become incapacitated and cannot communicate your wishes. It allows you to designate someone to make medical decisions on your behalf.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Key Elements:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>End-of-Life Decisions:</strong> Specifies whether you want life-sustaining treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Healthcare Agent:</strong> Designates someone to make medical decisions if you cannot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Organ Donation:</strong> Specifies whether you want to donate organs</span>
                </li>
              </ul>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Why It Matters:</h4>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Without a healthcare directive, your family may not know your wishes regarding end-of-life care, and medical decisions may be made contrary to your preferences. A healthcare directive ensures your wishes are known and followed.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">5. Beneficiary Designations</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Many accounts (retirement accounts, life insurance, payable-on-death accounts) allow you to designate beneficiaries. These designations override your will, so it's important to keep them updated.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Why It Matters:</h4>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                If you don't update beneficiary designations after major life events (marriage, divorce, birth of children), your assets may go to unintended beneficiaries. For example, if you divorce but don't update your life insurance beneficiary, your ex-spouse may receive the proceeds.
              </p>

              {/* Estate Planning Strategies */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Estate Planning Strategies to Minimize Taxes</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                One of the primary goals of estate planning is minimizing taxes. Here are key strategies.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 1: Utilize the Estate Tax Exemption</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The federal estate tax exemption (the amount you can pass to heirs tax-free) is $13.61 million per person in 2024. However, this exemption is scheduled to decrease to approximately $7 million per person in 2026. If you have a large estate, you may want to take advantage of the current exemption.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Portability:</h4>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Married couples can use portability to double the exemption. If the first spouse to die doesn't use their full exemption, the surviving spouse can use the unused exemption. This requires filing an estate tax return, even if no taxes are owed.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 2: Lifetime Gifts</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                You can give up to $18,000 per person per year (2024) without using any of your lifetime exemption. Married couples can give $36,000 per person per year. By making strategic gifts during your lifetime, you can reduce your taxable estate.
              </p>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <h4 className="text-lg font-semibold text-[#1E3A5F] mb-3">Example:</h4>
                <p className="text-lg leading-relaxed text-zinc-700">
                  You have $2 million in assets. You have three adult children. Over 10 years, you give $18,000 per year to each child ($54,000 per year, $540,000 total). This reduces your taxable estate to $1.46 million, potentially saving $200,000+ in estate taxes.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 3: Irrevocable Life Insurance Trust (ILIT)</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                An ILIT is an irrevocable trust that owns life insurance. The life insurance proceeds are not included in your taxable estate, which can save significant taxes.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">How It Works:</h4>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                You create an irrevocable trust and designate it as the owner and beneficiary of a life insurance policy. You make gifts to the trust to pay the premiums. Upon your death, the insurance proceeds go to the trust and are distributed to beneficiaries tax-free and outside of probate.
              </p>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <h4 className="text-lg font-semibold text-[#1E3A5F] mb-3">Example:</h4>
                <p className="text-lg leading-relaxed text-zinc-700">
                  You have a $1 million life insurance policy. If you own the policy personally, the $1 million is included in your taxable estate. If an ILIT owns the policy, the $1 million is excluded from your taxable estate, potentially saving $400,000+ in estate taxes.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 4: Charitable Remainder Trust (CRT)</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A charitable remainder trust is an irrevocable trust that provides income to you (or other beneficiaries) during your lifetime, with the remaining assets going to charity upon your death.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">How It Works:</h4>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                You transfer appreciated assets to the trust. You receive an income stream for life. Upon your death, the remaining assets go to your designated charity. You receive a charitable deduction for the present value of the charity's interest.
              </p>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <h4 className="text-lg font-semibold text-[#1E3A5F] mb-3">Example:</h4>
                <p className="text-lg leading-relaxed text-zinc-700">
                  You have appreciated stock worth $500,000 with a cost basis of $100,000. If you sell it, you owe capital gains taxes on the $400,000 gain. Instead, you transfer it to a CRT. You receive income for life, you avoid capital gains taxes, and you receive a charitable deduction. Upon your death, the remaining assets go to your favorite charity.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 5: Grantor Retained Annuity Trust (GRAT)</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                A GRAT is an irrevocable trust where you receive an annuity payment for a specified term. After the term ends, remaining assets pass to beneficiaries. The value of the gift to beneficiaries is discounted based on the annuity payments you receive.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">How It Works:</h4>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                You transfer assets to the trust and receive annuity payments for a specified term (e.g., 5 years). After the term, remaining assets pass to your children. The value of the gift to your children is reduced by the value of the annuity payments you receive, potentially saving significant estate taxes.
              </p>

              {/* Common Mistakes */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Common Estate Planning Mistakes to Avoid</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                As you develop your estate plan, avoid these common mistakes.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #1: Not Having an Estate Plan</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    The biggest mistake is not having an estate plan at all. Without one, your family faces costly probate proceedings and your assets are distributed according to state law, not your wishes.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #2: Outdated Estate Plan</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Life changes—marriage, divorce, birth of children, significant changes in assets. If your estate plan is outdated, it may not reflect your current wishes or situation. Review and update your estate plan every 3-5 years or after major life events.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #3: Not Funding Your Trust</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    If you create a trust but don't transfer assets to it, the trust is worthless. Properly funding your trust is essential.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #4: Incorrect Beneficiary Designations</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Beneficiary designations override your will. If they're incorrect or outdated, your assets may go to unintended beneficiaries. Review and update beneficiary designations after major life events.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #5: Ignoring Tax Implications</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Without proper tax planning, your estate may owe significant taxes, reducing the amount your family receives. Work with a tax professional to minimize tax liability.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #6: Not Communicating Your Wishes</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    If your family doesn't know where your important documents are or what your wishes are, they'll struggle to carry out your plan. Communicate your wishes and keep important documents in a safe, accessible location.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #7: Choosing the Wrong Executor or Trustee</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Your executor or trustee needs to be trustworthy, organized, and capable of managing complex financial matters. Choose carefully.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #8: DIY Estate Planning</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    While simple wills can be created online, complex estates benefit from professional guidance. The cost of professional help is often far less than the taxes and legal complications it prevents.
                  </p>
                </div>
              </div>

              {/* How to Get Started */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">How to Get Started with Estate Planning</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Estate planning doesn't have to be complicated. Here's how to get started.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 1: Assess Your Situation</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Gather information about your assets, liabilities, family situation, and goals. How much do you have? Who do you want to leave it to? Do you have minor children? Do you have charitable interests?
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 2: Identify Your Goals</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    What are your primary goals? Protecting your family? Minimizing taxes? Supporting charitable causes? Ensuring your wishes are followed? Your goals will guide your planning.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 3: Understand Your Options</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Learn about the different estate planning tools available (wills, trusts, powers of attorney, etc.). Understand the advantages and disadvantages of each.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 4: Consult with Professionals</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Estate planning is complex and involves legal, tax, and financial considerations. Work with an estate planning attorney, tax professional, and financial advisor to develop a comprehensive plan.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 5: Create Your Plan</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Once you've gathered information and consulted with professionals, create your estate plan. This typically includes a will, trust, powers of attorney, and healthcare directives.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 6: Fund Your Plan</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    If you're using a trust, transfer assets to the trust. Update beneficiary designations. Ensure your plan is properly funded.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 7: Communicate and Review</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Communicate your wishes to your family. Keep important documents in a safe, accessible location. Review your plan every 3-5 years or after major life events.
                  </p>
                </div>
              </div>

              {/* Role of Professional */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Role of an Estate Planning Professional</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                While simple estates can be planned without professional help, complex estates benefit from professional guidance.
              </p>

              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">What an Estate Planning Professional Can Help With:</h3>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Analyzing your situation and goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Recommending appropriate estate planning strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Creating legal documents (wills, trusts, powers of attorney, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Minimizing estate taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Coordinating with tax and financial professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Ensuring documents are properly executed and funded</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Finding the Right Professional:</h3>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Look for an estate planning attorney with experience in your specific situation. Ask for referrals from trusted sources. Interview multiple professionals before deciding.
              </p>

              {/* Bottom Line */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Protecting Your Legacy: The Bottom Line</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Estate planning is one of the most important financial decisions you can make. It protects your family, minimizes taxes, and ensures your wishes are carried out. Without a proper estate plan, your family may face costly legal proceedings, and your assets may be distributed contrary to your wishes.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The good news is that estate planning doesn't have to be complicated or expensive. With proper guidance, you can create a plan that protects your legacy and provides peace of mind.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Don't put it off. Start today. Your family will thank you.
              </p>

              {/* Getting Started with Advisor Giant */}
              <div className="mt-12 rounded-xl bg-gradient-to-r from-[#1E3A5F] to-[#2C5282] p-8 text-white">
                <h2 className="mb-4 text-3xl font-bold">Getting Started with Advisor Giant</h2>
                <p className="mb-6 text-lg">
                  If you're ready to develop an estate plan but aren't sure where to start, Advisor Giant can connect you with an estate planning professional who can help. Our network includes experienced attorneys and financial professionals who can:
                </p>
                <ul className="mb-6 space-y-2 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Analyze your situation and goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Recommend appropriate estate planning strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Explain your options in understandable terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Help you create a comprehensive estate plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Coordinate with tax and financial professionals</span>
                  </li>
                </ul>
                <h3 className="mb-4 text-2xl font-bold">The process is simple:</h3>
                <ol className="mb-6 space-y-2 text-lg list-decimal list-inside">
                  <li>Visit Advisor Giant and select "Estate Planning"</li>
                  <li>Describe your situation (family situation, asset level, goals, etc.)</li>
                  <li>Get matched with an estate planning professional in your area</li>
                  <li>Connect and consult about your estate planning needs</li>
                </ol>
                <p className="mb-6 text-lg">
                  Within 48 hours, you'll be connected with a qualified professional who can help you protect your legacy.
                </p>
                <Link
                  href="/advisor"
                  className="inline-flex items-center justify-center rounded-xl bg-[#C13741] px-8 py-4 text-lg font-semibold text-white hover:bg-[#D94651] transition-all"
                >
                  Find an Estate Planning Professional
                </Link>
              </div>

              {/* Conclusion */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Conclusion</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Your legacy is important. The assets you've accumulated represent years of hard work and sacrifice. Ensuring they're distributed according to your wishes and that your family is protected should be a priority.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Estate planning is not something to put off. It's not something to do yourself without guidance. It's something to do now, with professional help, to protect your family and ensure your wishes are carried out.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The cost of proper estate planning is far less than the cost of not planning—in taxes, legal fees, and family conflict. Invest in your legacy today.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700 font-semibold">
                Ready to protect your legacy? Connect with an estate planning professional through Advisor Giant today.
              </p>

              {/* Disclaimer */}
              <div className="mt-12 rounded-lg bg-zinc-50 p-6 text-sm text-zinc-600">
                <h3 className="mb-3 text-base font-bold text-[#1E3A5F]">Disclaimer</h3>
                <p className="leading-relaxed">
                  Advisor Giant is a matching service connecting consumers with independent estate planning professionals. Results may vary. This is not legal or financial advice. The information provided in this article is for educational purposes only and should not be construed as specific estate planning recommendations. Estate planning is complex and varies based on individual circumstances, state law, and federal law. Always consult with qualified legal and financial professionals before making estate planning decisions. The examples and scenarios provided are for illustrative purposes only and do not guarantee specific outcomes or tax savings. Estate tax exemptions, gift tax limits, and other tax provisions mentioned are based on 2024 information and are subject to change.
                </p>
              </div>

              {/* About */}
              <div className="mt-6 rounded-lg bg-[#F0F4F8] p-6 text-sm text-zinc-700">
                <h3 className="mb-3 text-base font-bold text-[#1E3A5F]">About the Author</h3>
                <p className="leading-relaxed">
                  Advisor Giant connects individuals with estate planning professionals who can help them protect their legacy, minimize taxes, and ensure their wishes are carried out. Whether you're just starting to think about estate planning or have a complex situation requiring professional guidance, our network of verified specialists can help. Learn more at AdvisorGiant.com.
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
                <h3 className="mb-2 text-lg font-bold text-[#1E3A5F]">Protect Your Legacy</h3>
                <p className="text-sm text-zinc-600">
                  Connect with verified estate planning professionals who can help protect your family's future
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
                    <span>Verified estate planning attorneys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Comprehensive estate planning services</span>
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
                    <span>Personalized matching</span>
                  </li>
                </ul>
              </div>

              {/* Key Takeaways */}
              <div className="rounded-xl bg-zinc-50 p-6 border border-zinc-200">
                <h3 className="mb-3 text-lg font-bold text-[#1E3A5F]">Key Takeaways</h3>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Estate planning protects your family and ensures your wishes are followed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Key components include wills, trusts, powers of attorney, and healthcare directives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Strategic planning can minimize estate taxes significantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Review and update your estate plan every 3-5 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Professional guidance is essential for complex estates</span>
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
