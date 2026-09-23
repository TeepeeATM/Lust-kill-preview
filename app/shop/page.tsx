import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export const metadata = { title: "Shop Lust Kills" };

export default function Shop() {
  return (
    <main className="page-shell catalog-page">
      <header className="catalog-head">
        <p className="section-kicker">LUST KILLS ONLINE</p>
        <h1>SHOP ALL</h1>
        <p>Shop the current graphic tees and long sleeves. Select a style to choose your color and size.</p>
        <div className="collection-notes">
          <span>3 PRODUCTS</span><span>SIZES S–XL</span><span>SECURE CHECKOUT</span>
        </div>
      </header>
      <nav className="jump-nav" aria-label="Shop information">
        <a href="#catalog">PRODUCTS</a><a href="#before-ordering">ORDER INFO</a>
        <Link href="/shipping-returns">SHIPPING + RETURNS</Link><Link href="/faq">FAQ</Link>
      </nav>
      <section id="catalog">
        <div className="catalog-tools"><span>{products.length} PRODUCTS</span><span>STRIPE CHECKOUT</span></div>
        <div className="product-grid catalog">{products.map((product,index)=><ProductCard key={product.slug} product={product} index={index}/>)}</div>
      </section>
      <section className="buying-guide" id="before-ordering">
        <p className="section-kicker">CUSTOMER CARE</p>
        <h2>ORDER INFORMATION</h2>
        <div>
          <article><b>01 / SIZING</b><p>Available in S–XL. Confirm your selected size and color before adding an item to your bag.</p></article>
          <article><b>02 / PAYMENT</b><p>Stripe securely processes card payments at checkout.</p></article>
          <article><b>03 / DELIVERY</b><p>Orders process in 2–4 business days. Estimated U.S. delivery is 3–7 business days after shipment.</p></article>
          <article><b>04 / RETURNS</b><p>Eligible unworn items can be requested for return within 14 calendar days of delivery.</p></article>
        </div>
        <Link className="text-link" href="/shipping-returns">SHIPPING + RETURN POLICY →</Link>
      </section>
    </main>
  );
}
