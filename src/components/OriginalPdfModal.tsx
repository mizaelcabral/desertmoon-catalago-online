import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

interface OriginalPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const OriginalPdfModal: React.FC<OriginalPdfModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const totalPages = 19;

  // Sync initialPage when it changes
  React.useEffect(() => {
    if (initialPage >= 1 && initialPage <= totalPages) {
      setCurrentPage(initialPage);
    }
  }, [initialPage]);

  if (!isOpen) return null;

  const pageStr = String(currentPage).padStart(2, '0');
  const imageSrc = `/pdf_pages/page_${pageStr}.png`;

  const nextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : totalPages));
  };

  const pageDescriptions: Record<number, string> = {
    1: 'Capa Oficial · Ciência, cuidado e bem-estar (Linha Completa)',
    2: 'A Marca · Inovação e ciência para a sua saúde · Da Califórnia para o cuidado',
    3: 'Qualidade · Da planta ao produto final · COA e Testes independentes',
    4: 'Conhecimento · Sistema Endocanabinoide · Receptores CB1 e CB2',
    5: 'Conhecimento · O sistema pelo organismo · Mapa esquemático anatômico',
    6: 'Coleção Óleos · CBD Tradicional Full Spectrum 1500 mg',
    7: 'Coleção Óleos · CBD + CBN Sleep Tonic 1500 mg (Sleep Aid)',
    8: 'Coleção Óleos · CBD Broad Spectrum 1500 mg (Sem THC detectável)',
    9: 'Coleção Uso Tópico · CBD Balm Extra Strength 5000 mg (227g)',
    10: 'Coleção Gummies · Gummies Boost CBD Broad Spectrum 250 mg',
    11: 'Coleção Gummies · Gummies Boost THC Full Spectrum 250 mg',
    12: 'Composição e Uso · O que é Full Spectrum & Veículo MCT orgânico',
    13: 'Propriedades e Aplicações · Indicações clínicas citadas (CBD)',
    14: 'Sleep Aid · Canabinol (CBN) · Composição e sono fisiológico',
    15: 'Propriedades do CBN · Aplicações clínicas e COAs',
    16: 'CBD Balm · Cuidado localizado · Ação gelo-quente & 27 indicações',
    17: 'Orientações · Prescrição e importação ANVISA (RDC 660/2022)',
    18: 'Orientações · Administração dos óleos & Conta-gotas graduado',
    19: 'Contato & Acolhimento Brasil · desertmooncbd.com.br'
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/90 backdrop-blur-md flex flex-col animate-in fade-in duration-200">
      
      {/* Top Controls Bar with responsive layout */}
      <div className="h-14 sm:h-16 px-3 sm:px-6 bg-[#120824] border-b border-purple-900/60 flex items-center justify-between text-white shrink-0 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-brand font-bold text-xs sm:text-sm tracking-wider text-purple-200 truncate">
            DESERT MOON
          </span>
          <span className="hidden sm:inline text-xs text-purple-400 font-mono">
            Catálogo Oficial (19 págs)
          </span>
        </div>

        {/* Page Switcher */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={prevPage}
            className="p-1 sm:p-1.5 rounded-lg bg-purple-950/80 hover:bg-purple-900 border border-purple-800 text-purple-200 hover:text-white transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            title="Página anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="flex items-center gap-1 font-mono text-[11px] sm:text-xs text-purple-200 px-2 sm:px-3 py-1 bg-purple-950 rounded-lg border border-purple-800">
            <span className="hidden sm:inline">Pág.</span>
            <select
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
              className="bg-transparent text-white font-bold cursor-pointer focus:outline-none"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num} className="bg-slate-900 text-white">
                  {String(num).padStart(2, '0')}
                </option>
              ))}
            </select>
            <span>/{totalPages}</span>
          </div>

          <button
            onClick={nextPage}
            className="p-1 sm:p-1.5 rounded-lg bg-purple-950/80 hover:bg-purple-900 border border-purple-800 text-purple-200 hover:text-white transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            title="Próxima página"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <a
            href="/assets/aistudio/catalago-desert-moon_9d2a00c7.pdf"
            download="catalago-desert-moon.pdf"
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg bg-purple-700 hover:bg-purple-600 text-[11px] sm:text-xs font-semibold text-white transition-colors cursor-pointer min-h-[36px]"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Baixar PDF</span>
            <span className="sm:hidden">PDF</span>
          </a>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-purple-950/70 hover:bg-purple-900 text-purple-300 hover:text-white transition-colors cursor-pointer min-h-[36px] min-w-[36px] flex items-center justify-center"
            aria-label="Fechar"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

      </div>

      {/* Main Page Viewer */}
      <div className="flex-1 overflow-auto p-2 sm:p-6 flex flex-col items-center justify-between bg-black/60">
        <div className="max-w-4xl w-full flex flex-col items-center">
          
          <div className="text-center mb-2 px-2">
            <span className="text-[11px] sm:text-xs font-medium text-purple-300 line-clamp-1">
              {pageDescriptions[currentPage] || `Página ${currentPage}`}
            </span>
          </div>

          <div className="relative rounded-lg shadow-2xl overflow-hidden border border-purple-900/40 bg-[#160b2b] max-h-[72vh] flex items-center justify-center">
            <img
              src={imageSrc}
              alt={`Página ${currentPage} do catálogo Desert Moon CBD`}
              className="max-h-[72vh] w-auto object-contain mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Quick Page Jump Thumbnails Strip */}
          <div className="mt-3 flex items-center gap-1 sm:gap-1.5 overflow-x-auto max-w-full p-1.5 sm:p-2 bg-purple-950/70 rounded-xl border border-purple-900/50 no-scrollbar">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => {
              const active = pg === currentPage;
              return (
                <button
                  key={pg}
                  onClick={() => setCurrentPage(pg)}
                  className={`w-6 h-6 sm:w-7 sm:h-7 shrink-0 rounded text-[10px] sm:text-[11px] font-mono font-bold transition-all cursor-pointer flex items-center justify-center ${
                    active
                      ? 'bg-purple-500 text-white shadow-sm'
                      : 'bg-purple-900/60 text-purple-300 hover:bg-purple-800'
                  }`}
                >
                  {pg}
                </button>
              );
            })}
          </div>

        </div>
      </div>

    </div>
  );
};
