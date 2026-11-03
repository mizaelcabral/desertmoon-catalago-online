import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Droplet, ShieldCheck, Check, Plus, ExternalLink, Activity, Info } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onOpenPdfPage: (pageNumber: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenPdfPage
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-purple-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#140826] text-white flex items-center justify-between border-b border-purple-800/40 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-semibold bg-purple-900 border border-purple-700 text-purple-200 shrink-0">
              {product.spectrum}
            </span>
            <span className="text-xs text-purple-300 font-mono truncate">
              Ficha Técnica · Pág. {String(product.pdfPage).padStart(2, '0')} do Catálogo
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/50 transition-colors cursor-pointer shrink-0 ml-2"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body with responsive padding */}
        <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
          
          {/* Top Split: Image & Primary Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left: Product Image on Cosmic Pedestal */}
            <div className="md:col-span-5 bg-[#160b29] rounded-2xl overflow-hidden flex flex-col items-center border border-purple-900/40">
              <div className="relative aspect-[658/474] w-full flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={() => onOpenPdfPage(product.pdfPage)}
                className="my-3 text-xs text-purple-300 hover:text-white flex items-center gap-1.5 underline decoration-purple-500 underline-offset-4 cursor-pointer"
              >
                <span>Ver página {product.pdfPage} original do PDF</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>

            {/* Right: Key Specs & Pricing */}
            <div className="md:col-span-7 space-y-3.5 sm:space-y-4">
              <div>
                <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider block mb-1">
                  {product.categoryLabel}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 font-brand [text-wrap:balance]">
                  {product.name}
                </h2>
                <p className="text-xs sm:text-sm text-purple-900 font-medium mt-1">
                  {product.subtitle} · {product.specs}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {product.description}
              </p>

              {/* Price & Action Box */}
              <div className="p-4 bg-purple-50 rounded-xl border border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">Valor Sugerido</span>
                  <span className="text-2xl font-bold text-slate-900 font-mono">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-0.5">
                    Importação legal via ANVISA RDC 660/2022
                  </span>
                </div>

                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-purple-700 hover:bg-purple-600 active:bg-purple-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer min-h-[42px]"
                >
                  <Plus className="w-4 h-4 shrink-0" />
                  <span>Incluir na Solicitação</span>
                </button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Dosing & Concentration Table from PDF */}
          <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 font-brand">
                  <Activity className="w-4 h-4 text-purple-700 shrink-0" />
                  <span>Tabela de Equivalência de Dosagem</span>
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Conforme apresentado na página {product.pdfPage} do catálogo oficial.
                </p>
              </div>
              <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
                Arraste horizontalmente se necessário →
              </span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left text-xs border-collapse min-w-[360px]">
                <thead>
                  <tr className="bg-purple-900 text-white">
                    <th className="py-2.5 px-3.5 font-semibold">Volume / Porção</th>
                    <th className="py-2.5 px-3.5 font-semibold">{product.dosingTable[0]?.primaryCannabinoid || 'Canabinoide'}</th>
                    {product.dosingTable[0]?.secondaryCannabinoid && (
                      <th className="py-2.5 px-3.5 font-semibold">{product.dosingTable[0].secondaryCannabinoid}</th>
                    )}
                    <th className="py-2.5 px-3.5 font-semibold">Equivalência Gotas</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {product.dosingTable.map((row, idx) => {
                    const isDropper = product.category === 'oleos';
                    let dropEquiv = '-';
                    if (isDropper) {
                      if (row.volume === '1 mL') dropEquiv = '30 gotas';
                      else if (row.volume === '0,75 mL') dropEquiv = '22,5 gotas';
                      else if (row.volume === '0,5 mL') dropEquiv = '15 gotas';
                      else if (row.volume === '0,25 mL') dropEquiv = '7,5 gotas';
                      else if (row.volume === 'Por gota') dropEquiv = '1 gota';
                    }
                    return (
                      <tr key={idx} className="hover:bg-purple-50/60 transition-colors">
                        <td className="py-2.5 px-3.5 font-medium text-slate-900">{row.volume}</td>
                        <td className="py-2.5 px-3.5 font-mono font-semibold text-purple-900">{row.primaryMg}</td>
                        {row.secondaryCannabinoid && (
                          <td className="py-2.5 px-3.5 font-mono text-slate-600">{row.secondaryMg}</td>
                        )}
                        <td className="py-2.5 px-3.5 text-slate-500">{dropEquiv}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {product.dosingNote && (
              <p className="text-xs text-slate-500 italic">
                * {product.dosingNote}
              </p>
            )}
          </div>

          {/* Vehicle & Ingredients */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1.5 font-brand">
                Veículo Diluente & Base
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {product.carrierVehicle}
              </p>
            </div>

            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2 font-brand">
                Ingredientes Ativos da Formulação
              </h4>
              <ul className="space-y-1 text-xs text-slate-600">
                {product.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-purple-600 font-bold">·</span>
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clinical Indications */}
          <div className="bg-purple-50/60 p-4 sm:p-5 rounded-2xl border border-purple-100">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2.5 font-brand">
              Indicações Clínicas Citadas no Catálogo
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {product.indications.map((ind, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs bg-white text-purple-900 border border-purple-200 rounded-lg shadow-2xs font-medium"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Instructions for Use */}
          <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-2xl space-y-3">
            <h4 className="text-xs sm:text-sm font-bold text-purple-300 font-brand">
              Orientações de Administração Sublingual (Pág. 18)
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {product.howToUse.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="font-mono text-purple-400 font-bold shrink-0">0{idx + 1}.</span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer actions */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer text-center"
          >
            Fechar Visualização
          </button>

          <button
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 active:bg-purple-800 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm min-h-[42px]"
          >
            <Plus className="w-4 h-4" />
            <span>Adicionar à Cotação de Importação</span>
          </button>
        </div>

      </div>
    </div>
  );
};
