import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Trash2, Plus, Minus, Send, Copy, Check, ShoppingBag, ShieldCheck } from 'lucide-react';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [patientName, setPatientName] = useState<string>('');
  const [cityState, setCityState] = useState<string>('');
  const [hasPrescription, setHasPrescription] = useState<string>('tenho');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const generateOrderText = () => {
    let text = `*SOLICITAÇÃO DE IMPORTAÇÃO - DESERT MOON CBD*\n`;
    text += `(Conforme RDC 660/2022 da ANVISA)\n\n`;
    if (patientName) text += `*Paciente/Médico:* ${patientName}\n`;
    if (cityState) text += `*Localização:* ${cityState}\n`;
    text += `*Status da Receita:* ${hasPrescription === 'tenho' ? 'Já possui prescrição médica' : hasPrescription === 'andamento' ? 'Receita em andamento/agendada' : 'Necessita de indicação médica'}\n\n`;
    text += `*ITENS SELECIONADOS:*\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.name} (${item.product.specs}) - Qtd: ${item.quantity} un. - R$ ${(item.product.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    text += `\n*VALOR ESTIMADO:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    text += `\nSolicito orientações da equipe de acolhimento para emissão da autorização Anvisa e desembaraço de importação.`;
    return text;
  };

  const handleSendWhatsApp = () => {
    const text = generateOrderText();
    const encoded = encodeURIComponent(text);
    const url = `https://wa.me/5521974515068?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    const text = generateOrderText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/65 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-[#150a29] text-white flex items-center justify-between border-b border-purple-900/50 shrink-0">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-purple-400 shrink-0" />
            <h3 className="text-base sm:text-lg font-bold font-brand tracking-wider">
              Solicitação de Importação
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-purple-300 hover:text-white hover:bg-purple-900/50 transition-colors cursor-pointer"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Items List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">
                Sua lista de solicitação está vazia
              </p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                Explore o catálogo e adicione formulações de CBD, CBN ou Bálsamo para calcular valores e solicitar suporte de importação pela Anvisa.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
                  <span>Itens Selecionados ({items.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-purple-700 hover:underline cursor-pointer font-medium"
                  >
                    Limpar tudo
                  </button>
                </div>

                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200"
                  >
                    <div className="w-11 h-11 bg-[#1b0d36] rounded-lg p-1 shrink-0 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 truncate">
                        {product.name}
                      </h4>
                      <span className="text-[11px] text-slate-500 block">
                        R$ {product.price.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    {/* Quantity Stepper with good touch targets */}
                    <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-lg border border-slate-300">
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                        className="text-slate-500 hover:text-slate-800 p-1 cursor-pointer"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-mono font-bold w-4 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                        className="text-slate-500 hover:text-slate-800 p-1 cursor-pointer"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(product.id)}
                      className="text-slate-400 hover:text-rose-600 transition-colors p-1.5 cursor-pointer shrink-0"
                      aria-label="Remover item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Patient/Doctor Optional Details */}
              <div className="p-4 bg-purple-50/70 rounded-xl border border-purple-100 space-y-3">
                <span className="text-xs font-bold text-purple-900 block font-brand">
                  Dados para Agilizar o Acolhimento:
                </span>

                <div>
                  <label className="text-[11px] text-slate-600 block mb-1">
                    Nome do Paciente ou Médico Prescritor:
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Ex: Dra. Juliana Santos ou Paciente..."
                    className="w-full text-xs p-2.5 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-600 block mb-1">
                    Cidade / Estado (UF):
                  </label>
                  <input
                    type="text"
                    value={cityState}
                    onChange={(e) => setCityState(e.target.value)}
                    placeholder="Ex: Rio de Janeiro / RJ"
                    className="w-full text-xs p-2.5 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-600 block mb-1">
                    Situação da Prescrição Médica:
                  </label>
                  <select
                    value={hasPrescription}
                    onChange={(e) => setHasPrescription(e.target.value)}
                    className="w-full text-xs p-2.5 bg-white border border-purple-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-600"
                  >
                    <option value="tenho">Já possuo receita médica em mãos</option>
                    <option value="andamento">Consulta médica agendada / em andamento</option>
                    <option value="preciso">Necessito de orientação de médico prescritor</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-purple-700 shrink-0" />
                <span>Processamento conforme a Resolução RDC 660/2022 da ANVISA.</span>
              </div>
            </>
          )}
        </div>

        {/* Footer with totals & WhatsApp action */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 space-y-3.5 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Subtotal Estimado</span>
              <span className="text-xl font-bold text-slate-900 font-mono">
                R$ {subtotal.toFixed(2).replace('.', ',')}
              </span>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleSendWhatsApp}
                className="w-full py-3 bg-purple-700 hover:bg-purple-600 active:bg-purple-800 text-white font-semibold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer min-h-[46px]"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Enviar para Acolhimento via WhatsApp</span>
              </button>

              <button
                onClick={handleCopy}
                className="w-full py-2.5 bg-white hover:bg-slate-100 text-slate-700 font-medium text-xs rounded-xl border border-slate-300 transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[40px]"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-emerald-700 font-bold">Copiado para Área de Transferência!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 shrink-0" />
                    <span>Copiar Lista de Itens</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-400">
              A Desert Moon não comercializa produtos sem prescrição médica válida.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
