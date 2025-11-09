import React from 'react';
import { ExternalLink, Code, Radio, Smartphone } from 'lucide-react';

const ProjectCard = ({ title, description, bullets, tech, label }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 transition hover:shadow-xl hover:shadow-cyan-500/10">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent opacity-0 blur-xl transition group-hover:opacity-100" />
    <div className="relative z-10">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
        {label}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-slate-300">{description}</p>
      <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-200">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-200 ring-1 ring-white/10">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5">
        <a href="#contact" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
          <ExternalLink className="h-4 w-4" /> Discuss / Demo
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center gap-2 text-cyan-300">
          <Code className="h-5 w-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            label="Flagship"
            title="Grafterr POS System"
            description="A full-featured Point of Sale system built for the hospitality industry."
            bullets={[
              'Engineered modules for menu, orders, and payments (Stripe).',
              'Implemented multi-type printing (Bluetooth, LAN, USB).',
              'Delivered offline-first UX with real-time sync.',
            ]}
            tech={["Flutter 3", "BLoC", "Provider", "Hive", "Firebase", "REST API", "Android (Java)"]}
          />

          <ProjectCard
            label="Payments"
            title="Grafterr GO! Payment App"
            description="Maintained and modernized a high-availability payment application for hospitality apps."
            bullets={[
              'Integrated Stripe including Tap-to-Pay and device pairing with native Android.',
              'Improved reliability and workflows across Android and iOS.',
            ]}
            tech={["Flutter 3", "BLoC", "Stripe SDK", "Native Java", "SharedPreferences", "REST API"]}
          />

          <ProjectCard
            label="Independent"
            title="Collection Display App"
            description="Real-time display solution for order status updates and promotional ads on tablets and screens."
            bullets={[
              'Independently designed and developed.',
              'Implemented reactive state, offline sync, and push notifications.',
              'Managed full lifecycle: UI/UX, architecture, testing, deployment.',
            ]}
            tech={["Flutter 3", "GetX", "Dio", "Firebase", "Hive", "FCM"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
