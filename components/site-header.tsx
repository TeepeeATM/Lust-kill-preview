"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useBag } from "./bag-provider";
export function SiteHeader(){const [open,setOpen]=useState(false);const {count}=useBag();return <header className="site-header"><Link className="brand" href="/" aria-label="Lust Kills home"><Image src="/brand/lust-kills-primary.webp" alt="Lust Kills" width={220} height={80} priority/></Link><button className="menu-button" type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(value=>!value)}>{open?"CLOSE":"MENU"}</button><nav className="desktop-nav" aria-label="Primary"><Link href="/shop">COLLECTION</Link><Link href="/about">STORY</Link><Link href="/contact">CONTACT</Link></nav><Link className="bag-link" href="/bag">BAG ({count})</Link><nav id="mobile-nav" className={open?"mobile-nav open":"mobile-nav"} aria-label="Mobile"><Link onClick={()=>setOpen(false)} href="/shop">COLLECTION</Link><Link onClick={()=>setOpen(false)} href="/about">STORY</Link><Link onClick={()=>setOpen(false)} href="/contact">CONTACT</Link></nav></header>}
