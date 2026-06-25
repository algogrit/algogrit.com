import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#talks", label: "Talks" },
  { href: "#writing", label: "Writing" },
];

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const html = document.documentElement;
    const next = !html.classList.contains("dark");
    html.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-zinc-950/40 border-b border-zinc-200/60 dark:border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="display text-xl font-bold tracking-tight">
          algogrit<span className="grad">.</span>
        </a>

        <div className="flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden md:inline text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white grad-bg hover:opacity-90 transition-opacity"
          >
            Résumé
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm4-1a1 1 0 100 2h-1a1 1 0 100-2h1zM4 9a1 1 0 100 2H3a1 1 0 100-2h1zm12.95 5.536a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM6.464 6.464A1 1 0 015.05 5.05l.707-.707A1 1 0 017.17 5.757l-.707.707zm0 7.072l-.707.707A1 1 0 014.343 12.83l.707-.707a1 1 0 011.414 1.414zM14.95 5.05a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
