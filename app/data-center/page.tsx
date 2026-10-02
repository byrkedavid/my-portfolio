import type { Metadata } from "next";
import Link from "next/link";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "David Byrke | Data Center Operations & Linux",
  description: "AWS Network Deployment Technician with Linux troubleshooting skills, hands-on hardware and networking experience, and Python automation projects. Explore David Byrke's work and download his data center resume.",
};

const resume = "/resumes/data-center-resume.pdf";
const linkedin = "https://www.linkedin.com/in/david-byrke-b47220182";
const github = "https://github.com/byrkedavid";

const linuxAreas = [
  { title: "Find the signal in the logs", description: "Investigate OS issues through logs, service status, and running processes.", commands: "journalctl · systemctl · ps · top" },
  { title: "Work confidently over SSH", description: "Remote access, file permissions, command-line workflows, pipes, and redirection.", commands: "ssh · chmod · grep · | · >" },
  { title: "Understand the system underneath", description: "Storage and partitioning, networking fundamentals, and hands-on virtual machine practice.", commands: "Ubuntu · VirtualBox · Hyper-V · Docker" },
];

const projects = [
  {
    number: "01",
    title: "Less time entering cabling records.",
    name: "Cabling Tracker / Bulk Updater",
    description: "Handwritten cabling notes need to become accurate infrastructure records. I built a Python tool that uses OCR and the Asana API to turn those notes into structured updates.",
    outcome: "Approximately 40% less repetitive data entry in internal workflow testing.",
    stack: ["Python", "OCR", "Asana API"],
  },
  {
    number: "02",
    title: "A clearer picture of the patch panel.",
    name: "Patch Panel Audit Visualizer",
    description: "Port mappings are easier to audit when they look like the equipment in front of you. My visualization tool turns infrastructure mappings into a physical patch-panel layout.",
    outcome: "Simplifies audits and reduces manual cross-referencing.",
    stack: ["JavaScript", "Tampermonkey", "Port mapping"],
  },
  {
    number: "03",
    title: "Keep the team on the same page.",
    name: "Onsite Coordination Tool",
    description: "I built a Slack workflow for technician site check-ins and automated operational summaries, bringing onsite coordination into a tool the team already uses.",
    outcome: "Technician check-ins and operational summaries in one workflow.",
    stack: ["Python", "Slack API", "Automation"],
  },
];

function Tags({ values }: { values: string[] }) {
  return <div className={styles.tags}>{values.map(value => <span key={value}>{value}</span>)}</div>;
}

export default function DataCenterPortfolio() {
  return (
    <main className={styles.page}>
      <a className={styles.skip} href="#main-content">Skip to content</a>
      <header className={styles.header}>
        <nav className={styles.nav} aria-label="Main navigation">
          <Link className={styles.identity} href="/"><span className={styles.monogram}>DB</span><span>David Byrke</span></Link>
          <div className={styles.navLinks}><a href="#skills">Linux &amp; skills</a><a href="#work">Field work</a><a href="#projects">Projects</a></div>
          <a className={styles.navContact} href="#contact">Let’s connect</a>
        </nav>
      </header>

      <section className={`${styles.wrap} ${styles.hero}`} id="main-content">
        <div>
          <p className={styles.eyebrow}>DATA CENTER OPERATIONS / DAVID BYRKE</p>
          <h1>Hands on the hardware.<br/><span>At home in Linux.</span></h1>
          <p className={styles.intro}>I troubleshoot infrastructure at AWS and build tools that make the work easier. My focus: reliable connections, practical Linux skills, and better operational workflows.</p>
          <div className={styles.actions}><a className={styles.primary} href={resume} download="David-Byrke-Data-Center-Resume.pdf">Download resume</a><a className={styles.secondary} href="#work">Explore my work</a></div>
          <div className={styles.heroLinks}><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={github} target="_blank" rel="noreferrer">GitHub</a><a href="mailto:davidpbyrke@gmail.com">Email me</a></div>
        </div>
        <aside className={styles.linuxPanel} aria-label="Linux skills overview">
          <div className={styles.panelBar}><span className={styles.panelLabel}>CORE FOCUS</span><span className={styles.panelContext}>Ubuntu / Linux</span></div>
          <div className={styles.panelBody}>
            <span className={styles.prompt} aria-hidden="true">~/skills $</span>
            <h2>Linux.<br/>Beyond the command line.</h2>
            <p>Understanding what’s running, why it’s failing, and where to look next.</p>
            <div className={styles.panelSkills}><span>OS troubleshooting</span><span>Logs &amp; services</span><span>SSH &amp; permissions</span><span>Networking &amp; storage</span></div>
            <div className={styles.labNote}><span>HOW I PRACTICE</span><p>Independent study and hands-on Ubuntu labs in VirtualBox and Hyper-V, with SSH and Docker.</p></div>
          </div>
        </aside>
      </section>

      <div className={styles.credentials}><div className={styles.wrap}><p><strong>AWS</strong><span>Network Deployment Technician</span></p><p><strong>Python</strong><span>Operational automation</span></p><p><strong>CS B.S.</strong><span>Kennesaw State · Expected 2027</span></p></div></div>

      <section id="skills" className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>01 / TECHNICAL TOOLKIT</p><h2>From the rack<br/>to the operating system.</h2></div><p>Production experience in hardware and connectivity. Linux skills built through deliberate, hands-on practice.</p></div>
        <div className={styles.toolkit}>
          <article className={styles.linuxCard}><div className={styles.cardTop}><span className={styles.codeMark} aria-hidden="true">&gt;_</span><span className={styles.smallLabel}>LINUX / INDEPENDENT STUDY</span></div><h3>Know where to look.</h3>{linuxAreas.map(area => <div className={styles.linuxArea} key={area.title}><h4>{area.title}</h4><p>{area.description}</p><span className={styles.commandList}>{area.commands}</span></div>)}</article>
          <div className={styles.sideSkills}>
            <article className={styles.skillCard}><span className={styles.smallLabel}>HARDWARE &amp; NETWORKS / AWS</span><h3>Find the fault.<br/>Verify the fix.</h3><p>Server connectivity, switch console access, optical diagnostics, component replacement, and port validation.</p><Tags values={["MPO / LC fiber", "Optical transceivers", "PuTTY", "TCP/IP"]}/></article>
            <article className={styles.skillCard}><span className={styles.smallLabel}>AUTOMATION &amp; FUNDAMENTALS</span><h3>Make repeat work easier.</h3><p>Python and API integrations for operational tools, plus SQL and shell scripting fundamentals. Conceptual knowledge of HTTP, DNS, DHCP, and RAID.</p><Tags values={["Python", "SQL", "Shell", "REST APIs"]}/></article>
          </div>
        </div>
      </section>

      <section id="work" className={styles.workSection}><div className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>02 / IN THE FIELD</p><h2>A connection problem.<br/>A verified resolution.</h2></div><p>A troubleshooting example from my AWS data center work.</p></div>
        <div className={styles.caseStudy}>
          <div className={styles.caseIntro}><span className={styles.smallLabel}>SERVER HANDOFF / OPTICAL CONNECTIVITY</span><h3>Tracing a degraded MPO link to a failed optic.</h3><p>During server handoff troubleshooting, I traced degraded optical levels to a failed transceiver, replaced the component, and verified restored connectivity.</p><div className={styles.result}><strong>100%</strong><span>port connectivity verified<br/>after component replacement</span></div></div>
          <ol className={styles.steps}><li><span>01</span><div><h4>Isolate</h4><p>Use internal monitoring tools and physical connection checks to narrow down the fault across both ends of the link.</p></div></li><li><span>02</span><div><h4>Repair</h4><p>Trace degraded optical levels to the failed optic and replace the component.</p></div></li><li><span>03</span><div><h4>Verify</h4><p>Validate port connectivity after the repair as part of resolving the server handoff ticket.</p></div></li></ol>
        </div>
        <div className={styles.fieldNote}><span className={styles.smallLabel}>DAY TO DAY AT AWS</span><p>Infrastructure deployment · Cabling and labeling audits · Connectivity troubleshooting · Switch CLI access · Ticket resolution</p></div>
      </div></section>

      <section id="projects" className={`${styles.wrap} ${styles.section}`}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>03 / BUILT FOR THE WORK</p><h2>Small tools.<br/>Useful improvements.</h2></div><p>When a workflow creates repetitive work or makes information hard to read, I look for a practical way to improve it.</p></div>
        <div className={styles.projectGrid}>{projects.map(project => <article className={styles.project} key={project.name}><div className={styles.projectTop}><span>{project.number}</span><span>AUTOMATION / OPERATIONS</span></div><h3>{project.title}</h3><p className={styles.projectName}>{project.name}</p><p className={styles.projectDescription}>{project.description}</p><div className={styles.outcome}>{project.outcome}</div><Tags values={project.stack}/></article>)}</div>
        <div className={styles.projectFooter}><p>More of my software work is in my development portfolio.</p><Link href="/software">Explore software projects</Link><a href={github} target="_blank" rel="noreferrer">GitHub profile</a></div>
      </section>

      <section className={styles.aboutSection}><div className={`${styles.wrap} ${styles.about}`}><p className={styles.eyebrow}>THE PERSON BEHIND THE WORK</p><div><h2>A builder’s approach<br/>to infrastructure.</h2><p>My background spans technical drafting, electronics troubleshooting, and data center deployment. The common thread is working through the details until the system makes sense.</p><p>I’m pursuing a B.S. in Computer Science at Kennesaw State University, expected in 2027, and studying toward the CCNA. Alongside my AWS work, I’m developing Linux and automation skills for deeper infrastructure responsibilities.</p></div></div></section>

      <section id="contact" className={`${styles.wrap} ${styles.contact}`}><div><p className={styles.eyebrow}>START A CONVERSATION</p><h2>Let’s talk infrastructure.</h2><p>Data center technician and production operations opportunities.</p><a className={styles.email} href="mailto:davidpbyrke@gmail.com">davidpbyrke@gmail.com</a><a className={styles.phone} href="tel:+16783274880">(678) 327-4880</a></div><div className={styles.contactActions}><a className={styles.primary} href={resume} download="David-Byrke-Data-Center-Resume.pdf">Download data center resume</a><a className={styles.secondary} href={resume} target="_blank" rel="noreferrer">View resume PDF</a><div className={styles.socialLinks}><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={github} target="_blank" rel="noreferrer">GitHub</a><a href="https://davidbyrke.com">davidbyrke.com</a></div></div></section>
      <footer className={styles.footer}><div className={styles.wrap}><span>David Byrke / Data Center Operations</span><Link href="/">All portfolios</Link></div></footer>
    </main>
  );
}
