import type { Metadata } from "next";
import PageSection from "@/components/PageSection";
import PageBanner from "@/components/PageBanner";
import MembersClient from "@/components/MembersClient";

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
              <img
                src="/pi-photo.jpg"
                alt="Taejeong Bae"
                className="w-20 h-20 rounded-2xl object-cover shrink-0"
              />
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

      <MembersClient />
    </>
  );
}
