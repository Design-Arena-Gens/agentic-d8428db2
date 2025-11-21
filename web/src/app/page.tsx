export default function Home() {
  const highlights = [
    {
      title: "Start the conversation",
      description:
        "A single friendly word can turn a quiet moment into a meaningful connection.",
    },
    {
      title: "Keep it simple",
      description:
        "Good design balances clarity and warmth. This page shows how little you need to make an impression.",
    },
    {
      title: "Share it forward",
      description:
        "Send this greeting to someone and invite them to reply with their own hi.",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-teal-400/20 blur-3xl" />
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-10">
        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium uppercase tracking-[0.4em] text-white/70">
          say it back
        </span>
        <h1 className="mt-12 text-balance text-6xl font-semibold leading-none tracking-tight sm:text-7xl md:text-8xl">
          hi.
        </h1>
        <p className="mt-8 max-w-2xl text-balance text-lg leading-8 text-white/70 sm:text-xl">
          A minimalist greeting for maximal vibes. Share a warm hello, let the
          page do the glowing, and keep the conversation going.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="mailto:someone@example.com?subject=hi&body=hi!"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-slate-900 transition hover:bg-slate-200"
          >
            Send a hi
          </a>
          <a
            href="#highlights"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white/40 hover:text-white"
          >
            Why it works
          </a>
        </div>
      </main>

      <section
        id="highlights"
        className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 sm:px-10"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <h2 className="text-left text-2xl font-semibold text-white sm:text-3xl">
            The power of a simple “hi”
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-white/30 hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/60 py-6 backdrop-blur">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-white/60">
          hi • crafted with next.js & tailwind css
        </p>
      </footer>
    </div>
  );
}
