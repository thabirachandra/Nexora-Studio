import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

const links = [{href:"/#services",label:"Services"},{href:"/portfolio/",label:"Portfolio"},{href:"/pricing/",label:"Pricing"},{href:"/#about",label:"About"}];
export function SiteHeader() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090d]/85 backdrop-blur-xl">
    <div className="container flex h-[72px] items-center justify-between gap-5">
      <Link href="/" className="flex items-center gap-3" aria-label="NEXORA CREATIVE home">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-sky-400 text-sm font-black">N</span>
        <span className="leading-none"><strong className="block text-[15px] tracking-[.12em]">NEXORA</strong><small className="mt-1 block text-[9px] tracking-[.29em] text-violet-300">CREATIVE</small></span>
      </Link>
      <nav className="hidden items-center gap-7 md:flex">{links.map(l=><Link className="text-sm text-zinc-300 transition hover:text-white" href={l.href} key={l.label}>{l.label}</Link>)}</nav>
      <div className="flex items-center gap-2"><Link href="/contact/" className="btn btn-primary">Start a project <ArrowUpRight size={15}/></Link><button aria-label="Navigation menu" className="btn btn-secondary !px-3 md:hidden"><Menu size={18}/></button></div>
    </div>
  </header>;
}
