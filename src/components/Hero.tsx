import { motion } from 'framer-motion';

const spring = { type: 'spring', stiffness: 110, damping: 18 };

const formUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSfSZM_wi3oEt5UPmaJ8NQ4kfhRJtKJ5xQUG5Crg3q02ZwVuNg/viewform?usp=header';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#0D0B27] to-[#1B1A40] px-6 text-center">

      {/* LEFT: Social icons vertical bar */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="hidden md:flex flex-col fixed top-1/2 left-6 -translate-y-1/2 space-y-6 z-20"
        aria-label="Social Media Links"
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/legacy.taekwondo/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-200 transition-colors"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
          </svg>
        </a>
        {/* Facebook */}
        <a
          href="https://www.facebook.com/Legacy-Taekwondo-Academy-61566952840894/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-200 transition-colors"
          aria-label="Facebook"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 5 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.51 1.5-3.89 3.8-3.89 1.1 0 2.25.2 2.25.2v2.48h-1.26c-1.25 0-1.64.77-1.64 1.56v1.85h2.79l-.45 2.89h-2.34v6.99c4.78-.76 8.44-4.88 8.44-9.88z" />
          </svg>
        </a>
        {/* Email */}
        <a
          href="mailto:contact@legacytaekwondo.com"
          className="text-purple-400 hover:text-purple-200 transition-colors"
          aria-label="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
          </svg>
        </a>
      </motion.div>

      {/* RIGHT: Scroll Down indicator */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.4, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="hidden md:flex flex-col fixed top-1/2 right-6 -translate-y-1/2 items-center space-y-3 z-20 text-purple-400"
      >
        <span className="uppercase text-sm tracking-widest drop-shadow-lg select-none">
          Scroll
        </span>
        <motion.div
          className="w-1 h-10 rounded-full bg-purple-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
        </svg>
      </motion.div>

      {/* Background softly glowing radial spotlight */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-[#6B21A8]/40 via-transparent to-transparent opacity-60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      {/* Floating abstract shapes */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 rounded-full bg-purple-700 opacity-20 filter blur-3xl mix-blend-screen animate-blob1"
        style={{ zIndex: 0 }}
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-indigo-700 opacity-25 filter blur-4xl mix-blend-screen animate-blob2"
        style={{ zIndex: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Slogan */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...spring, delay: 0.3 }}
        className="uppercase text-[#C4B5FD] font-semibold text-lg md:text-xl tracking-widest drop-shadow-lg max-w-md mx-auto"
      >
        <motion.p
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
        >
          Train. Take Charge. Transform.
        </motion.p>
      </motion.div>

      {/* Logo container with rotating real logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ...spring, delay: 0.6 }}
        className="relative mt-8 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#4338CA] p-6 shadow-xl"
        style={{ boxShadow: '0 0 30px 10px #7C3AEDAA' }}
      >
        {/* Glowing neon ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-8 border-purple-500/60"
          animate={{
            boxShadow: [
              '0 0 20px 6px #A78BFA, 0 0 40px 20px #A78BFA',
              '0 0 10px 2px #A78BFA, 0 0 20px 10px #A78BFA',
              '0 0 20px 6px #A78BFA, 0 0 40px 20px #A78BFA',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Your rotating logo image */}
        <motion.img
          // src="../../logoo/newLogo.png" // Adjust the path to your logo image
          src="https://res.cloudinary.com/dkj1otfad/image/upload/v1755349516/newLogo_zzio0i.png"
          alt="Legacy Taekwondo Logo"
          className="w-36 h-36 rounded-xl shadow-xl object-contain"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        />
      </motion.div>

      {/* Welcome heading */}
      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ ...spring, delay: 1 }}
        className="mt-12 text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-tight max-w-4xl"
      >
        Welcome to{' '}
        <span className="text-purple-400 underline decoration-purple-600 decoration-4">
          Legacy Taekwondo
        </span>
      </motion.h1>

      {/* CTA Button */}
      <button
        onClick={() => window.open(formUrl, '_blank', 'noopener,noreferrer')}
        className="mt-12 px-12 py-4 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-400 text-white font-bold rounded-full text-xl shadow-lg tracking-wide transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_10px_rgba(167,139,250,0.7),0_0_50px_25px_rgba(196,181,253,0.7)] hover:bg-gradient-to-r hover:from-purple-600 hover:via-purple-400 hover:to-purple-300"
        aria-label="Join Legacy Taekwondo Today"
      >
        Join Today
      </button>

      {/* Blob animation keyframes */}
      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(0, 15px) scale(1.1); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(0, -20px) scale(1.05); }
        }
        .animate-blob1 { animation: blob1 8s infinite ease-in-out; }
        .animate-blob2 { animation: blob2 9s infinite ease-in-out; }
      `}</style>
    </section>
  );
}
