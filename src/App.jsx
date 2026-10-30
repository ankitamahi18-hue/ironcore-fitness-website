import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Facilities from './components/Facilities';
import Memberships from './components/Memberships';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import ScheduleLocation from './components/ScheduleLocation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleOpenEnquiry = (planName = 'General Membership') => {
    setSelectedPlan(planName);
    setModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-gray-100 flex flex-col font-sans selection:bg-amber-500 selection:text-black">
      {/* Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <Hero onOpenEnquiry={handleOpenEnquiry} />

        {/* 2. About the Gym */}
        <About onOpenEnquiry={handleOpenEnquiry} />

        {/* 3. Training Facilities */}
        <Facilities onOpenEnquiry={handleOpenEnquiry} />

        {/* 4. Membership Plans with clearly labelled demo prices */}
        <Memberships onOpenEnquiry={handleOpenEnquiry} />

        {/* 5. Trainer Profiles */}
        <Trainers onOpenEnquiry={handleOpenEnquiry} />

        {/* 6. Photo Gallery */}
        <Gallery />

        {/* 7. Opening Hours & Location Placeholder */}
        <ScheduleLocation onOpenEnquiry={handleOpenEnquiry} />

        {/* 8. Contact Section with working WhatsApp link */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenEnquiry={handleOpenEnquiry} />

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={modalOpen}
        onClose={handleCloseEnquiry}
        initialPlan={selectedPlan}
      />
    </div>
  );
}
