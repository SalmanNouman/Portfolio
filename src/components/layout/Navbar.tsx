import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  {
    href: 'https://github.com/SalmanNouman',
    label: 'Github',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
  },
  {
    href: 'https://linkedin.com/in/salmannouman',
    label: 'LinkedIn',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg',
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border text-foreground"
    >
      <div className="flex justify-between items-center px-4 py-4 md:p-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-display text-2xl tracking-widest uppercase font-semibold">
          S. N. A.
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-widest items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 hover:underline underline-offset-4 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop social links */}
        <div className="hidden md:flex gap-6 text-sm uppercase tracking-widest font-medium items-center">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:underline underline-offset-4 transition-all duration-300"
            >
              <img src={link.icon} alt={link.label} className="w-4 h-4" />
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2 -mr-2"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border"
          >
            <div className="flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium uppercase tracking-widest hover:underline underline-offset-4 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t border-border pt-4 mt-2 flex gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium hover:underline underline-offset-4 transition-all duration-300"
                  >
                    <img src={link.icon} alt={link.label} className="w-4 h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
