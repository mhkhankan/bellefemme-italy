interface CourseCardProps {
  title: string;
  duration: string;
  description: string;
}

export const CourseCard = ({ title, duration, description }: CourseCardProps) => {
  return (
    <div className="group bg-card border border-gold/30 p-8 hover:border-gold transition-all duration-300 hover:shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="heading-luxury-bold text-2xl text-foreground">
            {title}
          </h3>
          <span className="text-sm text-primary font-medium">
            {duration}
          </span>
        </div>
        
        <div className="w-12 h-px bg-primary/50 group-hover:w-full group-hover:bg-primary transition-all duration-500" />
        
        <p className="text-foreground/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
