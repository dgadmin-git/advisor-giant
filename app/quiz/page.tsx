'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

type FormData = {
  hasAdvisor: string;
  age: string;
  retirementPlan: string;
  businessOwner: string;
  investableAssets: string;
  zipCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consentTCPA: boolean;
  consentPrivacy: boolean;
};

export default function QuizPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showLoading, setShowLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    hasAdvisor: '',
    age: '',
    retirementPlan: '',
    businessOwner: '',
    investableAssets: '',
    zipCode: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    consentTCPA: false,
    consentPrivacy: false,
  });

  const totalSteps = 8;

  // Browser back button support
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && typeof event.state.step === 'number') {
        setCurrentStep(event.state.step);
        setShowLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Set initial state
    window.history.replaceState({ step: 1 }, '', window.location.href);

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const updateFormData = (field: keyof FormData, value: string, autoAdvance: boolean = false) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Auto-advance to next step after a short delay for single-select questions
    if (autoAdvance) {
      setTimeout(() => {
        nextStep();
      }, 400);
    }
  };

  const nextStep = () => {
    // Show loading page after email step (step 8)
    if (currentStep === 8) {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setCurrentStep(9);
        window.history.pushState({ step: 9 }, '', window.location.href);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 3000);
    } else if (currentStep < 9) {
      const nextStepNum = currentStep + 1;
      setCurrentStep(nextStepNum);
      window.history.pushState({ step: nextStepNum }, '', window.location.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      const prevStepNum = currentStep - 1;
      setCurrentStep(prevStepNum);
      window.history.pushState({ step: prevStepNum }, '', window.location.href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.hasAdvisor !== '';
      case 2:
        return formData.age !== '';
      case 3:
        return formData.retirementPlan !== '';
      case 4:
        return formData.businessOwner !== '';
      case 5:
        return formData.investableAssets !== '';
      case 6:
        return formData.zipCode !== '' && formData.zipCode.length >= 5;
      case 7:
        return formData.firstName !== '' && formData.lastName !== '';
      case 8:
        return formData.email !== '';
      case 9:
        return formData.phone !== '' && formData.consentTCPA && formData.consentPrivacy;
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          formType: 'quiz-completion',
          source: 'Advisor Quiz',
          quizData: {
            do_you_currently_have_a_financial_advisor: formData.hasAdvisor,
            how_old_are_you: formData.age,
            when_do_you_plan_to_retire: formData.retirementPlan,
            are_you_a_business_owner: formData.businessOwner,
            please_estimate_your_total_investable_assets: formData.investableAssets,
            zip_code: formData.zipCode
          }
        }),
      });

      // Redirect to thank you page
      router.push('/quiz/thank-you');
    } catch (error) {
      // Redirect to thank you page even on error
      router.push('/quiz/thank-you');
    }
  };

  const getStepHeader = () => {
    if (currentStep === 7) return "2 Steps Away!";
    if (currentStep === 8) return "1 Step Away!";
    if (currentStep === 9) return "Last Step!";
    return "Find your financial advisor match";
  };

  // Loading page
  if (showLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#F0F4F8]">
        <Header />

        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="mb-8">
            <h1 className="mb-6 text-center text-4xl font-bold text-[#1E3A5F]">1 Step Away!</h1>
            <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
              <div className="h-full bg-gradient-to-r from-[#5B4FE9] to-[#7C72FF]" style={{ width: '90%' }} />
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-12 shadow-xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-[#1E3A5F]">
              Please wait as we analyze your information
            </h2>

            <div className="mb-8">
              <div className="mx-auto h-2 w-64 overflow-hidden rounded-full bg-zinc-200">
                <div className="h-full animate-pulse bg-gradient-to-r from-green-500 to-green-400" style={{ width: '60%' }} />
              </div>
            </div>

            <div className="mb-8 grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl bg-zinc-100 p-6">
                  <div className="mx-auto mb-4 h-32 w-32 rounded-full bg-zinc-300" style={{ filter: 'blur(8px)' }} />
                  <div className="h-4 bg-zinc-200 rounded mb-2" />
                  <div className="h-3 bg-zinc-200 rounded" />
                </div>
              ))}
            </div>

            <p className="mb-8 text-zinc-600">
              Our network includes professional financial advisors who may be a good fit for your goals.
            </p>

            <p className="mb-6 font-semibold text-zinc-700">Some of our partners include:</p>

            <div className="flex items-center justify-center gap-8 flex-wrap opacity-60">
              <div className="text-sm font-bold text-zinc-600">ENCORE</div>
              <div className="text-sm font-bold text-zinc-600">Retirable</div>
              <div className="text-sm font-bold text-zinc-600">Facet</div>
              <div className="text-sm font-bold text-zinc-600">moneypickle</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F0F4F8]">
      <Header />

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Progress Header */}
        <div className="mb-8">
          <h1 className="mb-6 text-center text-3xl font-bold text-[#1E3A5F]">{getStepHeader()}</h1>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
            <div
              className="h-full bg-gradient-to-r from-[#5B4FE9] to-[#7C72FF] transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Quiz Card */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl sm:p-12">
          {/* Step 1: Has Advisor */}
          {currentStep === 1 && (
            <div className="space-y-8">
              <h2 className="text-center text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl">
                Do you currently have a financial advisor?
              </h2>
              <div className="space-y-4">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('hasAdvisor', option.value, true)}
                    className={`w-full rounded-xl border-2 p-6 text-left text-xl font-medium transition-all ${
                      formData.hasAdvisor === option.value
                        ? 'border-[#5B4FE9] bg-[#F3F2FF]'
                        : 'border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Age */}
          {currentStep === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-center text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl">
                  How old are you?
                </h2>
                <p className="text-center text-lg text-zinc-600">
                  Financial needs change over time, and we want to provide the best advice for your stage of life. Our services are available to those 18 and older.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { value: '30-under', label: '30 and under' },
                  { value: '31-40', label: '31-40' },
                  { value: '41-50', label: '41-50' },
                  { value: '51-60', label: '51-60' },
                  { value: '61-over', label: '61 and over' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('age', option.value, true)}
                    className={`w-full rounded-xl border-2 p-6 text-left text-xl font-medium transition-all ${
                      formData.age === option.value
                        ? 'border-[#5B4FE9] bg-[#F3F2FF]'
                        : 'border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Retirement */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <h2 className="text-center text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl">
                When do you plan to retire?
              </h2>
              <div className="space-y-4">
                {[
                  { value: 'retired', label: 'I am currently retired' },
                  { value: 'less-1yr', label: 'In less than 1 year' },
                  { value: '1-5yrs', label: '1 - 5 years' },
                  { value: '6-10yrs', label: '6 - 10 years' },
                  { value: '11plus', label: '11+ years' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('retirementPlan', option.value, true)}
                    className={`w-full rounded-xl border-2 p-6 text-left text-xl font-medium transition-all ${
                      formData.retirementPlan === option.value
                        ? 'border-[#5B4FE9] bg-[#F3F2FF]'
                        : 'border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Business Owner */}
          {currentStep === 4 && (
            <div className="space-y-8">
              <h2 className="text-center text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl">
                Are you a business owner?
              </h2>
              <div className="space-y-4">
                {[
                  { value: 'yes', label: 'Yes' },
                  { value: 'no', label: 'No' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('businessOwner', option.value, true)}
                    className={`w-full rounded-xl border-2 p-6 text-left text-xl font-medium transition-all ${
                      formData.businessOwner === option.value
                        ? 'border-[#5B4FE9] bg-[#F3F2FF]'
                        : 'border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Investable Assets */}
          {currentStep === 5 && (
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-center text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl">
                  Please estimate your total investable assets.
                </h2>
                <p className="text-center text-lg text-zinc-600">
                  Include any investment accounts, retirement accounts, cash or cash equivalents
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { value: '10m-plus', label: 'More than $10M' },
                  { value: '2m-10m', label: '$2M - $10M' },
                  { value: '1m-2m', label: '$1M - $2M' },
                  { value: '500k-1m', label: '$500,000 - $1M' },
                  { value: '250k-500k', label: '$250,000 - $500,000' },
                  { value: 'less-250k', label: 'Less than $250,000' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('investableAssets', option.value, true)}
                    className={`w-full rounded-xl border-2 p-6 text-left text-xl font-medium transition-all ${
                      formData.investableAssets === option.value
                        ? 'border-[#5B4FE9] bg-[#F3F2FF]'
                        : 'border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Zip Code */}
          {currentStep === 6 && (
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-center text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl">
                  What is your zip code?
                </h2>
                <p className="text-center text-lg text-zinc-600">
                  We ask for your ZIP code to connect you with financial advisors who are familiar with your region and its financial landscape. At this time, we can only work with U.S. citizens.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <label htmlFor="zipCode" className="mb-2 block text-lg font-medium text-zinc-700">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => updateFormData('zipCode', e.target.value)}
                    className="w-full rounded-xl border-2 border-zinc-300 px-6 py-4 text-lg focus:border-[#5B4FE9] focus:outline-none"
                    placeholder="Zip Code"
                    maxLength={5}
                  />
                </div>
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all ${
                    canProceed()
                      ? 'bg-[#5B4FE9] hover:bg-[#4D42D7] shadow-lg'
                      : 'cursor-not-allowed bg-zinc-300'
                  }`}
                >
                  Next
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 7: Name */}
          {currentStep === 7 && (
            <div className="space-y-8">
              <h2 className="text-center text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl">
                What is your name?
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-lg font-medium text-zinc-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    className="w-full rounded-xl border-2 border-zinc-300 px-6 py-4 text-lg focus:border-[#5B4FE9] focus:outline-none"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-lg font-medium text-zinc-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    className="w-full rounded-xl border-2 border-zinc-300 px-6 py-4 text-lg focus:border-[#5B4FE9] focus:outline-none"
                    placeholder="Last Name"
                  />
                </div>
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all ${
                    canProceed()
                      ? 'bg-[#5B4FE9] hover:bg-[#4D42D7] shadow-lg'
                      : 'cursor-not-allowed bg-zinc-300'
                  }`}
                >
                  Next
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 8: Email */}
          {currentStep === 8 && (
            <div className="space-y-8">
              <div>
                <h2 className="mb-4 text-center text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl">
                  What is your email?
                </h2>
                <p className="text-center text-lg text-zinc-600">
                  We'll send important updates your way.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="mb-2 block text-lg font-medium text-zinc-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full rounded-xl border-2 border-zinc-300 px-6 py-4 text-lg focus:border-[#5B4FE9] focus:outline-none"
                    placeholder="Email"
                  />
                </div>
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className={`flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all ${
                    canProceed()
                      ? 'bg-[#5B4FE9] hover:bg-[#4D42D7] shadow-lg'
                      : 'cursor-not-allowed bg-zinc-300'
                  }`}
                >
                  Next
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 9: Phone Number (Last Step) */}
          {currentStep === 9 && (
            <div className="space-y-8">
              <h2 className="text-center text-4xl font-bold leading-tight text-[#1E3A5F] sm:text-5xl">
                What is your phone number?
              </h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="phone" className="mb-2 block text-lg font-medium text-zinc-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
                      <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      className="w-full rounded-xl border-2 border-zinc-300 px-6 py-4 pl-14 text-lg focus:border-[#5B4FE9] focus:outline-none"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentTCPA}
                      onChange={(e) => setFormData(prev => ({ ...prev, consentTCPA: e.target.checked }))}
                      className="mt-1 h-5 w-5 rounded border-zinc-300 text-[#5B4FE9] focus:ring-[#5B4FE9]"
                    />
                    <span className="text-sm text-zinc-600">
                      I consent to receive marketing and informational calls, emails, and text messages (including those using an automated dialer or prerecorded voice) from Advisor Giant and its financial partners at the phone number and email address I provide. Message and data rates may apply. I can opt out at any time by replying STOP. Consent is not required as a condition of purchase.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consentPrivacy}
                      onChange={(e) => setFormData(prev => ({ ...prev, consentPrivacy: e.target.checked }))}
                      className="mt-1 h-5 w-5 rounded border-zinc-300 text-[#5B4FE9] focus:ring-[#5B4FE9]"
                    />
                    <span className="text-sm text-zinc-600">
                      I have read and agree to the{" "}
                      <a href="/terms-of-use" target="_blank" className="text-[#5B4FE9] underline hover:text-[#4D42D7]">Terms of Use</a>
                      {" "}and{" "}
                      <a href="/privacy-policy" target="_blank" className="text-[#5B4FE9] underline hover:text-[#4D42D7]">Privacy Policy</a>.
                      For California residents, see our{" "}
                      <a href="/do-not-sell" target="_blank" className="text-[#5B4FE9] underline hover:text-[#4D42D7]">Do Not Sell</a> page.
                    </span>
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className={`flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-semibold text-white transition-all ${
                    canProceed()
                      ? 'bg-[#5B4FE9] hover:bg-[#4D42D7] shadow-lg'
                      : 'cursor-not-allowed bg-zinc-300'
                  }`}
                >
                  See Advisor Match
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Privacy Notice (bottom of all steps except phone and input steps) */}
          {currentStep < 6 && (
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span>We respect your privacy. Your information is stored securely.</span>
            </div>
          )}

          {/* Privacy Notice for input steps 6, 7, 8 */}
          {(currentStep === 6 || currentStep === 7 || currentStep === 8) && (
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span>We respect your privacy. Your information is stored securely.</span>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
