import React from 'react';
import { ShieldCheck, Award, HeartHandshake, CheckCircle2, QrCode, ExternalLink } from 'lucide-react';

export const BrandQualitySection: React.FC = () => {
  return (
    <section id="marca" className="py-14 sm:py-20 bg-white text-slate-900 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section 1: A Marca (Page 02) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200/80 text-[10px] sm:text-xs font-bold tracking-wider uppercase max-w-full shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                <span className="whitespace-nowrap">A Marca & Propósito</span>
                <span aria-hidden="true" className="text-purple-400">·</span>
                <span className="whitespace-nowrap">Califórnia EUA</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand [text-wrap:balance]">
                Inovação e ciência para a sua saúde
              </h2>
            </div>

            <p className="text-xs sm:text-base text-slate-700 leading-relaxed font-normal">
              Desde 2022, a <strong>DesertMoon CBD</strong> tem se consolidado como referência em cannabis medicinal nos Estados Unidos. Unimos cultivo 100% orgânico, extração de alta precisão e controle total de toda a cadeia produtiva — da planta ao produto final. O resultado é uma linha desenvolvida com rigor farmacêutico, segurança e eficácia para quem busca qualidade superior em canabinoides.
            </p>

            <div className="space-y-2 pt-1">
              <h3 className="text-lg sm:text-xl font-bold text-purple-950 font-brand">
                Da Califórnia para o cuidado
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A história da DesertMoon CBD está profundamente conectada ao avanço da cannabis medicinal no mundo. Nascemos na Califórnia, Estados Unidos, com um propósito claro: ampliar o acesso e o conhecimento sobre a terapia canabinoide. Nosso compromisso é elevar os padrões dos produtos à base de cannabis, unindo pesquisa, evidências científicas e rigor técnico em cada etapa do desenvolvimento.
              </p>
            </div>

            {/* Community Box from Page 02 */}
            <div className="p-5 sm:p-6 bg-purple-950 text-white rounded-2xl border border-purple-800 shadow-md space-y-2.5">
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-purple-400 shrink-0" />
                <h4 className="text-sm sm:text-base font-bold text-white font-brand">
                  Faça parte da nossa comunidade
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-purple-200/90 leading-relaxed">
                Nossa missão é oferecer o conhecimento mais atualizado e completo sobre a terapia canabinoide, promovendo educação por meio de simpósios presenciais e aulas online. Buscamos preparar profissionais da saúde para integrar a terapia canabinoide de forma segura e embasada em seus protocolos de tratamento.
              </p>
            </div>

          </div>

          {/* Right: Doctor Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-200 max-w-xs sm:max-w-sm w-full">
              <img
                src="/extracted/doctor_female.png"
                alt="Profissional de saúde Desert Moon CBD"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-purple-950 via-purple-950/80 to-transparent text-white text-center">
                <span className="font-brand font-semibold text-xs tracking-wider block">CUIDADO & RIGOR MÉDICO</span>
                <span className="text-[11px] text-purple-300">Acolhimento humanizado em cada etapa</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: Qualidade da Planta ao Produto Final (Page 03) */}
        <div className="pt-8 sm:pt-12 border-t border-purple-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Team Photo */}
            <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-purple-200 shadow-lg">
              <img
                src="/extracted/doctors_team.png"
                alt="Pesquisa, controle e transparência"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-3.5 sm:p-4 bg-purple-950 text-white flex items-center justify-between text-xs">
                <span className="font-brand font-semibold">COMPROMISSO COM O CUIDADO</span>
                <span className="text-purple-300 font-mono">Página 03 do Catálogo</span>
              </div>
            </div>

            {/* Quality Pillars & COA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200/80 text-[10px] sm:text-xs font-bold tracking-wider uppercase max-w-full shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                  <span className="whitespace-nowrap">Qualidade Documentada</span>
                  <span aria-hidden="true" className="text-purple-400">·</span>
                  <span className="whitespace-nowrap">Laudos COA</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-brand [text-wrap:balance]">
                  Da planta ao produto final
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pesquisa, controle e transparência em cada etapa. Todos os nossos produtos passam por laboratórios independentes credenciados, assegurando resultados precisos e imparciais.
                </p>
              </div>

              {/* Pillars */}
              <div className="space-y-2.5">
                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-purple-50/60 border border-purple-100">
                  <Award className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">Cultivo 100% Orgânico</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Sem pesticidas, herbicidas sintéticos ou metais pesados na Califórnia.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-purple-50/60 border border-purple-100">
                  <ShieldCheck className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">Testes em Laboratórios Independentes</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Cromatografia líquida de alta resolução (HPLC) em cada lote produzido.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-purple-50/60 border border-purple-100">
                  <CheckCircle2 className="w-5 h-5 text-purple-700 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs sm:text-sm font-bold text-slate-900">Certificados de Análise (COAs) Públicos</h5>
                    <p className="text-xs text-slate-600 mt-0.5">Transparência total dos perfis de canabinoides, terpenos e ausência de contaminantes.</p>
                  </div>
                </div>
              </div>

              {/* COA verification card */}
              <div className="p-4 bg-purple-900 text-white rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm">
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-purple-200 uppercase tracking-wider block font-brand">
                    Acesso aos Laudos Laboratoriais (COA)
                  </span>
                  <span className="text-xs text-purple-300 block">
                    Consulte os Certificados de Análise oficiais no portal da marca.
                  </span>
                </div>
                <a
                  href="https://desertmooncbd.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white text-purple-950 hover:bg-purple-50 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <span>desertmooncbd.com.br</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
