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
      "My research interests include bioinformatics, transcriptomics, and computational approaches to human disease. I am particularly interested in DNA variant calling, gene\u2013disease associations, and predictive modeling using single-cell foundation models. I am currently developing a prognostic model for organ transplantation outcomes using transcriptomic data. I previously conducted bulk RNA-seq analysis of tunneling nanotubes (TNTs) in cells, and I hope to connect genomic data analysis with clinically meaningful applications.",
    keywords: ["DNA Variant Calling", "scFM", "Transplant Prognostics", "Bulk RNA-seq"],
  },
  {
    slug: "minje-sung",
    name: "Minje Sung",
    researchInterest:
      "My current research focuses on discovering novel receptor-binding proteins using state-of-the-art generative models like RFdiffusion and AlphaFold3. To bridge the gap between computational design and experimental validation, I am developing an integrated filtering pipeline that evaluates the structural and biophysical viability of generated candidates. My technical expertise includes Python and Linux-based server management for optimizing complex bioinformatics workflows. Currently, my research interests include protein structure analysis, de novo protein binder design, and the application of generative deep learning models to protein engineering.",
    keywords: ["RFdiffusion", "AlphaFold3", "Protein Binder Design", "Generative DL"],
  },
  {
    slug: "seoyeon-kim",
    name: "Seoyeon Kim",
    researchInterest:
      "My research aims to decode human developmental senescence through high-resolution multi-omics integration. Using hESCs as a model system, I utilize scATAC-seq to explore how chromatin accessibility changes trigger senescence during early development. Beyond single-layer analysis, I combine these findings with scRNA-seq to build integrated gene regulatory networks. This approach allows me to uncover the cross-talk between the epigenome and transcriptome that governs cellular identity. Ultimately, I seek to reveal the fundamental molecular mechanisms that program aging and cell fate during human development.",
    keywords: ["scATAC-seq", "scRNA-seq", "Developmental Senescence", "hESC"],
  },
  {
    slug: "yujin-kim",
    name: "Yujin Kim",
    researchInterest:
      "I am currently analyzing spatial transcriptomics data to characterize spot-level features. To achieve this, I apply deconvolution approaches and gene marker\u2013based strategies. I also investigate cell\u2013cell interactions in a spatial context. By integrating these analyses, I work to gain a comprehensive understanding of the tumor microenvironment and its complex cellular dynamics.\n\nI am interested in studying neurological disorders using multiomics approaches. I aim to understand somatic mosaicism and how these mutations contribute to disease progression.",
    keywords: ["Spatial Transcriptomics", "Deconvolution", "Tumor Microenvironment", "Somatic Mosaicism"],
  },
  {
    slug: "ina-jeon",
    name: "Ina Jeon",
    researchInterest:
      "My research focuses on developing computational approaches to detect and characterize somatic mosaicism in the human brain using high-depth whole-genome sequencing (WGS). I am building automated, reproducible pipelines for identifying somatic variants from WES/WGS data and integrating these findings with single-cell multiomics to interpret their functional impact at the cell-type level. Previously, I conducted whole-exome sequencing (WES) analysis for rare disease gene discovery in a Korean pulmonary arterial hypertension cohort and performed transcriptomic analyses using bulk and single-cell RNA-seq. My broader interests lie in bioinformatics and multi-omics approaches \u2014 spanning genomics, transcriptomics, and human genetics \u2014 to understand how DNA mutations contribute to disease.",
    keywords: ["Somatic Mosaicism", "WGS/WES Pipeline", "Single-cell Multiomics", "Rare Disease"],
  },
  {
    slug: "jiwon-lee",
    name: "Jiwon Lee",
    researchInterest:
      "My research centers on dissecting the cellular heterogeneity and molecular architecture of the brain through single-cell RNA sequencing (scRNA-seq) and multi-omics integration. By coupling transcriptomic profiling with epigenomic, proteomic, and chromatin accessibility data at single-cell resolution, I aim to delineate cell-type-specific regulatory networks underlying neural development, homeostasis, and disease. Furthermore, I also apply spatial transcriptomics to localize gene expression patterns directly in tissue sections, retaining the positional information that conventional dissociation-based methods inevitably discard. This integrative framework enables me to construct comprehensive cell atlases, identify spatially resolved cellular niches, and uncover intercellular communication pathways, ultimately advancing understanding of brain function and neurological disorder pathogenesis at unprecedented resolution.",
    keywords: ["scRNA-seq", "Spatial Transcriptomics", "Brain Cell Atlas", "Multi-omics"],
  },
];
