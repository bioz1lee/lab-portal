import type { Metadata } from "next";
import PageSection from "@/components/PageSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Research",
};

const researchAreas = [
  {
    category: "Somatic Mosaicism",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    desc: "We study somatic mutations that accumulate during cell division, tracing their origins through mutational signature and lineage analysis across diverse tissue types.",
    items: [
      {
        label: "Brain",
        desc: "Finding cellular origin of hypermutable brain tissues.",
      },
      {
        label: "Lung",
        desc: "Exploring hidden genetic causes in congenital lung disease.",
      },
      {
        label: "Urine",
        desc: "Monitoring kidney transplant patients.",
      },
    ],
  },
  {
    category: "Multi-Omics",
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    desc: "Integrating genomic, transcriptomic, epigenomic, and proteomic data to functionally interpret somatic mutations and their impact on disease.",
    items: [
      {
        label: "Developmental Senescence",
        desc: "Investigating cellular aging mechanisms during early development.",
      },
      {
        label: "Parkinson's Disease",
        desc: "Uncovering somatic mutation contributions to neurodegeneration.",
      },
    ],
  },
  {
    category: "Bio-AI",
    icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h9a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 15.75 4.5h-9A2.25 2.25 0 0 0 4.5 6.75v10.5A2.25 2.25 0 0 0 6.75 19.5Z",
    desc: "Leveraging foundation models and deep learning to predict variant effects, design therapeutics, and build prognostic tools.",
    items: [
      {
        label: "Single Cell Foundation Model",
        desc: "Developing a new prognostic prediction model for transplant recipients using scFM.",
      },
      {
        label: "Genomic Foundation Model",
        desc: "Variant effect prediction.",
      },
      {
        label: "Structure Prediction Model",
        desc: "New druggable peptide design.",
      },
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageBanner subtitle="What We Do" title="Research" />

      <PageSection title="Research Areas">
        <div className="space-y-16">
          {researchAreas.map((area, areaIdx) => (
            <div key={area.category}>
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 bg-crimson text-white rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={area.icon} />
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-muted/40 uppercase tracking-widest">0{areaIdx + 1}</span>
                  <h3 className="text-xl font-bold text-foreground leading-tight">{area.category}</h3>
                </div>
              </div>

              <p className="text-muted leading-relaxed mb-6 sm:ml-[3.75rem]">
                {area.desc}
              </p>

              {/* Sub-items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:ml-[3.75rem]">
                {area.items.map((item) => (
                  <div
                    key={item.label}
                    className="group bg-white rounded-xl border border-border p-5 hover:border-crimson/20 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 w-2 h-2 rounded-full bg-crimson/40 group-hover:bg-crimson shrink-0 transition-colors" />
                      <div>
                        <h4 className="font-semibold text-foreground text-[15px] leading-snug">{item.label}</h4>
                        {item.desc && (
                          <p className="text-sm text-muted mt-1.5 leading-relaxed">{item.desc}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider between sections */}
              {areaIdx < researchAreas.length - 1 && (
                <div className="border-b border-border mt-16" />
              )}
            </div>
          ))}
        </div>
      </PageSection>
    </>
  );
}
