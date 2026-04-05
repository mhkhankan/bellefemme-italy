import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const GOOGLE_FONTS_URL = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600;700&display=swap';

function injectGoogleFonts() {
  if (document.getElementById('bf-google-fonts')) return;

  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(preconnect1);

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'anonymous';
  document.head.appendChild(preconnect2);

  const link = document.createElement('link');
  link.id = 'bf-google-fonts';
  link.rel = 'stylesheet';
  link.href = GOOGLE_FONTS_URL;
  document.head.appendChild(link);
}

export function initConsentState() {
  if (typeof window === 'undefined') return;
  const consent = localStorage.getItem('bf_cookie_consent');
  if (consent === 'accepted') {
    injectGoogleFonts();
  }
}

export const CookieConsent = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bf_cookie_consent');
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bf_cookie_consent', 'accepted');
    injectGoogleFonts();
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('bf_cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
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
      <div className="flex gap-3 shrink-0">
        <button
          onClick={handleAccept}
          className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase bg-primary text-primary-foreground px-6 py-3 min-h-[48px] hover:bg-primary/90 transition-colors"
        >
          {t.cookie.accept}
        </button>
        <button
          onClick={handleReject}
          className="font-inter font-bold text-[10px] tracking-[0.15em] uppercase bg-transparent border border-primary/50 text-primary px-6 py-3 min-h-[48px] hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          {t.cookie.reject}
        </button>
      </div>
    </div>
  );
};