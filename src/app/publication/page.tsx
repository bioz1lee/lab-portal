import type { Metadata } from "next";
import PageSection from "@/components/PageSection";

export const metadata: Metadata = {
  title: "Publications",
};

interface Publication {
  authors: string;
  title: string;
  journal: string;
  year: number;
  detail: string;
  highlight?: boolean;
  doi?: string;
  pmid?: string;
}

const publications: Publication[] = [
  {
    authors: 'Jang Y, Tomasini L, Bae T, Szekely A, Vaccarino FM, Abyzov A.',
    title: 'Transgenerational transmission of post-zygotic mutations suggests symmetric contribution of first two blastomeres to human germline.',
    journal: 'Nat Commun',
    year: 2024,
    detail: '2024 Oct 23;15(1):9117.',
    pmid: '39443441',
  },
  {
    authors: 'Maury EA, Jones A, Seplyarskiy V, Nguyen TTL, Rosenbluh C, Bae T, et al.',
    title: 'Somatic mosaicism in schizophrenia brains reveals prenatal mutational processes.',
    journal: 'Science',
    year: 2024,
    detail: '2024 Oct 11;386(6718):217-224.',
    pmid: '39388557',
  },
  {
    authors: 'Garrison MA, Jang Y, Bae T, et al.',
    title: 'Genomic data resources of the Brain Somatic Mosaicism Network for neuropsychiatric diseases.',
    journal: 'Sci Data',
    year: 2023,
    detail: '2023 Nov 20;10(1):813.',
  },
  {
    authors: 'Panda A, Suvakov M, Mariani J, Drucker KL, Park Y, Jang Y, Kollmeyer TM, Sarkar G, Bae T, et al.',
    title: 'Clonally Selected Lines After CRISPR-Cas Editing Are Not Isogenic.',
    journal: 'CRISPR J',
    year: 2023,
    detail: '2023 Apr;6(2):176-182.',
  },
  {
    authors: 'Jang Y, Fasching L, Bae T, Tomasini L, Schreiner J, Szekely A, Fernandez TV, Leckman JF, Vaccarino FM, Abyzov A.',
    title: 'Efficient reconstruction of cell lineage trees for cell ancestry and cancer.',
    journal: 'Nucleic Acids Res',
    year: 2023,
    detail: '2023 Apr 7:gkad254.',
  },
  {
    authors: 'Chung C, Yang X, Bae T, et al.',
    title: 'Comprehensive multi-omic profiling of somatic mutations in malformations of cortical development.',
    journal: 'Nat Genet',
    year: 2023,
    detail: '2023 Feb;55(2):209-220.',
  },
  {
    authors: 'Yang X, Xu X, Breuss MW, Antaki D, Ball LL, Chung C, Shen J, Li C, George RD, Wang Y, Bae T, Cheng Y, Abyzov A, Wei L, Alexandrov L, Sebat J, NIMH Brain Somatic Mosaicism Network, Gleeson JG.',
    title: 'Control-independent mosaic single nucleotide variant detection with DeepMosaic.',
    journal: 'Nat Biotechnol',
    year: 2023,
    detail: '2023 Jan 2.',
  },
  {
    authors: 'Bae T, Wang Y, Vaccarino FM, Abyzov A.',
    title: 'Somatic genomic mosaicism in the brain during aging: Scratching the surface.',
    journal: 'Clin Transl Med',
    year: 2022,
    detail: '2022 Dec;12(12):e1138.',
  },
  {
    authors: 'Bae T*, Fasching L*, Wang Y*, Shin JH*, et al.',
    title: 'Analysis of somatic mutations in 131 human brains reveals aging-associated hypermutability.',
    journal: 'Science',
    year: 2022,
    detail: '2022 Jul 29;377(6605):511-517.',
    highlight: true,
    pmid: '35901155',
  },
  {
    authors: 'Sarangi V, Jang Y, Suvakov M, Bae T, et al.',
    title: 'All2: A tool for selecting mosaic mutations from comprehensive multi-cell comparisons.',
    journal: 'PLoS Comput Biol',
    year: 2022,
    detail: '2022 Apr 20;18(4):e1009487.',
  },
  {
    authors: 'Wang Y*, Bae T*, Thorpe J*, Sherman MA*, Jones AG*, et al.',
    title: 'Comprehensive identification of somatic nucleotide variants in human brain tissue.',
    journal: 'Genome Biol',
    year: 2021,
    detail: '2021 Mar 29;22(1):92.',
    highlight: true,
    pmid: '33781307',
  },
  {
    authors: 'Fasching L, Jang Y, Tomasi S, Schreiner J, Tomasini L, Brady M, Bae T, Sarangi V, Vasmatzis N, Wang Y, Szekely A, Fernandez TV, Leckman JF, Abyzov A, Vaccarino FM.',
    title: 'Early developmental asymmetries in cell lineage trees in living individuals.',
    journal: 'Science',
    year: 2021,
    detail: '2021 Mar 19;371(6535):1245-1248.',
  },
  {
    authors: 'Bizzotto S, Dou Y, Ganz J, Doan RN, Kwon M, Bohrson CL, Kim SN, Bae T, Abyzov A, NIMH Brain Somatic Mosaicism Network, Park PJ, Walsh CA.',
    title: 'Landmarks of human embryonic and brain development inscribed in somatic mutations.',
    journal: 'Science',
    year: 2021,
    detail: '2021 Mar 19;371(6535):1249-1253.',
  },
  {
    authors: 'Sekar S, Tomasini L, Proukakis C, Bae T, Manlove L, Jang Y, Scuderi S, Zhou B, Kalyva M, Amiri A, Mariani J, Sedlazeck FJ, Urban AE, Vaccarino FM, Abyzov A.',
    title: 'Complex mosaic structural variations in human fetal brains.',
    journal: 'Genome Res',
    year: 2020,
    detail: '2020 Dec 30;30(12):1695-1704.',
  },
  {
    authors: 'Sarangi V, Jourdon A, Bae T, Panda A, Vaccarino F, Abyzov A.',
    title: 'SCELLECTOR: ranking amplification bias in single cells using shallow sequencing.',
    journal: 'BMC Bioinformatics',
    year: 2020,
    detail: '2020 Nov 12;21(1):521.',
  },
  {
    authors: 'Druliner BR, Wang P, Bae T, et al.',
    title: 'Molecular characterization of colorectal adenomas with and without malignancy reveals distinguishing genome, transcriptome and methylome alterations.',
    journal: 'Scientific Reports',
    year: 2018,
    detail: '2018 Feb 16;8(1):3161.',
  },
  {
    authors: 'Bae T, Tomasini L, Mariani J, Zhou B, Roychowdhury T, Franjic D, Pletikos M, Pattni R, Chen BJ, Venturini E, Riley-Gillis B, Sestan N, Urban AE, Abyzov A, Vaccarino FM.',
    title: 'Different mutational rates and mechanisms in human cells at pregastrulation and neurogenesis.',
    journal: 'Science',
    year: 2018,
    detail: '2018 Feb 2;359(6375):550.',
    highlight: true,
    pmid: '29217587',
  },
  {
    authors: 'Kim M, Druliner BR, Vasmatzis N, Bae T, Chia N, Abyzov A, & Boardman LA.',
    title: 'Inferring modes of evolution from colorectal cancer with residual polyp of origin.',
    journal: 'Oncotarget',
    year: 2017,
    detail: '2017 Dec 26;9(6):6780-6792.',
  },
  {
    authors: 'McConnell MJ, Moran JV, Abyzov A, Akbarian S, Bae T, et al.',
    title: 'Intersection of diverse neuronal genomes and neuropsychiatric disease: The Brain Somatic Mosaicism Network.',
    journal: 'Science',
    year: 2017,
    detail: '2017 Apr 28;356(6336):395.',
  },
  {
    authors: 'Druliner BR, Rashtak S, Ruan X, Bae T, Vasmatzis N, O\'Brien D, Johnson R, Felmlee-Devine D, Washechek-Aletto J, Basu N, Liu H, Smyrk T, Abyzov A, Boardman LA.',
    title: 'Colorectal Cancer with Residual Polyp of Origin: A Model of Malignant Transformation.',
    journal: 'Transl Oncol',
    year: 2016,
    detail: '2016 Aug;9(4):280-6.',
  },
  {
    authors: 'Akbarian S, Liu C, Knowles JA, Vaccarino FM, Farnham PJ, Crawford GE, Jaffe AE, Pinto D, Dracheva S, Geschwind DH, Mill J, Nairn AC, Abyzov A, Pochareddy S, Prabhakar S, Weissman S, Sullivan PF, State MW, Weng Z, Peters MA, White KP, Gerstein MB, Amiri A, Armoskus C, Ashley-Koch AE, Bae T, et al.',
    title: 'The PsychENCODE project.',
    journal: 'Nat Neurosci',
    year: 2015,
    detail: '2015 Dec;18(12):1707-12.',
  },
  {
    authors: 'Bae T*, Weon KY*, Lee JW, Eum KH, Kim S, Choi JW.',
    title: 'Restoration of paclitaxel resistance by CDK1 intervention in drug-resistant ovarian cancer.',
    journal: 'Carcinogenesis',
    year: 2015,
    detail: '2015 Dec;36(12):1561-71.',
  },
  {
    authors: 'Kim YR, Park MS, Eum KH, Kim J, Lee JW, Bae T, Lee DH, Choi JW.',
    title: 'Transcriptome analysis indicates TFEB1 and YEATS4 as regulatory transcription factors for drug resistance of ovarian cancer.',
    journal: 'Oncotarget',
    year: 2015,
    detail: '2015 Oct 13;6(31):31030-8.',
  },
  {
    authors: 'Sudmant PH, Rausch T, Gardner EJ, Handsaker RE, Abyzov A, Huddleston J, Zhang Y, Ye K, Jun G, Hsi-Yang Fritz M, Konkel MK, Malhotra A, Stutz AM, Shi X, Paolo Casale F, Chen J, Hormozdiari F, Dayama G, Chen K, Malig M, Chaisson MJ, Walter K, Meiers S, Kashin S, Garrison E, Auton A, Lam HY, Jasmine Mu X, Alkan C, Antaki D, Bae T, et al.',
    title: 'An integrated map of structural variation in 2,504 human genomes.',
    journal: 'Nature',
    year: 2015,
    detail: '2015 Oct 01;526(7571):75-81.',
  },
  {
    authors: 'Saito S, Zhou X, Bae T, Kim S, Horimoto K.',
    title: 'Identification of master regulator candidates in conjunction with network screening and inference.',
    journal: 'Int J Data Min Bioinform',
    year: 2013,
    detail: '2013;8(3):366.',
  },
  {
    authors: 'Bae T*, Rho K*, Choi JW, Horimoto K, Kim W, Kim S.',
    title: 'Identification of upstream regulators for prognostic expression signature genes in colorectal cancer.',
    journal: 'BMC Syst Biol',
    year: 2013,
    detail: '2013;7:86.',
  },
  {
    authors: 'Lee J-H, Kim DG, Bae TJ, et al.',
    title: 'CDA: combinatorial drug discovery using transcriptional response modules.',
    journal: 'PloS One',
    year: 2012,
    detail: '2012;7(8):e42573.',
  },
  {
    authors: 'Lee HS*, Bae T*, Lee J-H*, et al.',
    title: 'Rational drug repositioning guided by an integrated pharmacological network of protein, disease and drug.',
    journal: 'BMC Syst Biol',
    year: 2012,
    detail: '2012;6:80.',
  },
  {
    authors: 'Ahn TJ, Park K, Son DS, Huh N, Oh S, Bae T, et al.',
    title: 'Selecting SNPs for pharmacogenomic association study.',
    journal: 'Int J Data Min Bioinform',
    year: 2012,
    detail: '2012;6(5):521.',
  },
  {
    authors: 'Rho K, Kim B, Jang Y, Lee S, Bae T, et al.',
    title: 'GARNET--gene set analysis with exploration of annotation relations.',
    journal: 'BMC Bioinformatics',
    year: 2011,
    detail: '2011;12(Suppl 1):S25.',
  },
  {
    authors: 'Bae T-J*, Kim M-S*, Kim J-W*, et al.',
    title: 'Lipid raft proteome reveals ATP synthase complex in the cell surface.',
    journal: 'Proteomics',
    year: 2004,
    detail: '2004;4(11):3536-48.',
  },
];

function boldPI(authors: string): React.ReactNode {
  const parts = authors.split(/(Bae T[J\-]*\*?)/);
  return parts.map((part, i) =>
    /^Bae T/.test(part) ? (
      <strong key={i} className="text-crimson font-semibold">{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

// Group publications by year
const years = [...new Set(publications.map((p) => p.year))].sort((a, b) => b - a);

export default function PublicationPage() {
  return (
    <>
      <section className="bg-crimson relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson-dark/40 via-transparent to-ivory/[0.06]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-white/50 text-sm font-medium uppercase tracking-widest mb-3">Our Work</p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Publications</h1>
          <p className="mt-3 text-white/70">{publications.length} peer-reviewed publications</p>
        </div>
      </section>

      {/* Year quick-nav */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex gap-2 overflow-x-auto">
          {years.map((year) => (
            <a
              key={year}
              href={`#year-${year}`}
              className="text-xs font-medium text-muted hover:text-crimson px-3 py-1 rounded-full hover:bg-crimson-50 transition-colors whitespace-nowrap"
            >
              {year}
            </a>
          ))}
        </div>
      </div>

      <PageSection title="Publications">
        <div className="space-y-12">
          {years.map((year) => {
            const yearPubs = publications.filter((p) => p.year === year);
            return (
              <div key={year} id={`year-${year}`} className="scroll-mt-28">
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-2xl font-bold text-foreground">{year}</h3>
                  <span className="text-xs text-muted bg-surface px-2 py-0.5 rounded-full">{yearPubs.length}</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="space-y-3">
                  {yearPubs.map((pub, i) => (
                    <div
                      key={i}
                      className={`rounded-xl border p-5 transition-all duration-200 hover:shadow-md ${
                        pub.highlight
                          ? "border-crimson/30 bg-crimson-50 hover:border-crimson/50"
                          : "border-border bg-white hover:border-crimson/20"
                      }`}
                    >
                      {pub.highlight && (
                        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-crimson bg-crimson/10 px-2 py-0.5 rounded mb-2">
                          Key Publication
                        </span>
                      )}
                      <p className="font-semibold text-foreground leading-snug">{pub.title}</p>
                      <p className="text-sm text-muted mt-1.5">{boldPI(pub.authors)}</p>
                      <div className="flex items-center gap-3 mt-1 flex-wrap">
                        <p className="text-sm">
                          <span className="font-medium text-crimson italic">{pub.journal}</span>
                          <span className="text-muted"> {pub.detail}</span>
                        </p>
                        {pub.pmid && (
                          <a
                            href={`https://pubmed.ncbi.nlm.nih.gov/${pub.pmid}/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-muted hover:text-crimson bg-surface px-2 py-0.5 rounded-full border border-border hover:border-crimson/20 transition-colors"
                          >
                            PubMed
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </PageSection>
    </>
  );
}
