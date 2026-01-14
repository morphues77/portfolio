import { Award, Shield, GraduationCap, Clock } from 'lucide-react';

const CertificationsSection = () => {
  const professionalCerts = [
    {
      title: 'Certified SOC Analyst (CSA)',
      issuer: 'EC-Council',
      status: 'In Progress',
      expected: 'Feb 2026',
      icon: Shield,
      highlight: true,
    },
  ];

  const trainingCerts = [
    {
      title: 'Ethical Hacking & CICSA',
      issuer: 'Redteam Hacker Academy, Bengaluru',
      duration: '6 months',
      icon: Award,
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      icon: GraduationCap,
    },
    {
      title: 'Cybersecurity Essentials',
      issuer: 'Cisco Networking Academy',
      icon: GraduationCap,
    },
    {
      title: 'Cyber Threat Management',
      issuer: 'Cisco Networking Academy',
      icon: GraduationCap,
    },
    {
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      icon: GraduationCap,
    },
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-text mb-2">
            <span className="text-muted-foreground text-lg block mb-2">04.</span>
            /certifications
          </h2>
          <div className="w-24 h-0.5 bg-primary animate-pulse-glow" />
        </div>

        {/* Professional Certifications */}
        <div className="mb-10">
          <h3 className="text-lg font-display text-secondary mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {professionalCerts.map((cert) => (
              <div
                key={cert.title}
                className={`cyber-card ${cert.highlight ? 'border-secondary' : ''} relative overflow-hidden`}
              >
                {cert.highlight && (
                  <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-3 py-1 text-xs font-semibold">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {cert.status}
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-sm">
                    <cert.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    {cert.expected && (
                      <p className="text-xs text-secondary mt-1">Expected: {cert.expected}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training & Certifications */}
        <div>
          <h3 className="text-lg font-display text-primary mb-6 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Training & Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trainingCerts.map((cert, index) => (
              <div
                key={cert.title}
                className="cyber-card group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary/10 rounded-sm group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm leading-tight mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    {cert.duration && (
                      <p className="text-xs text-primary mt-1">{cert.duration}</p>
                    )}
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full group-hover:animate-pulse-glow transition-all"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
