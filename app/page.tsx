"use client";

import FloatingNav from "@/components/FloatingNav";
import ProfileSidebar from "@/components/ProfileSidebar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ToolsSection from "@/components/ToolsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-white relative selection:bg-lime-400 selection:text-black">
      {/* Floating Navigation Dock */}
      <FloatingNav />

      {/* Main Split Layout */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Column: Sticky Profile Sidebar */}
          <ProfileSidebar />

          {/* Right Column: Scrollable Sections */}
          <main className="flex-1 w-full min-w-0 space-y-14">
            <HeroSection />
            <ProjectsSection />
            <ExperienceSection />
            <ToolsSection />
            <ContactSection />
          </main>
        </div>
      </div>
    </div>
  );
}
