"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_CONFIG } from "./config";
import { 
  LinkedinLogo, 
  GithubLogo, 
  EnvelopeSimple, 
  Globe, 
  Sparkle, 
  Camera, 
  MusicNotes, 
  Cpu, 
  CheckCircle,
  ArrowUpRight
} from "@phosphor-icons/react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "tech" | "creative">("all");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filteredSkills = activeTab === "all" 
    ? [...PORTFOLIO_CONFIG.skills.technical, ...PORTFOLIO_CONFIG.skills.creative]
    : activeTab === "tech" 
      ? PORTFOLIO_CONFIG.skills.technical 
      : PORTFOLIO_CONFIG.skills.creative;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-sky-500 selection:text-black">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/40 bg-zinc-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Paul Silva
            </span>
            <span className="hidden sm:inline-block h-4 w-px bg-zinc-800"></span>
            <span className="hidden sm:inline-block text-xs text-zinc-400 font-mono tracking-widest uppercase">
              Architect & Creator
            </span>
          </div>
          <nav className="flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">About</a>
            <a href="#experience" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Skills</a>
            <a href="#work" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-zinc-950 hover:bg-zinc-200 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Column: Asymmetric text layout */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-950/30 px-3 py-1 text-xs text-sky-400 font-mono mb-6 self-start">
                <Sparkle size={14} className="animate-pulse" />
                <span>Enterprise Active Directory & Creative</span>
              </div>
              <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl leading-tight">
                Architecting secure systems.<br />
                <span className="text-gradient">Capturing life through lenses & melodies.</span>
              </h1>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-[60ch]">
                I am <strong className="text-white">Paul Silva</strong>. For over 24 years, I have architected and migrated core enterprise directory structures for banks, healthcare providers, and the US Air Force. Parallel to tech, I run a professional photography business and compose music.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#experience" className="inline-flex h-11 items-center justify-center rounded-full bg-sky-500 px-6 text-sm font-semibold text-black hover:bg-sky-400 transition-all active:scale-[0.98]">
                  View Experience
                </a>
                <a href="#contact" className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/50 px-6 text-sm font-semibold text-white hover:bg-zinc-800 transition-all active:scale-[0.98]">
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right Column: Premium framed visual asset */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[450px] lg:max-w-none">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-sky-500 to-purple-600 opacity-20 blur-xl"></div>
                <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-2">
                  <Image 
                    src="/workspace_tech_art.png" 
                    alt="Workspace showing servers, camera, and guitar"
                    width={600}
                    height={450}
                    className="rounded-xl object-cover w-full h-[350px] lg:h-[400px]"
                    priority
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-zinc-800 bg-zinc-950/90 p-4 backdrop-blur-sm">
                    <p className="text-xs font-mono text-sky-400">CURRENT CONTRACT</p>
                    <p className="text-sm font-semibold text-white mt-1">Valley Bank AD Migration & Hardening</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Bento Style Grid */}
      <section id="about" className="border-t border-zinc-900 bg-zinc-900/10 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">About Me</h2>
            <p className="mt-3 text-base text-zinc-400 max-w-[65ch]">
              An analytical mind combined with a passion for creative expression. I balance technical precision with art.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Bento Cell 1: Tech */}
            <div className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 hover:border-zinc-700 transition-all duration-300">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Systems Architect</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                24+ years specializing in Active Directory consolidations, OCS/Lync/Teams migrations, and datacenter engineering. Redesigned and architected secure SIPRNET environments for the United States Air Force.
              </p>
            </div>

            {/* Bento Cell 2: Photography */}
            <div className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 hover:border-zinc-700 transition-all duration-300">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                <Camera size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Pavlaki.Photos LLC</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Operating two premium physical studio locations in Long Island, NY and Havertown, PA. Providing elite portraiture, lighting design, and commercial art direction with high customer rating.
              </p>
            </div>

            {/* Bento Cell 3: Music */}
            <div className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 hover:border-zinc-700 transition-all duration-300">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <MusicNotes size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Musician & Performer</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Over 30 years as a performing musician (Guitarist, Keyboardist, Vocalist, and MIDI Programmer). Delivering creative musical production, performance layout, and acoustic design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="border-t border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Work Experience</h2>
            <p className="mt-3 text-base text-zinc-400 max-w-[65ch]">
              Select professional career chapters from my 24+ year career history in IT systems architecture and business ownership.
            </p>
          </div>

          <div className="relative border-l border-zinc-800 ml-4 md:ml-6 flex flex-col gap-12">
            {PORTFOLIO_CONFIG.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-10 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-zinc-950 bg-sky-500 group-hover:scale-110 transition-transform"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-zinc-300 mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500">
                    <span>{exp.period}</span>
                    <span className="h-1 w-1 rounded-full bg-zinc-700"></span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-[75ch]">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="border-t border-zinc-900 bg-zinc-900/10 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Skills & Capabilities</h2>
              <p className="mt-3 text-base text-zinc-400 max-w-[65ch]">
                Leveraging dual capabilities in engineering and the arts to deliver unique solutions.
              </p>
            </div>
            {/* Filter Tabs */}
            <div className="flex rounded-full bg-zinc-900 p-1 border border-zinc-800">
              <button 
                onClick={() => setActiveTab("all")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${activeTab === "all" ? "bg-white text-zinc-950" : "text-zinc-400 hover:text-white"}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab("tech")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${activeTab === "tech" ? "bg-white text-zinc-950" : "text-zinc-400 hover:text-white"}`}
              >
                Systems & Tech
              </button>
              <button 
                onClick={() => setActiveTab("creative")}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${activeTab === "creative" ? "bg-white text-zinc-950" : "text-zinc-400 hover:text-white"}`}
              >
                Creative & Arts
              </button>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {filteredSkills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-3 rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-4 transition-all hover:bg-zinc-900/70">
                <CheckCircle size={18} className="text-sky-400 flex-shrink-0" />
                <span className="text-sm font-medium text-zinc-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects / Creative Showcases */}
      <section id="work" className="border-t border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-16">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Featured Projects & Ventures</h2>
            <p className="mt-3 text-base text-zinc-400 max-w-[65ch]">
              A closer look at my active business structures and artistic pursuits.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Project Card 1: Photography Studio */}
            <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-all duration-300 flex flex-col">
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image 
                  src="/photography_showcase.png" 
                  alt="Photography Studio Portfolio Visual" 
                  fill 
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider">CREATIVE VENTURE</span>
                    <span className="text-xs font-mono text-zinc-500">2018 - Present</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Pavlaki.Photos LLC</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    A professional portrait photography service operating out of Long Island, New York, and Havertown, Pennsylvania. Specializing in advanced studio lighting setups, corporate branding shoots, and fine-art portraits.
                  </p>
                </div>
                <a 
                  href="http://www.iLyncU.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-sky-400 transition-colors"
                >
                  <span>Visit Studio Website</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Project Card 2: Music Project */}
            <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-all duration-300 flex flex-col">
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image 
                  src="/music_showcase.png" 
                  alt="Live Concert Guitar Performance" 
                  fill 
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">ARTISTIC PROJECT</span>
                    <span className="text-xs font-mono text-zinc-500">1980 - 2011</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">A-Band-In-Me!</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    A solo musical project utilizing guitar, keyboard, vocals, and MIDI programming. Blending acoustic styles with technical synthesizers and programming to build full digital orchestrations.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500">
                  Legacy performance archive
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards Banner */}
      <section className="border-t border-zinc-900 bg-zinc-900/20 py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white">Certifications & Accreditations</h2>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Decades of verified training, enterprise certifications, and honors from Microsoft and other professional boards.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PORTFOLIO_CONFIG.certifications.map((cert, idx) => (
                <div key={idx} className="flex gap-3 rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-4">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-400 mt-0.5">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-sm text-zinc-300 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-t border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            {/* Contact details */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Let&apos;s Connect</h2>
              <p className="mt-4 text-base text-zinc-400 leading-relaxed max-w-[45ch]">
                Whether you need senior Active Directory migration expertise, high-end photography services, or musical collaboration, feel free to reach out.
              </p>
              
              <div className="mt-8 flex flex-col gap-6">
                <a href={`mailto:${PORTFOLIO_CONFIG.profile.email}`} className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                    <EnvelopeSimple size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500">EMAIL</p>
                    <p className="text-sm font-semibold">{PORTFOLIO_CONFIG.profile.email}</p>
                  </div>
                </a>

                <a href={PORTFOLIO_CONFIG.profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                    <LinkedinLogo size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500">LINKEDIN</p>
                    <p className="text-sm font-semibold">in/paulsilva</p>
                  </div>
                </a>

                <a href={PORTFOLIO_CONFIG.profile.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700 transition-colors">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-zinc-500">WEBSITE</p>
                    <p className="text-sm font-semibold">www.iLyncU.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 backdrop-blur-sm">
                {formSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={48} className="text-sky-400 mb-4 animate-bounce" />
                    <h3 className="text-lg font-bold text-white">Message Sent Successfully</h3>
                    <p className="text-sm text-zinc-400 mt-2">Thank you, Paul will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-xs font-mono text-zinc-400">YOUR NAME</label>
                        <input 
                          type="text" 
                          id="name" 
                          required 
                          className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-sky-500 focus:outline-none transition-colors"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-xs font-mono text-zinc-400">EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          id="email" 
                          required 
                          className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-sky-500 focus:outline-none transition-colors"
                          placeholder="jane@example.com"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-xs font-mono text-zinc-400">MESSAGE</label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        required 
                        className="rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-sky-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project or inquiry..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="inline-flex h-11 items-center justify-center rounded-lg bg-sky-500 font-semibold text-black hover:bg-sky-400 transition-colors cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Paul Silva. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href={PORTFOLIO_CONFIG.profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinLogo size={20} />
            </a>
            <a href={PORTFOLIO_CONFIG.profile.githubUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors" aria-label="GitHub">
              <GithubLogo size={20} />
            </a>
            <a href={`mailto:${PORTFOLIO_CONFIG.profile.email}`} className="text-zinc-500 hover:text-white transition-colors" aria-label="Email">
              <EnvelopeSimple size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
