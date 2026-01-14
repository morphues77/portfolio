import { Terminal, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="font-display text-sm">KABILAN_M</span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>System Online</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-destructive" />
            <span>© {currentYear} Kabilan M. All rights reserved.</span>
          </div>
        </div>

        {/* ASCII Art */}
        <div className="mt-8 text-center">
          <pre className="text-[8px] md:text-xs text-primary/30 font-mono leading-none inline-block">
{`
 ██╗  ██╗ █████╗ ██████╗ ██╗██╗      █████╗ ███╗   ██╗
 ██║ ██╔╝██╔══██╗██╔══██╗██║██║     ██╔══██╗████╗  ██║
 █████╔╝ ███████║██████╔╝██║██║     ███████║██╔██╗ ██║
 ██╔═██╗ ██╔══██║██╔══██╗██║██║     ██╔══██║██║╚██╗██║
 ██║  ██╗██║  ██║██████╔╝██║███████╗██║  ██║██║ ╚████║
 ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝
`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
