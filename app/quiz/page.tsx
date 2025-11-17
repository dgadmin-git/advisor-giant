'use client';

import Image from "next/image";
import { useState } from "react";

type FormData = {
  advisorType: string;
  aum: string;
  clientFocus: string[];
  growthGoal: string;
  challenges: string[];
  timeline: string;
  name: string;
  email: string;
  phone: string;
  firm: string;
};

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    advisorType: '',
    aum: '',
    clientFocus: [],
    growthGoal: '',
    challenges: [],
    timeline: '',
    name: '',
    email: '',
    phone: '',
    firm: '',
  });

  const totalSteps = 7;

  const updateFormData = (field: keyof FormData, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayValue = (field: 'clientFocus' | 'challenges', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.advisorType !== '';
      case 2:
        return formData.aum !== '';
      case 3:
        return formData.clientFocus.length > 0;
      case 4:
        return formData.growthGoal !== '';
      case 5:
        return formData.challenges.length > 0;
      case 6:
        return formData.timeline !== '';
      case 7:
        return formData.name !== '' && formData.email !== '' && formData.phone !== '';
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you! Your quiz results will be sent to your email.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F0F4F8]">
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Advisor Giant"
              width={200}
              height={50}
              className="h-auto w-40"
            />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-6 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="mb-3 flex items-center justify-between text-sm">
            <span className="font-semibold text-[#1E3A5F]">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-zinc-600">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
            <div
              className="h-full bg-gradient-to-r from-[#C13741] to-[#D94651] transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Quiz Card */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-xl sm:p-12">
          {/* Step 1: Advisor Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-[#1E3A5F]">
                  What best describes your practice?
                </h2>
                <p className="text-zinc-600">
                  Help us understand your current advisory setup
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'independent-ria', label: 'Independent RIA' },
                  { value: 'wirehouse', label: 'Wirehouse Advisor' },
                  { value: 'hybrid', label: 'Hybrid Advisor' },
                  { value: 'insurance-based', label: 'Insurance-Based Advisor' },
                  { value: 'team-practice', label: 'Team Practice' },
                  { value: 'solo-practitioner', label: 'Solo Practitioner' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('advisorType', option.value)}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                      formData.advisorType === option.value
                        ? 'border-[#C13741] bg-[#FEF2F3] text-[#1E3A5F]'
                        : 'border-zinc-200 hover:border-[#1E3A5F] hover:bg-[#F0F4F8]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option.label}</span>
                      {formData.advisorType === option.value && (
                        <svg className="h-6 w-6 text-[#C13741]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: AUM */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-[#1E3A5F]">
                  What are your current Assets Under Management?
                </h2>
                <p className="text-zinc-600">
                  This helps us match you with the right opportunities
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { value: '0-10m', label: '$0 - $10 Million' },
                  { value: '10m-50m', label: '$10M - $50 Million' },
                  { value: '50m-100m', label: '$50M - $100 Million' },
                  { value: '100m-250m', label: '$100M - $250 Million' },
                  { value: '250m-500m', label: '$250M - $500 Million' },
                  { value: '500m+', label: '$500 Million+' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('aum', option.value)}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                      formData.aum === option.value
                        ? 'border-[#C13741] bg-[#FEF2F3] text-[#1E3A5F]'
                        : 'border-zinc-200 hover:border-[#1E3A5F] hover:bg-[#F0F4F8]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option.label}</span>
                      {formData.aum === option.value && (
                        <svg className="h-6 w-6 text-[#C13741]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Client Focus */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-[#1E3A5F]">
                  What types of clients do you focus on?
                </h2>
                <p className="text-zinc-600">
                  Select all that apply
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'uhnw', label: 'Ultra High Net Worth ($5M+)' },
                  { value: 'hnw', label: 'High Net Worth ($1M-$5M)' },
                  { value: 'mass-affluent', label: 'Mass Affluent ($250K-$1M)' },
                  { value: 'retirees', label: 'Retirees & Pre-Retirees' },
                  { value: 'business-owners', label: 'Business Owners' },
                  { value: 'executives', label: 'Corporate Executives' },
                  { value: 'professionals', label: 'Doctors, Lawyers, etc.' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => toggleArrayValue('clientFocus', option.value)}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                      formData.clientFocus.includes(option.value)
                        ? 'border-[#C13741] bg-[#FEF2F3] text-[#1E3A5F]'
                        : 'border-zinc-200 hover:border-[#1E3A5F] hover:bg-[#F0F4F8]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option.label}</span>
                      {formData.clientFocus.includes(option.value) && (
                        <svg className="h-6 w-6 text-[#C13741]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Growth Goal */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-[#1E3A5F]">
                  What's your primary growth goal?
                </h2>
                <p className="text-zinc-600">
                  Choose the most important objective for your practice
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'acquire-uhnw', label: 'Acquire Ultra High Net Worth Clients', desc: 'Focus on $5M+ portfolios' },
                  { value: 'scale-aum', label: 'Scale AUM Rapidly', desc: 'Grow assets under management' },
                  { value: 'diversify-revenue', label: 'Diversify Revenue Streams', desc: 'Add new service offerings' },
                  { value: 'improve-efficiency', label: 'Improve Practice Efficiency', desc: 'Streamline operations' },
                  { value: 'succession-planning', label: 'Succession Planning', desc: 'Prepare for transition' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('growthGoal', option.value)}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                      formData.growthGoal === option.value
                        ? 'border-[#C13741] bg-[#FEF2F3] text-[#1E3A5F]'
                        : 'border-zinc-200 hover:border-[#1E3A5F] hover:bg-[#F0F4F8]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-zinc-600">{option.desc}</div>
                      </div>
                      {formData.growthGoal === option.value && (
                        <svg className="h-6 w-6 flex-shrink-0 text-[#C13741]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Challenges */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-[#1E3A5F]">
                  What are your biggest challenges?
                </h2>
                <p className="text-zinc-600">
                  Select all that apply
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'finding-uhnw', label: 'Finding qualified UHNW prospects' },
                  { value: 'high-marketing-costs', label: 'High client acquisition costs' },
                  { value: 'lack-referrals', label: 'Lack of quality referrals' },
                  { value: 'competing-wirehouses', label: 'Competing with larger firms' },
                  { value: 'time-management', label: 'Time management and efficiency' },
                  { value: 'scaling-operations', label: 'Scaling operations' },
                  { value: 'technology-gaps', label: 'Technology and systems gaps' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => toggleArrayValue('challenges', option.value)}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                      formData.challenges.includes(option.value)
                        ? 'border-[#C13741] bg-[#FEF2F3] text-[#1E3A5F]'
                        : 'border-zinc-200 hover:border-[#1E3A5F] hover:bg-[#F0F4F8]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option.label}</span>
                      {formData.challenges.includes(option.value) && (
                        <svg className="h-6 w-6 text-[#C13741]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Timeline */}
          {currentStep === 6 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-[#1E3A5F]">
                  When are you looking to get started?
                </h2>
                <p className="text-zinc-600">
                  Your timeline helps us prioritize your needs
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { value: 'immediately', label: 'Immediately', desc: 'Ready to start now' },
                  { value: '1-month', label: 'Within 1 Month', desc: 'Planning to start soon' },
                  { value: '1-3-months', label: '1-3 Months', desc: 'Exploring options' },
                  { value: '3-6-months', label: '3-6 Months', desc: 'Long-term planning' },
                  { value: 'just-researching', label: 'Just Researching', desc: 'Gathering information' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => updateFormData('timeline', option.value)}
                    className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                      formData.timeline === option.value
                        ? 'border-[#C13741] bg-[#FEF2F3] text-[#1E3A5F]'
                        : 'border-zinc-200 hover:border-[#1E3A5F] hover:bg-[#F0F4F8]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{option.label}</div>
                        <div className="text-sm text-zinc-600">{option.desc}</div>
                      </div>
                      {formData.timeline === option.value && (
                        <svg className="h-6 w-6 flex-shrink-0 text-[#C13741]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 7: Contact Info */}
          {currentStep === 7 && (
            <div className="space-y-6">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-[#1E3A5F]">
                  Get Your Personalized Results
                </h2>
                <p className="text-zinc-600">
                  Enter your details to receive your advisor readiness score and custom recommendations
                </p>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-zinc-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => updateFormData('name', e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-zinc-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => updateFormData('email', e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-zinc-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => updateFormData('phone', e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="firm" className="mb-1 block text-sm font-medium text-zinc-700">
                    Firm Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="firm"
                    value={formData.firm}
                    onChange={(e) => updateFormData('firm', e.target.value)}
                    className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-base focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
                    placeholder="Your Firm Name"
                  />
                </div>
                <div className="rounded-lg bg-[#F0F4F8] p-4">
                  <div className="flex gap-3">
                    <svg className="h-5 w-5 flex-shrink-0 text-[#1E3A5F]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                    <p className="text-sm text-zinc-700">
                      Your information is secure and will only be used to send your personalized results and network information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between gap-4">
            {currentStep > 1 ? (
              <button
                onClick={previousStep}
                className="flex items-center gap-2 rounded-lg border-2 border-zinc-300 px-6 py-3 font-semibold text-zinc-700 transition-colors hover:border-[#1E3A5F] hover:text-[#1E3A5F]"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                Back
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < totalSteps ? (
              <button
                onClick={nextStep}
                disabled={!canProceed()}
                className={`flex items-center gap-2 rounded-lg px-8 py-3 font-semibold text-white transition-all ${
                  canProceed()
                    ? 'bg-[#C13741] hover:bg-[#D94651] shadow-lg shadow-[#C13741]/25'
                    : 'cursor-not-allowed bg-zinc-300'
                }`}
              >
                Continue
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed()}
                className={`flex items-center gap-2 rounded-lg px-8 py-3 font-semibold text-white transition-all ${
                  canProceed()
                    ? 'bg-[#C13741] hover:bg-[#D94651] shadow-lg shadow-[#C13741]/25'
                    : 'cursor-not-allowed bg-zinc-300'
                }`}
              >
                Get My Results
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-8 text-sm text-zinc-600">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#1E3A5F]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Takes 2 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#1E3A5F]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-[#1E3A5F]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>No obligation</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
