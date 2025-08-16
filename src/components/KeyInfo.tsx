import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const trainingPrograms = [
  { name: 'Beginner Classes', description: 'Start your journey with fun, engaging lessons. Perfect for first-timers of all ages.' },
  { name: 'Advanced Sparring', description: 'Step up your game with high-intensity sessions for belt tests and competitions.' },
  { name: 'Self-Defense Training', description: 'Learn practical skills to stay safe, confident, and in control.' },
];

const features = [
  { name: 'Fitness & Conditioning', description: 'Build strength, endurance, and agility with dynamic workouts.' },
  { name: 'Belt Promotion Tests', description: 'Structured grading ensures you grow, step by step.' },
  { name: 'National Tournament Prep', description: 'Expert coaching to prepare champions for big stages.' },
];

const joinSteps = [
  { step: '1', title: 'Book a Free Trial', description: 'Quick sign-up to experience your first class.' },
  { step: '2', title: 'Attend Orientation', description: 'Meet instructors, try moves, get guidance.' },
  { step: '3', title: 'Complete Registration', description: 'Choose your plan and officially join.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

const particles = Array.from({ length: 15 }).map((_) => ({
  size: Math.random() * 60 + 20,
  left: Math.random() * 100 + '%',
  delay: Math.random() * 5,
  duration: Math.random() * 30 + 20,
  color: `rgba(${Math.floor(100 + Math.random() * 155)}, ${Math.floor(50 + Math.random() * 155)}, 255, ${Math.random() * 0.15 + 0.05})`,
}));

export default function KeyInfo() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-b from-[#0D0B27] to-[#1B1A40] overflow-hidden" id="key-info">
      {/* Animated Particle Background */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: '-80px',
            backgroundColor: p.color,
            filter: 'blur(15px)',
            boxShadow: `0 0 ${p.size / 2}px ${p.color}`,
          }}
          animate={{
            y: ['0%', '-120vh'],
            x: ['0%', '5%', '-5%', '0%'],
            opacity: [0, 0.6, 0.6, 0],
            scale: [0.8, 1.1, 0.95, 1],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* === Our Programs === */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mb-20">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D7263D] to-[#F4C430] drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Train. Grow. Conquer.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {trainingPrograms.map((program, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: 1, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
                className="bg-[#1B1A40]/90 rounded-3xl p-8 border border-[#7C3AED]/30 shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#C4B5FD] drop-shadow-md">{program.name}</h3>
                <p className="text-[#DDD6FE]/90">{program.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === What You’ll Gain === */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'} className="mb-20">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#C4B5FD] drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Beyond Skills. Real Transformation.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
                whileHover={{ scale: 1.05, rotate: -1, boxShadow: '0 0 50px rgba(196,181,253,0.5)' }}
                className="bg-[#1B1A40]/90 rounded-3xl p-8 border border-[#7C3AED]/30 shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-3 text-[#C4B5FD] drop-shadow-md">{feature.name}</h3>
                <p className="text-[#DDD6FE]/90">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* === How to Join === */}
        <motion.div initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-14 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#D7263D] to-[#F4C430] drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Your Journey Starts Here
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {joinSteps.map((step, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,200,50,0.4)' }}
                className="relative bg-[#1B1A40]/90 rounded-3xl p-8 border border-[#7C3AED]/30 shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-transform duration-300"
              >
                <div className="absolute -top-5 left-5 w-12 h-12 bg-gradient-to-r from-[#D7263D] to-[#F4C430] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg animate-pulse">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 mt-4 text-[#C4B5FD] drop-shadow-md">{step.title}</h3>
                <p className="text-[#DDD6FE]/90">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button + Contact Info */}
          <div className="text-center mt-16 space-y-4">
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 25px 10px #D7263D, 0 0 40px 20px #F4C430',
                background: 'linear-gradient(90deg, #D7263D, #F4C430)',
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#D7263D] to-[#F4C430] text-white px-12 py-4 rounded-full text-lg font-bold shadow-lg tracking-wide"
            >
              Book Free Trial
            </motion.button>

            {/* Contact Info */}
            <div className="text-[#DDD6FE]/90 text-lg">
              <p>Reach us directly:</p>
              <p>📞 <a href="tel:+918927947997" className="underline hover:text-[#F4C430]">+91 89279 47997</a></p>
              <p>📧 <a href="mailto:legacytaekwondoa@gmail.com" className="underline hover:text-[#F4C430]">legacytaekwondoa@gmail.com</a></p>
            </div>

            {/* Optional Form Link */}
            <p className="text-[#C4B5FD]/80">
              Or <a href="#join-form" className="underline hover:text-[#F4C430]">submit your details</a> and we’ll get back to you!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
