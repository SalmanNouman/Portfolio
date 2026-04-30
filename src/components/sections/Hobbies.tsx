import { motion } from 'framer-motion';
import { Film, Aperture, Dumbbell, BrainCircuit, Terminal, Sparkles } from 'lucide-react';

export default function Hobbies() {
  const hobbies = [
    { name: "Cinematic Videography", desc: "Editing and directing cinematic videos.", icon: Film },
    { name: "Drone Piloting", desc: "Flying drones for fun and aerial videography.", icon: Aperture },
    { name: "Athletics & Fitness", desc: "Playing soccer and going to the gym to keep in shape.", icon: Dumbbell },
    { name: "AI Tinkering", desc: "Experimenting with SOTA LLMs to understand them.", icon: BrainCircuit }
  ];

  const tools = ['Cursor', 'Claude Code', 'Windsurf', 'Devin', 'Codex', 'Gemini CLI'];

  return (
    <section id="hobbies" className="py-16 md:py-32 px-4 md:px-10 bg-background text-foreground border-t border-foreground/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:w-1/2"
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] mb-8 text-muted-foreground">
            Beyond the Code
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 leading-tight">
            Life <span className="italic text-muted-foreground">in motion</span>.
          </h3>
          
          <div className="flex flex-col gap-6">
            {hobbies.map((hobby) => (
              <div 
                key={hobby.name}
                className="group flex items-start gap-6 p-6 border border-foreground/10 rounded-2xl bg-accent/5 hover:bg-foreground hover:text-background transition-all duration-500"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-foreground/5 text-foreground group-hover:bg-background/20 group-hover:text-background transition-colors duration-500 shrink-0">
                  <hobby.icon size={24} />
                </div>
                <div>
                  <h4 className="font-display text-xl mb-1">{hobby.name}</h4>
                  <p className="text-foreground/70 group-hover:text-background/80 font-light transition-colors duration-500">{hobby.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="lg:w-1/2 flex flex-col"
        >
          <div className="h-full bg-secondary text-secondary-foreground rounded-3xl p-8 md:p-12 border border-foreground/5 flex flex-col justify-between relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground text-background text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles size={14} />
                <span>AI Orchestration</span>
              </div>
              
              <h3 className="font-display text-3xl md:text-4xl mb-6 leading-[1.1]">
                Accelerating development with <span className="italic text-muted-foreground">Agentic AI</span>.
              </h3>
              
              <div className="text-lg md:text-xl font-light text-foreground/80 leading-relaxed mb-10 space-y-6">
                <p>
                  I am fascinated by what state-of-the-art LLMs can do. My approach to building systems revolves around using agentic AI to ship faster and architect more ambitious solutions.
                </p>
                <p>
                  I actively seek to improve and hone my AI orchestration skills, exploring how human intent and AI autonomy intersect to redefine modern software engineering.
                </p>
              </div>
            </div>

            <div className="mt-auto">
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-4">Systems and Tools I Use</span>
              <div className="flex flex-wrap gap-2">
                {tools.map(tool => (
                  <span key={tool} className="flex items-center gap-2 px-4 py-2 border border-foreground/20 rounded-full text-sm font-medium bg-background/50 backdrop-blur-sm">
                    <Terminal size={14} className="text-muted-foreground" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
