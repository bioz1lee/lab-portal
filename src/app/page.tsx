import Link from "next/link";
import PageSection from "@/components/PageSection";

const newsItems = [
  { date: "December, 2025", text: "Jaehyuk Jeon joined the lab as student intern. Welcome!" },
  { date: "November, 2025", text: "Ina Jeon joined the lab as incoming Master's student. Welcome!" },
  { date: "July, 2025", text: "YuJin Kim joined the lab as student intern. Welcome!" },
  { date: "March, 2025", text: "Seoyeon Kim joined the lab as an incoming Ph.D student. Welcome!" },
  { date: "March, 2025", text: "Dongwon Yun, Minje Sung joined the lab as an incoming master's student. Welcome!" },
  { date: "November, 2024", text: "Jiwon Lee joined the Lab as student intern. Welcome!" },
  { date: "September, 2024", text: "The Genomic Analysis Lab opened." },
];

const researchAreas = [
  {
    icon: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    title: "Somatic Mosaicism",
    desc: "Detecting somatic mutations in brain, lung, and urine with single-cell and ultra-high-resolution WGS.",
    link: "/research",
  },
  {
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    title: "Multi-Omics",
    desc: "Integrating diverse multi-omic datasets to study developmental senescence and Parkinson's disease.",
    link: "/research",
  },
  {
    icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 15.75 4.5h-9A2.25 2.25 0 0 0 4.5 6.75v10.5A2.25 2.25 0 0 0 6.75 19.5Z",
    title: "Bio-AI",
    desc: "Foundation models for single-cell, genomic variant prediction, and druggable peptide design.",
    link: "/research",
  },
];

const stats = [
  { value: "31", label: "Publications" },
  { value: "3", label: "Research Pillars" },
  { value: "2024", label: "Established" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-crimson min-h-[85vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-crimson-dark/40 via-transparent to-teal/[0.06]" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/[0.07] to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Text — 7 cols */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center justify-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.06] rounded-full px-5 py-1.5 mb-8">
                <span className="text-white/60 text-xs font-medium tracking-wide">
                  Korea University &middot; College of Health Science
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                M<span className="text-teal-light">O</span>s<span className="text-teal-light">AI</span>ci<span className="text-teal-light">S</span>M
              </h1>
              <p className="mt-5 text-xl sm:text-2xl text-white/50 font-light leading-relaxed">
                Decoding Somatic Mosaicism
                <br />
                with <span className="text-teal-light font-normal">AI</span> and <span className="text-teal-light font-normal">Multi-Omics</span>
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/research"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-crimson font-semibold text-sm rounded-xl hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
                >
                  Explore Research
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/publication"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/15 text-white font-semibold text-sm rounded-xl hover:bg-white/20 transition-all duration-300"
                >
                  Publications
                </Link>
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/10 text-white/60 font-medium text-sm rounded-xl hover:border-white/25 hover:text-white transition-all duration-300"
                >
                  Join Us
                </Link>
              </div>
            </div>

            {/* Right: Research preview cards — 5 cols */}
            <div className="hidden lg:block lg:col-span-5">
              <div className="space-y-3">
                {/* Lab logo */}
                <div className="flex justify-center mb-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo.svg"
                    alt="MOsAIciSM Lab"
                    className="w-72 opacity-[0.35]"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </div>

                {researchAreas.map((item, i) => (
                  <Link
                    key={item.title}
                    href={item.link}
                    className="group flex items-center gap-4 bg-white/[0.06] backdrop-blur-sm border border-white/[0.06] rounded-xl px-5 py-4 hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-300"
                  >
                    <span className="text-[11px] font-bold text-white/20 tracking-widest w-6 shrink-0">0{i + 1}</span>
                    <div className="w-9 h-9 bg-white/[0.08] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal/20 transition-colors">
                      <svg className="w-4 h-4 text-white/50 group-hover:text-teal-light transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-white/90">{item.title}</h3>
                      <p className="text-xs text-white/35 truncate">{item.desc}</p>
                    </div>
                    <svg className="w-4 h-4 text-white/20 group-hover:text-white/50 shrink-0 ml-auto transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="bg-white/[0.04] border border-white/[0.05] rounded-xl px-4 py-3 text-center">
                      <p className="text-xl font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] text-white/35 mt-0.5 uppercase tracking-wider font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="lg:hidden mt-16 grid grid-cols-3 gap-2">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/[0.04] border border-white/[0.05] rounded-xl px-4 py-4 text-center">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-[10px] text-white/35 mt-0.5 uppercase tracking-wider font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <PageSection title="About Our Lab">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-4 text-muted leading-relaxed">
            <p>
              The MOsAIciSM Lab focuses on studying the occurrence of genetic variants and their effects on functional phenotypic changes through large-scale genomic data analysis.
            </p>
            <p>
              Specifically, we specialize in somatic mutations that accumulate during cell division and the resulting phenomenon of somatic mosaicism, where individual cell populations form unique genomic patterns.
            </p>
            <p>
              Our lab develops experimental and analytical methodologies to detect somatic mosaicism from large-scale genomic sequencing data. Through mutational signature analysis of detected somatic mutations, we trace the origins of these variations.
            </p>
            <p>
              Furthermore, we utilize mutational lineage analysis to explore early human developmental processes that are experimentally challenging to study. Additionally, we perform functional interpretation of somatic mutations by integrating diverse multi-omic datasets.
            </p>
            <p>
              This allows us to investigate the impact of somatic mutations on human development, aging, and their associations with various diseases.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-3">
              <div className="group bg-white rounded-xl border border-border p-5 hover:border-crimson/20 hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-crimson/10 text-crimson rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">31</p>
                    <p className="text-xs text-muted">Peer-reviewed Publications</p>
                  </div>
                </div>
              </div>
              <div className="group bg-white rounded-xl border border-border p-5 hover:border-crimson/20 hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-crimson/10 text-crimson rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">2024</p>
                    <p className="text-xs text-muted">Lab Established at KU</p>
                  </div>
                </div>
              </div>
              {/* KU affiliation */}
              <div className="bg-crimson-50 rounded-xl border border-crimson-100 p-5">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/ku-logo-crimson.gif"
                    alt="Korea University"
                    className="w-11 h-11 object-contain"
                  />
                  <div>
                    <p className="text-sm font-semibold text-crimson">Korea University</p>
                    <p className="text-xs text-muted">College of Health Science</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Research Areas */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="w-1 h-8 bg-crimson rounded-full" />
              Research Pillars
            </h2>
            <Link href="/research" className="text-sm text-crimson font-medium hover:underline hidden sm:inline-flex items-center gap-1">
              View all research
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchAreas.map((item, i) => (
              <Link
                key={item.title}
                href={item.link}
                className="group relative bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-transparent transition-all duration-500"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-crimson to-teal scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="p-7">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 bg-crimson/10 text-crimson rounded-xl flex items-center justify-center group-hover:bg-crimson group-hover:text-white transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-[10px] font-bold text-muted/40 tracking-widest">0{i + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-crimson transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-crimson opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <PageSection title="News">
        <div className="space-y-0">
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="group flex gap-6 items-baseline py-4 border-b border-border last:border-0 hover:bg-warm/50 -mx-4 px-4 rounded-lg transition-colors"
            >
              <span className="text-sm font-semibold text-crimson whitespace-nowrap min-w-[150px]">
                {item.date}
              </span>
              <span className="text-muted group-hover:text-foreground transition-colors">{item.text}</span>
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
