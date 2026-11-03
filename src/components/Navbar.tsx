import React, { useState } from 'react';
import { ShoppingBag, FileText, Menu, X, ChevronRight, Phone } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenPdfViewer: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenPdfViewer,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'produtos', label: 'Produtos', desc: 'Óleos, Tópico e Gummies' },
    { id: 'endocanabinoide', label: 'Sistema Endocanabinoide', desc: 'Receptores CB1/CB2 e Mapa Corporal' },
    { id: 'indicacoes', label: 'Indicações Clínicas', desc: 'Patologias e Aplicações Terapêuticas' },
    { id: 'anvisa', label: 'Como Importar (ANVISA)', desc: 'RDC 660 e Modelo de Receita' },
    { id: 'dosagem', label: 'Administração', desc: 'Conta-gotas e Técnica Sublingual' },
    { id: 'marca', label: 'A Marca', desc: 'Origem Califórnia e Laudos COA' }
  ];

  const handleMobileNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#160b29]/95 backdrop-blur-md border-b border-purple-900/40 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between gap-4 sm:gap-8">
        
        {/* Zone 1: Brand Logo */}
        <button
          onClick={() => {
            onNavigate('hero');
            setMobileMenuOpen(false);
          }}
          className="text-left group flex items-center cursor-pointer select-none shrink-0"
          aria-label="Desert Moon - Início"
        >
          <img 
            src="/extracted/logo.png" 
            alt="Desert Moon CBD" 
            className="h-9 sm:h-11 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform" 
          />
        </button>

        {/* Zone 2: Desktop 4-5 Clean Single-Line Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-purple-200/90">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`whitespace-nowrap transition-colors hover:text-white cursor-pointer py-1 ${
                activeSection === item.id ? 'text-white font-semibold underline underline-offset-8 decoration-purple-400' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Actions + Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          <button
            onClick={onOpenPdfViewer}
            className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-xs font-medium text-purple-200 hover:text-white bg-purple-950/60 hover:bg-purple-900/60 border border-purple-700/50 rounded-lg transition-colors cursor-pointer"
            title="Ver Páginas Originais do PDF"
          >
            <FileText className="w-3.5 h-3.5 text-purple-300 shrink-0" />
            <span className="whitespace-nowrap">PDF Original</span>
          </button>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-1.5 px-2.5 sm:px-4 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 rounded-lg transition-colors shadow-lg shadow-purple-950/50 whitespace-nowrap shrink-0 cursor-pointer min-h-[38px]"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline whitespace-nowrap">Solicitar Cotação</span>
            <span className="sm:hidden text-xs">Cotar</span>
            {cartCount > 0 && (
              <span className="px-1.5 py-0.2 bg-white text-purple-900 font-bold rounded-full text-[10px] sm:text-[11px] tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/50 border border-purple-800/40 transition-colors cursor-pointer min-h-[38px] min-w-[38px] flex items-center justify-center shrink-0"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-purple-900/50 bg-[#140826]/98 px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <div className="text-[11px] font-mono text-purple-400 uppercase tracking-wider px-3 pb-1 border-b border-purple-900/40">
            Navegação do Catálogo
          </div>
          
          <div className="space-y-1 pt-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-purple-800/80 text-white font-semibold'
                      : 'text-purple-200/90 hover:bg-purple-900/40 hover:text-white'
                  }`}
                >
                  <div>
                    <div className="text-xs font-semibold flex items-center gap-2">
                      <span className="font-mono text-[10px] text-purple-400">0{index + 1}.</span>
                      <span>{item.label}</span>
                    </div>
                    <span className="text-[11px] text-purple-300/70 block mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-400 shrink-0" />
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-purple-900/40 flex items-center justify-between gap-2">
            <button
              onClick={() => {
                onOpenPdfViewer();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 text-center text-xs font-medium text-purple-200 bg-purple-950/70 rounded-lg border border-purple-800/60"
            >
              Ver 19 Páginas em PDF
            </button>
            <a
              href="https://wa.me/5521974515068"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 text-center text-xs font-semibold text-white bg-purple-700 rounded-lg flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Acolhimento</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
