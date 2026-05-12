import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "David Byrke - Software Portfolio",
  description: "Software, automation, infrastructure tooling, and internal workflow projects by David Byrke.",
};

const featuredProjects = [
  {
    eyebrow: "Flagship Project",
    title: "AWS Infrastructure Team Slack Automation",
    summary:
      "Built a Slack-integrated workforce coordination system to streamline daily onsite tracking and reduce repetitive status messaging for infrastructure delivery teams.",
    problem:
      "Daily coordination depended on fragmented manual Slack updates for onsite status, assigned datacenter, shift visibility, and schedule changes.",
    solution:
      "Created a Slack application with slash commands, interactive buttons, App Home dashboards, scheduled summaries, site tracking, and administrative controls.",
    impact: "Demoed to AWS managers, received positive internal feedback, and was designed around real operational workflows.",
    stack: ["Python", "Slack Bolt SDK", "Flask", "SQLite", "JavaScript", "Ngrok", "REST APIs"],
    diagram: ["Slack Users", "Slash Commands", "Python Backend", "SQLite State", "Daily Summary"],
    screenshot: {
      src: "/software/onsite-app-dark.png",
      alt: "Dark mode screenshot of the onsite Slack automation app dashboard",
      width: 3740,
      height: 1705,
    },
  },
  {
    eyebrow: "Automation Project",
    title: "OCR-Powered Asana Cabling Automation",
    summary:
      "Built an OCR-powered workflow tool that turns handwritten cabling notes into structured Asana task updates for infrastructure deployment work.",
    problem:
      "Cabling progress required repetitive manual entry of cable positions, patching status, team assignment, and deployment progress.",
    solution:
      "Used OCR, parsing logic, Asana API calls, custom field handling, and dynamic user mapping to create and update tasks automatically.",
    impact: "Reduced manual task entry and made infrastructure progress easier to convert into structured, trackable work.",
    stack: ["Python", "OCR", "Asana API", "JSON", "REST APIs", "Data Parsing", "Automation"],
    diagram: ["Handwritten Notes", "OCR", "Parser", "Asana API", "Structured Tasks"],
    screenshot: {
      src: "/software/asana-app.png",
      alt: "Screenshot of the Asana cabling automation app",
      width: 3780,
      height: 1725,
    },
  },
];

const supportingProjects = [
  {
    title: "SteelCo React Native App",
    description:
      "Prototyped a mobile app for internal workflow exploration, focusing on component structure, UI flow, and cross-platform development.",
    stack: ["React Native", "JavaScript", "Mobile UI", "Workflow Tools"],
    media: "/software/react.mp4",
  },
  {
    title: "2D Java Game",
    description:
      "Built a Java game with a custom loop, collision handling, entity behavior, and real-time interaction patterns.",
    stack: ["Java", "Game Loop", "Collision", "Git"],
    media: "/software/game.mp4",
  },
  {
    title: "Embedded Systems Experiments",
    description:
      "Created Arduino and Raspberry Pi projects that connect software logic to sensors, scripts, and physical-world inputs.",
    stack: ["Arduino", "Raspberry Pi", "Linux", "Python"],
    media: "/software/arduino.mp4",
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "Responsive UI"],
  },
  {
    title: "Backend & APIs",
    skills: ["Flask", "REST APIs", "Slack API", "Asana API", "JSON", "Authentication"],
  },
  {
    title: "Infrastructure & Tools",
    skills: ["Git", "GitHub", "SQLite", "Linux", "AWS", "Ngrok", "Environment Config"],
  },
];

const navItems = [
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["About", "#about"],
  ["Resume", "/resumes/software-resume.pdf"],
  ["Contact", "mailto:davidpbyrke@gmail.com"],
];

function TerminalMockup() {
  return (
    <div className="border border-white/10 bg-[#11151f] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#da4947]" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 text-xs font-semibold text-slate-400">workflow-automation.log</span>
      </div>
      <div className="space-y-4 p-5 font-mono text-sm leading-7 text-slate-200">
        <p><span className="text-[#da4947]">$</span> /onsite ATL77</p>
        <p className="text-slate-400">status: onsite record created</p>
        <p><span className="text-[#da4947]">$</span> run daily-summary --team infrastructure</p>
        <div className="border border-white/10 bg-black/30 p-4">
          <p className="text-cyan-200">summary posted to Slack</p>
          <p>sites: ATL77, ATL76, ATL78</p>
          <p>users tracked: active shift window</p>
          <p>next: sync dashboard state<span className="animate-pulse">_</span></p>
        </div>
      </div>
    </div>
  );
}

function FlowDiagram({ steps }: { steps: string[] }) {
  return (
    <div className="grid gap-2 sm:grid-cols-5">
      {steps.map((step, index) => (
        <div key={step} className="relative border border-white/10 bg-white/[0.03] p-3">
          <p className="font-mono text-xs text-[#da4947]">0{index + 1}</p>
          <p className="mt-2 text-sm font-bold text-white">{step}</p>
        </div>
      ))}
    </div>
  );
}

export default function SoftwarePortfolio() {
  return (
    <main className="min-h-screen bg-[#0f1117] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1117]/85 px-6 py-4 backdrop-blur lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <a href="/" className="text-sm font-black tracking-wide text-white">
            David Byrke
          </a>
          <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">
                {label}
              </a>
            ))}
          </div>
          <a href="/drafting" className="border border-white/15 px-3 py-2 text-sm font-bold text-slate-100 transition hover:border-[#da4947] hover:text-white">
            Drafting
          </a>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="absolute inset-0 software-grid opacity-35" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#da4947]">Software Portfolio</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-none md:text-7xl">
              Software Developer. Automation Builder. Infrastructure Tools.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I build software that improves real-world workflows, from internal Slack tools and OCR automation to full-stack web apps and infrastructure-focused systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="bg-[#da4947] px-5 py-3 text-center font-bold text-white transition hover:bg-[#f05a58]">
                View Projects
              </a>
              <a href="/resumes/software-resume.pdf" className="border border-white/20 px-5 py-3 text-center font-bold text-white transition hover:border-white hover:bg-white/10">
                Resume
              </a>
              <a href="https://github.com/byrkedavid" target="_blank" rel="noreferrer" className="border border-white/20 px-5 py-3 text-center font-bold text-white transition hover:border-white hover:bg-white/10">
                GitHub
              </a>
              <a href="mailto:davidpbyrke@gmail.com" className="border border-white/20 px-5 py-3 text-center font-bold text-white transition hover:border-white hover:bg-white/10">
                Contact
              </a>
            </div>
          </div>
          <TerminalMockup />
        </div>
      </section>

      <section id="projects" className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl space-y-16">
          {featuredProjects.map((project, index) => (
            <article key={project.title} className="border border-white/10 bg-white/[0.03]">
              <div className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="p-7 md:p-10">
                  <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#da4947]">{project.eyebrow}</p>
                  <h2 className="mt-4 text-4xl font-black md:text-5xl">{project.title}</h2>
                  <p className="mt-5 text-lg leading-8 text-slate-300">{project.summary}</p>
                  <div className="mt-8 grid gap-5">
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Problem</h3>
                      <p className="mt-2 leading-7 text-slate-300">{project.problem}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Solution</h3>
                      <p className="mt-2 leading-7 text-slate-300">{project.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Impact</h3>
                      <p className="mt-2 leading-7 text-slate-300">{project.impact}</p>
                    </div>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-bold text-slate-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-6 border-t border-white/10 bg-black/20 p-7 md:p-10 lg:border-l lg:border-t-0">
                  <div className="overflow-hidden border border-white/10 bg-[#0f1117] p-3">
                    <Image
                      src={project.screenshot.src}
                      alt={project.screenshot.alt}
                      width={project.screenshot.width}
                      height={project.screenshot.height}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full object-contain"
                    />
                  </div>
                  <FlowDiagram steps={project.diagram} />
                  <div className="border border-white/10 bg-[#0f1117] p-5">
                    <p className="font-mono text-sm text-slate-300">
                      {project.title.includes("Slack")
                        ? "event -> command handler -> state update -> dashboard refresh -> scheduled summary"
                        : "image input -> OCR pass -> parser -> API payload -> task synchronization"}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#da4947]">Supporting Work</p>
              <h2 className="mt-3 text-4xl font-black">Additional projects and experiments.</h2>
            </div>
            <p className="max-w-xl text-slate-300">Smaller builds that show frontend work, Java fundamentals, hardware experiments, and media-heavy portfolio implementation.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {supportingProjects.map((project) => (
              <article key={project.title} className="border border-white/10 bg-white/[0.03] p-5">
                <video src={project.media} autoPlay loop muted playsInline className="aspect-video w-full object-cover" />
                <h3 className="mt-5 text-2xl font-black">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="border border-white/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-12">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#da4947]">Skills</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl font-black">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="bg-white/[0.06] px-3 py-1.5 text-sm font-semibold text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#da4947]">About</p>
            <h2 className="mt-4 text-4xl font-black">A CS student building practical tools for real workflows.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-300">
            <p>
              I am a computer science student and technical builder with experience across software development, infrastructure operations, and design-focused technical work.
            </p>
            <p>
              I like projects where software removes friction: workflow automation, internal tooling, infrastructure-focused applications, and clean interfaces for operational teams.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl bg-[#da4947] p-8 text-white md:p-10">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-4xl font-black">Interested in software, cloud, automation, or platform tooling roles.</h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/85">Available to discuss projects, internships, junior software roles, and infrastructure-focused engineering opportunities.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/resumes/software-resume.pdf" className="bg-white px-5 py-3 text-center font-bold text-[#0f1117] transition hover:bg-slate-100">
                Resume
              </a>
              <a href="mailto:davidpbyrke@gmail.com" className="border border-white/50 px-5 py-3 text-center font-bold text-white transition hover:bg-white/10">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
