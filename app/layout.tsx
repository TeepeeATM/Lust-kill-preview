import type { Metadata } from "next";
import "./globals.css";
import "./home.css";
import "./checkout.css";
import "./catalog.css";
import "./content-pages.css";
import { BagProvider } from "@/components/bag-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: { default: "Lust Kills — Memphis After Dark", template: "%s — Lust Kills" },
  description: "Lust Kills is an independent Memphis streetwear label built around ambition, temptation, and consequence.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><BagProvider><SiteHeader />{children}<SiteFooter /></BagProvider></body></html>;
}
