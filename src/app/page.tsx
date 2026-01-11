"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen antialiased">
      <header className="py-6">
        <div className="site-container flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <img src="https://cruel-moccasin-k3oxtvs1zf.edgeone.app/snaptik_7453504786424483104_4.jpeg" alt="Ashspire logo" className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover" />
            <span className="text-lg font-semibold tracking-tight">ashspire.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm muted">
            <a href="#projects" className="hover:text-[color:var(--accent)]">Projects</a>
            <a href="#system" className="hover:text-[color:var(--accent)]">Design System</a>
            <a href="#about" className="hover:text-[color:var(--accent)]">About</a>
            <a href="#contact" className="hover:text-[color:var(--accent)]">Contact</a>
          </nav>
        </div>
      </header>

      <main id="home">
        <section className="py-20">
          <div className="site-container grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">I design and ship production web apps that measure up.</h1>
              <p className="mt-4 max-w-xl text-lg muted">Self‑taught front‑end builder (Lagos). I ship performant, accessible products and design systems—fast.</p>
              <div className="mt-8 flex flex-wrap gap-3 reveal">
                <a href="/case/flagship" className="btn accent">View flagship case study</a>
                <a href="#projects" className="btn" style={{border:'1px solid rgba(15,23,32,0.06)'}}>Projects</a>
              </div>
            </div>

            <div className="hidden md:block reveal">
              <div className="card" style={{overflow:'hidden'}}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 160px',gap:'1rem',alignItems:'center'}}>
                  <div>
                    <div className="text-sm muted">Featured</div>
                    <h3 className="mt-2 text-xl font-semibold">BoldFlag — production dashboard</h3>
                    <p className="mt-2 muted text-sm">Accessible admin UI used by paying customers. LCP median 850ms after optimizations.</p>
                    <div className="mt-3 flex gap-3">
                      <a href="/case/flagship" className="text-sm underline">Read case</a>
                      <a href="https://flagship.ashspire.dev" className="text-sm underline" target="_blank" rel="noreferrer">Live</a>
                    </div>
                  </div>
                  <div>
                    <svg className="hero-illustration" viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" aria-hidden>
                      <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                          <stop offset="0" stopColor="#7c3aed" />
                          <stop offset="1" stopColor="#8b5cf6" />
                        </linearGradient>
                      </defs>
                      <rect x="0" y="0" width="280" height="160" rx="10" fill="#0f1720" opacity="0.04" />
                      <g transform="translate(16,16)">
                        <rect x="0" y="0" width="160" height="60" rx="8" fill="url(#g1)" />
                        <rect x="0" y="72" width="120" height="10" rx="4" fill="#e6eef8" opacity="0.7" />
                        <circle cx="220" cy="38" r="24" fill="#fff" opacity="0.06" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 border-t" style={{borderColor:'rgba(2,6,23,0.04)'}}>
          <div className="site-container">
            <h2 className="text-2xl font-semibold">Selected projects</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <article className="card">
                <h3 className="text-lg font-semibold">BoldFlag — production dashboard (v2)</h3>
                <p className="mt-2 muted text-sm">Replaced a legacy admin with a polished, accessible dashboard used by paying customers.</p>
                <ul className="mt-3 text-sm list-disc pl-5 muted space-y-1">
                  <li>2.4k MAU · 44% activation uplift · LCP 850ms median</li>
                  <li>Next.js, TypeScript, Tailwind, Supabase, Vercel</li>
                </ul>
                <div className="mt-4 flex gap-3 text-sm">
                  <a href="/case/flagship" className="underline">Case study</a>
                  <a href="https://github.com/ashspire/flagship" className="underline">Repo</a>
                </div>
              </article>

              <article className="card">
                <h3 className="text-lg font-semibold">SystemPlay — design system playground</h3>
                <p className="mt-2 muted text-sm">Tokenized component library and interactive docs that sped UI delivery.</p>
                <ul className="mt-3 text-sm list-disc pl-5 muted space-y-1">
                  <li>120+ components · dev velocity −30%</li>
                  <li>Next.js, TypeScript, Tailwind, Storybook, Radix</li>
                </ul>
                <div className="mt-4 flex gap-3 text-sm">
                  <a href="/system" className="underline">Demo</a>
                  <a href="https://github.com/ashspire/systemplay" className="underline">Repo</a>
                </div>
              </article>

              <article className="card md:col-span-2">
                <h3 className="text-lg font-semibold">EdgeBoard — Linear-style project dashboard</h3>
                <p className="mt-2 muted text-sm">High-fidelity prototype validating keyboard-first workflows and realtime sync.</p>
                <ul className="mt-3 text-sm list-disc pl-5 muted space-y-1">
                  <li>Prototype validated with PMs · task flow −38%</li>
                  <li>Next.js, TypeScript, Supabase, Tailwind</li>
                </ul>
                <div className="mt-4 flex gap-3 text-sm">
                  <a href="/case/edgeboard" className="underline">Case note</a>
                  <a href="https://github.com/ashspire/edgeboard" className="underline">Repo</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="about" className="py-12 border-t" style={{borderColor:'rgba(2,6,23,0.04)'}}>
          <div className="site-container">
            <h2 className="text-2xl font-semibold">About</h2>
            <div className="mt-4 space-y-3 text-sm muted">
              <p>I’m 18, based in Lagos — a self-taught product-minded front-end engineer and designer who ships production apps end-to-end.</p>
              <p>Shipped one production web app (v1 → v2): owned UI, state, perf, accessibility, analytics, and iterative product metrics.</p>
              <p>I pair tight visual systems with pragmatic engineering: TypeScript, React/Next.js, component systems, and measurable performance goals.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 border-t" style={{borderColor:'rgba(2,6,23,0.04)'}}>
          <div className="site-container">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 text-sm muted">Available for remote junior roles and high-impact contracts. Email: <a href="mailto:ashspirehq@gmail.com" className="underline">ashspirehq@gmail.com</a></p>
            <div className="mt-4 flex gap-3">
              <a href="https://calendly.com/ashspire/30" className="btn border">Schedule 30m</a>
              <a href="https://www.linkedin.com/in/abdullahi-adewunmi-95752a3a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="btn border" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10">
        <div className="site-container flex items-center justify-between text-sm muted">
          <div>© 2026 ashspire.dev — Built and designed by Ashspire (Lagos)</div>
          <div className="flex gap-4">
          <a href="https://royal-moccasin-tmpiqohmub.edgeone.app/Abdullahi%20Adewummi%E2%80%99s%20Resume.pdf" className="underline" target="_blank" rel="noreferrer">Resume</a>
          <a href="https://www.linkedin.com/in/abdullahi-adewunmi-95752a3a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="underline" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
