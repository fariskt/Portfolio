import Image from "next/image";

export default function About() {
  return (
    <div className="space-y-10">
      <h2 className="heading-section">About Me</h2>
      <div className="flex gap-8 items-start">
        <div className="hidden md:block hover-focus">
          <Image
            src="/faris-me.png"
            alt="Faris"
            width={180}
            height={240}
            className="rounded-xl object-cover glass bg-gradient-soft"
          />
        </div>
        <p className="font-mono leading-relaxed">
          Software Developer focused on building fast, secure, and scalable web applications. I work across frontend and backend to deliver clean, maintainable solutions with thoughtful design and real-world performance in mind.
        </p>
      </div>
    </div>
  );
}
