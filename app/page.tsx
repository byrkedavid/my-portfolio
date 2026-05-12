const portfolios = [
  {
    title: "Software Portfolio",
    href: "/software",
    resumeHref: "/resumes/software-resume.pdf",
    description:
      "Computer science projects, embedded systems work, Java development, React Native prototyping, and infrastructure-focused learning.",
    tags: ["Java", "React Native", "Embedded Systems", "Networking"],
  },
  {
    title: "Drafting Portfolio",
    href: "/drafting",
    resumeHref: "/resumes/drafting-resume.pdf",
    description:
      "Architectural drafting, redacted plan sets, interior and exterior renderings, 3D modeling, and design-support workflows.",
    tags: ["AutoCAD", "SketchUp", "Enscape", "Bluebeam"],
  },
];

export default function PortfolioHub() {
  return (
    <main className="min-h-screen bg-[#101820] px-6 py-10 text-white lg:px-10">
      <section className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center">
        <nav className="mb-16 flex items-center justify-between text-sm text-cyan-100">
          <a href="/" className="font-bold tracking-wide">
            David Byrke
          </a>
          <a href="mailto:davidpbyrke@gmail.com" className="rounded-full border border-cyan-200/30 px-4 py-2 transition hover:bg-white/10">
            Contact
          </a>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">Portfolio Directory</p>
            <h1 className="mt-5 text-5xl font-black leading-none md:text-7xl">
              Two focused portfolios. One place to start.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Choose the body of work that matches the role: software development or architectural drafting and 3D modeling.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {portfolios.map((portfolio) => (
              <article key={portfolio.title} className="border border-cyan-100/20 bg-white/5 p-6 backdrop-blur">
                <h2 className="text-3xl font-black">{portfolio.title}</h2>
                <p className="mt-4 min-h-28 leading-7 text-slate-200">{portfolio.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {portfolio.tags.map((tag) => (
                    <span key={tag} className="border border-cyan-100/25 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-100">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={portfolio.href} className="bg-cyan-200 px-5 py-3 text-center font-bold text-[#101820] transition hover:bg-white">
                    Open Portfolio
                  </a>
                  <a href={portfolio.resumeHref} className="border border-cyan-100/40 px-5 py-3 text-center font-bold text-cyan-50 transition hover:bg-white/10">
                    Resume
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
