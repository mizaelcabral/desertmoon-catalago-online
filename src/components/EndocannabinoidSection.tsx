import React, { useState } from 'react';
import { BODY_ORGANS, BodyOrgan } from '../data/bodyReceptors';
import { Microscope, Brain, Shield, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

export const EndocannabinoidSection: React.FC = () => {
  const [selectedOrgan, setSelectedOrgan] = useState<BodyOrgan>(BODY_ORGANS[0]);

  const cannabinoids = [
    { name: 'CBD', full: 'Canabidiol', role: 'Neuroprotetor, ansiolítico, anti-inflamatório sistêmico e modulador do humor sem efeitos psicotrópicos.' },
    { name: 'CBN', full: 'Canabinol', role: 'Fitocanabinoide indutor de relaxamento e sono fisiológico, com ação analgésica e antibacteriana.' },
    { name: 'CBG', full: 'Canabigerol', role: 'Molécula-mãe dos canabinoides; suporte neurogênico, relaxante muscular e modulador de pressão intraocular.' },
    { name: 'THC', full: 'Tetra-hidrocanabinol', role: 'Alívio de dor crônica refratária, espasticidade e náuseas, agindo como potente agonista de receptores CB1.' }
  ];

  return (
    <section id="endocanabinoide" className="py-14 sm:py-20 bg-white text-slate-900 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Intro Section Header (Page 4 from PDF) */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200/80 text-[10px] sm:text-xs font-bold tracking-wider uppercase max-w-full shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
            <span className="whitespace-nowrap">Conhecimento & Fisiologia</span>
            <span aria-hidden="true" className="text-purple-400">·</span>
            <span className="whitespace-nowrap">Páginas 04 e 05</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand [text-wrap:balance]">
            Sistema Endocanabinoide (SEC)
          </h2>
          
          <p className="text-slate-600 max-w-3xl text-xs sm:text-base leading-relaxed">
            Receptores, moléculas e equilíbrio do organismo. O Sistema Endocanabinoide é um sistema biológico presente em todos os vertebrados, composto principalmente pelos receptores CB1 e CB2, além de moléculas produzidas pelo próprio corpo como a anandamida (AEA) e o 2-AG para manter a homeostase fisiológica.
          </p>
        </div>

        {/* Page 4 Content: Brain & Receptor Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left: Brain Cellular Communication Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-purple-50 via-indigo-50/40 to-purple-50/60 p-5 sm:p-6 rounded-2xl border border-purple-100 flex flex-col justify-between text-center sm:text-left">
            <div>
              <div className="w-full aspect-square max-w-[220px] mx-auto rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-white shadow-sm border border-purple-100 p-2">
                <img
                  src="/extracted/brain_ecs.png"
                  alt="Comunicação Celular e Cérebro"
                  className="w-full h-full object-cover rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider block text-center">
                Comunicação Celular & Homeostase
              </span>
              <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed text-center sm:text-left">
                A interação dos canabinoides com os receptores apoia o corpo em diferentes respostas fisiológicas, auxiliando na regulação de sono, dor, imunidade, apetite e funções cardiovasculares.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-purple-200/60 text-[11px] font-mono text-purple-800 text-center">
              Endocanabinoides Corporais: AEA (Anandamida) e 2-AG
            </div>
          </div>

          {/* Right: CB1 and CB2 Organized Breakdown */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {/* Receptor CB1 */}
              <div className="p-5 sm:p-6 bg-[#faf8fd] rounded-2xl border border-purple-200/80 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-purple-700 text-white font-bold flex items-center justify-center font-mono text-sm shadow-sm shrink-0">
                    CB1
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-brand">Receptor CB1</h3>
                    <span className="text-[11px] text-purple-700 font-semibold block">SNC & Sistema Nervoso Periférico</span>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Distribuídos amplamente pelo organismo, com máxima densidade no cérebro e na medula espinhal.
                </p>

                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-purple-100">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>Regulação de dor, humor, estresse e sono</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>Neuroproteção e controle de excitabilidade</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>Presente em tecidos musculares e pulmões</span>
                  </div>
                </div>
              </div>

              {/* Receptor CB2 */}
              <div className="p-5 sm:p-6 bg-[#faf8fd] rounded-2xl border border-indigo-200/80 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-indigo-700 text-white font-bold flex items-center justify-center font-mono text-sm shadow-sm shrink-0">
                    CB2
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 font-brand">Receptor CB2</h3>
                    <span className="text-[11px] text-indigo-700 font-semibold block">Sistema Imunológico & Tecidos</span>
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Abundantes nos tecidos periféricos relacionados à imunologia, inflamação e barreira intestinal.
                </p>

                <div className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-indigo-100">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Controle e resolução da inflamação tecidual</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Modulação de células imunes (baço e glóbulos brancos)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span>Modulação da liberação de neurotransmissores</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cannabinoid Strip organized as 4 structured cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {cannabinoids.map((can) => (
                <div key={can.name} className="p-3 bg-purple-950 text-white rounded-xl border border-purple-800/60 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-sm text-purple-200">{can.name}</span>
                      <span className="text-[9px] uppercase tracking-wider text-purple-400">Fitocanabinoide</span>
                    </div>
                    <span className="text-[11px] font-semibold text-purple-300 block mb-1">{can.full}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-purple-200/80 leading-relaxed mt-1">
                    {can.role}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Page 5 Content: O sistema pelo organismo - Interactive Anatomical Explorer */}
        <div className="pt-8 sm:pt-12 border-t border-purple-100 space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-brand [text-wrap:balance]">
              O Sistema pelo Organismo
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mapa esquemático dos receptores e das funções fisiológicas citadas na página 05 do catálogo oficial da Desert Moon CBD.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-[#faf8fd] p-4 sm:p-8 rounded-3xl border border-purple-100">
            
            {/* Anatomical Chart Visual from Page 5 */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center bg-white p-3 sm:p-6 rounded-2xl border border-purple-200 shadow-sm">
              <div className="relative max-h-[460px] sm:max-h-[520px] w-full flex items-center justify-center">
                <img
                  src="/extracted/human_body_map.png"
                  alt="Mapa Esquemático do Sistema Endocanabinoide pelo Organismo"
                  className="max-h-[440px] sm:max-h-[500px] w-auto object-contain rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="mt-2.5 text-[10px] sm:text-[11px] text-slate-500 font-mono text-center">
                Conteúdo técnico oficial reproduzido da página 05 do catálogo Desert Moon
              </span>
            </div>

            {/* Interactive Organ Function Explorer with organized tabs */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-900 uppercase tracking-wider">
                  Selecione uma Região Anatômica:
                </span>
                <span className="text-[11px] text-purple-700 font-mono font-medium">
                  {BODY_ORGANS.length} órgãos mapeados
                </span>
              </div>

              {/* Responsive Organ Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {BODY_ORGANS.map((organ) => {
                  const isSelected = selectedOrgan.id === organ.id;
                  return (
                    <button
                      key={organ.id}
                      onClick={() => setSelectedOrgan(organ)}
                      className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer min-h-[42px] flex flex-col justify-between ${
                        isSelected
                          ? 'bg-purple-900 text-white border-purple-900 shadow-sm'
                          : 'bg-white hover:bg-purple-50 text-slate-800 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold font-brand truncate">{organ.name}</span>
                        <span
                          className={`text-[9px] font-mono px-1 py-0.2 rounded font-bold shrink-0 ${
                            isSelected
                              ? 'bg-purple-800 text-purple-200'
                              : 'bg-purple-100 text-purple-900'
                          }`}
                        >
                          {organ.receptors}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Organ Detail Card with clear typographic structure */}
              <div className="p-5 bg-white rounded-2xl border-2 border-purple-300 shadow-sm space-y-3.5">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-purple-100 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-700 shrink-0" />
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 font-brand">
                      {selectedOrgan.name}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-mono font-bold bg-purple-100 text-purple-900 rounded-lg">
                    Receptores: {selectedOrgan.receptors}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-purple-700 uppercase tracking-wider font-bold block mb-1">
                    Funções Fisiológicas no Catálogo:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {selectedOrgan.functions}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold block mb-1">
                    Relevância Clínica & Aplicações:
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {selectedOrgan.clinicalRelevance}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
