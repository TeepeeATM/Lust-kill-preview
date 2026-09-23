import Link from "next/link";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <main className="long-page contact-page">
      <header className="contact-header">
        <p className="section-kicker">CUSTOMER CARE</p>
        <h1>CONTACT</h1>
        <p>Questions about an order, size, or return? Send Lust Kills a message on Instagram.</p>
        <a className="primary-button inline" href="https://www.instagram.com/lustkills__/" target="_blank" rel="noreferrer">
          MESSAGE @LUSTKILLS__ ↗
        </a>
      </header>

      <section className="support-list" aria-labelledby="support-heading">
        <div className="support-list-head">
          <p className="section-kicker">BEFORE YOU MESSAGE</p>
          <h2 id="support-heading">WHAT TO INCLUDE</h2>
        </div>
        <article>
          <span>01</span>
          <h3>ORDER HELP</h3>
          <p>Your full name, order number, and a short description of what you need.</p>
        </article>
        <article>
          <span>02</span>
          <h3>RETURN OR WRONG ITEM</h3>
          <p>Your order number, the item, and clear photos if it arrived damaged or incorrect.</p>
        </article>
        <article>
          <span>03</span>
          <h3>SIZE QUESTION</h3>
          <p>The product name and the size you are considering. Current pieces are available in S–XL.</p>
        </article>
      </section>

      <section className="contact-resources">
        <p>Looking for store information?</p>
        <div>
          <Link href="/shipping-returns">SHIPPING + RETURNS ↗</Link>
          <Link href="/faq">FAQ ↗</Link>
        </div>
      </section>
    </main>
  );
}
