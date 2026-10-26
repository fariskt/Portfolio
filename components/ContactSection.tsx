"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="space-y-8 pt-12 pb-16">
      {/* Stacked Section Header */}
      <div className="space-y-1">
        <h2 className="title-primary">LET&apos;S WORK</h2>
        <h3 className="title-secondary">TOGETHER</h3>
      </div>

      <p className="text-sm md:text-base text-white/70 max-w-xl font-sans">
        Have an exciting project, full-stack opening, or collaboration in mind? Feel free to reach out directly.
      </p>

      {/* Form Container */}
      <div className="portfolio-card p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/60 uppercase">Your Name</label>
              <input
                type="text"
                required
                placeholder="Muhammed Faris"
                className="form-input"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-white/60 uppercase">Your Email</label>
              <input
                type="email"
                required
                placeholder="fariskt00@gmail.com"
                className="form-input"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-white/60 uppercase">Service / Topic</label>
            <select className="form-input cursor-pointer bg-[#18181c]">
              <option value="fullstack">Full-Stack Web Application (Next.js / Node.js)</option>
              <option value="frontend">Frontend Architecture & UI Engineering</option>
              <option value="backend">Node.js & Express Backend Systems</option>
              <option value="consulting">Technical Consulting / Freelance Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-white/60 uppercase">Your Message</label>
            <textarea
              required
              rows={4}
              placeholder="Tell me about your project, timeline, and requirements..."
              className="form-input resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-black font-extrabold text-sm tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-lime-400/20 active:scale-[0.99]"
          >
            {submitted ? (
              <span className="flex items-center gap-2">
                <span>Message Sent Successfully!</span>
                <span className="text-base">✓</span>
              </span>
            ) : (
              <>
                <span>Submit Message</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Direct Email Link */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono text-white/50">Or contact directly via email:</span>
          <Link
            href="mailto:fariskt00@gmail.com"
            className="text-sm font-mono text-lime-400 hover:underline flex items-center gap-1.5"
          >
            <span>fariskt00@gmail.com</span>
            <span>↗</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40 border-t border-white/5">
        <p>© {new Date().getFullYear()} Muhammed Faris — Software Developer</p>
        <div className="flex items-center gap-4">
          <Link href="/projects" className="hover:text-lime-400 transition">
            Projects Archive
          </Link>
          <span>•</span>
          <Link href="https://github.com/fariskt" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition">
            GitHub
          </Link>
          <span>•</span>
          <Link href="https://linkedin.com/in/muhammedfariskt" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition">
            LinkedIn
          </Link>
        </div>
      </footer>
    </section>
  );
}
