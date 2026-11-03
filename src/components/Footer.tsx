import React from 'react';
import { Phone, Mail, Instagram, Globe, MapPin, ShieldCheck, HeartHandshake } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#110620] text-slate-300 border-t border-purple-900/60 pt-12 sm:pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        
        {/* Top Banner with Brand Callout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center pb-10 border-b border-purple-900/40">
          
          <div className="md:col-span-7 space-y-2.5">
            <span className="text-[10px] sm:text-xs font-semibold text-purple-400 uppercase tracking-widest block font-mono">
              CIÊNCIA E ACOLHIMENTO EM CADA ETAPA
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-brand [text-wrap:balance]">
              Conte com a Desert Moon.
            </h3>
            <p className="text-xs sm:text-sm text-purple-200/80 max-w-xl leading-relaxed">
              Equipe dedicada de consultores e farmacêuticos para apoiar você e seu médico na jornada terapêutica com cannabis medicinal de acordo com a ANVISA.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center md:justify-end">
            <a
              href="https://wa.me/5521974515068"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-semibold text-xs tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg shadow-purple-950 cursor-pointer min-h-[44px]"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Acolhimento WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Links & Contact Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-xs text-purple-200/80">
          
          {/* Col 1: Brand & Origin */}
          <div className="space-y-3">
            <div className="flex items-center">
              <img src="/extracted/logo.png" alt="Desert Moon CBD" className="h-9 w-auto brightness-125" />
            </div>
            <p className="text-purple-300/70 leading-relaxed text-xs">
              Cannabis medicinal importada de alta precisão. Cultivada organicamente na Califórnia, Estados Unidos, e entregue no Brasil sob rigorosa regulamentação sanitária.
            </p>
          </div>

          {/* Col 2: Brasil */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider font-brand text-xs sm:text-sm">
              Acolhimento Brasil
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="tel:+5521974515068" className="hover:text-white transition-colors">
                  +55 (21) 97451-5068
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="https://instagram.com/desertmooncbd" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @desertmooncbd
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="https://desertmooncbd.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  desertmooncbd.com.br
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Internacional */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider font-brand text-xs sm:text-sm">
              Sede Internacional
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Califórnia, Estados Unidos</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <span>+1 (760) 330-0145</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400 shrink-0" />
                <span>desertmooncbd.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Regulatory */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider font-brand text-xs sm:text-sm">
              Conformidade ANVISA
            </h4>
            <p className="text-purple-300/70 leading-relaxed text-xs">
              Importação por pessoa física para uso próprio mediante prescrição de profissional legalmente habilitado, conforme Resolução da Diretoria Colegiada RDC Nº 660/2022 da ANVISA.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-purple-400/70 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Desert Moon CBD. Todos os direitos reservados.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>RDC 660/2022 ANVISA</span>
            <span aria-hidden="true">·</span>
            <span>Uso sob prescrição médica</span>
            <span aria-hidden="true">·</span>
            <span>Produzido nos EUA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
