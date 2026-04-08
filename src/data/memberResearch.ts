export interface MemberResearch {
  slug: string;
  name: string;
  researchInterest: string;
  keywords: string[];
}

export const memberResearchData: MemberResearch[] = [
  {
    slug: "dongwon-yun",
    name: "Dongwon Yun",
    researchInterest:
      "I am interested in connecting genomic data analysis with clinically meaningful applications. My current work focuses on developing prognostic models for organ transplantation outcomes using transcriptomic data and single-cell foundation models. I am also exploring DNA variant calling and gene\u2013disease association modeling to better understand how genetic variation contributes to human disease.",
    keywords: ["DNA Variant Calling", "scFM", "Transplant Prognostics", "Transcriptomics"],
  },
  {
    slug: "minje-sung",
    name: "Minje Sung",
    researchInterest:
      "I am working on discovering novel receptor-binding proteins using generative models such as RFdiffusion and AlphaFold3. To bridge computational design and experimental validation, I am building an integrated filtering pipeline that evaluates the structural and biophysical viability of generated candidates. My broader interests lie in de novo protein binder design and applying deep learning to protein engineering.",
    keywords: ["RFdiffusion", "AlphaFold3", "Protein Binder Design", "Generative DL"],
  },
  {
    slug: "seoyeon-kim",
    name: "Seoyeon Kim",
    researchInterest:
      "I am studying human developmental senescence through multi-omics integration. Using hESCs as a model system, I leverage scATAC-seq to explore chromatin accessibility changes during early development and combine these with scRNA-seq to build gene regulatory networks. My goal is to uncover the epigenome\u2013transcriptome cross-talk that governs cellular identity and fate.",
    keywords: ["scATAC-seq", "scRNA-seq", "Developmental Senescence", "hESC"],
  },
  {
    slug: "yujin-kim",
    name: "Yujin Kim",
    researchInterest:
      "I am currently analyzing spatial transcriptomics data to characterize the tumor microenvironment, applying deconvolution and gene marker\u2013based strategies to investigate cell\u2013cell interactions in a spatial context. I am also interested in studying neurological disorders using multi-omics approaches, aiming to understand how somatic mosaicism contributes to disease progression.",
    keywords: ["Spatial Transcriptomics", "Deconvolution", "Tumor Microenvironment", "Somatic Mosaicism"],
  },
  {
    slug: "ina-jeon",
    name: "Ina Jeon",
    researchInterest:
      "I am developing computational pipelines to detect and characterize somatic mosaicism in the human brain from high-depth WGS/WES data, integrating findings with single-cell multiomics to interpret functional impact at the cell-type level. I have also worked on rare disease gene discovery through whole-exome sequencing in a pulmonary arterial hypertension cohort. My broader interests span genomics, transcriptomics, and human genetics.",
    keywords: ["Somatic Mosaicism", "WGS/WES Pipeline", "Single-cell Multiomics", "Rare Disease"],
  },
  {
    slug: "jiwon-lee",
    name: "Jiwon Lee",
    researchInterest:
      "I am exploring the cellular heterogeneity of the brain through scRNA-seq and multi-omics integration, aiming to delineate cell-type-specific regulatory networks underlying neural development and disease. I also apply spatial transcriptomics to map gene expression patterns directly in tissue sections, constructing comprehensive cell atlases and uncovering intercellular communication pathways.",
    keywords: ["scRNA-seq", "Spatial Transcriptomics", "Brain Cell Atlas", "Multi-omics"],
  },
];
