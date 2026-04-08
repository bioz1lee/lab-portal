import type { Metadata } from "next";
import PageSection from "@/components/PageSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <>
      <PageBanner subtitle="What We Do" title="Research" />

      <PageSection title="Research Areas">
        <div className="space-y-8">

          {/* 01 — Somatic Mosaicism */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 bg-crimson px-6 py-4">
              <span className="text-white/40 text-xs font-mono">01</span>
              <h3 className="text-lg font-bold text-white">Somatic Mosaicism</h3>
            </div>
            <div className="p-6">
              <p className="text-muted leading-relaxed mb-6">
                We study somatic mutations that accumulate during cell division, tracing their origins through mutational signature and lineage analysis across diverse tissue types.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { organ: "Brain", icon: "🧠", desc: "Developing computational pipelines to detect and characterize somatic variants from high-depth WGS/WES data, and integrating single-cell multiomics to interpret their functional impact at the cell-type level. We also construct comprehensive brain cell atlases using scRNA-seq and spatial transcriptomics to map cellular heterogeneity and intercellular communication pathways." },
                  { organ: "Lung", icon: "🫁", desc: "Performing whole-exome sequencing analysis for rare disease gene discovery in pulmonary arterial hypertension cohorts, complemented by bulk and single-cell RNA-seq transcriptomic analyses to uncover hidden genetic causes in congenital lung disease." },
                  { organ: "Urine", icon: "🔬", desc: "Building prognostic models for organ transplantation outcomes using transcriptomic data and single-cell foundation models, connecting genomic variant analysis with clinically meaningful applications for kidney transplant monitoring." },
                ].map((item) => (
                  <div key={item.organ} className="bg-warm rounded-xl p-5 border border-border/50">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">{item.icon}</span>
                      <h4 className="font-semibold text-foreground">{item.organ}</h4>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 02 — Multi-Omics */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 bg-crimson px-6 py-4">
              <span className="text-white/40 text-xs font-mono">02</span>
              <h3 className="text-lg font-bold text-white">Multi-Omics</h3>
            </div>
            <div className="p-6">
              <p className="text-muted leading-relaxed mb-6">
                Integrating genomic, transcriptomic, epigenomic, and proteomic data to functionally interpret somatic mutations and their impact on disease.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Developmental Senescence", desc: "Decoding human developmental senescence through high-resolution multi-omics integration. Using hESCs as a model system, we leverage scATAC-seq to explore chromatin accessibility changes that trigger senescence, and combine these with scRNA-seq to build integrated gene regulatory networks revealing epigenome\u2013transcriptome cross-talk governing cellular identity and fate." },
                  { label: "Parkinson's Disease", desc: "Uncovering somatic mutation contributions to neurodegeneration." },
                ].map((item) => (
                  <div key={item.label} className="bg-warm rounded-xl p-5 border border-border/50">
                    <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 03 — Bio-AI */}
          <div className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 bg-crimson px-6 py-4">
              <span className="text-white/40 text-xs font-mono">03</span>
              <h3 className="text-lg font-bold text-white">Bio-AI</h3>
            </div>
            <div className="p-6">
              <p className="text-muted leading-relaxed mb-6">
                Leveraging foundation models and deep learning to predict variant effects, design therapeutics, and build prognostic tools.
              </p>
              <div className="overflow-hidden rounded-xl border border-border/50">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-warm text-left">
                      <th className="px-5 py-3 font-semibold text-foreground">Model</th>
                      <th className="px-5 py-3 font-semibold text-foreground">Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr className="hover:bg-warm/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">Single Cell FM</td>
                      <td className="px-5 py-3 text-muted">Developing prognostic prediction models for transplant recipients by combining single-cell foundation models with transcriptomic data and DNA variant calling for gene&ndash;disease association modeling</td>
                    </tr>
                    <tr className="hover:bg-warm/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">Genomic FM</td>
                      <td className="px-5 py-3 text-muted">Variant effect prediction</td>
                    </tr>
                    <tr className="hover:bg-warm/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">Structure Prediction</td>
                      <td className="px-5 py-3 text-muted">Discovering novel receptor-binding proteins using generative models (RFdiffusion, AlphaFold3) with an integrated filtering pipeline for evaluating structural and biophysical viability of designed candidates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </PageSection>
    </>
  );
}
