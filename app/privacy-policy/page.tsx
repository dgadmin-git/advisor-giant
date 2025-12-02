import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-zinc-50 py-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-2">
            Privacy Policy
          </h1>
          <p className="text-zinc-600 mb-2">Operated by Giant Partners, Inc., a California Corporation</p>
          <p className="text-zinc-600 mb-2">Doing Business As (&quot;DBA&quot;) Advisor Giant</p>
          <p className="text-zinc-500 mb-6">Last Updated: December 1, 2025</p>

          <p className="text-zinc-700 mb-4">
            Welcome to AdvisorGiant.com (&quot;Site&quot;). This Privacy Policy explains how <strong>Giant Partners, Inc., doing business as Advisor Giant</strong> (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) collects, uses, shares, and protects information submitted on this Site for the purpose of connecting consumers with financial advisors, retirement services, or related offerings.
          </p>
          <p className="text-zinc-700 mb-8">
            By using this Site, you agree to the practices described in this Privacy Policy.
          </p>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">1. Information We Collect</h2>
            <p className="text-zinc-700 mb-4">We collect information in two ways:</p>
            <p className="text-zinc-700 mb-2"><strong>(1)</strong> Information you submit directly</p>
            <p className="text-zinc-700 mb-6"><strong>(2)</strong> Information collected automatically when you visit the Site</p>

            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">1.1 Information You Provide</h3>
            <p className="text-zinc-700 mb-4">When you submit a request on AdvisorGiant.com, we may collect:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-6">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Age range</li>
              <li>Types of retirement or investment accounts</li>
              <li>Estimated household income (ranges only)</li>
              <li>State of residence</li>
              <li>Financial preferences or goals (if provided)</li>
              <li>Any additional information you voluntarily submit</li>
            </ul>
            <p className="text-zinc-700 mb-6">
              We do <strong>not</strong> request Social Security Numbers, account numbers, banking information, or sensitive personal details.
            </p>

            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">1.2 Information Automatically Collected</h3>
            <p className="text-zinc-700 mb-4">When you visit the Site, we automatically collect:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-6">
              <li>IP address</li>
              <li>Device type, browser type, OS</li>
              <li>Pages visited</li>
              <li>Time on site</li>
              <li>Navigation paths, clicks, scroll behavior</li>
              <li>General location (approximate)</li>
              <li>Cookies & tracking identifiers</li>
              <li>Session metadata</li>
            </ul>

            <p className="text-zinc-700 mb-4">We use industry-standard technologies to collect this information, including:</p>

            <div className="mb-4">
              <p className="font-semibold text-zinc-800">Microsoft Clarity</p>
              <p className="text-zinc-700">Used to understand anonymous behavioral patterns such as clicks, scroll depth, and engagement. Clarity <strong>does not</strong> capture form input fields or personal information.</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-zinc-800">TrustedForm (ActiveProspect)</p>
              <p className="text-zinc-700">Used to certify your form submission for legal and compliance verification. TrustedForm may collect metadata and session-level info but <strong>does not</strong> capture your personal data. A certificate may be shared with the financial advisor who receives your lead.</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-zinc-800">HubSpot CRM</p>
              <p className="text-zinc-700">Used solely to store lead submissions. HubSpot tracking cookies are <strong>not enabled</strong> on this Site.</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-zinc-800">Meta (Facebook) Pixel & Hashed Data Uploads</p>
              <p className="text-zinc-700">We use the Meta Pixel for advertising measurement and optimization. We may upload <strong>hashed</strong> email and phone numbers to create custom or lookalike audiences.</p>
            </div>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">2. How We Use Your Information</h2>
            <p className="text-zinc-700 mb-4">We use information collected from you to:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Match you with a financial advisor licensed or operating in your state</li>
              <li>Provide your information to <strong>exactly one advisor partner</strong></li>
              <li>Allow that advisor to contact you</li>
              <li>Improve marketing, advertising, and website performance</li>
              <li>Verify lead authenticity and prevent fraudulent submissions</li>
              <li>Respond to your inquiries</li>
              <li>Comply with legal or regulatory obligations</li>
            </ul>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">3. How We Share Your Information</h2>
            <p className="text-zinc-700 mb-6">Your information is shared only in the following ways:</p>

            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">3.1 One Assigned Financial Advisor</h3>
            <p className="text-zinc-700 mb-4">Your information is shared with <strong>one</strong> financial advisor or advisory company based on:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>Your state</li>
              <li>Their licensing and coverage</li>
              <li>Service availability</li>
            </ul>
            <p className="text-zinc-700 mb-4">The assigned advisor may:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>Contact you</li>
              <li>Store your information in their CRM</li>
              <li>Use your information for their own marketing campaigns</li>
              <li>Retain your information under their own privacy policy</li>
            </ul>
            <p className="text-zinc-700 mb-6">We do <strong>not</strong> control how advisors use or store your information once transferred.</p>

            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">3.2 Service Providers</h3>
            <p className="text-zinc-700 mb-4">We may share information with trusted third-party vendors that assist in operating the Site, including:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>HubSpot (CRM)</li>
              <li>TrustedForm (lead certification)</li>
              <li>Microsoft Clarity (analytics)</li>
              <li>Meta (advertising)</li>
              <li>Hosting and security vendors</li>
            </ul>
            <p className="text-zinc-700 mb-6">These companies may process information solely on our behalf.</p>

            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">3.3 Legal Obligations</h3>
            <p className="text-zinc-700 mb-4">We may disclose information when required by:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-6">
              <li>Subpoena</li>
              <li>Court order</li>
              <li>Law enforcement</li>
              <li>Regulatory requirements</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">3.4 We Do NOT Sell to Unrelated Third Parties</h3>
            <p className="text-zinc-700 mb-4">We do not sell your personal information to unrelated marketing companies. We only transfer lead data to:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>One selected advisor partner</li>
              <li>Service providers necessary to operate the Site</li>
            </ul>
            <p className="text-zinc-700">Under California law, some advertising activity may be considered &quot;sharing,&quot; and you have the right to opt out (see Section 7).</p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">4. Marketing Communications & TCPA Consent</h2>
            <p className="text-zinc-700 mb-4">By submitting your information on AdvisorGiant.com, you provide written consent for:</p>
            <p className="text-zinc-700 mb-2"><strong>Giant Partners, Inc. (DBA Advisor Giant)</strong></p>
            <p className="text-zinc-700 mb-2">AND</p>
            <p className="text-zinc-700 mb-4"><strong>The financial advisor you are matched with</strong></p>
            <p className="text-zinc-700 mb-4">to contact you via:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>Manual phone calls</li>
              <li>Manual text messages</li>
              <li>Automated calls (autodialer systems)</li>
              <li>Automated SMS messages</li>
              <li>Prerecorded or artificial voice messages</li>
              <li>Email messages</li>
            </ul>
            <p className="text-zinc-700 mb-2">These communications may include marketing or promotional content.</p>
            <p className="text-zinc-700 mb-2"><strong>Consent is not a condition of purchase.</strong></p>
            <p className="text-zinc-700 mb-2">Message & data rates may apply.</p>
            <p className="text-zinc-700">You may opt out at any time.</p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">5. Cookies, Pixels & Tracking</h2>
            <p className="text-zinc-700 mb-4">We use cookies and tracking tools for:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>Analytics</li>
              <li>Retargeting</li>
              <li>Advertising optimization</li>
              <li>Site performance</li>
              <li>Fraud prevention</li>
            </ul>
            <p className="text-zinc-700">You may disable cookies in your browser settings.</p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">6. Your Rights (U.S. Users)</h2>
            <p className="text-zinc-700 mb-4">You may:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>Request access</li>
              <li>Request deletion</li>
              <li>Request correction</li>
              <li>Opt out of marketing</li>
              <li>Opt out of sale or sharing of personal information</li>
            </ul>
            <p className="text-zinc-700">
              To exercise your rights, email:{" "}
              <a href="mailto:privacy@advisorgiant.com" className="text-[#C13741] hover:underline font-semibold">
                privacy@advisorgiant.com
              </a>
            </p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">7. California Privacy Rights (CPRA)</h2>
            <p className="text-zinc-700 mb-4">California residents have the right to:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>Access their personal information</li>
              <li>Request deletion</li>
              <li>Request correction</li>
              <li>Opt out of &quot;sale&quot; or &quot;sharing&quot;</li>
              <li>Non-discrimination for exercising rights</li>
            </ul>
            <p className="text-zinc-700 mb-4">
              You may opt out of advertising-related &quot;sharing&quot; at:{" "}
              <Link href="/do-not-sell" className="text-[#C13741] hover:underline font-semibold">
                advisorgiant.com/do-not-sell
              </Link>
            </p>
            <p className="text-zinc-700">We do <strong>not</strong> collect or process &quot;sensitive personal information&quot; as defined by CPRA.</p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">8. Data Retention</h2>
            <p className="text-zinc-700 mb-4">We retain:</p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>Lead data as long as necessary for business purposes or legal requirements</li>
              <li>Analytics data according to internal policies</li>
              <li>Communications (emails) for recordkeeping</li>
            </ul>
            <p className="text-zinc-700">Advisors may retain information independently under their own policies.</p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">9. Data Security</h2>
            <p className="text-zinc-700 mb-2">We use reasonable administrative, technical, and physical safeguards to protect your information.</p>
            <p className="text-zinc-700">However, no online system is completely secure.</p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-zinc-700 mb-2">This Site is not intended for anyone under 18.</p>
            <p className="text-zinc-700">We do not knowingly collect information from minors.</p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">11. External Websites</h2>
            <p className="text-zinc-700 mb-2">We may link to third-party sites.</p>
            <p className="text-zinc-700">We are not responsible for their content or privacy practices.</p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">12. Updates to This Policy</h2>
            <p className="text-zinc-700 mb-2">We may update this Privacy Policy periodically.</p>
            <p className="text-zinc-700">Changes will be reflected with a new &quot;Last Updated&quot; date.</p>
          </section>

          <hr className="my-8 border-zinc-200" />

          <section>
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">13. Contact Us</h2>
            <p className="text-zinc-700 mb-4">For privacy questions or requests, contact:</p>
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
  );
}
