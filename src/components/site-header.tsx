"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, Search, X } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/pricing/", label: "Pricing" },
  { href: "/#about", label: "About" },
  { href: "/contact/", label: "Contact" },
];

const items = [
  { title: "Home", description: "NEXORA CREATIVE homepage", href: "/" },
  { title: "Services", description: "Explore creative services", href: "/services/" },
  { title: "Portfolio", description: "View our projects", href: "/portfolio/" },
  { title: "Pricing", description: "Explore service prices", href: "/pricing/" },
  { title: "About", description: "Learn about NEXORA", href: "/#about" },
  { title: "Contact", description: "Request a project", href: "/contact/" },
  { title: "Client Dashboard", description: "Client dashboard", href: "/dashboard/" },
];

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const results = query.trim()
    ? items.filter((item) =>
        `${item.title} ${item.description}`
          .toLowerCase()
          .includes(query.trim().toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090d]/95 backdrop-blur-xl">
      <div className="container flex min-h-[72px] items-center justify-between gap-3">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="NEXORA CREATIVE home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-sky-400 text-sm font-black">N</span>
          <span className="leading-none">
            <strong className="block text-[15px] tracking-[.12em]">NEXORA</strong>
            <small className="mt-1 block text-[9px] tracking-[.29em] text-violet-300">CREATIVE</small>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm text-zinc-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={searchOpen ? "Close search" : "Open search"}
            onClick={() => {
              setSearchOpen(!searchOpen);
              setQuery("");
            }}
            className="btn btn-secondary !px-3"
          >
            {searchOpen ? <X size={18} /> : <Search size={18} />}
          </button>

          <Link href="/contact/" className="btn btn-primary !px-3 sm:!px-4">
            <span className="hidden sm:inline">Start a project</span>
            <span className="sm:hidden">Start</span>
            <ArrowUpRight size={15} />
          </Link>

          <button
            type="button"
            aria-label="Navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-secondary !px-3 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-white/10 px-4 py-4">
          <div className="container">
            <label htmlFor="nexora-search" className="mb-2 block text-sm text-zinc-400">
              Search NEXORA CREATIVE
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.04] px-4">
              <Search size={18} className="shrink-0 text-violet-300" />
              <input
                id="nexora-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services, portfolio, pricing..."
                autoFocus
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-zinc-500"
              />
            </div>

            {query.trim() && (
              <div className="mt-3 max-h-64 overflow-y-auto rounded-xl border border-white/10 bg-[#101116]">
                {results.length ? results.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => {
                      setSearchOpen(false);
                      setQuery("");
                    }}
                    className="block border-b border-white/5 px-4 py-3 last:border-0 hover:bg-white/[0.06]"
                  >
                    <span className="block text-sm font-medium text-white">{item.title}</span>
                    <span className="mt-1 block text-xs text-zinc-400">{item.description}</span>
                  </Link>
                )) : (
                  <p className="px-4 py-4 text-sm text-zinc-400">No results found. Try another keyword.</p>
                )}
              </div>
            )}

            {!query.trim() && (
              <p className="mt-3 text-xs text-zinc-500">
                Search pages and explore NEXORA CREATIVE.
              </p>
            )}
          </div>
        </div>
      )}

      {menuOpen && (
        <nav className="border-t border-white/10 px-4 py-3 md:hidden">
          <div className="container flex flex-col">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-3 text-sm text-zinc-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
