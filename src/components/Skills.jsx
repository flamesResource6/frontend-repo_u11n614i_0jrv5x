import React from 'react';
import { Sparkles, Cpu, Layers, Network, CreditCard, Link as LinkIcon, GitBranch } from 'lucide-react';

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-md bg-white/5 px-3 py-1 text-sm text-slate-200 ring-1 ring-inset ring-white/10">
    {children}
  </span>
);

const SkillGroup = ({ title, icon: Icon, items }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <div className="mb-4 flex items-center gap-2 text-cyan-300">
      <Icon className="h-5 w-5" />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 bg-slate-950 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center gap-2 text-cyan-300">
          <Sparkles className="h-5 w-5" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">What I Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillGroup
            title="Mobile Development"
            icon={Cpu}
            items={["Flutter 3", "Dart", "Android (Java)", "iOS"]}
          />
          <SkillGroup
            title="State Management"
            icon={Layers}
            items={["BLoC", "Provider", "GetX"]}
          />
          <SkillGroup
            title="Data & Communication"
            icon={Network}
            items={["WebSockets", "REST APIs", "Dio", "Hive", "Real-time Sync"]}
          />
          <SkillGroup
            title="Integrations: Payment"
            icon={CreditCard}
            items={["Stripe SDK", "Tap-to-Pay", "Terminal Pairing", "Apple Pay", "Google Pay"]}
          />
          <SkillGroup
            title="Integrations: Third-party"
            icon={LinkIcon}
            items={["Deep Linking", "Firebase (Auth, Firestore, FCM)", "Platform Channels"]}
          />
          <SkillGroup
            title="Processes & Tools"
            icon={GitBranch}
            items={["Git", "GitHub", "Firebase", "Perf Bottleneck Analysis", "Basic CI/CD"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
