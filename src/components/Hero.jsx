import React from 'react';
import Spline from '@splinetool/react-spline';
import { Download, ExternalLink, Check, User } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlay to improve text contrast without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/50 to-slate-950/80" />

      <div className="relative z-10 container mx-auto px-6 py-24 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur">
          <User className="h-4 w-4 text-cyan-300" />
          <span className="font-medium tracking-wide">Lohit Satya Sai Kuntamukkala</span>
        </div>

        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight text-white">
          Flutter Developer
          <span className="mx-2 text-cyan-300">|</span>
          <span className="text-cyan-300">2+ Years of Experience</span>
        </h1>

        <ul className="mt-6 space-y-2 text-slate-200 max-w-3xl mx-auto text-base md:text-lg">
          <li className="flex items-start justify-center gap-2">
            <Check className="mt-1 h-5 w-5 text-cyan-300" />
            <span>Flutter Developer with 2+ years of hands-on experience building scalable cross-platform mobile applications for hospitality and service industries.</span>
          </li>
          <li className="flex items-start justify-center gap-2">
            <Check className="mt-1 h-5 w-5 text-cyan-300" />
            <span>Skilled in SaaS-based apps, third-party SDKs (Stripe, Firebase), and native Android code.</span>
          </li>
          <li className="flex items-start justify-center gap-2">
            <Check className="mt-1 h-5 w-5 text-cyan-300" />
            <span>Proven track record delivering performance improvements and great UX across Android, iOS, Windows, and custom Android (Stripe S700).</span>
          </li>
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 text-slate-900 px-6 py-3 font-semibold shadow-lg shadow-cyan-400/25 hover:bg-cyan-300 transition">
            View Projects
            <ExternalLink className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
            <Download className="h-4 w-4" />
            Download Resume / Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
