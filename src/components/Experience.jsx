import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ title, subtitle, period, points }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-slate-300">{subtitle}</p>
      </div>
      <span className="mt-2 md:mt-0 text-sm text-cyan-300">{period}</span>
    </div>
    <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-200">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-950 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center gap-2 text-cyan-300">
          <Briefcase className="h-5 w-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">Experience & Education</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <TimelineItem
              title="Flutter Developer"
              subtitle="Abilio IT Solutions — Sevaki Project (Clean Architecture with BLoC)"
              period="Aug 2025 - Present"
              points={["Involved in code reviews and architecture decisions."]}
            />
            <TimelineItem
              title="Flutter Developer"
              subtitle="FIN Infocom Pvt Ltd"
              period="Apr 2023 - Jul 2025"
              points={[
                "Led migration of multiple apps to Flutter 3.",
                "Provided technical support for Grafterr GO!",
                "Worked on performance optimizations, offline-first capabilities, and real-time data sync.",
              ]}
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 flex items-center gap-2 text-cyan-300">
                <GraduationCap className="h-5 w-5" />
                <h3 className="text-white font-semibold">Education</h3>
              </div>
              <p className="text-slate-200">
                Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE)
              </p>
              <p className="text-slate-300">Krishna University College of Engineering and Technology</p>
              <p className="text-cyan-300 mt-1 text-sm">June 2018 - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
