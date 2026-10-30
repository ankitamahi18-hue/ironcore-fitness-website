import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Shield, Send, Dumbbell } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, initialPlan = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredTime: 'Morning (6 AM - 10 AM)',
    planType: initialPlan || 'General Membership Enquiry',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialPlan) {
      setFormData(prev => ({ ...prev, planType: initialPlan }));
    }
    setSubmitted(false);
  }, [initialPlan, isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#12161F] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-900/80 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-heading font-black text-white uppercase tracking-tight">
              Membership <span className="text-amber-400">Enquiry</span>
            </h3>
            <p className="text-xs text-gray-400">IronCore Fitness Portfolio Demonstration</p>
          </div>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-white">Enquiry Submitted!</h4>
            <p className="text-sm text-gray-300 max-w-sm mx-auto">
              Thank you, <strong className="text-white">{formData.name}</strong>. Your enquiry for <strong className="text-amber-400">{formData.planType}</strong> has been logged in this demonstration preview.
            </p>
            <div className="p-3 rounded-lg bg-black/40 text-xs text-amber-300 font-mono">
              In a commercial deployment, this triggers automated CRM onboarding and calendar booking for the member.
            </div>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs uppercase tracking-wider"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="modal-name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                id="modal-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Jordan Smith"
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Email Address *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jordan@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                  Phone (Optional)
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="modal-plan" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                Selected Program / Topic
              </label>
              <input
                id="modal-plan"
                type="text"
                value={formData.planType}
                onChange={(e) => setFormData({ ...formData, planType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-amber-400 font-semibold text-sm focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label htmlFor="modal-time" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-1">
                Preferred Walkthrough Time
              </label>
              <select
                id="modal-time"
                value={formData.preferredTime}
                onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white text-sm focus:outline-none focus:border-amber-500"
              >
                <option value="Morning (6 AM - 10 AM)">Early Dawn / Morning (6 AM – 10 AM)</option>
                <option value="Mid-day (10 AM - 2 PM)">Mid-day & Lunch (10 AM – 2 PM)</option>
                <option value="Afternoon (2 PM - 6 PM)">Afternoon (2 PM – 6 PM)</option>
                <option value="Evening (6 PM - 10 PM)">Evening (6 PM – 10 PM)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Enquiry</span>
              </button>
            </div>

            <p className="text-[11px] text-gray-500 text-center flex items-center justify-center gap-1">
              <Shield className="w-3.5 h-3.5 text-gray-400" />
              <span>Demonstration showcase • No payment or credentials required</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
