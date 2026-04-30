import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import Scene3D from '../3d/3DScene';

const TYPEWRITER_LINES = [
  "Building secure, scalable autonomous systems that drive business value and performance.",
  "Engineering production-grade web applications with modern frameworks and robust backends.",
  "Orchestrating agentic AI workflows to solve complex problems and automate repetitive tasks.",
  "Architecting resilient cloud infrastructures for high-availability distributed platforms.",
  "Developing high-fidelity 3D digital experiences leveraging cutting-edge web technologies.",
  "Tinkering with state-of-the-art LLMs to integrate advanced intelligence into modern apps.",
  "Writing clean, maintainable, and highly optimized code for critical enterprise systems.",
  "Bridging the gap between complex backend logic and intuitive, aesthetic user interfaces."
];

const Typewriter = ({ lines }: { lines: string[] }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const currentFullText = lines[currentLineIndex];

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentLineIndex((prev) => (prev + 1) % lines.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        }, 20);
      }
    } else {
      if (currentText === currentFullText) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      } else {
        timer = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        }, 40);
      }
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentLineIndex, lines]);

  return (
    <>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        className="inline-block w-[0.45em] h-[0.9em] bg-foreground ml-1 translate-y-[0.15em]"
      />
    </>
  );
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex flex-col justify-center pt-20 pb-8 px-4 md:px-10 overflow-hidden"
    >
      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full h-full max-w-7xl mx-auto gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-4 text-muted-foreground">
              Software Engineer Graduate & AI Enthusiast
            </h2>
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.9] tracking-normal uppercase mb-6 md:mb-8">
              Salman <br />
              <span className="italic font-normal">Nouman</span> <br />
              Abulqasim
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="max-w-md"
          >
            <p className="text-lg md:text-xl leading-relaxed text-foreground/80 font-sans font-light min-h-[4rem]">
              <Typewriter lines={TYPEWRITER_LINES} />
            </p>
          </motion.div>
        </div>

        {/* Canvas */}
        <div className="w-full lg:w-1/2 h-[30vh] sm:h-[35vh] lg:h-[70vh] flex items-center justify-center relative pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#d4af37" />
            <Environment preset="city" />
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
              <Scene3D />
            </Float>
          </Canvas>
        </div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center p-4 border border-foreground/30 rounded-full"
      >
        <ArrowDown strokeWidth={1} size={24} className="text-foreground/70" />
      </motion.div>

      {/* gradient blur */}
      <div className="absolute top-1/4 right-0 w-[40vw] h-[60vh] bg-accent/5 z-0 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
