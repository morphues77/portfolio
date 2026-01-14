import { useState } from 'react';
import { Send, Github, Linkedin, Mail, MapPin, Phone, Terminal } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kabilanmoffi@gmail.com', href: 'mailto:kabilanmoffi@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91-97918-65560', href: 'tel:+919791865560' },
    { icon: MapPin, label: 'Location', value: 'Bengaluru, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/kabilan' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kabilan' },
    { icon: Mail, label: 'Email', href: 'mailto:kabilanmoffi@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold neon-text mb-2">
            <span className="text-muted-foreground text-lg block mb-2">05.</span>
            /contact
          </h2>
          <div className="w-24 h-0.5 bg-primary animate-pulse-glow" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form - Terminal Style */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-destructive" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-primary" />
              <span className="ml-4 text-xs text-muted-foreground">contact@kabilan:~</span>
            </div>

            <form onSubmit={handleSubmit} className="terminal-content space-y-4">
              <div className="text-muted-foreground text-sm">
                <span className="text-primary">$</span> ./send_message.sh
              </div>

              {submitted ? (
                <div className="text-primary animate-fade-in">
                  <span className="text-muted-foreground">[SUCCESS]</span> Message transmitted successfully!
                  <br />
                  <span className="text-muted-foreground">$</span> I'll get back to you soon.
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">
                      <span className="text-primary">$</span> Enter name:
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                      className="w-full bg-muted border border-border px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">
                      <span className="text-primary">$</span> Enter email:
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                      className="w-full bg-muted border border-border px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-muted-foreground mb-1">
                      <span className="text-primary">$</span> Enter message:
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                      className="w-full bg-muted border border-border px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors min-h-[120px] resize-none"
                      placeholder="Your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Execute
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="cyber-card">
              <div className="flex items-center gap-2 mb-4">
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Connection Details</span>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 bg-muted rounded-sm group-hover:bg-primary/10 transition-colors">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{info.label}</div>
                      <div className="text-sm text-foreground">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* <div className="cyber-card">
              <div className="text-sm font-semibold mb-4">Social Links</div>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-muted border border-border hover:border-primary hover:text-primary transition-all duration-300 group"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div> */}

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
