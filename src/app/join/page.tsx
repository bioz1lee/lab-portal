import type { Metadata } from "next";
import PageSection from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Join Us",
};

export default function JoinPage() {
  return (
    <>
      <section className="bg-crimson relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-1/2 -right-1/4 w-2/3 h-full bg-gradient-to-l from-white/20 to-transparent rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-crimson-100 text-sm font-medium uppercase tracking-widest mb-3">Careers</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Join Us</h1>
          <p className="mt-3 text-white/70 text-lg">Thanks for your interest about joining our lab.</p>
        </div>
      </section>

      <PageSection title="Open Positions">
        <p className="text-muted leading-relaxed mb-8 text-lg">
          Our lab is currently accepting undergraduate interns, master&apos;s, and Ph.D. students.
          Please contact through professor&apos;s e-mail.
        </p>

        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-crimson to-teal" />
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
    </>
  );
}
