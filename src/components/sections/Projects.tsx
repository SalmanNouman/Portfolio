import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Augi",
    category: "AR and AI",
    year: "2026",
    image: "./assets/augi.png",
    link: "https://github.com/IndecisiveJester"
  },
  {
    id: 2,
    title: "Settlement-Navigator",
    category: "Civic and Immigration",
    year: "2025",
    image: "./assets/Settlement-Navigator.png",
    link: "https://github.com/SalmanNouman/Settlement-Navigator"
  },
  {
    id: 3,
    title: "VerbOS",
    category: "Agentic Desktop Application",
    year: "2025",
    image: "./assets/verbos.png",
    link: "https://github.com/SalmanNouman/VerbOS"
  },
  {
    id: 4,
    title: "Rohingya Language Training Pipeline",
    category: "Machine Learning",
    year: "2024",
    image: "./assets/Rohingya.png",
    link: "https://github.com/SalmanNouman/rohingya-translator"
  }
];

export default function Projects() {
  // Define dynamic bento spans for 4 items
  const getBentoStyle = (index: number) => {
    switch(index) {
      case 0: return 'md:col-span-7 min-h-[400px] md:min-h-[500px]';
      case 1: return 'md:col-span-5 min-h-[400px] md:min-h-[500px]';
      case 2: return 'md:col-span-5 min-h-[400px] md:min-h-[500px]';
      case 3: return 'md:col-span-7 min-h-[400px] md:min-h-[500px]';
      default: return 'md:col-span-12 min-h-[400px]';
    }
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-10 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-end border-b border-background/20 pb-8 mb-16"
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter">
            Selected <span className="italic font-normal">Works</span>
          </h2>
          <span className="text-sm uppercase tracking-widest hidden md:block">
            2024 — 2026
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden flex flex-col bg-foreground border border-background/10 p-6 md:p-8 ${getBentoStyle(index)}`}
            >
              {/* Background Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40 group-hover:opacity-80 group-hover:scale-105"
              />
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/40 to-transparent opacity-80 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-medium uppercase tracking-widest px-4 py-2 bg-background/10 backdrop-blur-md text-background border border-background/20 rounded-full">
                    {project.year}
                  </span>
                  <div className="bg-background/10 p-3 rounded-full backdrop-blur-md text-background border border-background/20 group-hover:bg-background group-hover:text-foreground transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    <ArrowUpRight size={20} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div className="mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-3xl md:text-5xl mb-3 text-background">{project.title}</h3>
                  <p className="text-background/70 uppercase tracking-widest text-xs md:text-sm font-medium">{project.category}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
