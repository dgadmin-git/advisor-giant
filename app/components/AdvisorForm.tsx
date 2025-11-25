'use client';

import { useState } from 'react';

export default function AdvisorForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    aum: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      console.log('Submitting form data:', {
        ...formData,
        formType: 'advisor-homepage',
        source: 'Advisor Data Lists Page'
      });

      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType: 'advisor-homepage',
          source: 'Advisor Data Lists Page'
        }),
      });

      console.log('Response status:', response.status, response.statusText);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('API Error Response:', errorData);
        throw new Error(`Failed to submit: ${JSON.stringify(errorData)}`);
      }

      const result = await response.json();
      console.log('Success response:', result);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        aum: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="rounded-2xl border-2 border-[#1E3A5F] bg-white p-6 shadow-lg">
      <h2 className="mb-2 text-2xl font-bold text-[#1E3A5F]">Quick Connect with Us</h2>
      <p className="mb-6 text-sm text-zinc-600">
        Get exclusive access to ultra high net worth investors. Fill out the form below.
      </p>

      {submitStatus === 'success' && (
        <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-3 text-sm text-green-800">
          Thank you! We'll be in touch soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label htmlFor="aum" className="block text-sm font-medium text-zinc-700 mb-1">
            Assets Under Management
          </label>
          <select
            id="aum"
            name="aum"
            value={formData.aum}
            onChange={handleChange}
            className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
          >
            <option value="">Select range</option>
            <option value="0-10m">$0 - $10M</option>
            <option value="10m-50m">$10M - $50M</option>
            <option value="50m-100m">$50M - $100M</option>
            <option value="100m-500m">$100M - $500M</option>
            <option value="500m+">$500M+</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-zinc-300 px-4 py-2.5 text-sm focus:border-[#1E3A5F] focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20"
            placeholder="Tell us about your practice..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-[#C13741] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#D94651] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Get Connected Now'}
        </button>
        <p className="text-xs text-zinc-500 text-center">
          By submitting, you agree to our privacy policy
        </p>
      </form>
    </div>
  );
}
