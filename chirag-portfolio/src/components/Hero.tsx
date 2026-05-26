import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import WordsPullUp from './WordsPullUp';

export default function Hero() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="h-screen p-4 md:p-6 relative">
      <div className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none z-10" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />

        {/* Navbar */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <nav className="flex gap-3 sm:gap-6 md:gap-12 lg:gap-14 items-center">
              {['About', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200"
                  style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E1E0CC')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(225, 224, 204, 0.8)')}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-20 grid grid-cols-12 items-end p-6 md:p-10 pb-8 md:pb-12">
          {/* Name */}
          <div className="col-span-12 lg:col-span-8">
            <h1
              className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
              style={{ color: '#E1E0CC' }}
            >
              <WordsPullUp text="Chirag" showAsterisk={false} delay={0.2} />
            </h1>
          </div>

          {/* Right column */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-5 pb-2 lg:pb-4 lg:pl-4">
            <motion.p
              className="text-primary/70 text-xs sm:text-sm md:text-base"
              style={{ lineHeight: 1.2 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
            >
              Creative strategist and communications graduate. I find the cultural insight hiding in plain sight — and build campaigns people can't stop sharing.
            </motion.p>

            <motion.a
              href="#projects"
              className="group flex items-center gap-2 bg-primary rounded-full w-fit pl-5 pr-1 py-1 font-medium text-sm sm:text-base text-black transition-all duration-300 hover:gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease }}
            >
              View my work
              <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="w-4 h-4 text-primary" />
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
