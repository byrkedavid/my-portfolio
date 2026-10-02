import Link from "next/link";
import styles from "./hub.module.css";

const portfolios = [
  { number: "01", title: "Data center", subtitle: "Operations & infrastructure", href: "/data-center", resumeHref: "/resumes/data-center-resume.pdf", description: "Hands-on AWS infrastructure work, Linux troubleshooting, and tools that improve operational workflows.", tags: ["Linux", "Hardware", "Networking", "Python"], theme: "infra" },
  { number: "02", title: "Software", subtitle: "Applications & automation", href: "/software", resumeHref: "/resumes/software-resume.pdf", description: "Mobile applications, automation projects, embedded systems, and full-stack development.", tags: ["Python", "React Native", "Java", "APIs"], theme: "software" },
  { number: "03", title: "Drafting", subtitle: "Architecture & visualization", href: "/drafting", resumeHref: "/resumes/drafting-resume.pdf", description: "Architectural plan sets, interior and exterior renderings, 3D modeling, and design-support workflows.", tags: ["AutoCAD", "SketchUp", "Enscape", "Bluebeam"], theme: "drafting" },
];

function PortfolioIcon({ kind }: { kind: string }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    {kind === "infra" ? <><rect x="5" y="4" width="22" height="10" rx="2"/><rect x="5" y="18" width="22" height="10" rx="2"/><path d="M10 9h1m4 0h7M10 23h1m4 0h7M16 14v4"/></> : kind === "software" ? <><path d="m10 8-8 8 8 8m12-16 8 8-8 8m-4-19-4 22"/></> : <><path d="M5 27V5h22v22H5Zm0-14h10V5m0 8v14m0-9h12"/><path d="M21 5v7m-6 12h6"/></>}
  </svg>;
}

export default function PortfolioHub() {
  return <main className={styles.page}>
    <a className={styles.skip} href="#portfolios">Skip to portfolios</a>
    <div className={styles.shell}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand}><svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#335ef5"/><path d="M6 8h4c8 0 8 16 0 16H6V8Zm3 3v10h1c4 0 4-10 0-10H9Zm10-3h4c6 0 7 6 3 8 5 2 3 8-2 8h-5V8Zm3 3v4h1c3 0 3-4 0-4h-1Zm0 7v3h2c2 0 2-3 0-3h-2Z" fill="white" fillRule="evenodd"/></svg><span>David Byrke</span></Link>
        <nav aria-label="Contact links" className={styles.nav}><a href="https://github.com/byrkedavid" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/david-byrke-b47220182" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:davidpbyrke@gmail.com" className={styles.contact}>Get in touch</a></nav>
      </header>
      <section className={styles.intro} aria-labelledby="intro-title">
        <p className={styles.eyebrow}>THE PORTFOLIO INDEX</p>
        <div className={styles.introRow}><h1 id="intro-title">Explore my work<span>.</span></h1><p>Data center operations.<br/>{" "}Software development.<br/>{" "}Architectural drafting.</p></div>
      </section>
      <section id="portfolios" className={styles.portfolios} aria-label="Choose a portfolio">
        {portfolios.map(p => <article key={p.href} className={`${styles.card} ${styles[p.theme]}`}>
          <div className={styles.cardTop}><span className={styles.number}>{p.number}</span><div className={styles.icon}><PortfolioIcon kind={p.theme}/></div></div>
          <p className={styles.subtitle}>{p.subtitle}</p>
          <h2><Link href={p.href}>{p.title}</Link></h2>
          <p className={styles.description}>{p.description}</p>
          <div className={styles.tags}>{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className={styles.cardActions}><Link href={p.href} className={styles.open}>Explore portfolio</Link><a href={p.resumeHref} className={styles.resume}>Resume PDF</a></div>
        </article>)}
      </section>
      <footer className={styles.footer}><span>David Byrke / Selected work</span><a href="mailto:davidpbyrke@gmail.com">davidpbyrke@gmail.com</a></footer>
    </div>
  </main>;
}
