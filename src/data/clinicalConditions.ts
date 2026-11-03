export interface ClinicalCondition {
  id: string;
  name: string;
  category: 'Neurológico' | 'Dor & Inflamação' | 'Saúde Mental & Sono' | 'Gastrointestinal & Metabólico' | 'Dermatológico & Tópico' | 'Ginecológico & Outros';
  recommendedProducts: string[]; // product IDs
  mechanism: string;
  receptorsInvolved: string[];
  pdfPage: number;
}

export const CLINICAL_CONDITIONS: ClinicalCondition[] = [
  // Saúde Mental & Sono
  {
    id: 'ansiedade',
    name: 'Ansiedade',
    category: 'Saúde Mental & Sono',
    recommendedProducts: ['cbd-tradicional', 'cbd-broad-spectrum', 'cbd-cbn-sleep-aid', 'gummies-boost-cbd'],
    mechanism: 'O CBD age como agonista parcial dos receptores serotoninérgicos 5-HT1A e potencializa a sinalização endocanabinoide através da anandamida, promovendo anxiólise rápida sem provocar sedação excessiva ou tolerância.',
    receptorsInvolved: ['CB1', '5-HT1A', 'GABA_A'],
    pdfPage: 13
  },
  {
    id: 'insonia',
    name: 'Insônia & Distúrbios do Sono',
    category: 'Saúde Mental & Sono',
    recommendedProducts: ['cbd-cbn-sleep-aid', 'cbd-tradicional'],
    mechanism: 'O CBN (Canabinol) atua diretamente como regulador do ciclo vigília-sono, facilitando o adormecer fisiológico e aprofundando os estágios de sono restaurador (estágio N3/REM), especialmente potencializado com GABA e Lavanda.',
    receptorsInvolved: ['CB1', 'CB2', 'GABA'],
    pdfPage: 14
  },
  {
    id: 'depressao',
    name: 'Depressão',
    category: 'Saúde Mental & Sono',
    recommendedProducts: ['cbd-tradicional', 'cbd-broad-spectrum'],
    mechanism: 'Favorece a neurogênese hipocampal e equilibra os circuitos límbicos por meio da interação com o sistema endocanabinoide e neurotrofinas (BDNF).',
    receptorsInvolved: ['CB1', '5-HT1A'],
    pdfPage: 13
  },
  {
    id: 'estresse-tept',
    name: 'Estresse Pós-Traumático (TEPT)',
    category: 'Saúde Mental & Sono',
    recommendedProducts: ['cbd-tradicional', 'cbd-cbn-sleep-aid'],
    mechanism: 'Auxilia na extinção de memórias aversivas e na redução da hiperativação da amígdala cerebral, diminuindo episódios de pesadelos e hipervigilância.',
    receptorsInvolved: ['CB1', 'TRPV1'],
    pdfPage: 13
  },
  {
    id: 'transtorno-bipolar',
    name: 'Transtorno Bipolar',
    category: 'Saúde Mental & Sono',
    recommendedProducts: ['cbd-tradicional', 'cbd-broad-spectrum'],
    mechanism: 'Ação estabilizadora do humor e modulação da excitotoxicidade glutamatérgica no córtex pré-frontal.',
    receptorsInvolved: ['CB1'],
    pdfPage: 13
  },

  // Neurológico
  {
    id: 'alzheimer',
    name: 'Doença de Alzheimer',
    category: 'Neurológico',
    recommendedProducts: ['cbd-tradicional', 'cbd-broad-spectrum'],
    mechanism: 'Potente ação neuroprotetora e antioxidante, reduzindo a hiperfosforilação da proteína tau e a neuroinflamação provocada por placas beta-amiloides.',
    receptorsInvolved: ['CB1', 'CB2', 'PPAR-γ'],
    pdfPage: 13
  },
  {
    id: 'parkinson',
    name: 'Doença de Parkinson',
    category: 'Neurológico',
    recommendedProducts: ['cbd-tradicional', 'cbd-cbn-sleep-aid'],
    mechanism: 'Redução do tremor de repouso, rigidez motora e alívio de distúrbios comportamentais do sono REM com preservação neuronal na substância negra.',
    receptorsInvolved: ['CB1', 'TRPV1'],
    pdfPage: 13
  },
  {
    id: 'epilepsia',
    name: 'Epilepsia & Síndromes Refratárias',
    category: 'Neurológico',
    recommendedProducts: ['cbd-tradicional'],
    mechanism: 'Redução da hiperexcitabilidade neuronal via modulação de receptores GPR55 e canais de cálcio dependentes de voltagem (Dravet, Lennox-Gastaut e Doose).',
    receptorsInvolved: ['CB1', 'GPR55', 'TRPV1'],
    pdfPage: 13
  },
  {
    id: 'tea',
    name: 'Transtorno do Espectro Autista (TEA)',
    category: 'Neurológico',
    recommendedProducts: ['cbd-tradicional', 'cbd-broad-spectrum'],
    mechanism: 'Melhora da interação social, alívio de comorbidades como ansiedade, crises de irritabilidade, agitação psicomotora e melhora do sono.',
    receptorsInvolved: ['CB1', 'CB2', '5-HT1A'],
    pdfPage: 13
  },
  {
    id: 'tdah',
    name: 'TDAH (Déficit de Atenção & Hiperatividade)',
    category: 'Neurológico',
    recommendedProducts: ['cbd-broad-spectrum', 'cbd-tradicional', 'gummies-boost-cbd'],
    mechanism: 'Equilíbrio da transmissão de dopamina e noradrenalina, auxiliando na concentração, calma mental e redução da impulsividade.',
    receptorsInvolved: ['CB1', 'Dopaminérgico'],
    pdfPage: 13
  },
  {
    id: 'enxaqueca',
    name: 'Enxaqueca & Cefaleias Crônicas',
    category: 'Neurológico',
    recommendedProducts: ['cbd-tradicional', 'cbd-balm-extra-strength'],
    mechanism: 'Ação vascular reguladora através do bloqueio do peptídeo relacionado ao gene da calcitonina (CGRP) e alívio miofascial local com o Bálsamo.',
    receptorsInvolved: ['CB1', 'TRPV1', '5-HT1A'],
    pdfPage: 13
  },

  // Dor & Inflamação
  {
    id: 'fibromialgia',
    name: 'Fibromialgia',
    category: 'Dor & Inflamação',
    recommendedProducts: ['cbd-tradicional', 'cbd-balm-extra-strength', 'gummies-boost-thc'],
    mechanism: 'Modulação central da dor (sensibilização central), redução do tônus muscular aumentado e melhora do sono não reparador associado à síndrome.',
    receptorsInvolved: ['CB1', 'CB2', 'TRPV1'],
    pdfPage: 13
  },
  {
    id: 'artrose-artrite',
    name: 'Artrose & Artrite Reumatoide',
    category: 'Dor & Inflamação',
    recommendedProducts: ['cbd-tradicional', 'cbd-balm-extra-strength'],
    mechanism: 'Inibição da liberação de citocinas pró-inflamatórias (TNF-α, IL-6, IL-1β) pelos sinoviócitos e condrócitos com alívio analgésico tópico imediato.',
    receptorsInvolved: ['CB2', 'TRPV1'],
    pdfPage: 13
  },
  {
    id: 'lombalgia-hernia',
    name: 'Lombalgia & Hérnia de Disco',
    category: 'Dor & Inflamação',
    recommendedProducts: ['cbd-balm-extra-strength', 'cbd-tradicional', 'gummies-boost-thc'],
    mechanism: 'Redução da inflamação radicular nervosa e relaxamento dos músculos paravertebrais espasmados pela ação combinada de canabinoides e mentol/cânfora.',
    receptorsInvolved: ['CB1', 'CB2', 'TRPV1'],
    pdfPage: 16
  },
  {
    id: 'tendinite-bursite',
    name: 'Tendinite & Bursite',
    category: 'Dor & Inflamação',
    recommendedProducts: ['cbd-balm-extra-strength', 'cbd-tradicional'],
    mechanism: 'Aplicação localizada do Bálsamo 5000 mg com efeito analgésico SOS e resfriamento inicial seguido de vasodilatação terapêutica.',
    receptorsInvolved: ['CB2', 'TRPV1'],
    pdfPage: 16
  },
  {
    id: 'cancer-cuidados-paliativos',
    name: 'Sintomas de Câncer & Cuidados Paliativos',
    category: 'Dor & Inflamação',
    recommendedProducts: ['cbd-tradicional', 'gummies-boost-thc', 'cbd-balm-extra-strength'],
    mechanism: 'Controle de dores neuropáticas severas refratárias, alívio de náuseas decorrentes de quimioterapia e estimulação do apetite.',
    receptorsInvolved: ['CB1', 'CB2'],
    pdfPage: 13
  },

  // Gastrointestinal & Metabólico
  {
    id: 'crohn-colite',
    name: 'Doença de Crohn & Colite Ulcerosa',
    category: 'Gastrointestinal & Metabólico',
    recommendedProducts: ['cbd-tradicional'],
    mechanism: 'Modulação dos receptores CB2 nas células imunes da mucosa entérica, restaurando a permeabilidade intestinal e atenuando cólicas inflamatórias.',
    receptorsInvolved: ['CB2'],
    pdfPage: 13
  },
  {
    id: 'intestino-irritavel',
    name: 'Síndrome do Intestino Irritável (SII)',
    category: 'Gastrointestinal & Metabólico',
    recommendedProducts: ['cbd-tradicional', 'cbd-broad-spectrum'],
    mechanism: 'Normalização da hipermotilidade gastrointestinal e redução da hipersensibilidade visceral via eixo cérebro-intestino.',
    receptorsInvolved: ['CB1', 'CB2'],
    pdfPage: 13
  },
  {
    id: 'diabetes-obesidade',
    name: 'Diabetes Tipo II & Obesidade',
    category: 'Gastrointestinal & Metabólico',
    recommendedProducts: ['cbd-tradicional', 'cbd-broad-spectrum'],
    mechanism: 'Melhora da sensibilidade insulínica nas ilhotas pancreáticas e ativação do escurecimento do tecido adiposo branco (beiging adipocitário).',
    receptorsInvolved: ['CB1', 'CB2'],
    pdfPage: 13
  },

  // Dermatológico & Tópico
  {
    id: 'psoriase-dermatite',
    name: 'Psoríase, Dermatite & Eczema',
    category: 'Dermatológico & Tópico',
    recommendedProducts: ['cbd-balm-extra-strength', 'cbd-tradicional'],
    mechanism: 'Inibição da hiperproliferação dos queratinócitos e alívio do prurido crônico através da modulação dos receptores canabinoides na derme e epiderme.',
    receptorsInvolved: ['CB2', 'TRPV1'],
    pdfPage: 16
  },
  {
    id: 'rosacea-cosmiatria',
    name: 'Rosácea & Regeneração Dérmica',
    category: 'Dermatológico & Tópico',
    recommendedProducts: ['cbd-balm-extra-strength'],
    mechanism: 'Propriedades anti-inflamatórias e antioxidantes que reduzem o eritema facial e a reatividade vascular cutânea.',
    receptorsInvolved: ['CB2'],
    pdfPage: 16
  },

  // Ginecológico
  {
    id: 'dismenorreia-endometriose',
    name: 'Cólicas Menstruais & Endometriose',
    category: 'Ginecológico & Outros',
    recommendedProducts: ['cbd-balm-extra-strength', 'cbd-tradicional'],
    mechanism: 'Aplicação do bálsamo tópico na região pélvica e no baixo ventre aliada ao óleo sublingual reduz o espasmo miometrial e as prostaglandinas inflamatórias.',
    receptorsInvolved: ['CB1', 'CB2'],
    pdfPage: 16
  }
];
