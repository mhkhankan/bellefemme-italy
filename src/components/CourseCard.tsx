import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface CourseCardProps {
  title: string;
  duration: string;
  description: string;
  href?: string;
}

export const CourseCard = ({ title, duration, description, href }: CourseCardProps) => {
  const { t, isRTL } = useLanguage();

  const content = (
    <div className="space-y-5">
      <span className="text-xs tracking-[0.25em] uppercase text-accent/70">
        {duration}
      </span>
      <h3 className="heading-editorial text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors duration-500">
        {title}
      </h3>
      <div className="divider-gold w-8 group-hover:w-full transition-all duration-700" />
      <p className="text-sm text-foreground/40 leading-relaxed tracking-wide font-light">
        {description}
      </p>
      {href && (
        <div className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-accent/60 group-hover:text-accent pt-2 transition-colors duration-300">
          {t.courses.viewDetails}
          <ArrowRight className={`w-3 h-3 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180' : ''}`} />
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link to={href} className="glass-card p-8 group cursor-pointer block">
        {content}
      </Link>
    );
  }

  return (
    <div className="glass-card p-8 group cursor-default">
      {content}
    </div>
  );
};
