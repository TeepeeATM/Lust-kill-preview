import Link from "next/link";

export default function Home(){return <main>
  <section className="identity-hero" aria-labelledby="campaign-title">
    <div className="identity-grid" aria-hidden="true"><span/><span/><span/><span/></div>
    <div className="identity-index" aria-hidden="true">LK</div>
    <div className="identity-copy"><p>CURRENT COLLECTION / AVAILABLE NOW</p><h1 id="campaign-title">GRAPHIC<br/>STREETWEAR</h1><Link className="primary-button inline" href="/shop">VIEW COLLECTION →</Link></div>
    <div className="identity-meta"><span>03 PIECES</span><span>SIZES S–XL</span><span>SECURE CHECKOUT</span></div>
  </section>
  <section className="availability-strip" aria-label="Store information"><span>CURRENT COLLECTION / AVAILABLE NOW</span><Link href="/shop">SHOP COLLECTION →</Link></section>
  <section className="collection-tease"><div><p className="section-kicker">CURRENT COLLECTION</p><h2>GRAPHIC<br/>STREETWEAR</h2></div><div><Link className="primary-button inline" href="/shop">VIEW ALL PIECES →</Link></div></section>
  <section className="story-tease"><p className="section-kicker">ABOUT LUST KILLS</p><h2>THE BRAND</h2><div><p>Independent graphic streetwear built around artwork, attitude, and limited releases.</p><Link href="/about">READ THE STORY →</Link></div></section>
  <section className="signal"><p className="section-kicker">LUST KILLS / INSTAGRAM</p><a className="primary-button inline" href="https://www.instagram.com/lustkills__/" target="_blank" rel="noreferrer">@LUSTKILLS__ →</a></section>
</main>}
