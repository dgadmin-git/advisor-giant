import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AdvisorForm from "@/app/components/AdvisorForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beyond Buy and Hold: Advanced Investment Strategies for Building Lasting Wealth",
  description: "Learn advanced investment strategies to build a diversified portfolio, manage risk, and achieve your financial goals. Discover asset allocation, rebalancing, and strategies for different life stages.",
  keywords: [
    "investment strategies",
    "asset allocation",
    "portfolio diversification",
    "rebalancing",
    "wealth building",
    "financial planning",
    "investment advisor",
    "retirement planning"
  ],
  openGraph: {
    title: "Beyond Buy and Hold: Advanced Investment Strategies for Building Lasting Wealth",
    description: "Learn advanced investment strategies to build a diversified portfolio, manage risk, and achieve your financial goals. Discover asset allocation, rebalancing, and strategies for different life stages.",
    type: "article",
    publishedTime: "2026-01-29T00:00:00.000Z",
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
              <span className="text-zinc-900">Beyond Buy and Hold: Advanced Investment Strategies</span>
            </nav>

            {/* Article Header */}
            <div className="mb-12 border-b border-zinc-200 pb-8">
              <div className="mb-4 flex items-center gap-2 text-sm text-zinc-600">
                <span className="rounded-full bg-[#F0F4F8] px-3 py-1 text-xs font-medium text-[#1E3A5F]">
                  Investing
                </span>
                <span>•</span>
                <time dateTime="2026-01-29">January 29, 2026</time>
                <span>•</span>
                <span>11 min read</span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1E3A5F] sm:text-5xl lg:text-6xl">
                Beyond Buy and Hold: Advanced Investment Strategies for Building Lasting Wealth
              </h1>
              <p className="text-xl leading-relaxed text-zinc-700">
                Learn advanced investment strategies to build a diversified portfolio, manage risk, and achieve your financial goals. Discover asset allocation, rebalancing, and strategies for different life stages.
              </p>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Introduction</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Many investors think investing is simple: buy stocks, hold them for the long term, and hope they go up. While this basic approach can work, it's incomplete. Successful investing requires strategy—thoughtful decisions about what to invest in, how much to invest in each asset, and how to manage your portfolio over time.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The difference between a random collection of investments and a strategic portfolio can be substantial. A well-designed portfolio aligned with your goals and risk tolerance can help you weather market volatility, achieve your financial objectives, and sleep well at night. A poorly designed portfolio can lead to unnecessary losses, missed opportunities, and financial stress.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                In this article, we'll explore advanced investment strategies that can help you build a portfolio designed for your specific situation. We'll discuss asset allocation, diversification strategies, rebalancing approaches, and how to adjust your strategy as your life circumstances change.
              </p>

              {/* Asset Allocation Foundation */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Foundation: Understanding Asset Allocation</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Before discussing specific strategies, you need to understand asset allocation—how you divide your investments among different asset classes.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Why Asset Allocation Matters</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Asset allocation is the most important factor in determining your portfolio's returns and risk. Research shows that approximately 90% of portfolio performance is determined by asset allocation, not by individual security selection or market timing. This means that how you divide your money among stocks, bonds, and other assets matters far more than which specific stocks you choose.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">The Three Main Asset Classes</h3>

              <div className="space-y-6 mb-6">
                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h4 className="text-xl font-semibold text-[#1E3A5F] mb-2">Stocks (Equities):</h4>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Represent ownership in companies. Stocks offer higher potential returns but higher volatility. Historically, stocks have returned approximately 10% annually over long periods, but with significant year-to-year variation.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h4 className="text-xl font-semibold text-[#1E3A5F] mb-2">Bonds (Fixed Income):</h4>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Represent loans to companies or governments. Bonds offer lower returns but lower volatility. Historically, bonds have returned approximately 5% annually with less volatility than stocks.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h4 className="text-xl font-semibold text-[#1E3A5F] mb-2">Alternative Assets:</h4>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Include real estate, commodities, and other investments. These can provide diversification benefits and different return characteristics than stocks and bonds.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Determining Your Allocation</h3>

              <p className="text-lg mb-4 leading-relaxed text-zinc-700">
                Your optimal asset allocation depends on several factors:
              </p>

              <ul className="mb-6 space-y-3 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Time Horizon:</strong> If you won't need the money for 20+ years, you can afford more stock exposure because you have time to recover from market downturns. If you need the money in 5 years, you should have more bond exposure to protect your capital.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Risk Tolerance:</strong> How comfortable are you with market fluctuations? If market downturns cause you stress, you should have more conservative allocation. If you can stay calm during volatility, you can take more risk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Financial Goals:</strong> Are you saving for retirement? A home purchase? Education? Your goals affect your allocation. Longer-term goals can support more aggressive allocations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Income Stability:</strong> If your income is stable, you can take more investment risk. If your income is variable, you should be more conservative.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Sample Allocations</h3>

              <p className="text-lg mb-4 leading-relaxed text-zinc-700">
                Here are sample allocations for different situations:
              </p>

              <div className="my-8 space-y-4">
                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <h4 className="text-lg font-bold text-[#1E3A5F] mb-3">Conservative (Age 65, Approaching Retirement):</h4>
                  <ul className="space-y-1 text-base text-zinc-700">
                    <li className="flex items-center gap-2">
                      <span className="text-[#C13741]">•</span>
                      <span>40% stocks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#C13741]">•</span>
                      <span>50% bonds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#C13741]">•</span>
                      <span>10% alternatives</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <h4 className="text-lg font-bold text-[#1E3A5F] mb-3">Moderate (Age 45, Mid-Career):</h4>
                  <ul className="space-y-1 text-base text-zinc-700">
                    <li className="flex items-center gap-2">
                      <span className="text-[#C13741]">•</span>
                      <span>60% stocks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#C13741]">•</span>
                      <span>30% bonds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#C13741]">•</span>
                      <span>10% alternatives</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-[#F0F4F8] p-6">
                  <h4 className="text-lg font-bold text-[#1E3A5F] mb-3">Aggressive (Age 25, Long Time Horizon):</h4>
                  <ul className="space-y-1 text-base text-zinc-700">
                    <li className="flex items-center gap-2">
                      <span className="text-[#C13741]">•</span>
                      <span>80% stocks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#C13741]">•</span>
                      <span>15% bonds</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#C13741]">•</span>
                      <span>5% alternatives</span>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                These are starting points. Your specific allocation should reflect your unique situation.
              </p>

              {/* Diversification Strategies */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Diversification Strategies: Building a Resilient Portfolio</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Asset allocation tells you how much to invest in stocks vs. bonds. Diversification tells you how to divide that money among different types of stocks and bonds.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Stock Diversification</h3>

              <p className="text-lg mb-4 leading-relaxed text-zinc-700">
                Within your stock allocation, diversify across:
              </p>

              <ul className="mb-6 space-y-3 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Market Capitalization:</strong> Divide between large-cap, mid-cap, and small-cap stocks. Large-cap stocks are more stable but slower-growing. Small-cap stocks are more volatile but have higher growth potential.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Sectors:</strong> Divide among different economic sectors (technology, healthcare, financials, consumer, industrials, energy, utilities, materials, real estate, communication). Different sectors perform differently in different economic environments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Geography:</strong> Divide between U.S. stocks and international stocks. International stocks provide exposure to different economies and currencies. Typically, 70-80% U.S. and 20-30% international is a reasonable split.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Investment Style:</strong> Divide between growth stocks (higher growth potential, higher volatility) and value stocks (lower growth, lower volatility). This provides balance.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Bond Diversification</h3>

              <p className="text-lg mb-4 leading-relaxed text-zinc-700">
                Within your bond allocation, diversify across:
              </p>

              <ul className="mb-6 space-y-3 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Duration:</strong> Divide between short-term bonds (less sensitive to interest rate changes) and longer-term bonds (more sensitive to interest rate changes). This provides balance and flexibility.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Credit Quality:</strong> Divide between high-quality bonds (lower risk, lower returns) and lower-quality bonds (higher risk, higher returns). This provides balance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Bond Type:</strong> Divide among government bonds, corporate bonds, and municipal bonds. Different types have different characteristics and tax implications.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Real-World Example: A Diversified Portfolio</h3>

              <p className="text-lg mb-4 leading-relaxed text-zinc-700">
                Consider a 45-year-old investor with a moderate allocation:
              </p>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg font-bold text-[#1E3A5F] mb-4">Total Portfolio: $500,000</p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-base text-zinc-800 mb-2">Stocks (60% = $300,000):</p>
                    <ul className="space-y-1 text-base text-zinc-700 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C13741] mt-1">•</span>
                        <span>U.S. Large-Cap: $120,000 (40% of stock allocation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C13741] mt-1">•</span>
                        <span>U.S. Mid/Small-Cap: $60,000 (20% of stock allocation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C13741] mt-1">•</span>
                        <span>International Developed: $80,000 (27% of stock allocation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C13741] mt-1">•</span>
                        <span>Emerging Markets: $40,000 (13% of stock allocation)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-base text-zinc-800 mb-2">Bonds (30% = $150,000):</p>
                    <ul className="space-y-1 text-base text-zinc-700 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C13741] mt-1">•</span>
                        <span>U.S. Government/Investment Grade: $100,000 (67% of bond allocation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C13741] mt-1">•</span>
                        <span>Corporate Bonds: $35,000 (23% of bond allocation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C13741] mt-1">•</span>
                        <span>Municipal Bonds: $15,000 (10% of bond allocation)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-base text-zinc-800 mb-2">Alternatives (10% = $50,000):</p>
                    <ul className="space-y-1 text-base text-zinc-700 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C13741] mt-1">•</span>
                        <span>Real Estate Investment Trusts (REITs): $30,000</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C13741] mt-1">•</span>
                        <span>Commodities: $20,000</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                This portfolio provides broad diversification across asset classes, geographies, and investment styles.
              </p>

              {/* Rebalancing */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Rebalancing: Maintaining Your Target Allocation</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Over time, your portfolio allocation will drift as different investments grow at different rates. Rebalancing is the process of adjusting your portfolio back to your target allocation.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Why Rebalancing Matters</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Without rebalancing, your portfolio becomes increasingly concentrated in your best-performing investments. This increases risk. Rebalancing forces you to sell winners and buy losers, which is psychologically difficult but important for maintaining your target risk level.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">How Often to Rebalance</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Most investors should rebalance annually. Some rebalance semi-annually. Very active investors might rebalance quarterly. The specific frequency depends on your situation and preferences.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Rebalancing Methods</h3>

              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Calendar-Based Rebalancing:</strong> Rebalance on a fixed schedule (e.g., January 1 each year).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Threshold-Based Rebalancing:</strong> Rebalance when your allocation drifts beyond a certain threshold (e.g., when stocks exceed 65% instead of your target 60%).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span><strong>Opportunistic Rebalancing:</strong> Rebalance when making new contributions or withdrawals.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Example: Rebalancing in Action</h3>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700 mb-3">
                  You have a target allocation of 60% stocks / 40% bonds. You started with $100,000 ($60,000 stocks, $40,000 bonds). After one year, stocks have grown 15% and bonds have grown 3%.
                </p>
                <p className="text-lg leading-relaxed text-zinc-700 mb-3">
                  Your portfolio is now worth $107,200 with $69,000 stocks and $38,200 bonds.
                </p>
                <p className="text-lg leading-relaxed text-zinc-700 mb-3">
                  Your allocation is now 64.4% stocks / 35.6% bonds. To rebalance to 60% / 40%, you would:
                </p>
                <ul className="space-y-1 text-base text-zinc-700">
                  <li className="flex items-center gap-2">
                    <span className="text-[#C13741]">•</span>
                    <span>Sell $3,120 of stocks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#C13741]">•</span>
                    <span>Buy $3,120 of bonds</span>
                  </li>
                </ul>
                <p className="text-lg leading-relaxed text-zinc-700 mt-3">
                  This brings you back to your target allocation.
                </p>
              </div>

              {/* Life Stage Strategies */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Investment Strategies for Different Life Stages</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Your investment strategy should evolve as your life circumstances change.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Stage 1: Accumulation (Ages 25-45)</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                During your accumulation years, you're building wealth and have a long time horizon. Your focus should be on maximizing returns while maintaining appropriate diversification.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Strategy:</h4>
              <ul className="mb-4 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Aggressive allocation (70-80% stocks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Maximize contributions to retirement accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Focus on low-cost index funds and ETFs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Reinvest all dividends</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Don't worry about short-term volatility</span>
                </li>
              </ul>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Example:</strong> A 30-year-old with 35 years until retirement can afford to be 80% stocks because they have time to recover from market downturns.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Stage 2: Pre-Retirement (Ages 45-60)</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                As you approach retirement, you should gradually become more conservative. Your focus shifts from maximizing returns to protecting capital and preparing for withdrawals.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Strategy:</h4>
              <ul className="mb-4 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Gradually shift to more conservative allocation (50-60% stocks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Begin tax planning for retirement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Consider Roth conversions if appropriate</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Ensure adequate diversification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Plan for healthcare costs</span>
                </li>
              </ul>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Example:</strong> A 50-year-old with 15 years until retirement might shift to 60% stocks / 40% bonds, gradually reducing stock exposure as retirement approaches.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Stage 3: Early Retirement (Ages 60-75)</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                In early retirement, you're beginning to withdraw from your portfolio. Your focus is on generating income while protecting capital and managing taxes.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Strategy:</h4>
              <ul className="mb-4 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Conservative to moderate allocation (40-50% stocks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Implement tax-efficient withdrawal strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Consider annuities for income stability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Manage Required Minimum Distributions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Plan for healthcare and long-term care</span>
                </li>
              </ul>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Example:</strong> A 65-year-old in early retirement might have 45% stocks / 45% bonds / 10% alternatives, generating income from bonds and dividends while maintaining some growth potential.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Stage 4: Late Retirement (Ages 75+)</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                In late retirement, you're primarily focused on generating income and preserving capital. Your allocation should be conservative.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Strategy:</h4>
              <ul className="mb-4 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Conservative allocation (30-40% stocks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Focus on income generation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Manage Required Minimum Distributions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Plan for healthcare and long-term care</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Consider legacy planning</span>
                </li>
              </ul>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Example:</strong> An 80-year-old might have 35% stocks / 55% bonds / 10% alternatives, prioritizing income and capital preservation.
                </p>
              </div>

              {/* Advanced Strategies */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Advanced Strategies for Optimizing Returns</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Beyond basic asset allocation and diversification, several advanced strategies can help optimize returns.
              </p>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 1: Dollar-Cost Averaging</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Dollar-cost averaging involves investing a fixed amount at regular intervals (e.g., $500 per month) regardless of market conditions. This reduces the impact of market timing and removes emotion from investing.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Advantages:</h4>
              <ul className="mb-4 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Reduces impact of market volatility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Removes emotion from investing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Encourages consistent investing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Can reduce average cost per share</span>
                </li>
              </ul>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Example:</strong> Instead of investing $6,000 at once, you invest $500 per month for 12 months. If the market drops, you buy more shares at lower prices. If the market rises, you buy fewer shares at higher prices. Over time, this averages out.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 2: Tax-Loss Harvesting</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Tax-loss harvesting involves selling investments at a loss to offset gains and reduce taxable income. This is particularly effective in taxable accounts.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">How It Works:</h4>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                If you have an investment that has declined in value, you sell it to realize the loss. This loss can offset gains from other investments, reducing your taxable income. You can then reinvest in a similar (but not identical) investment to maintain your desired allocation.
              </p>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Example:</strong> You have a mutual fund worth $8,000 that you purchased for $10,000. You sell it, realizing a $2,000 loss. You immediately buy a similar mutual fund to maintain your allocation. The $2,000 loss can offset other gains.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 3: Asset Location</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Asset location involves strategically placing investments in different account types (taxable, traditional IRA, Roth IRA) to minimize taxes.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">General Principles:</h4>
              <ul className="mb-4 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Place tax-inefficient investments (bonds, actively managed funds) in tax-deferred accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Place tax-efficient investments (index funds, stocks) in taxable accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Place tax-free investments in Roth accounts</span>
                </li>
              </ul>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Example:</strong> You might hold bonds in your Traditional IRA (where interest income isn't taxed annually) and stock index funds in your taxable account (where they're more tax-efficient).
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 4: Dividend Reinvestment</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Dividend reinvestment involves automatically reinvesting dividends to purchase additional shares. This compounds your returns over time.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Advantages:</h4>
              <ul className="mb-4 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Compounds returns through reinvestment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Removes emotion from investing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Increases share count over time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Leverages dollar-cost averaging</span>
                </li>
              </ul>

              <div className="rounded-lg bg-[#F0F4F8] p-6 mb-6">
                <p className="text-lg leading-relaxed text-zinc-700">
                  <strong>Example:</strong> You own 100 shares of a stock paying $2 per share annually ($200 total). Instead of taking the $200 in cash, you reinvest it to purchase additional shares. Over time, you own more shares and receive more dividends.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4 mt-8">Strategy 5: Tactical Asset Allocation</h3>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Tactical asset allocation involves temporarily adjusting your allocation based on market conditions. For example, if stocks are extremely overvalued, you might temporarily increase bond exposure.
              </p>

              <h4 className="text-xl font-semibold text-[#1E3A5F] mb-3">Important Considerations:</h4>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Requires expertise and discipline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Can result in higher costs and taxes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Most investors should avoid this</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Stick with strategic allocation unless you have specific expertise</span>
                </li>
              </ul>

              {/* Common Mistakes */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Common Investment Strategy Mistakes to Avoid</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                As you develop your investment strategy, avoid these common mistakes.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #1: Chasing Performance</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Many investors chase hot stocks or funds, only to see them underperform. Stick with your strategic allocation rather than chasing performance.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #2: Overconcentration</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Putting too much money in a few investments increases risk. Diversification is essential.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #3: Excessive Trading</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Frequent trading increases costs and taxes. Buy and hold is generally superior to frequent trading.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #4: Ignoring Fees</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    High fees significantly impact long-term returns. Choose low-cost index funds and ETFs.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #5: Not Rebalancing</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Without rebalancing, your portfolio becomes increasingly concentrated in your best performers. Rebalance annually.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #6: Panic Selling During Downturns</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Market downturns are normal. Panic selling locks in losses. Stay invested.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #7: Trying to Time the Market</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Market timing is nearly impossible. Consistent investing is superior.
                  </p>
                </div>

                <div className="border-l-4 border-[#C13741] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Mistake #8: Ignoring Your Time Horizon</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Your allocation should reflect your time horizon. Young investors can afford more risk than those near retirement.
                  </p>
                </div>
              </div>

              {/* Role of Advisor */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">The Role of an Investment Advisor</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                While many people can successfully manage their own investments, working with an investment advisor can provide value.
              </p>

              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">What an Advisor Can Help With:</h3>
              <ul className="mb-6 space-y-2 text-lg text-zinc-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Developing a strategic asset allocation aligned with your goals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Building a diversified portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Implementing tax-efficient strategies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Rebalancing and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Behavioral coaching during market volatility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C13741] mt-1">•</span>
                  <span>Adjusting strategy as life circumstances change</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-4">Finding the Right Advisor:</h3>
              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Look for an advisor who is a fiduciary, charges transparent fees, uses low-cost index funds, and has experience with your specific situation. Avoid advisors who promise to beat the market or use overly complex strategies.
              </p>

              {/* Getting Started Guide */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Building Your Investment Strategy: A Step-by-Step Guide</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Ready to develop your investment strategy? Here's how to get started.
              </p>

              <div className="space-y-6">
                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 1: Define Your Goals</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    What are you investing for? Retirement? A home? Education? Your goals affect your strategy.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 2: Determine Your Time Horizon</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    When will you need the money? Your time horizon affects your risk tolerance and allocation.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 3: Assess Your Risk Tolerance</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    How comfortable are you with market fluctuations? Your risk tolerance affects your allocation.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 4: Determine Your Asset Allocation</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Based on your goals, time horizon, and risk tolerance, determine your target allocation.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 5: Select Specific Investments</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Choose specific investments (index funds, ETFs, individual stocks) that align with your allocation.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 6: Implement Your Strategy</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Open accounts, fund them, and begin investing according to your plan.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 7: Monitor and Rebalance</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    Monitor your portfolio regularly and rebalance annually to maintain your target allocation.
                  </p>
                </div>

                <div className="border-l-4 border-[#1E3A5F] pl-6">
                  <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Step 8: Adjust as Needed</h3>
                  <p className="text-lg leading-relaxed text-zinc-700">
                    As your life circumstances change, adjust your strategy accordingly.
                  </p>
                </div>
              </div>

              {/* Conclusion */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Conclusion: From Strategy to Success</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The difference between random investing and strategic investing is significant. A well-designed investment strategy aligned with your goals, time horizon, and risk tolerance can help you build lasting wealth.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                The key is to start with a clear strategy, implement it consistently, and adjust as your life circumstances change. Don't chase performance. Don't try to time the market. Don't panic during downturns. Stick with your strategy.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Over decades, this disciplined approach can result in substantial wealth accumulation. The power of compound returns, combined with consistent investing and appropriate diversification, is one of the most powerful wealth-building tools available.
              </p>

              {/* Getting Started with Advisor Giant */}
              <div className="mt-12 rounded-xl bg-gradient-to-r from-[#1E3A5F] to-[#2C5282] p-8 text-white">
                <h2 className="mb-4 text-3xl font-bold">Getting Started with Advisor Giant</h2>
                <p className="mb-6 text-lg">
                  If you're ready to develop a comprehensive investment strategy but aren't sure where to start, Advisor Giant can connect you with an investment advisor who can help. Our network includes experienced advisors who can:
                </p>
                <ul className="mb-6 space-y-2 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Analyze your situation and goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Develop a strategic asset allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Build a diversified portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Implement tax-efficient strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Provide ongoing management and advice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-1">•</span>
                    <span>Help you stay disciplined during market volatility</span>
                  </li>
                </ul>
                <h3 className="mb-4 text-2xl font-bold">The process is simple:</h3>
                <ol className="mb-6 space-y-2 text-lg list-decimal list-inside">
                  <li>Visit Advisor Giant and select "Investing"</li>
                  <li>Describe your situation (goals, time horizon, risk tolerance, etc.)</li>
                  <li>Get matched with an investment advisor in your area</li>
                  <li>Connect and consult about your investment strategy needs</li>
                </ol>
                <p className="mb-6 text-lg">
                  Within 48 hours, you'll be connected with a qualified advisor who can help you develop and implement a strategic investment plan.
                </p>
                <Link
                  href="/advisor"
                  className="inline-flex items-center justify-center rounded-xl bg-[#C13741] px-8 py-4 text-lg font-semibold text-white hover:bg-[#D94651] transition-all"
                >
                  Find an Investment Advisor
                </Link>
              </div>

              {/* Final Conclusion */}
              <h2 className="mt-12 text-3xl font-bold text-[#1E3A5F] mb-6">Conclusion: Your Path to Lasting Wealth</h2>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                Building lasting wealth requires more than just buying stocks and hoping they go up. It requires a strategic approach: clear goals, appropriate asset allocation, diversification, disciplined rebalancing, and the discipline to stick with your plan through market ups and downs.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700">
                This is not complicated. It's not sexy. It won't make you rich overnight. But it works. Over decades, this approach has helped millions of investors build substantial wealth.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700 font-semibold">
                Start today. Develop your strategy. Implement it consistently. Stay disciplined. Your future self will thank you.
              </p>

              <p className="text-lg mb-6 leading-relaxed text-zinc-700 font-semibold">
                Ready to develop your investment strategy? Connect with an investment advisor through Advisor Giant today.
              </p>

              {/* Disclaimer */}
              <div className="mt-12 rounded-lg bg-zinc-50 p-6 text-sm text-zinc-600">
                <h3 className="mb-3 text-base font-bold text-[#1E3A5F]">Disclaimer</h3>
                <p className="leading-relaxed">
                  Advisor Giant is a matching service connecting consumers with independent investment professionals. Results may vary. This is not investment advice. The information provided in this article is for educational purposes only and should not be construed as specific investment recommendations. Past performance does not guarantee future results. All investments carry risk, including potential loss of principal. Asset allocation and diversification do not guarantee profit or protect against loss. Always consult with qualified financial professionals before making investment decisions. The examples and scenarios provided are for illustrative purposes only and do not guarantee specific outcomes or returns. Historical returns mentioned are based on historical data and are not guarantees of future performance.
                </p>
              </div>

              {/* About */}
              <div className="mt-6 rounded-lg bg-[#F0F4F8] p-6 text-sm text-zinc-700">
                <h3 className="mb-3 text-base font-bold text-[#1E3A5F]">About the Author</h3>
                <p className="leading-relaxed">
                  Advisor Giant connects individuals with investment advisors who can help them develop strategic investment plans, build diversified portfolios, and achieve their financial goals. Whether you're a beginning investor, approaching retirement, or seeking comprehensive investment management, our network of verified specialists can help. Learn more at AdvisorGiant.com.
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
                <h3 className="mb-2 text-lg font-bold text-[#1E3A5F]">Build Lasting Wealth</h3>
                <p className="text-sm text-zinc-600">
                  Connect with verified investment advisors who can help you develop a strategic portfolio
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
                    <span>Verified fiduciary advisors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="h-4 w-4 text-[#C13741] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Comprehensive investment strategies</span>
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
                    <span>Personalized portfolio design</span>
                  </li>
                </ul>
              </div>

              {/* Key Takeaways */}
              <div className="rounded-xl bg-zinc-50 p-6 border border-zinc-200">
                <h3 className="mb-3 text-lg font-bold text-[#1E3A5F]">Key Takeaways</h3>
                <ul className="space-y-2 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Asset allocation determines 90% of portfolio performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Diversification across asset classes, sectors, and geographies is essential</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Rebalance annually to maintain target allocation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Adjust your strategy as you move through different life stages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C13741] mt-0.5">•</span>
                    <span>Avoid common mistakes like chasing performance and panic selling</span>
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
