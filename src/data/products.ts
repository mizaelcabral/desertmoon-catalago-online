export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'oleos' | 'topico' | 'gummies';
  categoryLabel: string;
  spectrum: 'Full Spectrum' | 'Broad Spectrum' | 'Sleep Aid';
  specs: string;
  volume: string;
  concentration: string;
  price: number;
  image: string;
  pdfPage: number;
  highlightBadge: string;
  description: string;
  carrierVehicle: string;
  ingredients: string[];
  features: string[];
  dosingTable: {
    volume: string;
    primaryCannabinoid: string;
    primaryMg: string;
    secondaryCannabinoid?: string;
    secondaryMg?: string;
  }[];
  dosingNote?: string;
  indications: string[];
  howToUse: string[];
  labTested: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'cbd-tradicional',
    name: 'CBD Tradicional',
    subtitle: 'Óleo Sublingual Full Spectrum',
    category: 'oleos',
    categoryLabel: 'Óleos Sublinguais',
    spectrum: 'Full Spectrum',
    specs: 'Full Spectrum | 1500 mg | 30 mL',
    volume: '30 mL (aprox. 900 gotas)',
    concentration: '1500 mg',
    price: 599.90,
    image: '/extracted/product_cbd_tradicional.png',
    pdfPage: 6,
    highlightBadge: 'Full Spectrum Sinergia',
    description: 'O óleo de CBD Tradicional Full Spectrum preserva toda a riqueza natural da planta: canabinoides menores, terpenos e flavonoides que atuam em conjunto através do efeito entourage. Ideal para suporte neuroprotetor, regulação do humor e modulação inflamatória.',
    carrierVehicle: 'Óleo de coco orgânico (MCT - Triglicerídeo de Cadeia Média), Ômega 3 Fish Oil, Óleo de semente de uva e Óleo de semente de cânhamo.',
    ingredients: [
      'Cannabidiol (CBD) Full Spectrum',
      'Ômega 3 Fish Oil',
      'Grape Seed Oil (Semente de Uva)',
      'Hemp Seed Oil (Semente de Cânhamo)',
      'MCT Oil (Óleo de coco orgânico)',
      'Terpenos e flavonoides naturais'
    ],
    features: [
      '30 gotas por mL',
      'Formulação 100% Vegana',
      'Sem Glúten',
      'Cultivo 100% Orgânico na Califórnia',
      'Efeito Entourage Potencializado'
    ],
    dosingTable: [
      { volume: '1 mL', primaryCannabinoid: 'CBD', primaryMg: '50,0 mg', secondaryCannabinoid: 'THC', secondaryMg: '1,5 mg' },
      { volume: '0,75 mL', primaryCannabinoid: 'CBD', primaryMg: '37,5 mg', secondaryCannabinoid: 'THC', secondaryMg: '1,13 mg' },
      { volume: '0,5 mL', primaryCannabinoid: 'CBD', primaryMg: '25,0 mg', secondaryCannabinoid: 'THC', secondaryMg: '0,75 mg' },
      { volume: '0,25 mL', primaryCannabinoid: 'CBD', primaryMg: '12,5 mg', secondaryCannabinoid: 'THC', secondaryMg: '0,38 mg' },
      { volume: 'Por gota', primaryCannabinoid: 'CBD', primaryMg: '1,67 mg', secondaryCannabinoid: 'THC', secondaryMg: '0,05 mg' }
    ],
    dosingNote: '1 frasco de 30 mL contém aproximadamente 30 doses de 1 mL ou 900 gotas.',
    indications: [
      'Ansiedade e Estresse',
      'Insônia e distúrbios do ciclo circadiano',
      'Dores crônicas e neuropáticas',
      'Processos inflamatórios sistêmicos',
      'Suporte neuroprotetor (Parkinson, Alzheimer)',
      'Epilepsia e síndromes convulsivas',
      'Transtorno do Espectro Autista (TEA)'
    ],
    howToUse: [
      'Solução oleosa oral de administração sublingual.',
      'Agitar bem o frasco antes de usar.',
      'Administrar preferencialmente 30 minutos após as refeições.',
      'Engolir a saliva antes de pingar o óleo embaixo da língua.',
      'Manter o produto por 2 minutos embaixo da língua antes de engolir.',
      'Respeitar intervalo de 2 horas em relação a outros medicamentos.',
      'Evitar contato do conta-gotas com a boca para evitar contaminação.'
    ],
    labTested: true
  },
  {
    id: 'cbd-cbn-sleep-aid',
    name: 'CBD + CBN Sleep Tonic',
    subtitle: 'Fórmula Noturna de Alta Eficácia',
    category: 'oleos',
    categoryLabel: 'Óleos Sublinguais',
    spectrum: 'Sleep Aid',
    specs: 'Sleep Aid | 1500 mg | 30 mL',
    volume: '30 mL (aprox. 900 gotas)',
    concentration: '1500 mg (CBD + CBN)',
    price: 599.90,
    image: '/extracted/product_cbd_cbn.png',
    pdfPage: 7,
    highlightBadge: 'Sono Reparador & Relaxamento',
    description: 'Combinação sinérgica de CBD e Canabinol (CBN), potencializada com GABA, Ashwagandha, Vitamina E e Lavanda. Formulado especificamente para indução fisiológica do sono, melhora da arquitetura do descanso e alívio do estresse noturno.',
    carrierVehicle: 'Óleo de coco orgânico (MCT - Triglicerídeo de Cadeia Média) com extratos botânicos calmantes.',
    ingredients: [
      'Cannabinol (CBN) e Cannabidiol (CBD)',
      'GABA (Ácido Gama-Aminobutírico)',
      'Ashwagandha (Withania somnifera)',
      'Extrato Natural de Lavanda',
      'Vitamina E (Antioxidante natural)',
      'Óleo de coco MCT orgânico'
    ],
    features: [
      '30 gotas por mL',
      'Vegano e Sem Glúten',
      'Fórmula Sleep Tonic com botânicos nootrópicos',
      'Indução suave do sono sem sedação pesada',
      'Livre de THC detectável (Q ≈ 0)'
    ],
    dosingTable: [
      { volume: '1 mL', primaryCannabinoid: 'CBN + CBD', primaryMg: '50,0 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' },
      { volume: '0,75 mL', primaryCannabinoid: 'CBN + CBD', primaryMg: '37,5 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' },
      { volume: '0,5 mL', primaryCannabinoid: 'CBN + CBD', primaryMg: '25,0 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' },
      { volume: '0,25 mL', primaryCannabinoid: 'CBN + CBD', primaryMg: '12,5 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' },
      { volume: 'Por gota', primaryCannabinoid: 'CBN + CBD', primaryMg: '1,67 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' }
    ],
    dosingNote: 'Q ≈ 0: quantidade aproximada de 0 mg. Administrar de 30 a 40 minutos antes de deitar.',
    indications: [
      'Insônia crônica e de início de noite',
      'Despertares noturnos frequentes',
      'Ansiedade noturna e agitação mental',
      'Relaxamento muscular e alívio de tensões corporais',
      'Apoio em dores que interferem no sono'
    ],
    howToUse: [
      'Administrar de 30 a 40 minutos antes do horário de deitar.',
      'Manter as gotas sob a língua por 2 minutos para absorção sublingual rápida.',
      'Não ingerir líquidos ou alimentos nos 15 minutos seguintes.',
      'Ajustar as gotas conforme orientação médica e resposta individual do organismo.'
    ],
    labTested: true
  },
  {
    id: 'cbd-broad-spectrum',
    name: 'CBD Broad Spectrum',
    subtitle: 'Amplo Espectro Livre de THC Detectável',
    category: 'oleos',
    categoryLabel: 'Óleos Sublinguais',
    spectrum: 'Broad Spectrum',
    specs: '1500 mg | 30 mL | Sem THC detectável*',
    volume: '30 mL (aprox. 900 gotas)',
    concentration: '1500 mg CBD',
    price: 599.90,
    image: '/extracted/product_cbd_broad.png',
    pdfPage: 8,
    highlightBadge: '0.0% THC Detectável',
    description: 'Contém todos os canabinoides benéficos, terpenos e compostos ativos da planta, com remoção completa do THC através de processo de cromatografia de última geração. Ideal para atletas, profissionais sujeitos a testagem toxicológica e pacientes sensíveis.',
    carrierVehicle: 'Óleo de coco orgânico fracionado (MCT Oil puro).',
    ingredients: [
      'Cannabidiol (CBD) Broad Spectrum de Cânhamo Orgânico',
      'Canabinoides Menores (CBG, CBC, CBN)',
      'Terpenos Aromáticos Naturais',
      'MCT Oil Orgânico Certificado'
    ],
    features: [
      '30 gotas por mL (50 mg CBD por mL)',
      'Vegano e Sem Glúten',
      'Livre de THC detectável em laudos laboratoriais',
      'Testado em laboratório independente ISO/IEC 17025',
      'Sabor suave e neutro'
    ],
    dosingTable: [
      { volume: '1 mL', primaryCannabinoid: 'CBD', primaryMg: '50,0 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' },
      { volume: '0,75 mL', primaryCannabinoid: 'CBD', primaryMg: '37,5 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' },
      { volume: '0,5 mL', primaryCannabinoid: 'CBD', primaryMg: '25,0 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' },
      { volume: '0,25 mL', primaryCannabinoid: 'CBD', primaryMg: '12,5 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' },
      { volume: 'Por gota', primaryCannabinoid: 'CBD', primaryMg: '1,67 mg', secondaryCannabinoid: 'THC', secondaryMg: 'Q ≈ 0' }
    ],
    dosingNote: '*Fórmula com teor de THC abaixo do limite de detecção laboratorial.',
    indications: [
      'Ansiedade no ambiente profissional e acadêmico',
      'Atletas em treinos de alta performance (WADA compliance)',
      'Pacientes com hipersensibilidade ao THC',
      'Foco, clareza mental e equilíbrio do humor',
      'Recuperação física pós-esforço'
    ],
    howToUse: [
      'Uso sublingual diário pela manhã ou distribuído ao longo do dia.',
      'Pingar as gotas na mucosa sublingual, reter por 2 minutos.',
      'Pode ser tomado com ou sem alimentos leves.'
    ],
    labTested: true
  },
  {
    id: 'cbd-balm-extra-strength',
    name: 'CBD Balm Extra Strength',
    subtitle: 'Pomada Tópica de Alta Concentração',
    category: 'topico',
    categoryLabel: 'Uso Tópico',
    spectrum: 'Full Spectrum',
    specs: 'Extra Strength | 5000 mg | 227 g (8 oz.)',
    volume: '227 g / 8 oz.',
    concentration: '5000 mg Canabinoides',
    price: 799.00,
    image: '/extracted/product_cbd_balm.png',
    pdfPage: 9,
    highlightBadge: '5000mg Ação Gelo-Quente SOS',
    description: 'Pomada terapêutica ultra-potente para cuidado localizado de dores musculares, articulares, tendinites e inflamações dérmicas. Une 5000 mg de canabinoides a óleos essenciais terapêuticos de mentol, cânfora, eucalipto, hortelã e alecrim para efeito alívio imediato.',
    carrierVehicle: 'Cera de abelha natural, manteiga de karité, óleo de semente de uva e óleos essenciais puros.',
    ingredients: [
      'Extrato Full Spectrum de Cannabis (5000 mg CBD)',
      'Óleo Essencial de Mentol (Resfria)',
      'Cânfora Terapêutica (Aquece e ativa circulação)',
      'Óleo Essencial de Eucalipto e Alecrim',
      'Óleo Essencial de Hortelã-Pimenta',
      'CBG (100 mg), CBN (100 mg), HHC (150 mg)'
    ],
    features: [
      'Uso exclusivamente tópico na pele íntegra',
      'Ação gelo-quente imediata (SOS no alívio da dor)',
      'Não irrita e não resseca a pele',
      'Absorção rápida sem sensação pegajosa',
      'Rendimento superior: frasco generoso de 227g (8 oz)'
    ],
    dosingTable: [
      { volume: 'CBD Total', primaryCannabinoid: 'CBD', primaryMg: '≈ 5000 mg' },
      { volume: 'HHC', primaryCannabinoid: 'HHC', primaryMg: '≈ 150 mg' },
      { volume: 'CBG', primaryCannabinoid: 'CBG', primaryMg: '≈ 100 mg' },
      { volume: 'CBN', primaryCannabinoid: 'CBN', primaryMg: '≈ 100 mg' },
      { volume: 'Δ8 / Δ9 THC', primaryCannabinoid: 'THC', primaryMg: '≈ 0 mg' },
      { volume: 'Outros canabinoides', primaryCannabinoid: 'Fitocomplexo', primaryMg: '≈ 150 mg' }
    ],
    dosingNote: 'Aplicar uma camada fina sobre a área dolorida e massagear suavemente 2 a 3 vezes ao dia.',
    indications: [
      'Dores musculares e tensões miofasciais',
      'Artrose, artrite reumatoide e dor articular',
      'Tendinite, bursite e lesões por esforço repetitivo',
      'Lombalgia, hérnia de disco e dor ciática',
      'Enxaqueca e cefaleia tensional (massagem nas têmporas e nuca)',
      'Cólicas menstruais (aplicação no baixo ventre)',
      'Condições dermatológicas (psoríase, dermatite, eczema)'
    ],
    howToUse: [
      'Aplicar uma quantidade moderada diretamente sobre a região afetada.',
      'Massagear em movimentos circulares até completa absorção dérmica.',
      'Reaplicar de 2 a 3 vezes ao dia conforme necessidade.',
      'Lavar as mãos após o uso; evitar contato com olhos e mucosas.'
    ],
    labTested: true
  },
  {
    id: 'gummies-boost-cbd',
    name: 'Gummies Boost (CBD)',
    subtitle: 'Gomas de Amplo Espectro com Sabor Morango',
    category: 'gummies',
    categoryLabel: 'Gummies',
    spectrum: 'Broad Spectrum',
    specs: 'Sabor morango | 25 mg de CBD por goma | 10 unidades',
    volume: '10 gomas (pote de 57g / 2 oz.)',
    concentration: '250 mg CBD por embalagem',
    price: 389.00,
    image: '/extracted/product_gummies_cbd.png',
    pdfPage: 10,
    highlightBadge: '25mg CBD por Goma',
    description: 'Maneira prática, saborosa e discreta de incorporar o CBD à sua rotina diária. Cada goma contém exatamente 25 mg de CBD premium de amplo espectro (Broad Spectrum), sem THC, em uma textura mastigável irresistível com aroma natural de morango fresco.',
    carrierVehicle: 'Pectina vegetal natural (sem gelatina animal), xarope de tapioca orgânico.',
    ingredients: [
      'Extrato de Cânhamo Broad Spectrum (25 mg CBD/goma)',
      'Aroma Natural de Morango',
      'Pectina de Frutas (Origem 100% vegetal)',
      'Suco de Cenoura Roxa e Cúrcuma (Corantes naturais)',
      'Açúcar de Cana Orgânico e Ácido Cítrico'
    ],
    features: [
      '25 mg de CBD pré-dosado por goma',
      '10 unidades práticas por pote',
      'Ingredientes de origem vegetal (Vegano)',
      'Sem organismos geneticamente modificados (Não OGM)',
      'Fáceis de consumir em casa, no trabalho ou em viagens'
    ],
    dosingTable: [
      { volume: '1 goma', primaryCannabinoid: 'CBD', primaryMg: '25,0 mg', secondaryCannabinoid: 'THC', secondaryMg: '0,0 mg' },
      { volume: '1/2 goma', primaryCannabinoid: 'CBD', primaryMg: '12,5 mg', secondaryCannabinoid: 'THC', secondaryMg: '0,0 mg' },
      { volume: 'Por embalagem (10 un)', primaryCannabinoid: 'CBD Total', primaryMg: '250,0 mg', secondaryCannabinoid: 'THC', secondaryMg: '0,0 mg' }
    ],
    dosingNote: 'Ideal para quem busca dosagem exata e facilidade de transporte sem necessidade de conta-gotas.',
    indications: [
      'Controle da ansiedade cotidiana e estresse pontual',
      'Rotina de bem-estar e foco diurno',
      'Alternativa palatável a óleos sublinguais',
      'Relaxamento pós-jornada de trabalho',
      'Manutenção preventiva da homeostase'
    ],
    howToUse: [
      'Mastigar completamente 1 goma de 1 a 2 vezes ao dia conforme orientação médica.',
      'Tempo de início de ação estimado entre 30 e 60 minutos.',
      'Armazenar em local seco, fresco e longe da luz solar direta.'
    ],
    labTested: true
  },
  {
    id: 'gummies-boost-thc',
    name: 'Gummies Boost (THC)',
    subtitle: 'Gomas Full Spectrum com Sabor Morango',
    category: 'gummies',
    categoryLabel: 'Gummies',
    spectrum: 'Full Spectrum',
    specs: 'Sabor morango | 25 mg de THC por goma | 10 unidades',
    volume: '10 gomas (pote de 57g / 2 oz.)',
    concentration: '250 mg THC por embalagem',
    price: 449.00,
    image: '/extracted/product_gummies_thc.png',
    pdfPage: 11,
    highlightBadge: '25mg THC Full Spectrum',
    description: 'Formulação Full Spectrum com alta concentração canabinoide para pacientes com indicação médica específica para alívio de dor refratária, estímulo de apetite e relaxamento profundo do sistema nervoso. Proporciona ação prolongada através do metabolismo hepático (11-hidroxi-THC).',
    carrierVehicle: 'Pectina vegetal natural, terpenos da cepa original.',
    ingredients: [
      'Extrato Full Spectrum de Cannabis (25 mg THC/goma)',
      'Fitocanabinoides Menores e Terpenos Naturais',
      'Pectina Vegetal e Aroma Natural de Morango',
      'Xarope de Tapioca e Ácido Málico'
    ],
    features: [
      '25 mg de THC por unidade',
      '10 gomas pré-dosadas',
      'Formulação Full Spectrum com efeito comitiva',
      'Produzido em instalações cGMP na Califórnia',
      'Uso exclusivo sob prescrição médica especializada'
    ],
    dosingTable: [
      { volume: '1 goma', primaryCannabinoid: 'THC', primaryMg: '25,0 mg', secondaryCannabinoid: 'Fitocomplexo', secondaryMg: 'Presente' },
      { volume: '1/2 goma', primaryCannabinoid: 'THC', primaryMg: '12,5 mg', secondaryCannabinoid: 'Fitocomplexo', secondaryMg: 'Presente' },
      { volume: 'Por embalagem (10 un)', primaryCannabinoid: 'THC Total', primaryMg: '250,0 mg', secondaryCannabinoid: 'Fitocomplexo', secondaryMg: 'Presente' }
    ],
    dosingNote: 'Pacientes iniciantes devem iniciar com 1/4 ou 1/2 goma e aguardar 90 minutos para avaliar os efeitos.',
    indications: [
      'Dores neuropáticas e crônicas resistentes a analgésicos comuns',
      'Espasticidade muscular severa (Esclerose Múltipla, Paralisia)',
      'Náuseas e vômitos associados à quimioterapia',
      'Estímulo de apetite em condições consumptivas',
      'Insônia severa refratária'
    ],
    howToUse: [
      'Ingerir de acordo com protocolo médico estrito, preferencialmente à noite.',
      'Não dirigir ou operar máquinas após o consumo.',
      'Manter absolutamente fora do alcance de crianças e animais de estimação.'
    ],
    labTested: true
  }
];
