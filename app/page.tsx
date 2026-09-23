import Image from "next/image";
import Link from "next/link";

export default function Home(){return <main>
  <section className="campaign-hero" aria-labelledby="campaign-title">
    <h1 id="campaign-title" className="sr-only">Lust Kills</h1>
    <div className="campaign-art"><Image className="campaign-image" src="/midnight-memphis-v2.webp" alt="Lust Kills campaign scene" width={1536} height={1024} priority sizes="100vw"/></div>
    <div className="campaign-bar"><div><p>LUST KILLS / CURRENT RELEASE</p><span>Available now</span></div><Link className="primary-button inline" href="/shop">SHOP THE COLLECTION →</Link></div>
  </section>
  <section className="availability-strip" aria-label="Store information"><span>AVAILABLE NOW</span><span>SIZES S–XL</span><span>CURRENT COLLECTION</span><Link href="/shipping-returns">SHIPPING + RETURNS →</Link></section>
  <section className="collection-tease"><div><p className="section-kicker">THE COLLECTION</p><h2>THE CURRENT<br/>RELEASE</h2></div><div><p>Browse the current pieces, colorways, sizes, and prices in the collection.</p><Link className="primary-button inline" href="/shop">VIEW COLLECTION →</Link></div></section>
  <section className="story-tease"><p className="section-kicker">ABOUT LUST KILLS</p><h2>THE BRAND</h2><div><p>Lust Kills is an independent streetwear label built around graphic artwork and wearable releases.</p><Link href="/about">READ THE STORY →</Link></div></section>
  <section className="service-row" aria-label="Shopping details"><article><b>01</b><h3>SIZES S–XL</h3><p>Every piece in the current collection is available from small through extra large.</p></article><article><b>02</b><h3>SECURE CHECKOUT</h3><p>Stripe handles payment securely when you are ready to order.</p></article><article><b>03</b><h3>SHIPPING + RETURNS</h3><p>Check delivery estimates and return requirements before placing your order.</p><Link href="/shipping-returns">VIEW POLICY →</Link></article></section>
  <section className="signal"><p className="section-kicker">FOLLOW LUST KILLS</p><h2>STAY UPDATED</h2><p>New pieces and release updates live on Instagram.</p><a className="primary-button inline" href="https://www.instagram.com/lustkills__/" target="_blank" rel="noreferrer">FOLLOW @LUSTKILLS__ →</a></section>
</main>}
