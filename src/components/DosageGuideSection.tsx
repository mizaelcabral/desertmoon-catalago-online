import React, { useState } from 'react';
import { Droplets, Clock, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const DosageGuideSection: React.FC = () => {
  const [selectedMl, setSelectedMl] = useState<number>(0.5);

  const levels = [
    { ml: 0.25, drops: 7.5, mg1500: 12.5, desc: 'Dose inicial leve ou ajuste gradual de titulação' },
    { ml: 0.50, drops: 15, mg1500: 25.0, desc: 'Dose intermediária comum para manutenção da homeostase' },
    { ml: 0.75, drops: 22.5, mg1500: 37.5, desc: 'Dose terapêutica moderada para manejo de sintomas crônicos' },
    { ml: 1.00, drops: 30, mg1500: 50.0, desc: 'Dose plena concentrada de 1 mL recomendada pelo médico' }
  ];

  const currentLevel = levels.find((l) => l.ml === selectedMl) || levels[1];

  const ruleGroups = [
    {
      category: 'Fase 1: Preparação Pré-Dose',
      items: [
        { num: 1, title: 'Agitar o frasco antes de usar', text: 'Homogeneíza os canabinoides, terpenos e veículo lipídico (MCT) para assegurar concentração uniforme.' },
        { num: 2, title: 'Não tomar em jejum', text: 'A presença de gorduras saudáveis na digestão aumenta expressivamente a biodisponibilidade dos canabinoides.' },
        { num: 3, title: 'Engolir a saliva antes de pingar', text: 'Secar brevemente a mucosa sublingual para maximizar a absorção capilar venosa direta.' }
      ]
    },
    {
      category: 'Fase 2: Técnica Sublingual Correta',
      items: [
        { num: 4, title: 'Não encostar o conta-gotas na boca', text: 'Preserva a assepsia estéril do frasco e impede a proliferação de bactérias no óleo.' },
        { num: 5, title: 'Reter por 2 minutos embaixo da língua', text: 'Tempo essencial para que os fitocanabinoides passem direto aos vasos sublinguais sem metabolização precoce.' },
        { num: 6, title: 'Não ingerir água ou alimentos por 15 min', text: 'Garante que a absorção pela mucosa bucal se complete integralmente sem lavagem mecânica.' }
      ]
    },
    {
      category: 'Fase 3: Conduta Médica & Cuidados',
      items: [
        { num: 7, title: 'A dose varia de acordo com cada organismo', text: 'A sensibilidade e densidade de receptores CB1 e CB2 é estritamente individual para cada paciente.' },
        { num: 8, title: 'Titulação gradual orientada pelo médico', text: 'O médico responsável ajusta a posologia periodicamente até encontrar o ponto de equilíbrio clínico ideal.' },
        { num: 9, title: 'Armazenamento seguro do produto', text: 'Conservar sempre em local seco, fresco, protegido da luz solar e absolutamente fora do alcance de crianças.' }
      ]
    }
  ];

  return (
    <section id="dosagem" className="py-14 sm:py-20 bg-[#faf8fd] text-slate-900 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200/80 text-[10px] sm:text-xs font-bold tracking-wider uppercase max-w-full shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
            <span className="whitespace-nowrap">Administração Sublingual</span>
            <span aria-hidden="true" className="text-purple-400">·</span>
            <span className="whitespace-nowrap">Página 18</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand [text-wrap:balance]">
            Administração dos Óleos & Conta-Gotas
          </h2>
          
          <p className="text-slate-600 max-w-2xl text-xs sm:text-base leading-relaxed">
            Cuidados de uso, equivalência matemática do conta-gotas graduado (30 gotas por mL) e protocolo sublingual recomendado pelos médicos da Desert Moon.
          </p>
        </div>

        {/* Dropper Simulator Split Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white p-4 sm:p-8 lg:p-10 rounded-3xl border border-purple-200 shadow-sm w-full max-w-full overflow-hidden">
          
          {/* Left: Graphic Dropper Calibration */}
          <div className="lg:col-span-5 bg-gradient-to-b from-purple-50 via-indigo-50/40 to-purple-50/60 p-4 sm:p-6 rounded-2xl border border-purple-100 flex flex-col items-center w-full">
            <span className="text-xs font-bold text-purple-950 uppercase tracking-wider mb-4 font-brand">
              Conta-Gotas Graduado (30 Gotas / mL)
            </span>

            {/* Dropper Graphic Container */}
            <div className="relative w-40 sm:w-48 h-64 sm:h-80 flex items-center justify-center">
              <img
                src="/extracted/dropper_diagram.png"
                alt="Conta-gotas graduado oficial"
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Overlay indicator */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 w-7 sm:w-8 bg-purple-600/30 rounded-full transition-all duration-300 pointer-events-none"
                style={{
                  height: `${(selectedMl / 1.0) * 110}px`,
                  bottom: '65px'
                }}
              />
            </div>

            {/* Volume quick selector buttons */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2 w-full mt-4">
              {levels.map((lvl) => (
                <button
                  key={lvl.ml}
                  onClick={() => setSelectedMl(lvl.ml)}
                  className={`py-2 text-[11px] sm:text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer min-h-[38px] ${
                    selectedMl === lvl.ml
                      ? 'bg-purple-900 text-white border-purple-900 shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50'
                  }`}
                >
                  {lvl.ml.toFixed(2).replace('.', ',')} mL
                </button>
              ))}
            </div>
          </div>

          {/* Right: Calculations & Table */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 w-full min-w-0">
            
            {/* Live readout card */}
            <div className="p-4 sm:p-6 bg-purple-900 text-white rounded-2xl shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-purple-200">
                  Dosagem Selecionada:
                </span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-purple-200">
                  {currentLevel.ml.toFixed(2).replace('.', ',')} mL
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 border-t border-purple-800 pt-4">
                <div className="bg-purple-950/60 p-2.5 sm:p-3 rounded-xl border border-purple-800/50">
                  <span className="text-[9px] sm:text-[10px] text-purple-300 uppercase tracking-wider block">Equivalente em Gotas</span>
                  <span className="text-lg sm:text-2xl font-bold font-mono text-white mt-0.5 sm:mt-1 block">
                    {currentLevel.drops} gotas
                  </span>
                </div>

                <div className="bg-purple-950/60 p-2.5 sm:p-3 rounded-xl border border-purple-800/50">
                  <span className="text-[9px] sm:text-[10px] text-purple-300 uppercase tracking-wider block">Canabinoides (1500mg)</span>
                  <span className="text-lg sm:text-2xl font-bold font-mono text-emerald-300 mt-0.5 sm:mt-1 block">
                    {currentLevel.mg1500.toFixed(1).replace('.', ',')} mg
                  </span>
                </div>

                <div className="col-span-2 sm:col-span-1 bg-purple-950/60 p-2.5 sm:p-3 rounded-xl border border-purple-800/50">
                  <span className="text-[9px] sm:text-[10px] text-purple-300 uppercase tracking-wider block">Perfil Terapêutico</span>
                  <span className="text-xs font-medium text-purple-200 block mt-0.5 sm:mt-1 line-clamp-2">
                    {currentLevel.desc}
                  </span>
                </div>
              </div>
            </div>

            {/* Official Table from Page 18 */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 w-full max-w-full">
              <table className="w-full text-xs text-left min-w-[280px]">
                <thead className="bg-slate-100 text-slate-700 font-semibold">
                  <tr>
                    <th className="py-2.5 px-3">Volume (mL)</th>
                    <th className="py-2.5 px-3 font-mono">0,25</th>
                    <th className="py-2.5 px-3 font-mono">0,50</th>
                    <th className="py-2.5 px-3 font-mono">0,75</th>
                    <th className="py-2.5 px-3 font-mono">1,00</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="py-2.5 px-3 font-bold text-purple-900">Gotas</td>
                    <td className="py-2.5 px-3 font-mono font-medium">7,5</td>
                    <td className="py-2.5 px-3 font-mono font-medium">15</td>
                    <td className="py-2.5 px-3 font-mono font-medium">22,5</td>
                    <td className="py-2.5 px-3 font-mono font-medium">30</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 font-mono">
              <span>Frasco com 30 mL = 30 doses de 1 mL (900 gotas)</span>
              <span>1 gota ≈ 1,67 mg de fitocanabinoides</span>
            </div>

          </div>

        </div>

        {/* 9 Golden Rules Grouped by Phase */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-brand">
              Orientações de Administração Sublingual (Página 18)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              O cumprimento rigoroso destas recomendações maximiza a biodisponibilidade plasmática do canabidiol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ruleGroups.map((group, gIdx) => (
              <div key={gIdx} className="bg-white p-5 rounded-2xl border border-purple-100 shadow-2xs space-y-4">
                <span className="text-xs font-bold text-purple-900 uppercase tracking-wider block font-brand pb-2 border-b border-purple-100">
                  {group.category}
                </span>

                <div className="space-y-3.5">
                  {group.items.map((item) => (
                    <div key={item.num} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-900 font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                          {item.num}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-7">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
