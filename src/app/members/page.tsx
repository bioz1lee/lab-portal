import type { Metadata } from "next";
import PageSection from "@/components/PageSection";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: "Members",
};

export default function MembersPage() {
  return (
    <>
      <PageBanner subtitle="Our Team" title="Members" />

      {/* PI */}
      <PageSection title="Principal Investigator">
        <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-crimson to-crimson-light" />
          <div className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-crimson/10 text-crimson rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0">
                TB
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Taejeong Bae</h3>
                <p className="text-crimson font-medium mt-1">Associate Professor</p>
                <p className="text-muted text-sm mt-1">
                  School of Biosystems and Biomedical Sciences, College of Health Science, Korea University
                </p>
                <div className="flex gap-3 mt-2">
                  <a href="https://scholar.google.com/citations?user=dvwtc1kAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-crimson hover:underline">
                    Google Scholar
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-crimson rounded-full" />
                  Education
                </h4>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex gap-3">
                    <span className="font-semibold text-foreground whitespace-nowrap">2014</span>
                    <span>Ph.D. in Pharmaceutical Bioscience, Seoul National University</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-foreground whitespace-nowrap">2005</span>
                    <span>M.S. in Cellular and Developmental Physiology, Korea University</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-foreground whitespace-nowrap">2003</span>
                    <span>B.S. in Life Science, Korea University</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-crimson rounded-full" />
                  Experience
                </h4>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex gap-3">
                    <span className="font-semibold text-foreground whitespace-nowrap">2024–</span>
                    <span>Associate Professor, Korea University</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-foreground whitespace-nowrap">2017–24</span>
                    <span>Research Associate, Mayo Clinic, Rochester, MN</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-foreground whitespace-nowrap">2014–17</span>
                    <span>Research Fellow, Mayo Clinic, Rochester, MN</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Graduate Students */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-crimson rounded-full" />
            Graduate Students
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <MemberCard
              name="Seoyeon Kim"
              role="Ph.D Student"
              education={[
                { degree: "M.S.", field: "Life Science", school: "Korea University", year: "2025" },
                { degree: "B.S.", field: "Life Science", school: "Korea University", year: "2023" },
              ]}
            />
            <MemberCard
              name="Minje Sung"
              role="MS-Ph.D Integrated Student"
              education={[
                { degree: "B.S.", field: "Life Science", school: "Kyung Hee University", year: "2025" },
              ]}
            />
            <MemberCard
              name="Yujin Kim"
              role="MS-Ph.D Integrated Student"
              education={[
                { degree: "B.S.", field: "Life Science", school: "Kyung Hee University", year: "2026" },
              ]}
            />
            <MemberCard
              name="Dongwon Yun"
              role="Master's Student"
              education={[
                { degree: "B.S.", field: "Biological Engineering", school: "Kangwon National University", year: "2025" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Researchers & Interns */}
      <PageSection title="Researchers & Interns">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <MemberCard
            name="Ina Jeon"
            role="Postbac Researcher"
            education={[
              { degree: "B.S.", field: "Biosystem and Biomedical Science", school: "Korea University", year: "2023" },
            ]}
          />
          <MemberCard
            name="Jiwon Lee"
            role="Undergraduate Intern"
            education={[
              { field: "Biosystem and Biomedical Science", school: "Korea University" },
            ]}
          />
          <MemberCard
            name="Jaehyuk Jeon"
            role="Undergraduate Intern"
            education={[
              { field: "Biosystem and Biomedical Science", school: "Korea University" },
            ]}
          />
        </div>
      </PageSection>

      {/* Administrative */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-crimson rounded-full" />
            Administrative Staff
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <MemberCard
              name="Sungyoung Ahn"
              role="Administrative Assistant"
              note="Joint appointment with Prof. Jaewoong Lee, Kyuri Lee"
            />
          </div>
        </div>
      </section>

      {/* Alumni */}
      <PageSection title="Alumni">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <MemberCard
            name="Younghoon Jung"
            role="Graduate Intern"
            note="2025.03 – 2025.05"
            alumni
          />
          <MemberCard
            name="EunJoo Shin"
            role="Administrative Assistant"
            note="2025.04 – 2025.08"
            alumni
          />
        </div>
      </PageSection>
    </>
  );
}

interface Education {
  degree?: string;
  field: string;
  school: string;
  year?: string;
}

function MemberCard({
  name,
  role,
  education,
  note,
  alumni = false,
}: {
  name: string;
  role: string;
  education?: Education[];
  note?: string;
  alumni?: boolean;
}) {
  return (
    <div className={`rounded-xl border p-5 transition-all duration-200 hover:shadow-lg ${
      alumni
        ? "bg-white/60 border-border/60"
        : "bg-white border-border hover:border-crimson/20"
    }`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold mb-4 ${
        alumni
          ? "bg-muted/10 text-muted"
          : "bg-crimson/10 text-crimson"
      }`}>
        {name[0]}
      </div>
      <h3 className="font-semibold text-foreground">{name}</h3>
      <p className={`text-sm font-medium mt-0.5 ${alumni ? "text-muted" : "text-crimson"}`}>{role}</p>
      {education && (
        <ul className="mt-3 space-y-1.5">
          {education.map((edu, i) => (
            <li key={i} className="text-xs text-muted flex gap-2">
              {edu.year && <span className="font-semibold text-foreground/70 shrink-0">{edu.year}</span>}
              <span>{edu.degree ? `${edu.degree} in ` : ""}{edu.field}, {edu.school}</span>
            </li>
          ))}
        </ul>
      )}
      {note && <p className="text-xs text-muted mt-3 italic">{note}</p>}
    </div>
  );
}
