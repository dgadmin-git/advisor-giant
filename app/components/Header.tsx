import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-[#091c3d] sticky top-0 z-50 shadow-lg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-24 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Advisor Giant"
              width={270}
              height={68}
              priority
              className="h-auto"
              style={{ width: '270px' }}
            />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-zinc-200 font-medium transition-colors">
              Home
            </Link>
            <Link href="/advisor" className="text-white hover:text-zinc-200 font-medium transition-colors">
              For Advisors
            </Link>
            <Link href="/community" className="text-white hover:text-zinc-200 font-medium transition-colors">
              For Investors
            </Link>
            <Link href="/contact" className="text-white hover:text-zinc-200 font-medium transition-colors">
              Contact
            </Link>
            <Link
              href="/quiz"
              className="rounded-lg bg-[#C13741] px-6 py-2.5 text-white font-semibold hover:bg-[#D94651] transition-colors shadow-lg"
            >
              Get Matched With An Advisor
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
