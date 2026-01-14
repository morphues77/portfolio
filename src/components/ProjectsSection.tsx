import { Github, ExternalLink, FileCode, AlertTriangle } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'LOIC DoS Simulation Lab',
      description: 'Designed and documented a lab environment to simulate Low Orbit Ion Cannon (LOIC) denial-of-service attacks. Configured Linux systems and network monitoring tools to capture and analyze malicious traffic patterns.',
      tech: ['Linux', 'Wireshark', 'Security Onion', 'Bash'],
      highlights: [
        'Configured network monitoring tools (Wireshark, Security Onion)',
        'Implemented mitigation strategies and incident response scripts',
        'Created troubleshooting documentation for SOC teams',
      ],
      github: 'https://github.com/kabilan/loic-dos-simulation',
      type: 'security',
    },
    {
      title: 'AIDE-Learning',
      description: 'Multimodal machine learning system for processing heterogeneous data types including text, speech, and video. Published in IEEE International Conference on Smart Systems and Security.',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
      highlights: [
        'Implemented preprocessing and feature extraction pipelines',
        'Developed model training workflows using Scikit-learn',
        'IEEE published research on AI/ML anomaly detection',
      ],
      github: 'https://github.com/kabilan/aide-learning',
      type: 'research',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-text mb-2">
            <span className="text-muted-foreground text-lg block mb-2">03.</span>
            /projects
          </h2>
          <div className="w-24 h-0.5 bg-primary animate-pulse-glow" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="cyber-card group"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Project Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-sm ${
                    project.type === 'security' 
                      ? 'bg-destructive/10 text-destructive border border-destructive/30' 
                      : 'bg-secondary/10 text-secondary border border-secondary/30'
                  }`}>
                    {project.type === 'security' ? (
                      <AlertTriangle className="w-8 h-8" />
                    ) : (
                      <FileCode className="w-8 h-8" />
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-4 mb-3">
                    <h3 className="text-xl font-display font-bold text-primary">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View project"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted border border-border text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Scan line effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Publication */}
        <div className="mt-12 cyber-card border-secondary">
          <div className="text-xs text-secondary mb-3 uppercase tracking-wider">
            📄 IEEE Publication
          </div>
          <h4 className="text-lg font-semibold text-foreground mb-2">
            Multimodal Transformer-based Approach for Building Adaptive, Interactive, and Inclusive e-Learning Systems
          </h4>
          <p className="text-sm text-muted-foreground mb-3">
            Kabilan M — Proceedings of the IEEE International Conference on Smart Systems and Security (ICSSAS), 2025
          </p>
          <p className="text-xs text-muted-foreground">
            DOI: 10.1109/ICSSAS66150.2025.11081234
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
