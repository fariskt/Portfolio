import Link from "next/link";
import React from "react";
import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../icons/web";

const ContactSection = () => {
  return (
    <section className="py-24 px-5">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="heading-section">Let’s Connect</h2>

        <p className="text-white/70 font-mono text-sm">
          Feel free to reach out or just say hi.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            href="https://instagram.com/yourusername"
            target="_blank"
            className="glass px-6 py-3 rounded-full hover-focus transition
               inline-flex items-center gap-2"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </Link>

          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="glass px-6 py-3 rounded-full hover-focus transition
               inline-flex gap-2"
          >
            <LinkedinIcon />
            <span>LinkedIn</span>
          </Link>

          <Link
            href="mailto:yourmail@gmail.com"
            className="glass px-6 py-3 rounded-full hover-focus transition
               inline-flex items-center gap-2"
          >
            <EmailIcon />
            <span>Email</span>
          </Link>

          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="glass px-6 py-3 rounded-full hover-focus transition
               flex items-center gap-2"
          >
            <GithubIcon size={36}/>
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
