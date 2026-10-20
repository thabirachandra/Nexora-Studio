import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: { default: "NEXORA CREATIVE — Creative Minds. Digital Excellence.", template: "%s | NEXORA CREATIVE" },
  description: "Professional video editing, web development, design, branding and digital growth services for creators and businesses.",
  openGraph: { title: "NEXORA CREATIVE", description: "Creative Minds. Digital Excellence.", type: "website" },
  robots: { index: true, follow: true }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
