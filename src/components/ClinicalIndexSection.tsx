import React, { useState } from 'react';
import { CLINICAL_CONDITIONS, ClinicalCondition } from '../data/clinicalConditions';
import { PRODUCTS, Product } from '../data/products';
import { Search, Stethoscope, ChevronRight, Filter, X } from 'lucide-react';

interface ClinicalIndexSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ClinicalIndexSection: React.FC<ClinicalIndexSectionProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas as Indicações' },
    { id: 'Saúde Mental & Sono', label: 'Saúde Mental & Sono' },
    { id: 'Neurológico', label: 'Neurológico' },
    { id: 'Dor & Inflamação', label: 'Dor & Inflamação' },
    { id: 'Gastrointestinal & Metabólico', label: 'Gastrointestinal & Metabólico' },
    { id: 'Dermatológico & Tópico', label: 'Dermatológico & Tópico' },
    { id: 'Ginecológico & Outros', label: 'Ginecológico & Outros' }
  ];

  const filteredConditions = CLINICAL_CONDITIONS.filter((item) => {
    const matchesCat = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.mechanism.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.receptorsInvolved.some((r) => r.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <section id="indicacoes" className="py-14 sm:py-20 bg-[#faf8fd] text-slate-900 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header with balanced text organization */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200/80 text-[10px] sm:text-xs font-bold tracking-wider uppercase max-w-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
              <span className="whitespace-nowrap">Aplicações Terapêuticas</span>
              <span aria-hidden="true" className="text-purple-400">·</span>
              <span className="whitespace-nowrap">Páginas 13, 15 e 16</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand [text-wrap:balance]">
              Guia de Indicações Clínicas
            </h2>
            
            <p className="text-slate-600 max-w-2xl text-xs sm:text-base leading-relaxed">
              Relação de patologias e condições médicas citadas no material original da Desert Moon CBD, com mecanismos de ação sugeridos, receptores e formulações compatíveis.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar por patologia, dor, sono..."
              className="w-full pl-10 pr-9 py-2.5 bg-white border border-purple-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all shadow-2xs"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Categories Bar - Horizontal scrollable on mobile */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer min-h-[38px] ${
                selectedCategory === cat.id
                  ? 'bg-purple-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-purple-50 border border-slate-200'
              }`}
            >
              {cat.label} {cat.id === 'todos' ? `(${CLINICAL_CONDITIONS.length})` : ''}
            </button>
          ))}
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredConditions.map((condition) => {
            const recommendedProductObjects = condition.recommendedProducts
              .map((id) => PRODUCTS.find((p) => p.id === id))
              .filter(Boolean) as Product[];

            return (
              <div
                key={condition.id}
                className="bg-white rounded-2xl border border-purple-100 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span className="font-semibold text-purple-700">{condition.category}</span>
                    <span className="font-mono text-purple-900 bg-purple-50 px-2 py-0.5 rounded">
                      Pág. {String(condition.pdfPage).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-brand [text-wrap:balance]">
                    {condition.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {condition.mechanism}
                  </p>

                  {/* Receptor Tags */}
                  <div className="mt-3 flex flex-wrap gap-1">
                    {condition.receptorsInvolved.map((rec, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono bg-purple-50 text-purple-800 rounded border border-purple-100 font-medium"
                      >
                        {rec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Formulations */}
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider block mb-2">
                    Formulações Recomendadas no Catálogo:
                  </span>
                  <div className="space-y-1.5">
                    {recommendedProductObjects.map((prod) => (
                      <div
                        key={prod.id}
                        className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-purple-50/80 transition-colors text-xs"
                      >
                        <span className="font-medium text-slate-800 truncate mr-2">{prod.name}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => onSelectProduct(prod)}
                            className="text-purple-700 hover:text-purple-900 font-semibold cursor-pointer underline text-[11px]"
                          >
                            Bula
                          </button>
                          <span className="text-slate-300">·</span>
                          <button
                            onClick={() => onAddToCart(prod)}
                            className="px-2 py-1 bg-purple-700 hover:bg-purple-600 text-white font-medium rounded text-[11px] cursor-pointer"
                          >
                            + Cotar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredConditions.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
            <p className="text-sm font-semibold text-slate-700">
              Nenhuma condição clínica encontrada para "{searchTerm}".
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('todos');
              }}
              className="mt-2 px-4 py-2 bg-purple-900 text-white text-xs font-semibold rounded-lg cursor-pointer"
            >
              Limpar filtros e ver todas
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
