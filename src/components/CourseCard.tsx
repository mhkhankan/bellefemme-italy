interface CourseCardProps {
  title: string;
  duration: string;
  description: string;
}

export const CourseCard = ({ title, duration, description }: CourseCardProps) => {
  return (
    <div className="glass-card p-8 group cursor-default">
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
      </div>
    </div>
  );
};
