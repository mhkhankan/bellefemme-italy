import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface TruncatedQuoteProps {
  text: string;
  maxLines: number;
  language: string;
}

const TruncatedQuote = ({ text, maxLines }: TruncatedQuoteProps) => {
  const [expanded, setExpanded] = useState(false);
  const [needsTruncation, setNeedsTruncation] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const MARGIN_TOP = 28;
  const { t } = useLanguage();

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
      const maxHeight = lineHeight * maxLines + MARGIN_TOP;
      setNeedsTruncation(textRef.current.scrollHeight > maxHeight + 2);
    }
  }, [text, maxLines]);

  const collapsedMaxHeight = `calc(${maxLines} * 1.75 * 17px + ${MARGIN_TOP}px)`;

  return (
    <div className="relative">
      <AnimatePresence initial={false}>
        <motion.div
          animate={{ height: expanded ? 'auto' : undefined }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden relative"
          style={!expanded && needsTruncation ? {
            maxHeight: collapsedMaxHeight,
          } : undefined}
        >
          <p
            ref={textRef}
            className="font-cormorant italic"
            style={{ fontSize: '17px', color: 'rgba(245,245,245,0.85)', lineHeight: 1.75, marginTop: `${MARGIN_TOP}px` }}
          >
            {text}
          </p>
          {!expanded && needsTruncation && (
            <div
              className="absolute bottom-0 left-0 right-0 pointer-events-none"
              style={{
                height: '3em',
                background: 'linear-gradient(to bottom, rgba(10,10,10,0) 0%, rgba(10,10,10,1) 100%)',
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
      {needsTruncation && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="font-inter text-[9px] tracking-[0.15em] uppercase mt-2 transition-colors"
          style={{ color: 'rgba(212,175,55,0.75)' }}
        >
          {expanded ? t.truncatedQuote.close : t.truncatedQuote.readMore}
        </button>
      )}
    </div>
  );
};

export default TruncatedQuote;
