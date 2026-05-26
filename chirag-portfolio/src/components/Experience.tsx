import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const experience = [
  {
    company: 'Massimo Dutti, Yorkdale',
    role: 'Sales Associate',
    period: 'Jan 2026 – Present',
    bullets: [
      'Generated $40,000+ in revenue through consultative sales and brand storytelling',
      '30% upsell rate on complementary products',
      'Improved customer retention through personalised, tailored recommendations',
    ],
  },
  {
    company: 'Dept. of Comms & Media Studies, York University',
    role: 'Research Assistant — Dr. Anne F. MacLennan',
    period: 'May 2024 – Apr 2026',
    bullets: [
      'Multi-method media analysis across 200+ sources — content analysis, framing, critical discourse',
      'Managed and organised media archives: newspaper, social, radio recordings',
      'Structured podcast content via metadata tagging for improved discoverability',
    ],
  },
  {
    company: 'IEP Bridging Program, York University',
    role: 'Events & Promotions Assistant',
    period: 'Oct 2023 – Apr 2024',
    bullets: [
      'Designed and executed marketing campaigns across social, email, and branding — 40% engagement increase',
      'Coordinated joint events with student organisations and cross-functional teams',
      'Applied A/B testing to optimise messaging and improve conversion outcomes',
    ],
  },
  {
    company: 'Mexico Business Events',
    role: 'Conference Coordinator & Strategy Intern',
    period: 'May – Sep 2023',
    bullets: [
      'Coordinated high-level conferences for C-suite executives — full bilingual (EN/ES) operations',
      'Vetted speakers by evaluating industry influence and thematic alignment',
    ],
  },
];

const certifications = [
  { name: 'Display Ads & Search Ads Certification', issuer: 'Google', date: 'Dec 2025' },
  { name: 'Google Analytics Certificate (GA4)', issuer: 'Google', date: 'Dec 2025' },
  { name: 'Display and Video 360 (DV360)', issuer: 'Google', date: 'Mar 2026' },
];

const skills = [
  'Google Ads Manager', 'GA4', 'DV360', 'Campaign Strategy', 'Copywriting',
  'Adobe Creative Suite', 'Canva', 'Content Strategy', 'Media Planning',
  'A/B Testing', 'Event Coordination', 'Brand Communications', 'WordPress',
  'Data Analysis', 'Client Reporting',
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="bg-black py-24 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Studio-grade experience across strategy,', className: 'text-primary' },
                { text: ' research, and execution.', className: 'text-gray-500' },
              ]}
            />
          </h2>
        </div>

        {/* Experience list */}
        <div className="flex flex-col" ref={ref}>
          {experience.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr_auto] gap-2 md:gap-8 py-8 border-t border-white/10"
            >
              <div>
                <p className="text-[10px] uppercase tracking-widest text-primary/50 mb-1">{exp.period}</p>
                <p className="text-sm text-primary/70">{exp.company}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-primary mb-3">{exp.role}</h3>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map(b => (
                    <li key={b} className="text-sm text-gray-400 leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-primary/40">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Certifications + Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
          {/* Certs */}
          <div className="bg-[#101010] rounded-2xl p-8">
            <p className="text-[10px] uppercase tracking-widest text-primary/50 mb-6">Certifications</p>
            <ul className="flex flex-col gap-4">
              {certifications.map(cert => (
                <li key={cert.name} className="flex justify-between items-start gap-4 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <span className="text-sm text-primary leading-snug">{cert.name}</span>
                  <span className="text-[10px] text-primary/40 uppercase tracking-wide shrink-0">{cert.issuer} · {cert.date}</span>
                </li>
              ))}
              <li className="pb-0">
                <span className="text-sm text-primary">Hons. Bachelor's — Communications & Media Studies</span>
                <p className="text-[10px] text-primary/40 uppercase tracking-wide mt-1">York University · GPA 7.3 · Dean's Honour Roll</p>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-[#101010] rounded-2xl p-8">
            <p className="text-[10px] uppercase tracking-widest text-primary/50 mb-6">Tools & Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="text-[10px] uppercase tracking-wider px-3 py-1.5 border border-primary/20 text-primary/60 rounded-full hover:border-primary/60 hover:text-primary transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-6 pt-5 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-primary/50 mb-3">Languages</p>
              <div className="flex gap-3 flex-wrap">
                {['English (Fluent)', 'Hindi (Fluent)', 'Spanish (Advanced)', 'French (Intermediate)'].map(lang => (
                  <span key={lang} className="text-xs text-primary/70">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
