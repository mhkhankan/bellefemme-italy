import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const languages: { code: Language; label: string }[] = [
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = languages.find(l => l.code === language)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground/60 hover:text-accent transition-colors"
      >
        {current.label}
        <ChevronDown className="w-3 h-3" />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-3 glass-card min-w-[80px] py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => { setLanguage(lang.code); setOpen(false); }}
              className={`block w-full px-5 py-2 text-xs tracking-[0.2em] text-left transition-colors ${
                language === lang.code
                  ? 'text-accent'
                  : 'text-foreground/50 hover:text-accent'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
