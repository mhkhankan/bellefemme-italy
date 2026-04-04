import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/lib/translations';

const languages: { code: Language; label: string }[] = [
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`text-[11px] tracking-[0.15em] uppercase transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
              language === lang.code
                ? 'text-primary'
                : 'text-foreground/30 hover:text-foreground/60'
            }`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && (
            <span className="text-foreground/15 text-[10px]">|</span>
          )}
        </span>
      ))}
    </div>
  );
};
