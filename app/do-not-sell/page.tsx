import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DoNotSell() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-[#1E3A5F] mb-2">
              DO NOT SELL OR SHARE MY PERSONAL INFORMATION
            </h1>
            <p className="text-zinc-600 mb-2"><strong>Operated by Giant Partners, Inc. (DBA Advisor Giant)</strong></p>
            <p className="text-zinc-500 mb-8"><strong>Last Updated:</strong> December 1, 2025</p>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Opt-Out Options</h2>
              <p className="text-zinc-700 mb-6">
                To exercise your privacy rights and request that we stop selling or sharing your personal information, choose one of the options below:
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2 underline">1. California Residents</h3>
                <p className="text-zinc-700 mb-2">
                  Exercise Your California Consumer Data Opt-Out Privacy Rights –{" "}
                  <a
                    href="https://giantpartners.com/personal-information-request/"
                    className="text-[#C13741] hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </p>
                <p className="text-zinc-500 text-sm">https://giantpartners.com/personal-information-request/</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2 underline">2. All Other U.S. Residents</h3>
                <p className="text-zinc-700 mb-2">
                  Exercise Your Consumer Data Opt-Out Privacy Rights (All States) –{" "}
                  <a
                    href="https://giantpartners.com/do-not-sell-my-personal-info-all-other-states/"
                    className="text-[#C13741] hover:underline font-semibold"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Click Here
                  </a>
                </p>
                <p className="text-zinc-500 text-sm">https://giantpartners.com/do-not-sell-my-personal-info-all-other-states/</p>
              </div>

              <p className="text-zinc-700">
                If you prefer, you may also submit your opt-out request via email:{" "}
                <a href="mailto:privacy@advisorgiant.com" className="text-[#C13741] hover:underline font-semibold">
                  privacy@advisorgiant.com
                </a>
              </p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Your Rights Under the CPRA</h2>
              <p className="text-zinc-700 mb-4">
                Under the California Privacy Rights Act (CPRA), California residents may:
              </p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
                <li>Opt out of the &quot;sale&quot; or &quot;sharing&quot; of personal information</li>
                <li>Request access to personal information</li>
                <li>Request deletion</li>
                <li>Request correction</li>
                <li>Request to limit use of sensitive personal information (we do not collect sensitive data)</li>
                <li>Exercise rights without discrimination</li>
              </ul>
              <p className="text-zinc-700 mt-4">
                Full details are available in our{" "}
                <Link href="/privacy-policy" className="text-[#C13741] hover:underline font-semibold">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">How to Submit a Valid Opt-Out Request</h2>
              <p className="text-zinc-700 mb-4">When submitting your request, please provide:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
                <li>Your full name</li>
                <li>The phone number and email address used on our form</li>
                <li>Whether your request is for California or for another U.S. state</li>
              </ul>
              <p className="text-zinc-700 mt-4">This helps us locate and process your request.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">What We Do After You Opt Out</h2>
              <p className="text-zinc-700 mb-4">Once your request is verified, we will:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
                <li>Stop sharing your information with advertising partners for targeted ads</li>
                <li>Stop transferring your information to advisor partners except when necessary to fulfill services you initiated</li>
                <li>Confirm that your request is processed within the legally required time frame</li>
              </ul>
              <p className="text-zinc-700 mt-4">Previously shared information may remain with third parties as allowed by law.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Authorized Agents</h2>
              <p className="text-zinc-700 mb-4">If an authorized agent submits on your behalf:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
                <li>They must provide written authorization</li>
                <li>We may require verification of your identity</li>
              </ul>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Contact Information</h2>
              <p className="text-zinc-700 mb-4">For questions, appeals, or additional requests, contact:</p>
              <p className="text-zinc-700">
                <a href="mailto:privacy@advisorgiant.com" className="text-[#C13741] hover:underline font-semibold">
                  privacy@advisorgiant.com
                </a>
              </p>
              <p className="text-zinc-700 mt-2">
                Giant Partners, Inc. (DBA Advisor Giant)<br />
                1461 Lawrence Dr #2<br />
                Thousand Oaks, CA 91362
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
