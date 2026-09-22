import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function Home(){return <main>
  <section className="campaign-hero" aria-labelledby="campaign-title">
    <h1 id="campaign-title" className="sr-only">Lust Kills</h1>
    <div className="campaign-art"><Image className="campaign-image" src="/midnight-memphis-v2.webp" alt="Two models in dark streetwear beside a black car on a wet street at night" width={1536} height={1024} priority sizes="100vw"/></div>
    <div className="campaign-bar"><div><p>LUST KILLS / AFTER HOURS</p><span>Artwork made to be worn.</span></div><Link className="primary-button inline" href="/shop">SHOP THE COLLECTION →</Link></div>
  </section>
  <section className="availability-strip" aria-label="Store information"><span>AVAILABLE NOW</span><span>SIZES S–XL</span><span>CURRENT COLLECTION</span><Link href="/shipping-returns">SHIPPING + RETURNS →</Link></section>
  <section className="drop-section"><div className="section-heading"><div><p className="section-kicker">THE COLLECTION</p><h2>AVAILABLE PIECES</h2></div><Link href="/shop">VIEW ALL PIECES →</Link></div><div className="product-grid">{products.slice(0,4).map((product,index)=><ProductCard key={product.slug} product={product} index={index}/>)}</div></section>
  <section className="story-tease"><p className="section-kicker">ABOUT LUST KILLS</p><h2>ARTWORK MADE<br/>TO BE WORN.</h2><div><p>Lust Kills makes graphic streetwear with bold artwork and a clear identity. Each release is designed to stand on its own and stay in rotation.</p><Link href="/about">READ OUR STORY →</Link></div></section>
  <section className="service-row" aria-label="Shopping details"><article><b>01</b><h3>SIZES S–XL</h3><p>Every piece in the current collection is available from small through extra large.</p></article><article><b>02</b><h3>SECURE CHECKOUT</h3><p>Stripe handles payment securely when you are ready to order.</p></article><article><b>03</b><h3>SHIPPING + RETURNS</h3><p>Check delivery estimates and return requirements before placing your order.</p><Link href="/shipping-returns">VIEW POLICY →</Link></article></section>
  <section className="signal"><p className="section-kicker">FOLLOW LUST KILLS</p><h2>STAY UPDATED.</h2><p>See new pieces, release dates, and restock updates on Instagram.</p><a className="primary-button inline" href="https://www.instagram.com/lustkills__/" target="_blank" rel="noreferrer">FOLLOW @LUSTKILLS__ →</a></section>
</main>}
