export const SiteFooter = () => {
  return (
    <footer className="border-t border-primary/10 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <a href="#top" className="font-cormorant text-sm tracking-[0.3em] uppercase text-primary">
          Belle Femme
        </a>
        <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
          P.IVA 03794680128 &nbsp;·&nbsp; Master Studio: Varese, Italy
        </p>
        <p className="text-[10px] text-muted-foreground/40">
          © {new Date().getFullYear()} Belle Femme PMU Atelier & Academy
        </p>
      </div>
    </footer>
  );
};
