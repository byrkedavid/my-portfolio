import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "David Byrke — Software Engineer",
  description: "Software engineer building iOS apps, automation tools, and infrastructure systems. Open to software engineering roles.",
};

const skillGroups = [
  { title: "Languages", skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL"] },
  { title: "Frontend & Mobile", skills: ["React Native", "React", "Next.js", "Expo", "Tailwind CSS"] },
  { title: "Backend & APIs", skills: ["Supabase", "Flask", "REST APIs", "Slack API", "Asana API", "Auth"] },
  { title: "Tools & Infra", skills: ["Git", "GitHub", "SQLite", "Linux", "AWS", "Edge Functions"] },
];

const additionalProjects = [
  {
    eyebrow: "Automation",
    title: "AWS Slack Workforce Tool",
    description:
      "Slack app with slash commands, interactive dashboards, scheduled summaries, and onsite tracking — built for AWS infrastructure teams and demoed to managers.",
    stack: ["Python", "Slack Bolt", "Flask", "SQLite"],
    screenshot: {
      src: "/software/onsite-app-dark.png",
      alt: "Slack automation app dashboard",
      width: 3740,
      height: 1705,
    },
  },
  {
    eyebrow: "Automation",
    title: "OCR Asana Cabling Tool",
    description:
      "Turns handwritten cabling notes into structured Asana tasks using OCR, custom field handling, and dynamic user mapping — eliminating manual data entry for infrastructure teams.",
    stack: ["Python", "OCR", "Asana API", "REST APIs"],
    screenshot: {
      src: "/software/asana-app.png",
      alt: "Asana cabling automation app",
      width: 3780,
      height: 1725,
    },
  },
];

const smallProjects = [
  {
    title: "SteelCo React Native App",
    description: "Prototyped a mobile app for internal workflow exploration, focusing on component structure, UI flow, and cross-platform development.",
    stack: ["React Native", "JavaScript"],
    media: "/software/react.mp4",
  },
  {
    title: "2D Java Game",
    description: "Built a Java game with a custom game loop, collision handling, entity behavior, and real-time interaction patterns.",
    stack: ["Java", "Game Loop"],
    media: "/software/game.mp4",
  },
  {
    title: "Embedded Systems Experiments",
    description: "Arduino and Raspberry Pi projects connecting software logic to sensors, scripts, and physical-world inputs.",
    stack: ["Arduino", "Raspberry Pi", "Python"],
    media: "/software/arduino.mp4",
  },
];

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[220px]">
      <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-white/15 bg-[#0d0d18] shadow-2xl shadow-black/60">
        <div className="absolute left-1/2 top-0 z-10 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-black" />
        <div className="flex aspect-[9/19.5] w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-[#111120] to-[#0a0a14] px-6 pt-8">
          <div className="h-16 w-16 rounded-2xl bg-[#da4947]/20 ring-1 ring-[#da4947]/30" />
          <p className="font-mono text-xs text-slate-500">screenshot coming soon</p>
          <div className="mt-4 w-full space-y-2">
            <div className="h-2 w-3/4 rounded bg-white/[0.06]" />
            <div className="h-2 w-full rounded bg-white/[0.06]" />
            <div className="h-2 w-1/2 rounded bg-white/[0.06]" />
          </div>
          <div className="mt-4 grid w-full grid-cols-2 gap-2">
            <div className="aspect-square rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06]" />
            <div className="aspect-square rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06]" />
            <div className="aspect-square rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06]" />
            <div className="aspect-square rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06]" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-px left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/20" />
    </div>
  );
}

export default function SoftwarePortfolio() {
  return (
    <main className="min-h-screen bg-[#080810] text-white">

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#080810]/90 px-6 py-4 backdrop-blur-md lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="text-sm font-black tracking-wide text-white">
            David Byrke
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
            {[["Projects", "#projects"], ["Skills", "#skills"], ["About", "#about"], ["Resume", "/resumes/software-resume.pdf"]].map(([label, href]) => (
              <a key={label} href={href} className="transition-colors hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <a
            href="mailto:davidpbyrke@gmail.com"
            className="bg-[#da4947] px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-[#e85d5b]"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.07] px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="absolute inset-0 software-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">Open to Work</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-6xl font-black leading-[0.92] tracking-tight md:text-8xl">
            David<br />Byrke
          </h1>
          <p className="mt-5 text-xl font-semibold text-slate-400 md:text-2xl">
            Software Engineer · iOS · Automation · Infrastructure
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            I build full-stack software that ships to real users — from an iOS app launching this July to internal automation tools running at AWS.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className="bg-[#da4947] px-6 py-3 font-bold text-white transition-colors hover:bg-[#e85d5b]">
              View Projects
            </a>
            <a href="/resumes/software-resume.pdf" className="border border-white/15 px-6 py-3 font-bold text-white transition-colors hover:border-white/40 hover:bg-white/[0.05]">
              Resume
            </a>
            <a href="https://github.com/byrkedavid" target="_blank" rel="noreferrer" className="border border-white/15 px-6 py-3 font-bold text-white transition-colors hover:border-white/40 hover:bg-white/[0.05]">
              GitHub
            </a>
            <a href="mailto:davidpbyrke@gmail.com" className="border border-white/15 px-6 py-3 font-bold text-white transition-colors hover:border-white/40 hover:bg-white/[0.05]">
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* BuildBook — Flagship */}
      <section id="projects" className="relative overflow-hidden border-b border-white/[0.07] px-6 py-20 lg:px-10 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#da4947]/[0.04] via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl">

          {/* Header row */}
          <div className="mb-12 flex flex-wrap items-center gap-3">
            <span className="border border-[#da4947]/50 bg-[#da4947]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#da4947]">
              iOS App
            </span>
            <span className="border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-slate-300">
              Launching July 2025
            </span>
            <span className="ml-auto hidden font-mono text-xs text-slate-600 sm:block">01 / flagship</span>
          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <h2 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
                Build<span className="text-[#da4947]">Book</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                A social garage app for car enthusiasts — document builds, track maintenance, log spending, and share your garage with a community of builders.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-3">
                <div className="border-l-2 border-[#da4947] pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Problem</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Car owners had no single place to document builds, track maintenance history, and monitor spending across mods and repairs.
                  </p>
                </div>
                <div className="border-l-2 border-[#da4947] pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Solution</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Full-stack iOS app with a garage dashboard, build log, receipt-scanning expense tracker, AI spending roast, and community feed.
                  </p>
                </div>
                <div className="border-l-2 border-[#da4947] pl-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Scope</p>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    End-to-end production app — Supabase backend, edge functions for AI features, image storage, auth, onboarding, and community.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-2">
                {["React Native", "Expo", "TypeScript", "Supabase", "Zustand", "Skia", "Reanimated", "Edge Functions"].map((tech) => (
                  <span key={tech} className="border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm font-semibold text-slate-200">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://mybuildbook.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#da4947] px-6 py-3 font-bold text-white transition-colors hover:bg-[#e85d5b]"
                >
                  mybuildbook.app
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </a>
              </div>

              {/* Flow diagram */}
              <div className="mt-12">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">App Flow</p>
                <div className="grid grid-cols-5 gap-px bg-white/[0.06]">
                  {["Garage", "Build Log", "Receipt OCR", "AI Roast", "Community"].map((step, i) => (
                    <div key={step} className="bg-[#080810] p-4">
                      <p className="font-mono text-xs text-[#da4947]">0{i + 1}</p>
                      <p className="mt-2 text-xs font-bold text-white">{step}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-3 font-mono text-xs text-slate-600">
                  vehicle entry → build log → receipt scan → AI roast → community feed
                </p>
              </div>
            </div>

            {/* Phone mockup */}
            <div className="flex justify-center lg:sticky lg:top-28 lg:pt-2">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="border-b border-white/[0.07] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Additional Work</p>
              <h2 className="mt-3 text-4xl font-black">Production automation tools.</h2>
            </div>
            <span className="hidden font-mono text-xs text-slate-600 sm:block">02 / projects</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {additionalProjects.map((project) => (
              <article key={project.title} className="group border border-white/[0.07] bg-white/[0.02] transition-colors hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className="overflow-hidden border-b border-white/[0.07]">
                  <Image
                    src={project.screenshot.src}
                    alt={project.screenshot.alt}
                    width={project.screenshot.width}
                    height={project.screenshot.height}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#da4947]">{project.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-black">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="border border-white/[0.08] px-2.5 py-1 text-xs font-bold text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Small Projects */}
      <section className="border-b border-white/[0.07] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Experiments</p>
              <h2 className="mt-3 text-4xl font-black">Side builds and explorations.</h2>
            </div>
            <span className="hidden font-mono text-xs text-slate-600 sm:block">03 / experiments</span>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {smallProjects.map((project) => (
              <article key={project.title} className="group border border-white/[0.07] bg-white/[0.02]">
                <div className="overflow-hidden border-b border-white/[0.07]">
                  <video
                    src={project.media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black">{project.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="border border-white/[0.07] px-2 py-0.5 text-xs font-bold text-slate-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="border-b border-white/[0.07] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Skills</p>
              <h2 className="mt-3 text-4xl font-black">What I work with.</h2>
            </div>
            <span className="hidden font-mono text-xs text-slate-600 sm:block">04 / skills</span>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{group.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm font-semibold text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-b border-white/[0.07] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">About</p>
              <h2 className="mt-4 text-4xl font-black leading-tight">
                CS student. Building software that ships.
              </h2>
              <span className="hidden font-mono text-xs text-slate-600 sm:block mt-6">05 / about</span>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-400">
              <p>
                I'm a computer science student and builder with experience across mobile development, infrastructure automation, and full-stack systems. My flagship project, BuildBook, is an iOS app launching in July 2025.
              </p>
              <p>
                I've shipped automation tools used by AWS infrastructure teams, built OCR pipelines that remove manual data entry, and shipped end-to-end mobile products with real backends and real users.
              </p>
              <p>
                I'm interested in software engineering roles focused on mobile, platform tooling, automation, or infrastructure — especially teams building things that are actually used.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden border border-[#da4947]/30 bg-[#da4947]/[0.06] p-10 md:p-14">
            <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/3 translate-x-1/3 rounded-full bg-[#da4947]/10 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#da4947]">Available Now</p>
                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  Looking for software engineering roles.
                </h2>
                <p className="mt-4 max-w-lg text-base leading-8 text-slate-400">
                  Internships, junior roles, and co-ops in mobile, automation, platform tooling, or backend engineering. Open to full-time after graduation.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
                <a href="/resumes/software-resume.pdf" className="bg-[#da4947] px-6 py-3 text-center font-bold text-white transition-colors hover:bg-[#e85d5b]">
                  Resume
                </a>
                <a href="mailto:davidpbyrke@gmail.com" className="border border-white/20 px-6 py-3 text-center font-bold text-white transition-colors hover:border-white/40 hover:bg-white/[0.05]">
                  Email Me
                </a>
                <a href="https://github.com/byrkedavid" target="_blank" rel="noreferrer" className="border border-white/20 px-6 py-3 text-center font-bold text-white transition-colors hover:border-white/40 hover:bg-white/[0.05]">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
