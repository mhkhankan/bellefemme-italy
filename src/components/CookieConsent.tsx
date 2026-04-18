import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const CookieConsent = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showCustomise, setShowCustomise] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bf_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bf_cookie_consent', 'accepted');
    setShowCustomise(false);
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('bf_cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 z-[100] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4"
        style={{
          backgroundColor: 'hsla(0,0%,0%,0.97)',
          borderTop: '1px solid hsl(43 76% 52% / 0.2)',
        }}
      >
        <p className="text-sm text-foreground/70 text-center sm:text-left">
          {t.cookie.text}
        </p>
        <div className="flex flex-wrap gap-3 shrink-0 justify-center">
          <button
            onClick={handleAccept}
            className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase bg-primary text-primary-foreground px-6 py-3 min-h-[48px] hover:bg-primary/90 transition-colors"
          >
            {t.cookie.accept}
          </button>
          <button
            onClick={() => setShowCustomise(true)}
            className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase bg-transparent border border-primary/50 text-primary px-6 py-3 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            {t.cookie.customise}
          </button>
          <button
            onClick={handleReject}
            className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase bg-transparent border border-primary/50 text-primary px-6 py-3 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
          >
            {t.cookie.reject}
          </button>
        </div>
      </div>

      {showCustomise && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center px-4"
          style={{ backgroundColor: 'hsla(0,0%,0%,0.85)' }}
          onClick={() => setShowCustomise(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md p-8 flex flex-col gap-6"
            style={{
              backgroundColor: 'hsla(0,0%,0%,0.97)',
              borderTop: '1px solid hsl(43 76% 52% / 0.2)',
              border: '1px solid hsl(43 76% 52% / 0.2)',
            }}
          >
            <h2 className="font-inter font-bold text-sm tracking-[0.2em] uppercase text-primary">
              {t.cookie.customiseTitle}
            </h2>

            <div className="flex items-start gap-4 py-4 border-t border-b border-primary/10">
              <div
                className="shrink-0 mt-1 w-10 h-6 rounded-full flex items-center px-1 cursor-not-allowed"
                style={{ backgroundColor: 'hsl(43 76% 52%)', opacity: 0.9 }}
                aria-disabled="true"
              >
                <div
                  className="w-4 h-4 rounded-full ml-auto"
                  style={{ backgroundColor: 'hsl(0 0% 100%)' }}
                />
              </div>
              <div className="flex-1">
                <div className="font-inter font-bold text-xs tracking-[0.1em] uppercase text-foreground mb-1">
                  {t.cookie.necessaryLabel}
                </div>
                <p className="font-inter text-xs text-foreground/60 leading-relaxed">
                  {t.cookie.necessaryDesc}
                </p>
              </div>
            </div>

            <button
              onClick={handleAccept}
              className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase bg-primary text-primary-foreground px-6 py-3 min-h-[48px] hover:bg-primary/90 transition-colors w-full"
            >
              {t.cookie.savePrefs}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
