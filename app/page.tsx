import Image from "next/image";
import Link from "next/link";

export default function Home(){return <main>
  <section className="campaign-hero" aria-labelledby="campaign-title">
    <h1 id="campaign-title" className="sr-only">Lust Kills</h1>
    <div className="campaign-art"><Image className="campaign-image" src="/midnight-memphis-v2.webp" alt="Lust Kills campaign scene" width={1536} height={1024} priority sizes="100vw"/></div>
    <div className="campaign-bar"><div><p>LUST KILLS / CURRENT RELEASE</p><span>Available now</span></div><Link className="primary-button inline" href="/shop">SHOP THE COLLECTION →</Link></div>
  </section>
  <section className="availability-strip" aria-label="Store information"><span>CURRENT COLLECTION / AVAILABLE NOW</span><Link href="/shop">SHOP COLLECTION →</Link></section>
  <section className="collection-tease"><div><p className="section-kicker">CURRENT COLLECTION</p><h2>GRAPHIC<br/>STREETWEAR</h2></div><div><Link className="primary-button inline" href="/shop">VIEW ALL PIECES →</Link></div></section>
  <section className="story-tease"><p className="section-kicker">ABOUT LUST KILLS</p><h2>THE BRAND</h2><div><p>Independent graphic streetwear built around artwork, attitude, and limited releases.</p><Link href="/about">READ THE STORY →</Link></div></section>
  <section className="signal"><p className="section-kicker">LUST KILLS / INSTAGRAM</p><a className="primary-button inline" href="https://www.instagram.com/lustkills__/" target="_blank" rel="noreferrer">@LUSTKILLS__ →</a></section>
</main>}
