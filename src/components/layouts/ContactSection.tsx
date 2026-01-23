import Link from "next/link";
import Image from "next/image";
import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../icons/web";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-5 pt-20 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="heading-section">About Me</h2>

            <div className="flex gap-8 items-start">
              <div className="hidden md:block hover-focus">
                <Image
                  src="/faris-me.jpeg"
                  alt="Faris"
                  width={180}
                  height={240}
                  className="rounded-xl object-cover glass bg-gradient-soft"
                />
              </div>

              <p className=" font-mono leading-relaxed">
                Software Developer focused on building fast, secure, and
                scalable web applications. I work across frontend and backend
                to deliver clean, maintainable solutions with thoughtful
                design and real-world performance in mind.
              </p>
            </div>
          </div>

          <div className="space-y-12 md:text-right">
            <h2 className="heading-section">Let’s Connect</h2>

            <p className="text-white/70 font-mono text-sm md:ml-auto max-w-sm">
              Feel free to reach out or just say hi.
            </p>

            <div className="flex justify-end gap-2">
              {[
                {
                  href: "https://instagram.com/farizkt",
                  label: "Instagram",
                  icon: <InstagramIcon />,
                },
                {
                  href: "https://linkedin.com/in/muhammedfariskt",
                  label: "LinkedIn",
                  icon: <LinkedinIcon />,
                },
                {
                  href: "mailto:fariskt00@gmail.com",
                  label: "Email",
                  icon: <EmailIcon />,
                },
                {
                  href: "https://github.com/fariskt",
                  label: "GitHub",
                  icon: <GithubIcon size={20} />,
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  className="
                    glass px-4 w-fit py-2 rounded-full
                    inline-flex items-center gap-2
                    hover-focus transition
                  "
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-32 text-center text-xs text-white/40 font-mono">
          © {new Date().getFullYear()} Faris — Built with care.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
