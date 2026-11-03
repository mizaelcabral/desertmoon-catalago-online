import React, { useState } from 'react';
import { FileCheck, ShieldAlert, CheckCircle2, Circle, ArrowRight, Phone, ExternalLink, HelpCircle } from 'lucide-react';

export const ImportGuideSection: React.FC = () => {
  const [checkedRequirements, setCheckedRequirements] = useState<number[]>([1, 2, 3]);

  const toggleReq = (num: number) => {
    setCheckedRequirements((prev) =>
      prev.includes(num) ? prev.filter((n) => n !== num) : [...prev, num]
    );
  };

  const requirements = [
    { num: 1, title: 'Nome do paciente', desc: 'Nome civil completo do paciente beneficiário do tratamento médico.' },
    { num: 2, title: 'Nome do produto prescrito', desc: 'Denominação comercial do produto (ex: CBD Tradicional 1500mg, Sleep Tonic, etc.).' },
    { num: 3, title: 'Nome da marca prescrita', desc: 'Indicação obrigatória e expressa da marca: Desert Moon CBD.' },
    { num: 4, title: 'Quantitativo importado', desc: 'Número total de frascos ou potes para o período de tratamento previsto.' },
    { num: 5, title: 'Posologia', desc: 'Detalhamento da dosagem diária, frequência de administração e duração do tratamento.' },
    { num: 6, title: 'Data da prescrição', desc: 'Data de emissão da receita médica válida.' },
    { num: 7, title: 'Assinatura do médico responsável', desc: 'Assinatura física com carimbo legível ou certificado digital padrão ICP-Brasil.' },
    { num: 8, title: 'Número de registro no conselho (CRM)', desc: 'Número do CRM com respectiva unidade federativa (UF) do médico.' }
  ];

  return (
    <section id="anvisa" className="py-14 sm:py-20 bg-white text-slate-900 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        
        {/* Header with organized text */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200/80 text-[10px] sm:text-xs font-bold tracking-wider uppercase max-w-full shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0" />
            <span className="whitespace-nowrap">Orientações Regulatórias</span>
            <span aria-hidden="true" className="text-purple-400">·</span>
            <span className="whitespace-nowrap">ANVISA RDC 660</span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-brand [text-wrap:balance]">
            Prescrição e Importação
          </h2>
          
          <p className="text-slate-600 max-w-2xl text-xs sm:text-base leading-relaxed">
            Organização da documentação e acompanhamento do paciente. Produtos importados rigorosamente de acordo com a RDC 660/2022 da Anvisa para uso pessoal e sob prescrição médica.
          </p>
        </div>

        {/* 3 Step Process from Page 17 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          
          <div className="bg-purple-50/70 p-5 sm:p-6 rounded-2xl border border-purple-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-900 text-white flex items-center justify-center font-bold text-base sm:text-lg font-mono mb-4 shadow-sm">
                01
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-brand mb-1">
                Prescrição
              </h3>
              <p className="text-xs text-purple-800 font-semibold mb-2.5">
                Consulta com o médico
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                O profissional legalmente habilitado prescreve a formulação Desert Moon individualizada com posologia e quantidade de frascos para o tratamento.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-200/60 text-[11px] text-purple-900 font-medium">
              Consulta presencial ou telemedicina
            </div>
          </div>

          <div className="bg-purple-50/70 p-5 sm:p-6 rounded-2xl border border-purple-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-900 text-white flex items-center justify-center font-bold text-base sm:text-lg font-mono mb-4 shadow-sm">
                02
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-brand mb-1">
                Autorização
              </h3>
              <p className="text-xs text-purple-800 font-semibold mb-2.5">
                Documentação ANVISA RDC 660
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Preenchimento rápido no formulário online do portal Gov.br. A autorização é emitida em poucos minutos de forma digital e sem custos de taxa governamental.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-200/60 text-[11px] text-purple-900 font-medium">
              Aprovação digital simplificada no Gov.br
            </div>
          </div>

          <div className="bg-purple-50/70 p-5 sm:p-6 rounded-2xl border border-purple-100 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-900 text-white flex items-center justify-center font-bold text-base sm:text-lg font-mono mb-4 shadow-sm">
                03
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-brand mb-1">
                Aquisição
              </h3>
              <p className="text-xs text-purple-800 font-semibold mb-2.5">
                Importação do produto
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Envio expresso internacional a partir da Califórnia (EUA) com desembaraço aduaneiro completo e entrega direta em domicílio.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-purple-200/60 text-[11px] text-purple-900 font-medium">
              Entrega porta a porta com rastreamento
            </div>
          </div>

        </div>

        {/* Interactive 8-Requirement Prescription Checklist */}
        <div className="bg-slate-900 text-white p-5 sm:p-8 rounded-3xl shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-800/40 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-purple-400 shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold text-white font-brand [text-wrap:balance]">
                  Checklist dos 8 Requisitos Obrigatórios da Receita Médica
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Para que o processo de importação seja aceito pela ANVISA, verifique se a receita médica contempla todos os 8 itens abaixo:
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono text-purple-300 font-bold">
                {checkedRequirements.length}/8 conferidos
              </span>
              <div className="w-24 h-2 bg-purple-950 rounded-full overflow-hidden border border-purple-700">
                <div
                  className="h-full bg-purple-400 transition-all duration-300"
                  style={{ width: `${(checkedRequirements.length / 8) * 100}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {requirements.map((req) => {
              const isChecked = checkedRequirements.includes(req.num);
              return (
                <div
                  key={req.num}
                  onClick={() => toggleReq(req.num)}
                  className={`p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-purple-950/70 border-purple-700/80 text-white'
                      : 'bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <button className="mt-0.5 shrink-0 text-purple-400 cursor-pointer">
                    {isChecked ? (
                      <CheckCircle2 className="w-5 h-5 text-purple-400 fill-purple-950" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-500" />
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-purple-300 font-bold shrink-0">
                        {String(req.num).padStart(2, '0')}.
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {req.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {req.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Concierge Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/90 border border-purple-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-purple-300 uppercase tracking-wider block">
                Acolhimento & Suporte Desert Moon Brasil
              </span>
              <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
                Nossa equipe auxilia médicos e pacientes em todas as etapas da documentação e protocolo na ANVISA sem custos de assessoria.
              </p>
            </div>

            <a
              href="https://wa.me/5521974515068?text=Ola%2C%20gostaria%20de%20orientacoes%20sobre%20a%20importacao%20de%20Desert%20Moon%20CBD%20pela%20Anvisa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 bg-purple-600 hover:bg-purple-500 active:bg-purple-700 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer min-h-[44px]"
            >
              <Phone className="w-4 h-4 shrink-0" />
              <span>Acolhimento WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
