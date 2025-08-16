import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TOTAL_IMAGES = 20; // max images you might add
const spring = { type: 'spring', stiffness: 110, damping: 18 };

export default function Gallery() {
  const [loadedImages, setLoadedImages] = useState<{ src: string; alt: string }[]>([]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const imagePromises = [];
    for (let i = 1; i <= TOTAL_IMAGES; i++) {
      const src = `/Images/${i}.png`;
      const img = new Image();
      const promise = new Promise<{ src: string; alt: string }>((resolve, reject) => {
        img.onload = () => resolve({ src, alt: 'Legacy Taekwondo Moments' });
        img.onerror = () => reject();
      });
      img.src = src;
      imagePromises.push(promise);
    }

    Promise.allSettled(imagePromises).then(results => {
      const valid = results
        .filter(r => r.status === 'fulfilled')
        .map(r => (r as PromiseFulfilledResult<{ src: string; alt: string }>).value);
      setLoadedImages(valid);
    });
  }, []);

  return (
    <section
      id="gallery"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D0B27] to-[#1B1A40] px-6 py-20 text-center scroll-smooth"
    >
      {/* Background Spotlight */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#6B21A8]/40 via-transparent to-transparent opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        aria-hidden="true"
      />

      {/* Floating Blobs */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-700 opacity-20 filter blur-3xl mix-blend-screen animate-blob1"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-indigo-700 opacity-25 filter blur-4xl mix-blend-screen animate-blob2"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ ...spring, delay: 0.2 }}
        className="text-4xl font-bold mb-12 text-[#F4C430] drop-shadow-lg max-w-lg mx-auto"
      >
        Life at Legacy Taekwondo
      </motion.h2>

      {/* Images Grid */}
      <motion.div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl w-full z-10"
      >
        {loadedImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.1, ...spring }}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500 rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
              <p className="absolute bottom-4 left-4 text-[#F4C430] text-sm font-semibold drop-shadow-lg">
                {image.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Blob Keyframes */}
      <style>{`
        @keyframes blob1 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(0,15px) scale(1.1); }
        }
        @keyframes blob2 {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(0,-20px) scale(1.15); }
        }
        .animate-blob1 { animation: blob1 8s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 9s ease-in-out infinite; }
      `}</style>

      {/* Simple Footer */}
      <p className="mt-12 text-sm text-[#F4C430]/80 drop-shadow-md">
        © {new Date().getFullYear()} Legacy Taekwondo. All rights reserved.
      </p>
    </section>
  );
}
