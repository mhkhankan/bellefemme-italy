import { useState } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);

  return (
    <div
      className="relative overflow-hidden rounded-sm select-none"
      style={{ aspectRatio: '4/3' }}
    >
      {/* After image — base layer (right side revealed) */}
      <img
        src={afterSrc}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* Before image — clip shows left portion only */}
      <img
        src={beforeSrc}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-cover transition-[clip-path] duration-75"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Divider line + handle */}
      <div
        className="absolute inset-y-0 z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-accent/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-accent bg-background/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_20px_hsl(var(--accent)/0.3)]">
          <ChevronsLeftRight className="w-4 h-4 text-accent" />
        </div>
      </div>

      {/* Labels */}
      <span className="absolute bottom-3 left-3 z-10 pointer-events-none text-[10px] tracking-[0.2em] uppercase text-foreground/80 bg-background/70 backdrop-blur-sm px-2 py-1">
        {beforeLabel}
      </span>
      <span className="absolute bottom-3 right-3 z-10 pointer-events-none text-[10px] tracking-[0.2em] uppercase text-foreground/80 bg-background/70 backdrop-blur-sm px-2 py-1">
        {afterLabel}
      </span>

      {/* Invisible range input for interaction */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        style={{ WebkitAppearance: 'none', touchAction: 'none' }}
      />
    </div>
  );
};
