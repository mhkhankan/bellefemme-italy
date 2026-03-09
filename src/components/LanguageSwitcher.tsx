import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Language } from '@/lib/translations';

const languages: { code: Language; label: string }[] = [
  { code: 'it', label: 'IT' },
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1">
      {languages.map((lang) => (
        <Button
          key={lang.code}
          variant={language === lang.code ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 text-xs font-medium transition-all ${
            language === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground/60 hover:text-foreground'
          }`}
        >
          {lang.label}
        </Button>
      ))}
    </div>
  );
};
