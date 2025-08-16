import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    title: 'Professional Training',
    description: 'Structured Taekwondo programs designed for all age groups and skill levels.',
    icon: '🥋',
  },
  {
    title: 'Certified Instructors',
    description: 'Led by black belt instructors with national and international certifications.',
    icon: '🏅',
  },
  {
    title: 'Focus & Discipline',
    description: 'Builds confidence, mental strength, and lifelong discipline through martial arts.',
    icon: '🧠',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

// Bubble particles data with randomized sizes and positions
const bubbles = [
  { left: '15%', size: 40, delay: 0, duration: 20, color: 'rgba(247, 202, 24, 0.15)' },   // gold translucent
  { left: '40%', size: 60, delay: 5, duration: 25, color: 'rgba(124, 58, 237, 0.12)' },   // purple translucent
  { left: '65%', size: 30, delay: 2, duration: 22, color: 'rgba(247, 202, 24, 0.1)' },
  { left: '80%', size: 50, delay: 7, duration: 28, color: 'rgba(124, 58, 237, 0.1)' },
  { left: '25%', size: 35, delay: 4, duration: 24, color: 'rgba(247, 202, 24, 0.12)' },
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-b from-[#0D0B27] to-[#1B1A40] overflow-hidden"
      id="features"
    >
      {/* Bubble background */}
      {bubbles.map(({ left, size, delay, duration, color }, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            bottom: '-80px', // start just below viewport
            left,
            width: size,
            height: size,
            backgroundColor: color,
            filter: 'blur(20px)',
            boxShadow: `0 0 ${size / 2}px ${color}`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: ['0%', '-120vh'], // float upwards well beyond viewport
            x: [
              '0%',
              (Math.random() * 20 - 10) + '%', // random horizontal sway +/-10%
              '0%',
            ],
            opacity: [0, 0.6, 0], // fade in then out
            scale: [0.8, 1.1, 0.8], // gentle scale pulse
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'loop',
          }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#F4C430] mb-14 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="bg-[#1B1A40] rounded-3xl p-8 border border-[#7C3AED]/40
                         shadow-[0_0_15px_rgba(124,58,237,0.4)]
                         hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] transition-shadow duration-300"
            >
              <motion.div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6
                           bg-[#7C3AED] shadow-[0_0_25px_6px_rgba(124,58,237,0.7)]"
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className="text-5xl text-[#F4C430]">{feature.icon}</span>
              </motion.div>

              <h3 className="text-2xl font-semibold mb-3 text-[#F4C430] text-center drop-shadow-lg">
                {feature.title}
              </h3>
              <p className="text-[#DDD6FE] text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
