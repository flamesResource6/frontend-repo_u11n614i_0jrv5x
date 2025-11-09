import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      {/* Simple top navigation */}
      <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur border-b border-white/10">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="font-semibold tracking-wide text-white">Lohit Kuntamukkala</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} Lohit Satya Sai Kuntamukkala • Flutter Developer
        </p>
      </footer>
    </div>
  );
}

export default App;
