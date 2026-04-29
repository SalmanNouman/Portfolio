import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border text-foreground"
    >
      <div className="flex justify-between items-center p-6 md:p-8 max-w-7xl mx-auto">
        <div className="font-display text-2xl tracking-widest uppercase font-semibold">
          S. N. A.
        </div>
        <div className="flex gap-6 text-sm font-medium uppercase tracking-widest hidden md:flex items-center">
          <a href="#projects" className="flex items-center gap-2 hover:underline underline-offset-4 transition-all duration-300">
            Projects
          </a>
          <a href="#experience" className="flex items-center gap-2 hover:underline underline-offset-4 transition-all duration-300">
            Experience
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:underline underline-offset-4 transition-all duration-300">
            Contact
          </a>
        </div>
        <div className="flex gap-6 text-sm uppercase tracking-widest font-medium items-center">
          <a href="https://github.com/SalmanNouman" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline underline-offset-4 transition-all duration-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Github" className="w-4 h-4" />
            Github
          </a>
          <a href="https://linkedin.com/in/salmannouman" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline underline-offset-4 transition-all duration-300">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
