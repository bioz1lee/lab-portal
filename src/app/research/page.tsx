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
                  { organ: "Brain", icon: "🧠", desc: "Detecting somatic variants from high-depth WGS/WES and mapping brain cellular heterogeneity through scRNA-seq and spatial transcriptomics." },
                  { organ: "Lung", icon: "🫁", desc: "Discovering rare disease genes via whole-exome sequencing in pulmonary hypertension cohorts, supported by bulk and single-cell transcriptomic analyses." },
                  { organ: "Urine", icon: "🔬", desc: "Building prognostic models for kidney transplant outcomes by integrating transcriptomic data with single-cell foundation models." },
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
                  { label: "Developmental Senescence", desc: "Exploring how chromatin accessibility changes trigger senescence in hESCs using scATAC-seq, combined with scRNA-seq to build gene regulatory networks that reveal epigenome\u2013transcriptome cross-talk." },
                  { label: "Parkinson's Disease", desc: "Investigating how somatic mutations accumulate in the aging brain and contribute to neurodegeneration, using multi-omics approaches to trace mutation\u2013phenotype relationships." },
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
                      <td className="px-5 py-3 text-muted">Prognostic prediction for transplant recipients using scFM and transcriptomic data</td>
                    </tr>
                    <tr className="hover:bg-warm/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">Genomic FM</td>
                      <td className="px-5 py-3 text-muted">Predicting functional impact of genetic variants through large-scale genomic language models</td>
                    </tr>
                    <tr className="hover:bg-warm/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">Structure Prediction</td>
                      <td className="px-5 py-3 text-muted">Designing novel receptor-binding proteins with RFdiffusion and AlphaFold3, validated through structural filtering pipelines</td>
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
