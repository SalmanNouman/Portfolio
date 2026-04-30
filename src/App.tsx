import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Hobbies from './components/sections/Hobbies'
import Contact from './components/sections/Contact'

function App() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Hobbies />
        <Contact />
      </main>
      <footer className="py-12 md:py-20 px-4 md:px-10 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
        <div className="font-display text-2xl uppercase tracking-widest font-semibold">
          S. N. A.
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="https://github.com/SalmanNouman" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">Github</a>
          <a href="https://linkedin.com/in/salmannouman" target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">LinkedIn</a>
          <a href="mailto:salmannouman510@gmail.com" className="hover:underline underline-offset-4">Email</a>
        </div>
        <div className="text-xs text-muted-foreground uppercase tracking-widest">
          © 2026 All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
