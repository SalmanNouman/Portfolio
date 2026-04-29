import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-10 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-5/12 aspect-[3/4] relative overflow-hidden"
        >
          <img 
            src="./assets/Salman-pfp.jpeg" 
            alt="Salman Nouman Abulqasim Profile Placeholder" 
            className="object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 border border-foreground/10 m-4 pointer-events-none" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full lg:w-7/12 flex flex-col justify-center"
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] mb-8 text-muted-foreground">
            About Me
          </h2>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-10">
            I engineer <span className="font-bold text-muted-foreground">lasting change</span> through <span className="italic text-muted-foreground">technology</span>.
          </h3>
          
          <div className="flex flex-col gap-6 text-lg md:text-xl text-foreground/80 leading-relaxed font-sans font-light">
            <p>
              I am a driven Software Engineer with a proven track record of delivering production-grade applications across the full software lifecycle. I specialize in C-family languages, full-stack development, and AI orchestration, bridging the gap between cutting-edge autonomous systems and secure, scalable architecture.
            </p>
            <p>
              With over 1,260 hours of professional co-op experience, I have navigated complex codebases, mentored junior developers during intense sprint cycles, and engineered high-fidelity 3D and web solutions. My technical philosophy centers on continuous learning, athletic rigor, and building human-centric software that makes a tangible impact.
            </p>
          </div>

          <div className="mt-12 flex gap-8 border-t border-foreground/20 pt-8">
            <div>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Location</span>
              <span className="font-display text-xl">Kitchener, ON</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Status</span>
              <span className="font-display text-xl">Available for Work</span>
            </div>
          </div>

          <div className="mt-12 border-t border-foreground/20 pt-8">
            <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-6">Technical Expertise</span>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'HTML', 'CSS', 'Terraform', 'C++', 'C', 'C#', 'Unity', 'TypeScript', 'JavaScript', 'Kotlin', 'Java', 'SQL', 'PostgreSQL', 'Azure', 'AWS', 'LangGraph', 'LangChain', 'Electron', 'Node.js', 'Python', 'TensorFlow', 'Docker', 'Git'].map((skill) => {
                const getIconName = (s: string) => {
                  const map: Record<string, string> = {
                    'C++': 'cplusplus', 'C#': 'csharp', 'Node.js': 'nodejs', 'HTML': 'html5', 'CSS': 'css3', 'Tailwind': 'tailwindcss', 'AWS': 'amazonwebservices', 'SQL': 'sqldeveloper'
                  };
                  return map[s] || s.toLowerCase();
                };
                const iconName = getIconName(skill);
                return (
                  <span key={skill} className="flex items-center gap-2 px-3 py-1 border border-foreground/20 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors duration-300">
                    <img 
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconName}/${iconName}-original.svg`} 
                      alt={skill} 
                      className="w-4 h-4" 
                      onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                    />
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
