import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { Droplet, Sparkles, Check, ArrowRight, Plus, Eye, Search } from 'lucide-react';

interface ProductsSectionProps {
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  onAddToCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.indications.some((ind) =>
        ind.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="produtos" className="py-14 sm:py-20 bg-[#faf8fd] text-slate-900 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header with balanced text organization */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200/80 text-[10px] sm:text-xs font-bold tracking-wider uppercase max-w-full shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
              <span className="whitespace-nowrap">Catálogo Farmacêutico</span>
              <span aria-hidden="true" className="text-purple-400">·</span>
              <span className="whitespace-nowrap">6 Formulações</span>
              <span aria-hidden="true" className="hidden sm:inline text-purple-400">·</span>
              <span className="hidden sm:inline whitespace-nowrap">Califórnia cGMP</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand [text-wrap:balance]">
              Produtos do Catálogo Oficial
            </h2>
            
            <p className="text-slate-600 max-w-2xl text-xs sm:text-base leading-relaxed">
              Formulações de alta precisão com canabinoides isolados e de amplo espectro para uso clínico individualizado, extraídas com rigor farmacêutico e laudos de análise independentes.
            </p>
          </div>

          {/* Quick search input */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filtrar por nome, sintoma ou CBD..."
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-purple-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all shadow-2xs"
            />
          </div>
        </div>

        {/* Responsive Horizontal Scroll Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar">
          <button
            onClick={() => setSelectedCategory('todos')}
            className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer min-h-[38px] ${
              selectedCategory === 'todos'
                ? 'bg-purple-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-purple-50 border border-slate-200'
            }`}
          >
            Todos os Produtos ({PRODUCTS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('oleos')}
            className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer min-h-[38px] ${
              selectedCategory === 'oleos'
                ? 'bg-purple-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-purple-50 border border-slate-200'
            }`}
          >
            Óleos Sublinguais (3)
          </button>
          <button
            onClick={() => setSelectedCategory('topico')}
            className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer min-h-[38px] ${
              selectedCategory === 'topico'
                ? 'bg-purple-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-purple-50 border border-slate-200'
            }`}
          >
            Uso Tópico / Pomada (1)
          </button>
          <button
            onClick={() => setSelectedCategory('gummies')}
            className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer min-h-[38px] ${
              selectedCategory === 'gummies'
                ? 'bg-purple-900 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-purple-50 border border-slate-200'
            }`}
          >
            Gummies Mastigáveis (2)
          </button>
        </div>

        {/* Product Cards Grid with responsive gap and card styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-purple-100 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Product Visual Container (Hero shot of the product from the catalog) */}
              <div 
                onClick={() => onSelectProduct(product)}
                className="relative aspect-[658/474] w-full bg-[#160b29] flex items-center justify-center cursor-pointer overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Spectrum Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] sm:text-[11px] font-semibold tracking-wide bg-purple-950/85 text-purple-200 border border-purple-700/60 backdrop-blur-md shadow-sm">
                    {product.spectrum}
                  </span>
                </div>

                {/* PDF Page Ref */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[10px] sm:text-[11px] font-mono text-purple-200/90 bg-purple-950/85 px-2 py-0.5 rounded border border-purple-700/50 backdrop-blur-md shadow-sm">
                    Página {String(product.pdfPage).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Product Info Body with organized typographic hierarchy */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category and Concentration header */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-purple-800">{product.categoryLabel}</span>
                    <span className="font-mono text-purple-900 font-bold bg-purple-50 px-2 py-0.5 rounded">
                      {product.concentration}
                    </span>
                  </div>

                  {/* Title and subtitle */}
                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-purple-900 transition-colors cursor-pointer font-brand [text-wrap:balance]"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-purple-700 font-medium mt-0.5 mb-2.5">
                    {product.subtitle} · {product.specs}
                  </p>

                  {/* Description paragraph */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {product.description}
                  </p>

                  {/* Feature specs list */}
                  <div className="space-y-1.5 mb-4 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                      <span className="truncate">{product.features[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
                      <span className="truncate">{product.features[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Price and Action Row with touch-friendly targets */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Valor Sugerido</span>
                    <span className="text-lg sm:text-xl font-extrabold text-slate-900 tabular-nums font-mono">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="px-3 py-2 text-xs font-semibold text-purple-900 bg-purple-50 hover:bg-purple-100 active:bg-purple-200 rounded-lg transition-colors flex items-center gap-1 cursor-pointer min-h-[40px]"
                      title="Ver Bula e Tabela de Doses"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Bula</span>
                    </button>

                    <button
                      onClick={() => onAddToCart(product)}
                      className="px-3.5 py-2 text-xs font-semibold text-white bg-purple-700 hover:bg-purple-600 active:bg-purple-800 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer min-h-[40px]"
                      title="Adicionar à Solicitação"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Cotar</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
            <p className="text-sm font-semibold text-slate-700">
              Nenhuma formulação encontrada para "{searchQuery}".
            </p>
            <p className="text-xs text-slate-500">
              Tente buscar por "CBD", "THC", "Balm", "Sono" ou limpar os filtros.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('todos');
              }}
              className="mt-3 px-4 py-2 bg-purple-900 text-white text-xs font-semibold rounded-lg cursor-pointer"
            >
              Ver todos os 6 produtos
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
