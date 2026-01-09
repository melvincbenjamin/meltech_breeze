import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-12 border-t border-border bg-card px-4 py-8 flex flex-wrap items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} MelTech.com. All rights reserved.
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
