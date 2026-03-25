import type { Metadata } from "next";
import PageSection from "@/components/PageSection";
import PageBanner from "@/components/PageBanner";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export const metadata: Metadata = {
  title: "Join Us",
};

export default function JoinPage() {
  return (
    <>
      <PageBanner subtitle="Careers" title="Join Us" description="Thanks for your interest about joining our lab." />

      <PageSection title="Open Positions">
        <p className="text-muted leading-relaxed mb-8 text-lg">
          Our lab is currently accepting undergraduate interns, master&apos;s, and Ph.D. students.
        </p>

        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-crimson to-ivory" />
          <div className="p-8">
            <h3 className="font-bold text-foreground text-lg mb-6">
              We are seeking highly motivated individuals who:
            </h3>
            <ul className="space-y-4">
              {[
                "Demonstrate a strong interest in genomics, bioinformatics, and data science",
                "Aspire to address the challenges of modern life sciences through innovative ideas and advanced technologies",
                "Possess a passion for research, grounded in collaboration and creative thinking",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 w-6 h-6 rounded-lg bg-crimson/10 text-crimson flex items-center justify-center text-xs font-bold shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-crimson-50 border border-crimson-100 rounded-xl p-8 text-center">
          <p className="text-foreground leading-relaxed text-lg">
            We welcome aspiring researchers who are committed to advancing
            <span className="font-semibold text-crimson"> cutting-edge and impactful scientific discovery </span>
            together with us.
          </p>
        </div>
      </PageSection>

      <PageSection title="Contact">
        <div className="bg-white rounded-2xl border border-border shadow-sm p-8 max-w-lg">
          <h3 className="font-bold text-foreground text-lg mb-4">Prof. Taejeong Bae</h3>
          <div className="space-y-2 text-muted">
            <p className="flex items-center gap-3">
              <svg className="w-4 h-4 text-crimson shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              +82 2-3290-5648
            </p>
            <p className="flex items-center gap-3">
              <svg className="w-4 h-4 text-crimson shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <ObfuscatedEmail user="tjbae" domain="korea.ac.kr" className="text-foreground font-medium" />
            </p>
          </div>
        </div>
      </PageSection>
    </>
  );
}
