import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, Phone, Mail, HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Membership',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqs = [
    {
      q: 'Do you offer a single day pass or trial access?',
      a: 'Yes. We offer single-session visitor day passes ($25 demo price) providing full access to all lifting platforms, turf, and locker room amenities. If you join on the same day, your day pass fee is credited toward your first month.'
    },
    {
      q: 'Is there a minimum contract duration or cancellation fee?',
      a: 'No. All IronCore standard memberships operate on a straightforward month-to-month basis. We require a simple 14-day written notice before your billing cycle with zero penalties.'
    },
    {
      q: 'Can I bring a guest or training partner?',
      a: 'Members on our Iron Performance and Elite plans receive complimentary monthly guest passes. Guests must complete a standard safety waiver prior to accessing the training deck.'
    },
    {
      q: 'What is included in the contrast therapy recovery suite?',
      a: 'The recovery suite features full-spectrum Finnish infrared saunas, stainless steel cold plunge tubs kept strictly at 4°C - 8°C, and Normatec 3 pneumatic compression boots.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate instantaneous client-side handling without external paid API
    setFormSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi IronCore Fitness, I'd like to enquire about membership options and schedule a facility walkthrough!`
  );
  const whatsappUrl = `https://wa.me/15550194766?text=${whatsappMessage}`;

  return (
    <section id="contact" className="py-24 bg-[#0D1017] border-b border-gray-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            Start Your <span className="text-amber-400">Journey</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Have questions about memberships, recovery pods, or private coaching? Contact our team via form or instant WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form & Direct WhatsApp Channel (7 cols) */}
          <div className="lg:col-span-7 bg-[#12161F] rounded-3xl p-6 sm:p-10 border border-gray-800 shadow-xl">
            {/* Direct WhatsApp Callout Card */}
            <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-transparent border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-black shrink-0 shadow-lg shadow-emerald-500/20">
                  <MessageCircle className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-base">Instant WhatsApp Enquiry</h4>
                  <p className="text-gray-400 text-xs mt-0.5">Connect directly with our desk concierge in real time.</p>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider text-center transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Contact Form */}
            <h3 className="text-xl font-heading font-bold text-white mb-6">Send an Online Enquiry</h3>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-white font-bold text-lg">Enquiry Received!</h4>
                <p className="text-gray-300 text-sm mt-2 max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name || 'Athlete'}</strong>. In a live production environment, this triggers a direct notification to our desk concierge team.
                </p>
                <div className="mt-4 inline-block px-3 py-1 rounded bg-black/40 text-amber-400 text-xs font-mono">
                  Demonstration mode: Your simulated enquiry has been logged successfully.
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', interest: 'General Membership', message: '' });
                    }}
                    className="px-5 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 text-xs font-bold"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                      Area of Interest
                    </label>
                    <select
                      id="contact-interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
                    >
                      <option value="General Membership">General Membership</option>
                      <option value="Core Iron Tier">Core Iron Tier ($79/mo)</option>
                      <option value="Performance Tier">Iron Performance Tier ($129/mo)</option>
                      <option value="Elite VIP Tier">IronCore Elite Tier ($199/mo)</option>
                      <option value="1-Day Trial Pass">1-Day Trial Pass ($25)</option>
                      <option value="Personal Coaching">1-on-1 Personal Coaching</option>
                      <option value="Corporate Accounts">Corporate Wellness</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1.5">
                    Your Message / Goals
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your training background or questions regarding facilities..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm tracking-wide uppercase transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Submit Membership Enquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: FAQ Accordion & Quick Contacts (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-[#12161F] rounded-3xl p-6 sm:p-8 border border-gray-800 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Answered Questions</span>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-6">Common Inquiries</h3>

              <div className="space-y-3">
                {faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="border border-gray-800 rounded-xl overflow-hidden bg-black/20"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className="w-full px-4 py-3.5 text-left flex items-center justify-between gap-3 text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-gray-400 leading-relaxed border-t border-gray-800/60">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct Phone & Email Card */}
            <div className="p-6 rounded-3xl bg-[#12161F] border border-gray-800 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-bold text-sm">Need immediate assistance?</p>
                <p className="text-gray-400 text-xs mt-0.5">Call our direct concierge line at +1 (555) 019-4766.</p>
              </div>
              <a
                href="tel:15550194766"
                className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 hover:border-amber-500 text-amber-400 text-xs font-bold shrink-0 transition-colors"
              >
                Call Desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
