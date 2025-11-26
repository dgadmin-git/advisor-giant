import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#091c3d] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">AdvisorGiant</h3>
            <p className="text-sm text-zinc-300">
              Connecting High Net Worth Investors With Elite Retirement Strategy Specialists
            </p>
          </div>

          {/* Column 2 - For Investors */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              For Investors
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/quiz" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Find An Advisor
                </Link>
              </li>
              <li>
                <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Roth Calculator
                </Link>
              </li>
              <li>
                <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  2026 Guide
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - For Advisors */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              For Advisors
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Join Our Network
                </Link>
              </li>
              <li>
                <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  14M Database Access
                </Link>
              </li>
              <li>
                <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Advisor Benefits
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Advisor Login
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/advisor" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-zinc-300 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
            <p>© 2025 AdvisorGiant. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Form ADV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
