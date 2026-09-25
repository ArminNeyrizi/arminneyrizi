const ecosystem = [
  { code: "01", name: "Stack", role: "Software Development" },
  { code: "02", name: "ContentCity", role: "Content & AI Content Creation" },
  { code: "03", name: "Basseo", role: "SEO" },
  { code: "04", name: "DesignLab", role: "Design" },
  { code: "05", name: "Opsmith", role: "DevOps" },
  { code: "06", name: "Datalab", role: "Data & BI" },
  { code: "07", name: "Monich", role: "Financial Literacy" },
  { code: "08", name: "Oper", role: "Business Operations" },
  { code: "09", name: "Froma", role: "Sales & Marketing" },
];

const stack = [
  "Next.js",
  "React",
  "Tailwind",
  "shadcn/ui",
  "NestJS",
  "Django",
  "PostgreSQL",
  "Supabase",
  "SQLite",
  "Docker",
  "Kubernetes",
  "n8n",
  "ERPNext",
  "Figma",
  "Webflow",
];

const learning = [
  "Algorithms & Data Structures — CSES",
  "MBA & Strategic Management",
  "Marketing",
  "Excel / Access / Power BI",
  "Advanced C++ Programming",
  "Engineering & University Courses",
];

const principles = [
  {
    n: "01",
    title: "Systems Before Effort",
    body: "Before taking action, I look for a structure that makes the action repeatable: SOPs, KPIs, OKRs, and dashboards—not daily heroics.",
  },
  {
    n: "02",
    title: "Simplicity Over Complexity",
    body: "A good process is one that the next person can execute too. Removing complexity is a skill in itself.",
  },
  {
    n: "03",
    title: "Build, Don't Just Learn",
    body: "Theory becomes valuable when it leads to something real. MVP first, theorizing second.",
  },
  {
    n: "04",
    title: "Systems Thinking",
    body: "I’m interested in systems engineering and thinkers like Elon Musk—looking at a business as a machine that can be measured, improved, and optimized.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Top ticker */}
      <div className="border-b-2 hairline overflow-hidden whitespace-nowrap bg-[var(--ink)] text-[var(--paper)] py-2">
        <div className="marquee-track inline-flex w-max gap-8 text-xs md:text-sm tracking-widest">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="inline-flex gap-8">
              {[
                "SYSTEM DESIGNER",
                "PROJECT MANAGER",
                "ECOSYSTEM BUILDER",
                "FOUNDER OF JOINLY",
                "PROJECT-BASED TALENT FACTORY",
                "SYSTEM DESIGN",
                "MVP FIRST",
              ].map((t, j) => (
                <span key={j} className="inline-flex items-center gap-8">
                  <span>{t}</span>
                  <span>／</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-6 border-b-2 hairline">
        <span className="text-lg font-black tracking-tight">A.N.</span>

        <nav className="hidden md:flex gap-8 text-sm">
          <a
            href="#joinly"
            className="hover:opacity-50 transition-opacity"
          >
            Joinly
          </a>

          <a
            href="#principles"
            className="hover:opacity-50 transition-opacity"
          >
            Philosophy
          </a>

          <a
            href="#stack"
            className="hover:opacity-50 transition-opacity"
          >
            Stack
          </a>

          <a
            href="#contact"
            className="hover:opacity-50 transition-opacity"
          >
            Contact
          </a>
        </nav>

        <span className="text-xs text-[var(--mute)]">Armin Neyrizi</span>
      </header>

      {/* Hero */}
      <section className="noise relative px-6 md:px-12 pt-16 pb-20 md:pt-28 md:pb-32 border-b-2 hairline">
        <p className="rise text-sm md:text-base tracking-[0.3em] text-[var(--mute)] mb-6">
          SYSTEM DESIGNER / BUILDER
        </p>

        <h1
          className="rise text-[13vw] md:text-[7vw] leading-[0.95] font-black tracking-tighter"
          style={{ animationDelay: "0.08s" }}
        >
          ARMIN
          <br />
          NEYRIZI
        </h1>

        <div
          className="rise mt-10 md:mt-14 max-w-2xl text-lg md:text-xl leading-relaxed text-[var(--ink)]/80"
          style={{ animationDelay: "0.2s" }}
        >
          <span>
            I see myself more as a <strong>system designer</strong>,{" "}
            <strong>project manager</strong>, and{" "}
            <strong>ecosystem builder</strong> than simply a programmer. I
            build things that are designed to work properly—even when I’m not
            there.
          </span>
        </div>

        <div
          className="rise mt-10 flex items-center gap-3 text-sm"
          style={{ animationDelay: "0.3s" }}
        >
          <span className="inline-block w-2.5 h-5 bg-[var(--ink)] cursor-blink" />
          <span className="text-[var(--mute)]">
            Currently building Joinly —
          </span>
        </div>
      </section>

      {/* Identity strip */}
      <section className="grid grid-cols-2 md:grid-cols-4 border-b-2 hairline">
        {[
          ["Mindset", "Systems Thinking"],
          ["Interest", "Reading"],
          ["Management Tools", "SOP · KPI · OKR"],
          ["Approach", "MVP First"],
        ].map(([label, val], i) => (
          <div
            key={i}
            className={`p-6 md:p-8 ${i !== 3 ? "border-l-2" : ""} hairline`}
          >
            <p className="text-xs text-[var(--mute)] tracking-widest mb-3">
              {label}
            </p>

            <p className="text-base md:text-lg font-bold">{val}</p>
          </div>
        ))}
      </section>

      {/* Joinly */}
      <section
        id="joinly"
        className="px-6 md:px-12 py-20 md:py-28 border-b-2 hairline"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-xs tracking-[0.3em] text-[var(--mute)] mb-4">
              MAIN PROJECT
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-tight">
              Joinly
            </h2>
          </div>

          <p className="max-w-md text-base md:text-lg leading-relaxed text-[var(--ink)]/80">
            A <strong>Project-Based Talent Factory</strong> built to close the
            gap between education and the job market—bringing learning, real
            projects, work experience, and market access into one connected
            path.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t-2 border-r-2 hairline">
          {ecosystem.map((item) => (
            <div
              key={item.code}
              className="group border-b-2 border-l-2 hairline p-6 md:p-8 min-h-[160px] flex flex-col justify-between transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              <span className="text-xs text-[var(--mute)] group-hover:text-[var(--paper)]/60">
                {item.code}
              </span>

              <div>
                <h3 className="text-2xl font-black mb-1">{item.name}</h3>

                <p className="text-sm text-[var(--mute)] group-hover:text-[var(--paper)]/70">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section
        id="principles"
        className="px-6 md:px-12 py-20 md:py-28 border-b-2 hairline"
      >
        <p className="text-xs tracking-[0.3em] text-[var(--mute)] mb-4">
          PHILOSOPHY
        </p>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-14 max-w-3xl">
          Good processes are simple.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {principles.map((p) => (
            <div key={p.n} className="flex gap-6">
              <span className="text-4xl md:text-5xl font-black text-[var(--ink)]/15 shrink-0">
                {p.n}
              </span>

              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {p.title}
                </h3>

                <p className="text-[var(--ink)]/70 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Content City callout */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b-2 hairline bg-[var(--ink)] text-[var(--paper)]">
        <p className="text-xs tracking-[0.3em] text-[var(--paper)]/50 mb-4">
          SUBPROJECT
        </p>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8">
          ContentCity
        </h2>

        <p className="max-w-2xl text-lg leading-relaxed text-[var(--paper)]/80 mb-10">
          An AI content creation program covering everything from prompt
          engineering to images, video, animation, sound, character creation,
          and motion. Designed around a subscription and bootcamp model.
        </p>

        <div className="flex flex-wrap gap-3">
          {[
            "Prompt Engineering",
            "Images",
            "Video",
            "Animation",
            "Sound",
            "Character Design",
            "Motion",
          ].map((t) => (
            <span
              key={t}
              className="border border-[var(--paper)]/40 rounded-full px-4 py-1.5 text-sm"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-[var(--paper)]/20">
          <p className="text-xs tracking-[0.3em] text-[var(--paper)]/50 mb-2">
            SIDE PROJECT
          </p>

          <p className="text-2xl font-bold">
            Meow Island — An AI Series Concept
          </p>
        </div>
      </section>

      {/* Stack */}
      <section
        id="stack"
        className="px-6 md:px-12 py-20 md:py-28 border-b-2 hairline"
      >
        <p className="text-xs tracking-[0.3em] text-[var(--mute)] mb-4">
          TECH STACK
        </p>

        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-12">
          Tools I Build With
        </h2>

        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {stack.map((s, i) => (
            <span
              key={s}
              className="text-2xl md:text-4xl font-bold text-[var(--ink)]/25 hover:text-[var(--ink)] transition-colors cursor-default"
            >
              {s}

              {i !== stack.length - 1 && (
                <span className="mx-3 text-[var(--ink)]/10">·</span>
              )}
            </span>
          ))}
        </div>
      </section>

      {/* Learning */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b-2 hairline grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10">
        <div>
          <p className="text-xs tracking-[0.3em] text-[var(--mute)] mb-4">
            CURRENTLY LEARNING
          </p>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Growth Path
          </h2>
        </div>

        <ul>
          {learning.map((l, i) => (
            <li
              key={l}
              className="flex items-center justify-between py-5 border-t hairline text-lg md:text-xl"
            >
              <span>{l}</span>

              <span className="text-[var(--mute)] text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
            </li>
          ))}

          <li className="border-t hairline" />
        </ul>
      </section>

      {/* Contact / Footer */}
      <footer id="contact" className="px-6 md:px-12 py-20 md:py-28">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-10">
          Let’s build
          <br />
          a system.
        </h2>

        <div className="flex flex-wrap items-center gap-6 mb-16">
          <a
            href="mailto:arminneyrizi@gmail.com"
            className="inline-flex items-center gap-3 border-2 hairline rounded-full px-6 py-3 text-base font-bold hover:bg-[var(--ink)] hover:text-[var(--paper)] transition-colors"
          >
            arminneyrizi@gmail.com
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-8 border-t-2 hairline text-sm text-[var(--mute)]">
          <span>
            © {new Date().getFullYear()} Armin Neyrizi. System Designer,
            Builder of Joinly.
          </span>

          <span>Built with Next.js — black & white, intentionally.</span>
        </div>
      </footer>
    </main>
  );
}