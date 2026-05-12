import Image from "next/image";

const galleryItems = [
  {
    title: "Office Floor Plan",
    src: "/drafting/featured/pec-floor-plan.png",
    alt: "Redacted sample project two office floor plan sheet",
    width: 3456,
    height: 2304,
  },
  {
    title: "Elevations & Sections",
    src: "/drafting/featured/pec-elevation.png",
    alt: "Redacted sample project two exterior elevations and building sections sheet",
    width: 3456,
    height: 2304,
  },
  {
    title: "Exterior Rendering",
    src: "/drafting/exteriors/PEC Exterior Rendering 11-6-24.jpg",
    alt: "Sample project two exterior rendering",
    width: 3680,
    height: 2070,
  },
  {
    title: "Lobby Rendering",
    src: "/drafting/interiors/pec1.jpg",
    alt: "Sample project two lobby rendering",
    width: 3200,
    height: 1800,
  },
  {
    title: "Conference Room Rendering",
    src: "/drafting/interiors/pec2.jpg",
    alt: "Sample project two conference room rendering",
    width: 3200,
    height: 1800,
  },
];

export default function SampleProjectTwoGallery() {
  return (
    <main className="min-h-screen bg-[#f4f2ed] text-[#111827]">
      <section className="bg-[#101820] px-6 py-12 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-12 flex items-center justify-between text-sm text-cyan-100">
            <a href="/drafting" className="font-semibold transition hover:text-white">
              Back to Drafting
            </a>
            <a href="/drafting/plans/PEC_redacted.pdf.pdf" target="_blank" rel="noreferrer" className="border border-cyan-100/30 px-4 py-2 font-bold transition hover:bg-cyan-300 hover:text-[#101820]">
              Open PDF
            </a>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">Sample Project #2</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none md:text-7xl">Drawing and rendering gallery.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Redacted plan sheets and visualization assets for a drafting and modeling project.
          </p>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6">
          {galleryItems.map((item) => (
            <figure key={item.src} className="border border-slate-300 bg-white p-3">
              <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="100vw" className="w-full object-contain" />
              <figcaption className="px-2 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-600">{item.title}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
