import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white antialiased">
      <header className="mx-auto max-w-4xl px-6 py-10">
        <nav className="flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight">
            ashspire.dev
          </a>
          <div className="flex gap-4 text-sm">
            <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
            <a href="#system" className="opacity-80 hover:opacity-100">Design System</a>
            <a href="#about" className="opacity-80 hover:opacity-100">About</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
          </div>
        </nav>
      </header>

      <main id="home" className="mx-auto max-w-4xl px-6">
        <section className="py-20">
          <h1 className="text-4xl font-bold leading-tight">I design and ship production web apps that measure up.</h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-700 dark:text-zinc-300">
            Self-taught front-end builder (18, Lagos) — shipped a live app; obsessed with performance, accessibility, and design systems.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="/case/flagship" className="inline-flex items-center rounded-full bg-black px-4 py-2 text-white">View flagship case study</a>
            <a href="#projects" className="inline-flex items-center rounded-full border px-4 py-2">Projects</a>
          </div>
        </section>

        <section id="projects" className="py-12 border-t border-zinc-100 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold">Selected projects</h2>
          <div className="mt-6 space-y-6">
            <article className="p-6 rounded border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-lg font-semibold">BoldFlag — production dashboard (v2)</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Replaced a legacy admin with a polished, accessible dashboard used by paying customers.</p>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
                <li>2.4k MAU · 44% activation uplift · LCP 850ms median</li>
                <li>Next.js, TypeScript, Tailwind, Supabase, Vercel</li>
                <li>Owned design → deploy, tokenized system, ARIA-first components</li>
              </ul>
              <div className="mt-4 flex gap-3 text-sm">
                <a href="/case/flagship" className="underline">Case study</a>
                <a href="https://github.com/ashspire/flagship" className="underline">Repo</a>
                <a href="https://flagship.ashspire.dev" className="underline" target="_blank" rel="noreferrer">Live</a>
              </div>
            </article>

            <article id="system" className="p-6 rounded border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-lg font-semibold">SystemPlay — design system playground</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Tokenized component library and interactive docs that sped UI delivery.</p>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
                <li>120+ components · dev velocity −30%</li>
                <li>Next.js, TypeScript, Tailwind, Storybook, Radix</li>
                <li>Accessible primitives, visual regression, published tokens</li>
              </ul>
              <div className="mt-4 flex gap-3 text-sm">
                <a href="/system" className="underline">Demo</a>
                <a href="https://github.com/ashspire/systemplay" className="underline">Repo</a>
              </div>
            </article>

            <article className="p-6 rounded border border-zinc-100 dark:border-zinc-800">
              <h3 className="text-lg font-semibold">EdgeBoard — Linear-style project dashboard</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">High-fidelity prototype validating keyboard-first workflows and realtime sync.</p>
              <ul className="mt-3 text-sm list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
                <li>Prototype validated with PMs · task flow −38%</li>
                <li>Next.js, TypeScript, Supabase, Tailwind</li>
                <li>Keyboard shortcuts, virtualization, realtime updates</li>
              </ul>
              <div className="mt-4 flex gap-3 text-sm">
                <a href="/case/edgeboard" className="underline">Case note</a>
                <a href="https://github.com/ashspire/edgeboard" className="underline">Repo</a>
                <a href="https://edgeboard.ashspire.dev" className="underline" target="_blank" rel="noreferrer">Live</a>
              </div>
            </article>
          </div>
        </section>

        <section id="about" className="py-12 border-t border-zinc-100 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold">About</h2>
          <div className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-300">
            <p>I’m 18, based in Lagos — a self-taught product-minded front-end engineer and designer who ships production apps end-to-end.</p>
            <p>Shipped one production web app (v1 → v2): owned UI, state, perf, accessibility, analytics, and iterative product metrics.</p>
            <p>I pair tight visual systems with pragmatic engineering: TypeScript, React/Next.js, component systems, and measurable performance goals.</p>
            <p>I rely on BaaS and serverless patterns to deliver outcomes while avoiding deep backend specialization.</p>
          </div>
        </section>

        <section id="contact" className="py-12 border-t border-zinc-100 dark:border-zinc-800">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">Available for remote junior roles and high-impact contracts. Email: <a href="mailto:hi@ashspire.dev" className="underline">hi@ashspire.dev</a></p>
          <div className="mt-4 flex gap-3">
            <a href="https://calendly.com/ashspire/30" className="inline-flex items-center rounded-full border px-4 py-2">Schedule 30m</a>
            <a href="https://linkedin.com/in/ashspire" className="inline-flex items-center rounded-full border px-4 py-2">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-4xl px-6 py-10 text-sm text-zinc-600 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          <div>© 2026 ashspire.dev — Built and designed by Ashspire (Lagos)</div>
          <div className="flex gap-4">
            <a href="/resume.pdf" className="underline">Resume</a>
            <a href="https://github.com/ashspire" className="underline">GitHub</a>
            <a href="/privacy" className="underline">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
