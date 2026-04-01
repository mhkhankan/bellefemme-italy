import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer';
import { useIsMobile } from '@/hooks/use-mobile';

const WHATSAPP_BASE = 'https://wa.me/393516605507?text=';

const locations = [
  'Varese',
  'Jerago con Orago',
  'Gavirate',
  'Cocquio Trevisago',
];

interface LocationSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  treatmentName: string;
}

export const LocationSheet = ({ open, onOpenChange, treatmentName }: LocationSheetProps) => {
  const isMobile = useIsMobile();

  const handleSelect = (location: string) => {
    const msg = `I am interested in ${treatmentName} at the ${location} Atelier.`;
    window.open(`${WHATSAPP_BASE}${encodeURIComponent(msg)}`, '_blank');
    onOpenChange(false);
  };

  const content = (
    <div className="space-y-6 py-4">
      <p className="text-center text-sm text-muted-foreground">
        Where do you desire your treatment?
      </p>
      <div className="flex flex-col gap-2">
        {locations.map((loc) => (
          <button
            key={loc}
            onClick={() => handleSelect(loc)}
            className="w-full text-left font-cormorant text-lg md:text-xl text-foreground/70 hover:text-primary px-6 py-4 min-h-[44px] border-b border-primary/10 last:border-b-0 hover:bg-primary/5 transition-all duration-300"
          >
            {loc}
          </button>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="bg-card border-primary/20">
          <DrawerHeader>
            <DrawerTitle className="font-cormorant text-2xl font-light text-foreground tracking-[2px] text-center">
              Select Your Atelier
            </DrawerTitle>
          </DrawerHeader>
          {content}
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-primary/20 max-w-sm">
        <DialogHeader>
          <DialogTitle className="font-cormorant text-2xl font-light text-foreground tracking-[2px] text-center">
            Select Your Atelier
          </DialogTitle>
        </DialogHeader>
        {content}
      </DialogContent>
    </Dialog>
  );
};
