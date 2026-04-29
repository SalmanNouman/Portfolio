import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: "Software Developer (Co-op)",
    company: "VARLab",
    logo: "./assets/VARLab-logo.png",
    period: "Sep 2024 — Aug 2025",
    description: "Engineered production-ready Unity-based 3D Digital Learning Experiences. Rotated across engineering teams to diagnose and resolve legacy bugs, and architected a secure WebGL result-export system for high-fidelity simulation data."
  },
  {
    id: 2,
    role: "Volunteer Tech Assistant",
    company: "Rohingya Centre",
    logo: "./assets/RCC-logo.jpg",
    period: "Dec 2019 — Sep 2024",
    description: "Ensured 100% uptime for community events by pre-emptively troubleshooting AV hardware and networking equipment. Provided multilingual technical assistance, bridging the digital divide for non-technical users."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="md:w-1/3"
        >
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter sticky top-32">
            Work <br />
            <span className="italic font-normal text-muted-foreground">History</span>
          </h2>
        </motion.div>

        <div className="md:w-2/3 flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col border-t border-foreground/20 pt-8"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4 md:items-center">
                <h3 className="font-display text-2xl md:text-4xl">{exp.role}</h3>
                <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img src={exp.logo} alt={`${exp.company} Logo`} className="w-10 h-10 rounded-lg object-contain bg-white" />
                <p className="text-xl uppercase tracking-widest font-medium">
                  {exp.company}
                </p>
              </div>
              <p className="text-foreground/70 leading-relaxed max-w-2xl text-lg md:text-xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
