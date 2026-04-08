"use client";

import { useState } from "react";
import { memberResearchData, type MemberResearch } from "@/data/memberResearch";

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
  research,
  onOpenModal,
}: {
  name: string;
  role: string;
  education?: Education[];
  note?: string;
  alumni?: boolean;
  research?: MemberResearch;
  onOpenModal?: (research: MemberResearch) => void;
}) {
  const clickable = !!research && !!onOpenModal;

  return (
    <div
      className={`rounded-xl border p-5 transition-all duration-200 ${
        alumni
          ? "bg-white/60 border-border/60"
          : "bg-white border-border hover:border-crimson/20 hover:shadow-lg"
      } ${clickable ? "cursor-pointer" : ""}`}
      onClick={clickable ? () => onOpenModal(research) : undefined}
    >
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center text-lg font-bold mb-4 ${
          alumni ? "bg-muted/10 text-muted" : "bg-crimson/10 text-crimson"
        }`}
      >
        {name[0]}
      </div>
      <h3 className="font-semibold text-foreground">
        {name}
        {clickable && (
          <span className="ml-1.5 text-xs text-crimson font-normal align-middle">
            View Research
          </span>
        )}
      </h3>
      <p className={`text-sm font-medium mt-0.5 ${alumni ? "text-muted" : "text-crimson"}`}>
        {role}
      </p>
      {education && (
        <ul className="mt-3 space-y-1.5">
          {education.map((edu, i) => (
            <li key={i} className="text-xs text-muted flex gap-2">
              {edu.year && (
                <span className="font-semibold text-foreground/70 shrink-0">{edu.year}</span>
              )}
              <span>
                {edu.degree ? `${edu.degree} in ` : ""}
                {edu.field}, {edu.school}
              </span>
            </li>
          ))}
        </ul>
      )}
      {note && <p className="text-xs text-muted mt-3 italic">{note}</p>}
    </div>
  );
}

function ResearchModal({
  research,
  onClose,
}: {
  research: MemberResearch;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-crimson px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">{research.name}</h3>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors text-xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="p-6">
          <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <span className="w-1 h-5 bg-crimson rounded-full" />
            Research Interest
          </h4>
          <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
            {research.researchInterest}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {research.keywords.map((kw) => (
              <span
                key={kw}
                className="text-xs font-medium bg-crimson/10 text-crimson px-2.5 py-1 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getResearch(name: string): MemberResearch | undefined {
  return memberResearchData.find((m) => m.name === name);
}

export default function MembersClient() {
  const [activeResearch, setActiveResearch] = useState<MemberResearch | null>(null);

  return (
    <>
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
              research={getResearch("Seoyeon Kim")}
              onOpenModal={setActiveResearch}
            />
            <MemberCard
              name="Minje Sung"
              role="MS-Ph.D Integrated Student"
              education={[
                { degree: "B.S.", field: "Life Science", school: "Kyung Hee University", year: "2025" },
              ]}
              research={getResearch("Minje Sung")}
              onOpenModal={setActiveResearch}
            />
            <MemberCard
              name="Yujin Kim"
              role="MS-Ph.D Integrated Student"
              education={[
                { degree: "B.S.", field: "Life Science", school: "Kyung Hee University", year: "2026" },
              ]}
              research={getResearch("Yujin Kim")}
              onOpenModal={setActiveResearch}
            />
            <MemberCard
              name="Dongwon Yun"
              role="Master's Student"
              education={[
                { degree: "B.S.", field: "Biological Engineering", school: "Kangwon National University", year: "2025" },
              ]}
              research={getResearch("Dongwon Yun")}
              onOpenModal={setActiveResearch}
            />
          </div>
        </div>
      </section>

      {/* Researchers & Interns */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-crimson rounded-full" />
            Researchers &amp; Interns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <MemberCard
              name="Ina Jeon"
              role="Postbac Researcher"
              education={[
                { degree: "B.S.", field: "Biosystem and Biomedical Science", school: "Korea University", year: "2023" },
              ]}
              research={getResearch("Ina Jeon")}
              onOpenModal={setActiveResearch}
            />
            <MemberCard
              name="Jiwon Lee"
              role="Undergraduate Intern"
              education={[
                { field: "Biosystem and Biomedical Science", school: "Korea University" },
              ]}
              research={getResearch("Jiwon Lee")}
              onOpenModal={setActiveResearch}
            />
            <MemberCard
              name="Jaehyuk Jeon"
              role="Undergraduate Intern"
              education={[
                { field: "Biosystem and Biomedical Science", school: "Korea University" },
              ]}
            />
          </div>
        </div>
      </section>

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
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-crimson rounded-full" />
            Alumni
          </h2>
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
        </div>
      </section>

      {/* Modal */}
      {activeResearch && (
        <ResearchModal research={activeResearch} onClose={() => setActiveResearch(null)} />
      )}
    </>
  );
}
