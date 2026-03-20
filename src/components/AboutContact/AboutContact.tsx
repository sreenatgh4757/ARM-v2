import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import FounderCard from './FounderCard';
import ContactForm from './ContactForm';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:hello@armtechnologies.ltd', label: 'Email' },
];

export default function AboutContact() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20">
          <div className="lg:col-span-2">
            <FounderCard />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <p className="text-base text-text-muted leading-relaxed mb-8">
              I build AI products and cloud infrastructure at A.R.M Technologies from Bournemouth, UK. My focus: connecting AI models to real business systems using MCP servers, shipping production software on AWS, and automating operations for hotels and hospitality businesses.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="text-text-dim hover:text-cyan-accent transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div id="contact" className="pt-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-mono text-3xl font-bold text-white mb-2">Let's build.</h3>
            <p className="text-sm text-text-dim mb-8">
              AI products, business automation, intelligent systems.
            </p>

            <ContactForm />

            <p className="mt-6 text-sm text-text-dim">
              Or email directly:{' '}
              <a href="mailto:hello@armtechnologies.ltd" className="text-cyan-accent hover:underline">
                hello@armtechnologies.ltd
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
