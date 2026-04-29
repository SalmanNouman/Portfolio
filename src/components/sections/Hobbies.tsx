import { motion } from 'framer-motion';
import { BrainCircuit, Cuboid, Dumbbell, Code2 } from 'lucide-react';

export default function Hobbies() {
  const hobbies = [
    { name: "Generative AI Research", desc: "Exploring LLMs, LangGraph agents, and multimodal systems.", icon: BrainCircuit },
    { name: "3D Rendering & Game Dev", desc: "Building interactive experiences with Three.js and Unity.", icon: Cuboid },
    { name: "Fitness & Athletics", desc: "Maintaining athletic rigor and continuous self-improvement.", icon: Dumbbell },
    { name: "Open Source Contribution", desc: "Collaborating on civic tech and immigration tools.", icon: Code2 }
  ];

  return (
    <section id="hobbies" className="py-24 px-6 md:px-10 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] mb-8 text-muted-foreground">
            Hobbies & Interests
          </h2>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-12">
            Beyond the <span className="italic text-muted-foreground">code</span>.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hobbies.map((hobby, idx) => (
              <motion.div 
                key={hobby.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 border border-foreground/10 rounded-2xl bg-accent/5 hover:bg-accent/10 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 text-foreground">
                    <hobby.icon size={24} />
                  </div>
                  <h4 className="font-display text-xl">{hobby.name}</h4>
                </div>
                <p className="text-foreground/70 font-light text-lg">{hobby.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
