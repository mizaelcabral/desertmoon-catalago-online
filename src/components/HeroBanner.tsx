import React from 'react';
import { ShieldCheck, Award, Microscope, ChevronRight, FileDown, ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  onExploreProducts: () => void;
  onOpenPdfViewer: () => void;
  onExploreScience: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onExploreProducts,
  onOpenPdfViewer,
  onExploreScience
}) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#130826] text-white pt-8 pb-14 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-purple-900/30">
      {/* Background subtle celestial glowing orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-25">
        <div className="absolute top-10 left-1/4 w-80 h-80 sm:w-96 sm:h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-72 h-72 sm:w-[28rem] sm:h-[28rem] bg-indigo-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Brand copy and actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            
            {/* Quiet text kicker / badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold tracking-wider text-purple-300 uppercase px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 max-w-full">
              <span>CBD Medicinal</span>
              <span aria-hidden="true" className="text-purple-500">·</span>
              <span>Califórnia EUA</span>
              <span aria-hidden="true" className="text-purple-500">·</span>
              <span className="text-purple-200">ANVISA RDC 660</span>
            </div>

            {/* Display Headline - Solid high-contrast text to avoid disappearing font bug */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-brand [text-wrap:balance]">
              Ciência, cuidado <br className="hidden sm:inline" />
              <span className="text-purple-300">
                e bem-estar.
              </span>
            </h1>

            {/* Prose description organized with clear line spacing */}
            <p className="text-sm sm:text-base lg:text-lg text-purple-200/85 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Catálogo completo e interativo da Desert Moon CBD. Fórmulas medicinais importadas com 100% de cultivo orgânico na Califórnia, rigor farmacêutico e controle estrito da planta ao produto final.
            </p>

            {/* CTA action buttons with responsive wrapping */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onExploreProducts}
                className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-xl transition-all shadow-lg shadow-purple-950/60 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <span>Explorar Produtos</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreScience}
                className="w-full sm:w-auto px-5 py-3.5 text-xs sm:text-sm font-medium text-purple-200 hover:text-white bg-purple-900/40 hover:bg-purple-900/70 border border-purple-700/50 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <span>Sistema Endocanabinoide</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
              </button>

              <button
                onClick={onOpenPdfViewer}
                className="w-full sm:w-auto px-4 py-3.5 text-xs sm:text-sm font-medium text-purple-300 hover:text-white hover:bg-purple-900/30 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>PDF Original (19 págs)</span>
              </button>
            </div>

            {/* Trust highlights organized into responsive cards */}
            <div className="pt-6 border-t border-purple-900/40 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-start gap-2.5">
                <Microscope className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-purple-100">Laudos COA por Lote</div>
                  <div className="text-[11px] text-purple-300/70 mt-0.5">Laboratórios independentes ISO/IEC</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-purple-100">Cultivo 100% Orgânico</div>
                  <div className="text-[11px] text-purple-300/70 mt-0.5">Sem agrotóxicos ou metais pesados</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-800/40 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-purple-100">Suporte Regulatório</div>
                  <div className="text-[11px] text-purple-300/70 mt-0.5">Conformidade total RDC 660 Anvisa</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Product Lineup from Page 1 of the PDF */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900/30 via-purple-950/60 to-[#100620] border border-purple-800/40 p-3 sm:p-4 shadow-2xl shadow-purple-950">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden flex items-center justify-center">
                <img
                  src="/extracted/hero_lineup.png"
                  alt="Linha completa Desert Moon CBD"
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-2.5 px-2 flex items-center justify-between text-xs text-purple-300">
                <span className="font-brand font-semibold text-[11px] sm:text-xs">LINHA COMPLETA DESERT MOON</span>
                <span className="font-mono text-[10px] sm:text-[11px] text-purple-400">Página 01 do Catálogo</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
