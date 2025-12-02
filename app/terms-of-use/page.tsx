import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfUse() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-zinc-50 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-[#1E3A5F] mb-2">
              Terms of Use
            </h1>
            <p className="text-zinc-500 mb-6"><strong>Last Update</strong> February 6, 2025</p>

            <p className="text-zinc-700 mb-4">
              Welcome to go.advisorgiant.com (&quot;Site&quot;). These Terms of Use (&quot;Terms&quot;) govern your use of the Site, operated by <strong>Advisor Giant</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using this Site, you agree to these Terms. If you do not agree, you must not use the Site.
            </p>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">1. Eligibility &amp; User Responsibilities</h2>
              <p className="text-zinc-700 mb-4">You must be at least <strong>18 years old</strong> to use this Site.</p>
              <p className="text-zinc-700 mb-4">By using the Site, you represent and warrant that:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li>You are located in the United States.</li>
                <li>The information you provide is true, accurate, and complete.</li>
                <li>You are submitting your information voluntarily and with full consent.</li>
                <li>You have the authority to enter into this agreement.</li>
              </ul>
              <p className="text-zinc-700">You agree <strong>not</strong> to use the Site for any unlawful, fraudulent, or abusive purpose.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">2. Purpose of the Site</h2>
              <p className="text-zinc-700 mb-4">
                Advisor Giant is <strong>not</strong> a financial advisory firm and does not provide financial, legal, tax, Medicare, or insurance advice.
              </p>
              <p className="text-zinc-700 mb-4">
                This Site operates as a <strong>lead-referral platform</strong>. When you submit information, we may:
              </p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li>Match you with <strong>one</strong> independent financial advisor serving your state</li>
                <li>Share your information with that advisor</li>
                <li>Allow that advisor to contact you directly</li>
              </ul>
              <p className="text-zinc-700">We do <strong>not</strong> endorse, guarantee, or control the advice or services provided by any third-party financial advisor.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">3. No Financial Advice or Professional Services</h2>
              <p className="text-zinc-700 mb-4">
                All content on this Site is for <strong>informational and marketing purposes only</strong>.
              </p>
              <p className="text-zinc-700 mb-4">Nothing on the Site:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li>Constitutes financial advice</li>
                <li>Creates a fiduciary relationship</li>
                <li>Guarantees investment outcomes or performance</li>
                <li>Should be interpreted as individualized guidance</li>
              </ul>
              <p className="text-zinc-700">Advisor Giant is <strong>not responsible</strong> for decisions you make based on information received from a third-party advisor.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">4. Communications Consent (TCPA)</h2>
              <p className="text-zinc-700 mb-4">By submitting your information, you agree that:</p>
              <p className="text-zinc-700 mb-4">
                <strong>Advisor Giant AND the financial advisor you are matched with</strong> may contact you via:
              </p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li>Manual phone calls</li>
                <li>Manual text messages</li>
                <li>Automated SMS messages</li>
                <li>Autodialed or automated phone calls</li>
                <li>Prerecorded or artificial voice messages</li>
                <li>Email messages</li>
              </ul>
              <p className="text-zinc-700 mb-2">These communications may include marketing messages.</p>
              <p className="text-zinc-700 mb-2"><strong>Consent is not required to purchase any goods or services.</strong></p>
              <p className="text-zinc-700 mb-2">Message &amp; data rates may apply.</p>
              <p className="text-zinc-700">You may opt out at any time.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">5. Use of Third-Party Services &amp; Tools</h2>
              <p className="text-zinc-700 mb-4">
                To operate the Site, process leads, and improve performance, we use third-party tools, including:
              </p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li><strong>Microsoft Clarity</strong> (anonymous behavioral analytics + session replays)</li>
                <li><strong>HubSpot CRM</strong> (lead storage only; no HubSpot tracking scripts)</li>
                <li><strong>TrustedForm</strong> (lead certification; metadata only)</li>
                <li><strong>Meta/Facebook Pixel</strong> (advertising optimization, hashed audience uploads)</li>
              </ul>
              <p className="text-zinc-700 mb-4">By using the Site, you acknowledge that:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
                <li>These third parties may collect, process, or store certain technical data</li>
                <li>We are <strong>not responsible</strong> for the privacy practices or terms of these providers</li>
                <li>You should review their respective Terms and Privacy Policies as applicable</li>
              </ul>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">6. Relationship with Third-Party Advisors</h2>
              <p className="text-zinc-700 mb-4">When we share your information with an approved advisor, that advisor:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li>Operates independently from Advisor Giant</li>
                <li>Maintains their <strong>own privacy policy, data retention schedule, and communication practices</strong></li>
                <li>May store and use your information for their <strong>own marketing campaigns</strong></li>
                <li>Is solely responsible for the financial advice or information they provide</li>
              </ul>
              <p className="text-zinc-700 mb-4">Advisor Giant is <strong>not responsible</strong> for:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li>The accuracy of advice provided by advisors</li>
                <li>The conduct, performance, or actions of advisors</li>
                <li>Any services rendered after the referral is made</li>
                <li>Outcome of financial guidance or recommendations</li>
              </ul>
              <p className="text-zinc-700">We do <strong>not</strong> control third-party advisors and do <strong>not</strong> guarantee any results.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">7. Intellectual Property</h2>
              <p className="text-zinc-700 mb-4">
                All content, branding, design, text, graphics, logos, and functionality on this Site belong to Advisor Giant and are protected by United States intellectual property laws.
              </p>
              <p className="text-zinc-700">You may <strong>not</strong> copy, reproduce, distribute, or modify any content without our written consent.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">8. Prohibited Activities</h2>
              <p className="text-zinc-700 mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li>Interfere with Site operations</li>
                <li>Attempt unauthorized access to the Site or systems</li>
                <li>Use the Site to harvest, scrape, or collect data unlawfully</li>
                <li>Submit fraudulent or inaccurate information</li>
                <li>Engage in any activity that harms the Site or its users</li>
              </ul>
              <p className="text-zinc-700">We may terminate or restrict access for any misuse.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">9. Disclaimers</h2>
              <p className="text-zinc-700 mb-4">
                The Site is provided <strong>&quot;AS IS&quot;</strong> and <strong>&quot;AS AVAILABLE.&quot;</strong>
              </p>
              <p className="text-zinc-700 mb-4">We disclaim all warranties, express or implied, including but not limited to:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li>Accuracy, reliability, or completeness of information</li>
                <li>Fitness for a particular purpose</li>
                <li>Guarantees regarding outcomes from referred advisors</li>
                <li>Errors, interruptions, or technical issues</li>
              </ul>
              <p className="text-zinc-700 mb-4">We do not guarantee that:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
                <li>Any advisor will contact you</li>
                <li>Any financial outcome will be achieved</li>
                <li>The Site will be uninterrupted or error-free</li>
              </ul>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">10. Limitation of Liability</h2>
              <p className="text-zinc-700 mb-4">To the fullest extent permitted by law:</p>
              <p className="text-zinc-700 mb-4">Advisor Giant is <strong>not liable</strong> for:</p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
                <li>Any indirect, incidental, consequential, or punitive damages</li>
                <li>Loss of profits, data, or business</li>
                <li>Damages resulting from reliance on third-party advisors</li>
                <li>Errors or issues caused by third-party tools, technology providers, or partners</li>
                <li>Any communication made by the advisor you are matched with</li>
              </ul>
              <p className="text-zinc-700">Our total liability to you will not exceed <strong>$100</strong> or the amount you paid to use the Site (whichever is less).</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">11. Indemnification</h2>
              <p className="text-zinc-700 mb-4">
                You agree to indemnify and hold Advisor Giant harmless against any claims, losses, damages, liabilities, or expenses arising from:
              </p>
              <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
                <li>Your use of the Site</li>
                <li>Your submission of information</li>
                <li>Communications with third-party advisors</li>
                <li>Your violation of these Terms</li>
              </ul>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">12. Governing Law</h2>
              <p className="text-zinc-700 mb-4">
                These Terms are governed by the laws of the <strong>State of Delaware</strong>, without regard to conflict-of-law principles.
              </p>
              <p className="text-zinc-700">
                Any disputes must be resolved in <strong>Delaware state or federal courts</strong>, and you consent to jurisdiction there.
              </p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">13. Changes to Terms</h2>
              <p className="text-zinc-700 mb-2">We may update or modify these Terms at any time.</p>
              <p className="text-zinc-700 mb-2">Revisions will be posted with a new &quot;Last Updated&quot; date.</p>
              <p className="text-zinc-700">Your continued use of the Site means you accept the updated Terms.</p>
            </section>

            <hr className="my-8 border-zinc-200" />

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">14. Contact Us</h2>
              <p className="text-zinc-700 mb-4">For any questions about these Terms:</p>
              <p className="text-zinc-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:privacy@advisorgiant.com" className="text-[#C13741] hover:underline font-semibold">
                  privacy@advisorgiant.com
                </a>
              </p>
              <p className="text-zinc-700 mt-4">
                <strong>Mailing Address:</strong><br />
                Advisor Giant<br />
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
