import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const spring = { type: 'spring', stiffness: 110, damping: 18 };

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const formUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfSZM_wi3oEt5UPmaJ8NQ4kfhRJtKJ5xQUG5Crg3q02ZwVuNg/viewform?usp=header';

  // Smooth scroll function
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0D0B27] to-[#1B1A40]"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-extrabold text-[#C4B5FD] tracking-wide select-none"
          >
            🥋 Legacy TKD
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <NavLink href="#features" scrollFn={scrollToSection}>Why Us</NavLink>
            <NavLink href="#key-info" scrollFn={scrollToSection}>Programs</NavLink>
            <NavLink href="#gallery" scrollFn={scrollToSection}>Gallery</NavLink>

            {/* Apply Now Button */}
            <a
              href={formUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Apply Now"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 0 8px 3px rgba(124, 58, 237, 0.4)',
                  background:
                    'linear-gradient(90deg, #7C3AED, #A78BFA, #C4B5FD)',
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                className="px-7 py-2 bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#C4B5FD] text-white font-bold rounded-full tracking-wide"
              >
                Apply Now
              </motion.button>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`w-6 h-0.5 bg-[#C4B5FD] mb-1.5 rounded-sm ${
                  i === 2 ? 'mb-0' : ''
                }`}
                whileHover={{ scaleX: 1.2 }}
                transition={{ duration: 0.3 }}
                style={{ originX: 0 }}
              />
            ))}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gradient-to-b from-[#0D0B27] to-[#1B1A40] rounded-lg p-6 mt-3"
            >
              <MobileNavLink
                href="#features"
                onClick={() => setIsOpen(false)}
                scrollFn={scrollToSection}
              >
                Why Us
              </MobileNavLink>
              <MobileNavLink
                href="#key-info"
                onClick={() => setIsOpen(false)}
                scrollFn={scrollToSection}
              >
                Programs
              </MobileNavLink>
              <MobileNavLink
                href="#gallery"
                onClick={() => setIsOpen(false)}
                scrollFn={scrollToSection}
              >
                Gallery
              </MobileNavLink>

              {/* Apply Now Button */}
              <a
                href={formUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Apply Now"
              >
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 bg-gradient-to-r from-[#7C3AED] via-[#A78BFA] to-[#C4B5FD] text-white font-bold px-6 py-3 rounded-full tracking-wide"
                >
                  Apply Now
                </motion.button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Desktop NavLink
function NavLink({ href, children, scrollFn }: { href: string; children: React.ReactNode; scrollFn: (href: string) => void }) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    scrollFn(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative text-[#C4B5FD] font-semibold hover:text-white transition-colors duration-300 select-none"
    >
      {children}
      <span className="block h-0.5 w-0 bg-[#C4B5FD] transition-all duration-300 hover:w-full rounded" />
    </a>
  );
}

// Mobile NavLink with delayed scroll
function MobileNavLink({
  href,
  onClick,
  children,
  scrollFn,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  scrollFn: (href: string) => void;
}) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    onClick(); // Close menu first

    // Delay scroll until after menu collapse
    setTimeout(() => {
      scrollFn(href);
    }, 300); // Match menu exit animation
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="block py-3 text-[#C4B5FD] font-semibold hover:text-white transition-colors duration-300 select-none"
    >
      {children}
    </a>
  );
}
