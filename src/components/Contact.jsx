import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-950 py-20">
      <div className="container mx-auto px-6">
        <h2 className="mb-6 text-2xl md:text-3xl font-bold text-white">Contact</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <a href="mailto:kuntamukkala2017@gmail.com" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
            <div className="flex items-center gap-3 text-slate-200">
              <Mail className="h-5 w-5 text-cyan-300" />
              <span className="font-medium">kuntamukkala2017@gmail.com</span>
            </div>
          </a>
          <a href="tel:+918341590211" className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
            <div className="flex items-center gap-3 text-slate-200">
              <Phone className="h-5 w-5 text-cyan-300" />
              <span className="font-medium">+91 83415 90211</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/thisislohit"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-3 text-slate-200">
              <Linkedin className="h-5 w-5 text-cyan-300" />
              <span className="font-medium">linkedin.com/in/thisislohit</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
