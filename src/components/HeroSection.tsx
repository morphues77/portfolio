import { useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Shield } from 'lucide-react';
import TerminalText from './TerminalText';
import GlitchText from './GlitchText';

const HeroSection = () => {
  const [showSubtext, setShowSubtext] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative scanlines">
      <div className="container mx-auto px-4 py-20">
        <div className="terminal-window max-w-4xl mx-auto">
          {/* Terminal Header */}
          <div className="terminal-header">
            <div className="terminal-dot bg-destructive" />
            <div className="terminal-dot bg-yellow-500" />
            <div className="terminal-dot bg-primary" />
            <span className="ml-4 text-xs text-muted-foreground">root@kabilan:~</span>
          </div>

          {/* Terminal Content */}
          <div className="terminal-content space-y-4">
            <div className="text-muted-foreground text-sm">
              <span className="text-primary">$</span> cat /etc/profile
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>SECURITY CLEARANCE: AUTHORIZED</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-display font-bold">
                <GlitchText text="KABILAN M" className="neon-text" />
              </h1>
              
              <div className="h-8 text-xl md:text-2xl text-secondary">
                <TerminalText 
                  text="// Cybersecurity Analyst | SOC Operations" 
                  delay={30}
                  onComplete={() => setShowSubtext(true)}
                />
              </div>
            </div>

            {showSubtext && (
              <div className="space-y-4 animate-fade-in">
                <p className="text-muted-foreground leading-relaxed max-w-3xl p-3">
                  <span className="text-primary">&gt;</span> Proactive and detail-oriented Cybersecurity Analyst with hands-on experience in SOC operations, threat detection, incident
response, and security automation. Skilled in SIEM platforms, log analysis, malware detection, and DoS mitigation
techniques. Experienced in building training labs and publishing projects.
                  {/* <span className="text-primary"> threat detection</span>, 
                  <span className="text-secondary"> incident response</span>, and 
                  <span className="text-primary"> SIEM operations</span>.  */}
                  {/* IEEE published researcher in AI/ML anomaly detection. */}
                </p>

                <div className="text-muted-foreground text-sm">
                  <span className="text-primary">$</span> echo $LOCATION
                  <div className="pl-4 text-foreground">Bengaluru, India</div>
                </div>

                <div className="text-muted-foreground text-sm">
                  <span className="text-primary">$</span> ls -la ./social_links/
                  <div 
                    className="mt-2 flex flex-wrap gap-4"
                    onAnimationEnd={() => setShowLinks(true)}
                  >
                    <a
                      href="https://github.com/morphues77"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-muted border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/kabilan-m-a6a53622b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-muted border border-border hover:border-secondary hover:text-secondary transition-all duration-300"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href="mailto:kabilanmoffi@gmail.com"
                      className="flex items-center gap-2 px-4 py-2 bg-muted border border-border hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-primary opacity-50 hover:opacity-100 transition-opacity">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
