export interface BodyOrgan {
  id: string;
  name: string;
  receptors: string;
  functions: string;
  clinicalRelevance: string;
  topPct: number; // Y position in percentage for marker
  leftPct: number; // X position in percentage for marker
  primaryColor: string;
}

export const BODY_ORGANS: BodyOrgan[] = [
  {
    id: 'cerebro',
    name: 'Cérebro',
    receptors: 'CB1',
    functions: 'Aprendizagem e memória; sono; neuroproteção e desenvolvimento neural; regulação do apetite.',
    clinicalRelevance: 'Controle de ansiedade, regulação do humor, neuroproteção em demências e controle de crises convulsivas.',
    topPct: 15,
    leftPct: 50,
    primaryColor: '#7c3aed'
  },
  {
    id: 'pulmoes',
    name: 'Pulmões',
    receptors: 'CB1',
    functions: 'Broncodilatação e modulação da reatividade das vias aéreas.',
    clinicalRelevance: 'Auxílio na modulação inflamatória pulmonar e alívio de hiper-reatividade brônquica.',
    topPct: 29,
    leftPct: 40,
    primaryColor: '#6366f1'
  },
  {
    id: 'baco',
    name: 'Baço',
    receptors: 'CB2',
    functions: 'Função imunológica e regulação de linfócitos B e T.',
    clinicalRelevance: 'Equilíbrio da resposta inflamatória sistêmica e modulação de doenças autoimunes.',
    topPct: 37,
    leftPct: 62,
    primaryColor: '#8b5cf6'
  },
  {
    id: 'figado',
    name: 'Fígado',
    receptors: 'CB1 e CB2',
    functions: 'Lipogênese e regulação da fibrose tecidual hepática.',
    clinicalRelevance: 'Equilíbrio metabólico lipídico e proteção celular contra estresse oxidativo.',
    topPct: 42,
    leftPct: 43,
    primaryColor: '#a855f7'
  },
  {
    id: 'pancreas',
    name: 'Pâncreas',
    receptors: 'CB1 e CB2',
    functions: 'Secreção de insulina e homeostase das células beta pancreáticas.',
    clinicalRelevance: 'Modulação da sensibilidade insulínica e controle glicêmico complementar.',
    topPct: 46,
    leftPct: 58,
    primaryColor: '#9333ea'
  },
  {
    id: 'colon',
    name: 'Cólon & Trato Gastrointestinal',
    receptors: 'CB2',
    functions: 'Motilidade gastrointestinal e manutenção da integridade da barreira intestinal.',
    clinicalRelevance: 'Tratamento de suporte em Doença de Crohn, Colite Ulcerosa e Síndrome do Intestino Irritável.',
    topPct: 54,
    leftPct: 50,
    primaryColor: '#7e22ce'
  },
  {
    id: 'orgaos-reprodutores',
    name: 'Órgãos Reprodutores',
    receptors: 'CB1',
    functions: 'Regulação da fertilidade e modulação do tônus muscular uterino.',
    clinicalRelevance: 'Alívio de cólicas menstruais intensas (dismenorreia) e inflamação pélvica.',
    topPct: 63,
    leftPct: 53,
    primaryColor: '#6b21a8'
  },
  {
    id: 'musculos',
    name: 'Músculos & Tecidos Músculo-esqueléticos',
    receptors: 'CB1 e CB2',
    functions: 'Formação de fibras musculares, regeneração tecidual e regulação do tônus miofascial.',
    clinicalRelevance: 'Redução de espasmos musculares, recuperação pós-esforço e alívio de dor miofascial com CBD Balm.',
    topPct: 70,
    leftPct: 38,
    primaryColor: '#8b5cf6'
  },
  {
    id: 'trauma',
    name: 'Áreas de Trauma & Terminações Nervosas',
    receptors: 'CB2 & TRPV1',
    functions: 'TRPV1: receptor de potencial transitório do tipo vanilóide 1 (sensibilidade e nocicepção da dor).',
    clinicalRelevance: 'Alívio imediato da dor periférica por meio de estímulo sensorial duplo (frio/calor) e modulação canabinoide.',
    topPct: 83,
    leftPct: 45,
    primaryColor: '#9333ea'
  }
];
