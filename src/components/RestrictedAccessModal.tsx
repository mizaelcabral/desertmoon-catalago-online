import React, { useState, useEffect } from 'react';
import { Lock, Unlock, ShieldCheck, Eye, EyeOff, AlertCircle, ArrowRight, Stethoscope, MessageCircle } from 'lucide-react';

interface RestrictedAccessModalProps {
  onUnlock: () => void;
}

const DEFAULT_PASSWORD = 'DMCAT#2026';

export const RestrictedAccessModal: React.FC<RestrictedAccessModalProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Lock body scroll while modal is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError(true);
      setErrorMessage('Por favor, digite a senha de acesso.');
      return;
    }

    setIsSubmitting(true);

    if (password.trim() === DEFAULT_PASSWORD) {
      setError(false);
      sessionStorage.setItem('dm_catalog_access_granted', 'true');
      setTimeout(() => {
        setIsSubmitting(false);
        onUnlock();
      }, 300);
    } else {
      setIsSubmitting(false);
      setError(true);
      setErrorMessage('Senha incorreta. Verifique as credenciais fornecidas pelo consultor.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0a0314]/90 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-[#140827]/95 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-950/80 p-6 sm:p-8 text-center text-white overflow-hidden">
        {/* Top subtle line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-400 to-purple-600" />

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img
            src="/extracted/logo.png"
            alt="Desert Moon CBD"
            className="h-10 sm:h-12 w-auto object-contain brightness-125 drop-shadow-[0_4px_12px_rgba(168,85,247,0.35)]"
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-900/60 border border-purple-500/40 text-purple-200 text-[11px] font-semibold tracking-wider uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span>Acesso Restrito • Profissionais da Saúde</span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-2xl font-bold font-brand tracking-tight text-white mb-2 [text-wrap:balance]">
          Catálogo Técnico & Terapêutico
        </h2>

        {/* Informative text */}
        <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed mb-6">
          Este catálogo é de <strong className="text-purple-100 font-semibold">uso exclusivo para médicos, dentistas e profissionais da saúde</strong> devidamente habilitados, contendo informações farmacológicas, laudos laboratoriais (COA) e posologias de fitocanabinoides em conformidade com as diretrizes regulatórias da ANVISA.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <div>
            <label className="block text-xs font-medium text-purple-200 mb-1.5 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-purple-400" />
                Senha de Acesso Profissional:
              </span>
            </label>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Digite a senha fornecida"
                autoFocus
                className={`w-full px-4 py-3 pr-11 bg-[#1d0e36] text-white text-sm rounded-xl border transition-all placeholder:text-purple-300/40 focus:outline-none focus:ring-2 ${
                  error
                    ? 'border-rose-500/80 focus:ring-rose-500/30'
                    : 'border-purple-700/60 focus:border-purple-400 focus:ring-purple-500/30'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-400 hover:text-purple-200 transition-colors cursor-pointer"
                aria-label={showPassword ? 'Ocultar senha' : 'Ver senha'}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>

            {error && (
              <div className="flex items-center gap-1.5 mt-2 text-rose-400 text-xs animate-in fade-in">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 active:from-purple-700 active:to-indigo-700 text-white font-semibold text-sm tracking-wide transition-all shadow-lg shadow-purple-950/60 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Validando acesso...</span>
            ) : (
              <>
                <Unlock className="w-4 h-4" />
                <span>Liberar Acesso ao Catálogo</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>
        </form>

        {/* Footer info & WhatsApp button for credentials */}
        <div className="mt-6 pt-5 border-t border-purple-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-purple-300/70">
          <div className="flex items-center gap-1.5">
            <Stethoscope className="w-4 h-4 text-purple-400 shrink-0" />
            <span>É prescritor e não possui a senha?</span>
          </div>

          <a
            href="https://wa.me/5521974515068?text=Ol%C3%A1%2C%20sou%20m%C3%A9dico%2Fprofissional%20da%20sa%C3%BAde%20e%20gostaria%20da%20senha%20de%20acesso%20ao%20cat%C3%A1logo%20Desert%20Moon."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-700/50 transition-colors font-medium cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Solicitar via WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
