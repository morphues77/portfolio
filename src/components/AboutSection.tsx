import { GraduationCap, MapPin, Phone, Mail, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { label: 'IEEE Publications', value: '1' },
    { label: 'Certifications', value: '5+' },
    { label: 'Projects', value: '2+' },
    { label: 'Tech Stack', value: '15+' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-text mb-2">
            <span className="text-muted-foreground text-lg block mb-2">01.</span>
            /about_me
          </h2>
          <div className="w-24 h-0.5 bg-primary animate-pulse-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio Card */}
          <div className="cyber-card">
            <div className="text-xs text-muted-foreground mb-4">
              <span className="text-primary">/**</span> PROFILE DATA <span className="text-primary">*/</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cybersecurity Analyst with hands-on experience in{' '}
              <span className="text-primary">SOC operations</span>,{' '}
              <span className="text-secondary">threat detection</span>,{' '}
              <span className="text-primary">incident response</span>, and{' '}
              <span className="text-secondary">security automation</span>.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-6">
              Skilled in SIEM platforms, log analysis, malware detection, and DoS mitigation. 
              Experienced in building training labs and publishing research. Adept at SOC 
              workflow optimization and detection rule development.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">B.Tech Information Technology</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Bengaluru, India</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+91-97918-65560</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">kabilanmoffi@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Stats & Experience */}
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="cyber-card text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-display font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Card */}
            <div className="cyber-card">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Latest Experience</span>
              </div>
              
              <div className="border-l-2 border-primary pl-4">
                <h4 className="text-primary font-semibold">Frontend Web Development Intern</h4>
                <p className="text-sm text-secondary">Nextskill Technologies Pvt. Ltd</p>
                <p className="text-xs text-muted-foreground mt-1">Jun - Jul 2024 | Coimbatore</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Developed web applications using HTML, CSS, JavaScript. Gained exposure 
                  to secure coding practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
