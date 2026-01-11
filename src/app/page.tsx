import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen antialiased">
      <header className="py-6">
        <div className="site-container flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">ashspire.dev</a>
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
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/case/flagship" className="btn" style={{backgroundColor:'var(--accent)',color:'#fff'}}>View flagship case study</a>
                <a href="#projects" className="btn border" style={{borderColor:'rgba(15,23,32,0.06)'}}>Projects</a>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="card">
                <div className="text-sm muted">Featured</div>
                <h3 className="mt-2 text-xl font-semibold">BoldFlag — production dashboard</h3>
                <p className="mt-2 muted text-sm">Accessible admin UI used by paying customers. LCP median 850ms after optimizations.</p>
                <div className="mt-3 flex gap-2">
                  <a href="/case/flagship" className="text-sm underline">Read case</a>
                  <a href="https://flagship.ashspire.dev" className="text-sm underline" target="_blank" rel="noreferrer">Live</a>
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
            <p className="mt-4 text-sm muted">Available for remote junior roles and high-impact contracts. Email: <a href="mailto:hi@ashspire.dev" className="underline">hi@ashspire.dev</a></p>
            <div className="mt-4 flex gap-3">
              <a href="https://calendly.com/ashspire/30" className="btn border">Schedule 30m</a>
              <a href="https://linkedin.com/in/ashspire" className="btn border">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10">
        <div className="site-container flex items-center justify-between text-sm muted">
          <div>© 2026 ashspire.dev — Built and designed by Ashspire (Lagos)</div>
          <div className="flex gap-4">
            <a href="/resume.pdf" className="underline">Resume</a>
            <a href="https://github.com/ashspire" className="underline">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
