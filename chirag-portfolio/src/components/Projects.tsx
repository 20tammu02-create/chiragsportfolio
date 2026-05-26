import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';

const projects = [
  {
    brand: 'Duolingo',
    title: 'The Guilt Trip Postcard',
    description:
      'A physical postcard from the owl, mailed after 7 days of a broken streak. Slightly threatening. Opt-in at signup. Zero product change. Physical mail in 2026 is so unexpected it goes viral every time.',
    tags: ['Direct Mail', 'Earned Media', 'Brand Voice'],
    bullets: [
      'Customer win-back at scale',
      'Opt-in at sign-up — zero forced spend',
      'Real-life impact: drives re-engagement',
      'Deepens Duo\'s cultural character',
    ],
    why: "Uses Duolingo's existing brand voice and a joke that already exists online. Making it physical is the twist that makes it viral.",
  },
  {
    brand: "Domino's",
    title: 'The Apology Pizza',
    description:
      '"Sorry flowers" exist. "Sorry chocolates" exist. "Sorry pizza" doesn\'t — yet. A special red box, a note card, and an "I\'m sorry" toggle in the app. No new product. Just a new emotional category.',
    tags: ['Emotional Branding', 'Product Occasion', 'Viral Potential'],
    bullets: [
      'Special red "Apology Box" packaging',
      'Personalised note card included',
      '"I\'m Sorry" toggle in the Domino\'s app',
      'Drives orders at non-peak times',
    ],
    why: 'No new product. Just a red box, a note card, and a toggle. But it creates an emotional category no other food brand owns.',
  },
  {
    brand: 'Marriott',
    title: 'The Unmade Bed Campaign',
    description:
      'One of the most Googled questions after hotel check-in: "Do I have to make the bed?" Marriott issues an official declaration — guests are legally forbidden from making their own beds.',
    tags: ['Integrated Campaign', 'Earned Media', 'OOH'],
    bullets: [
      'Official press release + billboards',
      'Social campaign: #StopMakingTheBed',
      '$0 product cost — earned media only',
      'Reframes housekeeping staff as heroes',
    ],
    why: 'Funny, human, easy to execute. Earns massive press, goes viral on social. Tagline: "You\'re a guest. Act like one."',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#212121] rounded-2xl p-6 md:p-8 flex flex-col gap-5"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-primary/50 mb-1">
            0{index + 1} — {project.brand}
          </p>
          <h3 className="text-xl md:text-2xl font-medium text-primary leading-tight">
            {project.title}
          </h3>
        </div>
        <a
          href="#contact"
          className="shrink-0 w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
        >
          <ArrowRight className="w-4 h-4 text-primary group-hover:text-black -rotate-45 transition-colors" />
        </a>
      </div>

      {/* Description */}
      <p className="text-primary/60 text-sm leading-relaxed">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider px-3 py-1 border border-primary/20 text-primary/50 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Checklist */}
      <ul className="flex flex-col gap-2 pt-2 border-t border-white/5">
        {project.bullets.map(b => (
          <li key={b} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span className="text-sm text-gray-400">{b}</span>
          </li>
        ))}
      </ul>

      {/* Why it works */}
      <div className="bg-black/30 rounded-xl p-4 mt-auto">
        <p className="text-[10px] uppercase tracking-widest text-primary/40 mb-1">Why it works</p>
        <p className="text-xs text-primary/70 leading-relaxed">{project.why}</p>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-black py-24 px-4 md:px-10 relative overflow-hidden">
      {/* Noise bg */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Campaign concepts built on cultural truth.', className: 'text-primary' },
              { text: ' Ideas that already existed — I just made them real.', className: 'text-gray-500' },
            ]}
          />
        </h2>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
