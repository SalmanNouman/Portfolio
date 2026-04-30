import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-10 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center bg-accent/5 p-6 sm:p-12 md:p-24 rounded-3xl"
      >
        <h2 className="text-sm font-medium uppercase tracking-[0.2em] mb-4 text-muted-foreground">
          Get in touch
        </h2>
        <h3 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mb-8">
          Let's <span className="italic text-muted-foreground">build</span> something <br className="hidden md:block"/> incredible.
        </h3>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <a 
            href="mailto:salmannouman510@gmail.com" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:scale-105 transition-transform"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a 
            href="tel:+15192499786" 
            className="flex items-center justify-center gap-3 px-8 py-4 border border-foreground/20 rounded-full font-medium hover:bg-foreground/5 transition-colors"
          >
            <Phone size={20} />
            Call Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
