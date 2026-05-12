import Image from "next/image";

const galleryItems = [
  {
    title: "Floor Plan Dimensions",
    src: "/drafting/featured/cga-floor-plan.png",
    alt: "Redacted sample project one floor plan dimensions sheet",
    width: 3456,
    height: 2304,
  },
  {
    title: "Exterior Elevations",
    src: "/drafting/featured/cga-elevation.png",
    alt: "Redacted sample project one exterior elevations sheet",
    width: 3456,
    height: 2304,
  },
  {
    title: "Exterior Rendering",
    src: "/drafting/exteriors/CGA Exterior 1.05.26.png",
    alt: "Sample project one exterior architectural rendering",
    width: 1920,
    height: 1080,
  },
  {
    title: "Interior Rendering 01",
    src: "/drafting/interiors/cga1.png",
    alt: "Sample project one interior rendering",
    width: 1920,
    height: 1080,
  },
  {
    title: "Interior Rendering 02",
    src: "/drafting/interiors/cga2.png",
    alt: "Sample project one interior rendering",
    width: 1920,
    height: 1080,
  },
  {
    title: "Interior Rendering 03",
    src: "/drafting/interiors/cga3.png",
    alt: "Sample project one interior rendering",
    width: 1920,
    height: 1080,
  },
  {
    title: "Interior Rendering 04",
    src: "/drafting/interiors/cga4.png",
    alt: "Sample project one interior rendering",
    width: 1920,
    height: 1080,
  },
];

export default function SampleProjectOneGallery() {
  return (
    <main className="min-h-screen bg-[#f4f2ed] text-[#111827]">
      <section className="bg-[#101820] px-6 py-12 text-white lg:px-10">
        <div className="mx-auto max-w-7xl">
          <nav className="mb-12 flex items-center justify-between text-sm text-cyan-100">
            <a href="/drafting" className="font-semibold transition hover:text-white">
              Back to Drafting
            </a>
            <a href="/drafting/plans/CGA_redacted.pdf" target="_blank" rel="noreferrer" className="border border-cyan-100/30 px-4 py-2 font-bold transition hover:bg-cyan-300 hover:text-[#101820]">
              Open PDF
            </a>
          </nav>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">Sample Project #1</p>
          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none md:text-7xl">Drawing and rendering gallery.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Redacted plan sheets and visualization assets for a featured drafting and modeling project.
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
