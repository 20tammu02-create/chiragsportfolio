import { useRef } from 'react';
import { useScroll } from 'framer-motion';
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle';
import AnimatedLetter from './AnimatedLetter';

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const bodyText =
    "Over the last three years, I have worked across brand strategy, digital marketing, and media research — crafting campaigns that connect cultural truth to commercial impact. From Google-certified ad work to conference coordination in Mexico City and multilingual campaign execution in Toronto, I build ideas that travel.";

  return (
    <section id="about" className="bg-black py-24 px-4 md:px-10">
      <div className="bg-[#101010] rounded-2xl md:rounded-3xl py-16 px-6 md:px-14 max-w-6xl mx-auto text-center">
        {/* Label */}
        <p className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8">
          Creative Strategy
        </p>

        {/* Main heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10">
          <WordsPullUpMultiStyle
            segments={[
              { text: "I'm Chirag Sharma,", className: 'font-normal' },
              { text: ' a self-taught strategist.', className: 'font-serif italic' },
              { text: ' I find the insight hiding in plain sight.', className: 'font-normal' },
            ]}
          />
        </h2>

        {/* Animated body text */}
        <p
          ref={sectionRef}
          className="text-xs sm:text-sm md:text-base max-w-2xl mx-auto"
          style={{ color: '#DEDBC8', lineHeight: 1.8 }}
        >
          {bodyText.split('').map((char, i) => (
            <AnimatedLetter
              key={i}
              char={char}
              scrollProgress={scrollYProgress}
              index={i}
              total={bodyText.length}
            />
          ))}
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px mt-14 border border-white/10 rounded-xl overflow-hidden">
          {[
            { num: '3+', label: 'Years experience' },
            { num: '40%', label: 'Engagement lift via A/B testing' },
            { num: '3', label: 'Google certifications' },
            { num: '3', label: 'Languages spoken' },
          ].map(({ num, label }) => (
            <div key={label} className="bg-[#181818] px-6 py-8 flex flex-col items-center gap-2">
              <span className="text-4xl md:text-5xl font-bold text-primary">{num}</span>
              <span className="text-[10px] text-primary/50 uppercase tracking-widest text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
