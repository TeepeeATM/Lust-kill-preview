import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function Home(){return <main>
  <section className="campaign-hero" aria-labelledby="campaign-title">
    <h1 id="campaign-title" className="sr-only">Lust Kills</h1>
    <div className="campaign-art"><Image className="campaign-image" src="/midnight-memphis.webp" alt="Lust Kills nighttime campaign outside a Memphis storefront, with models gathered around a car" width={1536} height={1024} priority sizes="100vw"/></div>
    <div className="campaign-bar"><div><p>LUST KILLS / MEMPHIS, TN</p><span>Built different for what happens after.</span></div><Link className="primary-button inline" href="/shop">SHOP THE COLLECTION →</Link></div>
  </section>
  <section className="availability-strip" aria-label="Store information"><span>AVAILABLE NOW</span><span>SIZES S–XL</span><span>SECURE STRIPE CHECKOUT</span><Link href="/shipping-returns">SHIPPING + RETURNS →</Link></section>
  <section className="drop-section"><div className="section-heading"><div><p className="section-kicker">THE COLLECTION</p><h2>AVAILABLE PIECES</h2></div><Link href="/shop">VIEW ALL PIECES →</Link></div><div className="product-grid">{products.slice(0,4).map((product,index)=><ProductCard key={product.slug} product={product} index={index}/>)}</div></section>
  <section className="story-tease"><p className="section-kicker">THE BRAND</p><h2>ARTWORK MADE<br/>TO BE WORN.</h2><div><p>Lust Kills turns original artwork into graphic streetwear with a clear point of view. Designed to stand out, made for everyday rotation.</p><Link href="/about">ABOUT LUST KILLS →</Link></div></section>
  <section className="service-row" aria-label="Shopping details"><article><b>01</b><h3>SIZES S–XL</h3><p>Every piece in the current collection is offered from small through extra large.</p></article><article><b>02</b><h3>SECURE CHECKOUT</h3><p>Payments are processed securely through Stripe.</p></article><article><b>03</b><h3>SHIPPING + RETURNS</h3><p>Read the complete timing, eligibility, and return details before ordering.</p><Link href="/shipping-returns">VIEW POLICY →</Link></article></section>
  <section className="signal"><p className="section-kicker">FOLLOW LUST KILLS</p><h2>AFTER HOURS.</h2><p>New pieces, release updates, and what comes next.</p><a className="primary-button inline" href="https://www.instagram.com/lustkills__/" target="_blank" rel="noreferrer">FOLLOW @LUSTKILLS__ →</a></section>
</main>}
