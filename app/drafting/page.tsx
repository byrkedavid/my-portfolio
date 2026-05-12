import Image from "next/image";

const renderShowcase = [
  {
    src: "/drafting/exteriors/Ext01 - Day - Enscape - MidnightBronze.png",
    alt: "Exterior Enscape rendering in daylight with midnight bronze finish",
    label: "Exterior / Enscape",
    width: 3840,
    height: 2160,
  },
  {
    src: "/drafting/interiors/cga1.png",
    alt: "Sample project one interior rendering",
    label: "Sample Project #1 / Interior",
    width: 1920,
    height: 1080,
  },
  {
    src: "/drafting/exteriors/Corner 2.19.26.png",
    alt: "Exterior corner architectural rendering",
    label: "Exterior / SketchUp",
    width: 3840,
    height: 2160,
  },
  {
    src: "/drafting/interiors/pec1.jpg",
    alt: "Sample project two interior rendering",
    label: "Sample Project #2 / Interior",
    width: 3200,
    height: 1800,
  },
  {
    src: "/drafting/exteriors/Aerial Render - Dark IMP.jpg",
    alt: "Aerial exterior rendering with dark insulated metal panel finish",
    label: "Aerial / Exterior",
    width: 4000,
    height: 3000,
  },
  {
    src: "/drafting/interiors/Golf Sim 5.jpg",
    alt: "Golf simulator interior rendering",
    label: "Interior / Experience",
    width: 3200,
    height: 1800,
  },
];

const exteriorRenders = [
  {
    src: "/drafting/exteriors/CGA Exterior 1.05.26.png",
    alt: "CGA exterior architectural rendering",
    width: 1920,
    height: 1080,
  },
  {
    src: "/drafting/exteriors/Front Corner.png",
    alt: "Front corner exterior rendering",
    width: 3840,
    height: 2160,
  },
  {
    src: "/drafting/exteriors/Front Rendering w window.png",
    alt: "Front exterior rendering with window study",
    width: 3840,
    height: 2160,
  },
  {
    src: "/drafting/exteriors/Ext01 - Night - Enscape - MidnightBronze.png",
    alt: "Night exterior Enscape rendering with midnight bronze finish",
    width: 3840,
    height: 2160,
  },
];

const interiorRenders = [
  {
    src: "/drafting/interiors/cga1.png",
    alt: "Sample project one interior rendering",
    width: 1920,
    height: 1080,
  },
  {
    src: "/drafting/interiors/pec1.jpg",
    alt: "Sample project two interior rendering",
    width: 3200,
    height: 1800,
  },
  {
    src: "/drafting/interiors/cga2.png",
    alt: "Sample project one interior rendering",
    width: 1920,
    height: 1080,
  },
  {
    src: "/drafting/interiors/pec2.jpg",
    alt: "Sample project two interior rendering",
    width: 3200,
    height: 1800,
  },
];

const featuredPlanProjects = [
  {
    name: "Sample Project #1",
    rank: "Featured Project",
    description:
      "Redacted construction drawing excerpts showing a coordinated floor plan, mezzanine planning, exterior elevations, material callouts, dimensions, and sheet organization.",
    pdfHref: "/drafting/plans/CGA_redacted.pdf",
    galleryHref: "/drafting/sample-project-1",
    sheets: [
      {
        title: "Floor Plan Dimensions",
        src: "/drafting/featured/cga-floor-plan.png",
        alt: "Redacted CGA floor plan dimensions sheet",
        width: 3456,
        height: 2304,
      },
      {
        title: "Exterior Elevations",
        src: "/drafting/featured/cga-elevation.png",
        alt: "Redacted CGA exterior elevations sheet",
        width: 3456,
        height: 2304,
      },
    ],
  },
  {
    name: "Sample Project #2",
    rank: "Secondary Project",
    description:
      "Redacted plan and elevation excerpts with office layout coordination, enlarged plan details, building elevations, sections, and accessibility-related drafting notes.",
    pdfHref: "/drafting/plans/PEC_redacted.pdf.pdf",
    galleryHref: "/drafting/sample-project-2",
    sheets: [
      {
        title: "Office Floor Plan",
        src: "/drafting/featured/pec-floor-plan.png",
        alt: "Redacted PEC office floor plan sheet",
        width: 3456,
        height: 2304,
      },
      {
        title: "Elevations & Sections",
        src: "/drafting/featured/pec-elevation.png",
        alt: "Redacted PEC exterior elevations and building sections sheet",
        width: 3456,
        height: 2304,
      },
    ],
  },
];

const planSets = [
  {
    title: "Display Room Architectural Set",
    href: "/drafting/plans/CGA_redacted.pdf",
  },
  {
    title: "Manufacturer HQ Architectural Set",
    href: "/drafting/plans/PEC_redacted.pdf.pdf",
  },
  {
    title: "Modern Church Architectural Set",
    href: "/drafting/plans/C25-0010-Wesley-ARCH-02.19.26.pdf",
  },
  {
    title: "Aircraft Hangar Construction Drawings",
    href: "/drafting/plans/Demere CDs-ARCH-11.18.25-REV01.pdf",
  },
];

const software = [
  {
    name: "AutoCAD",
    icon: "/drafting/software_icons/autocad-icon.svg",
  },
  {
    name: "SketchUp",
    icon: "/drafting/software_icons/sketchup-icon.svg",
  },
  {
    name: "Enscape",
    icon: "/drafting/software_icons/Enscape-Logo-Icon.webp",
  },
  {
    name: "V-Ray",
    icon: "/drafting/software_icons/Chaos-V-Ray-Icon-Logo-Vector.svg-.png",
  },
  {
    name: "Bluebeam",
    icon: "/drafting/software_icons/62e9bd9c-0595-4480-a12d-8945e65acba4.jpg",
  },
  {
    name: "Excel",
    icon: "/drafting/software_icons/microsoft-excel-icon.svg",
  },
];

const capabilities = [
  {
    label: "Drawing Sets",
    text: "Floor plans, elevations, reflected ceiling intent, redlines, sheet cleanup, and redacted presentation sets.",
  },
  {
    label: "Visualization",
    text: "SketchUp models, Enscape and V-Ray renderings, material studies, and interior/exterior views for client review.",
  },
  {
    label: "Coordination",
    text: "Bluebeam markups, drawing review, takeoff-minded organization, and clear handoff notes for design and build teams.",
  },
];

const bidWorkflow = [
  "Review drawings and specifications",
  "Clarify scope, counts, and assumptions",
  "Draft buildable layouts and alternates",
  "Package clean visuals for sales and field teams",
];

export default function DraftingPortfolio() {
  return (
    <main className="min-h-screen bg-[#f4f2ed] text-[#111827]">
      <section className="relative isolate overflow-hidden bg-[#101820] text-white">
        <div className="absolute inset-0 blueprint-grid opacity-45" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#101820] to-transparent" />
        <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-6 py-10 lg:min-h-screen lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:px-10 lg:py-8">
          <div className="space-y-8 lg:-mt-10">
            <nav className="flex items-center justify-between gap-4 text-sm text-cyan-100">
              <a href="/" className="font-semibold tracking-wide transition hover:text-white">
                David Byrke
              </a>
              <div className="flex items-center gap-2">
                <a href="#work" className="rounded-full border border-cyan-200/30 px-4 py-2 transition hover:border-cyan-100 hover:bg-white/10">
                  View work
                </a>
                <a href="/resumes/drafting-resume.pdf" className="rounded-full bg-cyan-200 px-4 py-2 font-bold text-[#101820] transition hover:bg-white">
                  Drafting Resume
                </a>
              </div>
            </nav>

            <div className="space-y-6 lg:space-y-7">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Architectural Drafting / 3D Modeling</p>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.95] md:text-5xl">
                Buildable drawings with presentation-grade clarity.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-200 lg:max-w-[39rem]">
                A focused portfolio for residential drafting, technical layouts, and 3D visualization. Built to show the kind of accuracy, organization, and design-to-bid thinking valued in high-end residential electrical and controls work.
              </p>
            </div>

            <div className="grid max-w-xl grid-cols-3 gap-3 text-center lg:max-w-[36rem]">
              <div className="border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-cyan-200">CAD</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-300">Layouts</p>
              </div>
              <div className="border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-cyan-200">3D</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-300">Renders</p>
              </div>
              <div className="border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-bold text-cyan-200">Bid</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-slate-300">Support</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {software.map((tool) => (
                <span key={tool.name} className="inline-flex items-center gap-2 border border-cyan-100/25 bg-white/10 px-3 py-1 text-sm font-semibold text-cyan-50">
                  <img src={tool.icon} alt="" className="h-4 w-4 shrink-0 object-contain" />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden border border-cyan-100/20 bg-[#07111f] p-4 shadow-2xl shadow-cyan-950/40 lg:-mt-16">
            <Image
              src="/drafting/featured/cga-floor-plan.png"
              alt="Redacted CGA floor plan dimensions sheet"
              width={3456}
              height={2304}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="aspect-[4/3] w-full bg-white object-cover object-left md:h-[420px] md:aspect-auto md:object-contain"
            />
            <div className="pointer-events-none absolute inset-4 blueprint-sheet-glow" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-center justify-between gap-4 border-t border-cyan-100/20 bg-[#07111f]/85 px-5 py-4 text-sm text-cyan-50 backdrop-blur">
              <span>Sample Project #1 redacted floor plan preview</span>
              <span className="font-mono text-cyan-200">FEATURED / REDACTED</span>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-cyan-100/10 bg-[#101820] py-10 text-white">
        <div className="render-carousel-track flex gap-4">
          {[...renderShowcase, ...renderShowcase].map((render, index) => (
            <figure key={`${render.src}-${index}`} className="relative h-52 w-[19.5rem] shrink-0 overflow-hidden border border-white/10 bg-slate-900 md:h-80 md:w-[36rem]">
              <Image
                src={render.src}
                alt={render.alt}
                width={render.width}
                height={render.height}
                sizes="(max-width: 768px) 19.5rem, 36rem"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-14 text-sm font-semibold text-cyan-50">
                {render.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-7xl border-y border-slate-300 py-12">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Working Range</p>
              <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight md:text-4xl">
                Drafting, modeling, and review support with a practical construction mindset.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {capabilities.map((item) => (
                <div key={item.label} className="border-l-2 border-cyan-700 pl-5">
                  <h3 className="text-lg font-black text-slate-950">{item.label}</h3>
                  <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-white px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Selected Work</p>
              <h2 className="mt-4 text-4xl font-black md:text-5xl">Renderings, plan sets, and technical visuals.</h2>
            </div>
            <p className="max-w-xl text-slate-600">
              Redacted drawing sets, project-specific galleries, and rendering work across interior and exterior visualization.
            </p>
          </div>

          <div className="space-y-14">
            <div className="space-y-8">
              {featuredPlanProjects.map((project) => (
                <article key={project.name} className="overflow-hidden border border-slate-300 bg-[#f8fafc]">
                  <div className="grid gap-0 lg:grid-cols-[0.42fr_0.58fr]">
                    <div className="flex flex-col justify-between bg-[#101820] p-7 text-white md:p-9">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">{project.rank}</p>
                        <h3 className="mt-4 text-4xl font-black">{project.name}</h3>
                        <p className="mt-5 leading-7 text-slate-200">{project.description}</p>
                      </div>
                      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                          href={project.galleryHref}
                          className="inline-flex w-fit border border-cyan-100/40 px-5 py-3 font-bold text-cyan-50 transition hover:bg-cyan-400 hover:text-[#101820]"
                        >
                          View Gallery
                        </a>
                        <a
                          href={project.pdfHref}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex w-fit border border-cyan-100/40 px-5 py-3 font-bold text-cyan-50 transition hover:bg-cyan-400 hover:text-[#101820]"
                        >
                          Open Redacted PDF
                        </a>
                      </div>
                    </div>
                    <div className="grid gap-4 p-4 md:grid-cols-2">
                      {project.sheets.map((sheet) => (
                        <figure key={sheet.src} className="group bg-white">
                          <div className="overflow-hidden border border-slate-200 bg-white">
                            <Image
                              src={sheet.src}
                              alt={sheet.alt}
                              width={sheet.width}
                              height={sheet.height}
                              sizes="(max-width: 1024px) 100vw, 30vw"
                              className="aspect-[3/2] w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                            />
                          </div>
                          <figcaption className="px-1 pt-3 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">
                            {sheet.title}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black">Exterior Renderings</h3>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">Enscape / <span className="whitespace-nowrap">V-Ray</span></span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {exteriorRenders.map((render) => (
                  <figure key={render.src} className="group overflow-hidden border border-slate-200 bg-slate-100">
                    <Image
                      src={render.src}
                      alt={render.alt}
                      width={render.width}
                      height={render.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </figure>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black">Interior Renderings</h3>
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">SketchUp / Enscape</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {interiorRenders.map((render) => (
                  <figure key={render.src} className="group overflow-hidden border border-slate-200 bg-slate-100">
                    <Image
                      src={render.src}
                      alt={render.alt}
                      width={render.width}
                      height={render.height}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </figure>
                ))}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="border border-slate-300 bg-[#101820] p-8 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">Plan Sets</p>
                <h3 className="mt-4 text-3xl font-black">Redacted drawings for plan review and technical coordination.</h3>
                <p className="mt-5 leading-7 text-slate-200">
                  Downloadable drawing sets are included as supporting documentation for the plan previews and project galleries.
                </p>
              </div>
              <div className="grid gap-3">
                {planSets.map((plan, index) => (
                  <a
                    key={plan.href}
                    href={plan.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 border border-slate-300 bg-[#f8fafc] px-5 py-4 transition hover:border-cyan-700 hover:bg-cyan-50"
                  >
                    <span className="font-semibold text-slate-900">{plan.title}</span>
                    <span className="font-mono text-sm text-cyan-700">PDF 0{index + 1}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="bg-[#101820] p-8 text-white md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">Workflow</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">From drawing review to clean handoff.</h2>
            <div className="mt-10 space-y-4">
              {bidWorkflow.map((step, index) => (
                <div key={step} className="flex gap-4 border-t border-white/15 pt-4">
                  <span className="font-mono text-cyan-200">0{index + 1}</span>
                  <p className="text-lg text-slate-100">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-slate-300 bg-white p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-700">Contact</p>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">Available for drafting, modeling, and design support roles.</h2>
            <div className="mt-8 space-y-4 text-slate-700">
              <p>Focused on clean construction documentation, technical coordination, plan review, 3D visualization, and organized handoff material.</p>
              <p>Comfortable moving between drawing sets, renderings, takeoff-style thinking, and software-driven workflows.</p>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:davidpbyrke@gmail.com" className="bg-[#101820] px-5 py-3 text-center font-bold text-white transition hover:bg-cyan-800">
                Contact
              </a>
              <a href="/resumes/drafting-resume.pdf" className="border border-[#101820] px-5 py-3 text-center font-bold text-[#101820] transition hover:bg-slate-100">
                Drafting Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
