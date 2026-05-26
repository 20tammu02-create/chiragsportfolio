import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const links = [
    { label: 'Email', value: 'chirag@email.com', href: 'mailto:chirag@email.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/chirag', href: 'https://linkedin.com' },
    { label: 'Instagram', value: '@chirag.creative', href: 'https://instagram.com' },
  ];

  return (
    <section id="contact" className="bg-black py-24 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            <WordsPullUpMultiStyle
              segments={[
                { text: "Got a brief?", className: 'text-primary' },
                { text: " Let's make something worth talking about.", className: 'text-gray-500' },
              ]}
            />
          </h2>
        </div>

        {/* Contact links */}
        <div ref={ref} className="flex flex-col border-t border-white/10 max-w-2xl mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex items-center justify-between py-6 border-b border-white/10 hover:pl-4 transition-all duration-300"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary/40 mb-1">{link.label}</p>
                <p className="text-primary text-sm sm:text-base">{link.value}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary/30 group-hover:text-primary group-hover:-rotate-45 transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-primary/30">
          <span>© 2026 Chirag Sharma</span>
          <span>Creative Strategist · Toronto, ON</span>
          <span>Google Certified · Dean's Honour Roll</span>
        </div>
      </div>
    </section>
  );
}
