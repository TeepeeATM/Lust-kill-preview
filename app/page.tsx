import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="campaign-home">
      <section className="fashion-hero" aria-labelledby="campaign-title">
        <div className="fashion-slides" aria-hidden="true">
          <div className="campaign-frame slide-one"><span>LK</span><i>01 / LUST KILLS</i></div>
          <div className="campaign-frame slide-two"><span>LUST KILLS</span><i>MEMPHIS / 2026</i></div>
          <div className="campaign-frame slide-three"><span>LK</span><i>GRAPHIC STREETWEAR</i></div>
        </div>
        <div className="fashion-hero-shade" aria-hidden="true" />
        <div className="fashion-hero-grain" aria-hidden="true" />

        <div className="campaign-number" aria-hidden="true">01 / 03</div>
        <div className="fashion-hero-copy">
          <p>GRAPHIC STUDIES / 2026</p>
          <h1 id="campaign-title" className="campaign-wordmark">
            <span className="sr-only">Lust Kills</span>
            <Image src="/brand/lust-kills-editorial.png" alt="" width={2172} height={724} priority />
          </h1>
          <Link className="campaign-enter" href="/shop">
            <span>ENTER COLLECTION</span><b aria-hidden="true">↗</b>
          </Link>
        </div>

        <p className="campaign-location">AFTER HOURS<br />MEMPHIS, TN</p>
        <p className="campaign-scroll" aria-hidden="true"><span>SCROLL</span><i /></p>
      </section>

      <section className="campaign-note" aria-labelledby="campaign-note-title">
        <p className="campaign-note-index">NEW / 2026</p>
        <div>
          <p className="section-kicker">AVAILABLE NOW</p>
          <h2 id="campaign-note-title">SHOP THE<br />LATEST</h2>
        </div>
        <div className="campaign-note-copy">
          <p>Three graphic styles in sizes S–XL. Choose your color and size before checkout.</p>
          <Link href="/shop">SHOP NEW ARRIVALS <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="campaign-close" aria-label="Shop Lust Kills">
        <div className="campaign-close-mark" aria-hidden="true">LK</div>
        <p>LUST KILLS ONLINE</p>
        <Link href="/shop">SHOP COLLECTION <span aria-hidden="true">↗</span></Link>
      </section>

      <section className="campaign-social">
        <p>FOLLOW THE CAMPAIGN</p>
        <a href="https://www.instagram.com/lustkills__/" target="_blank" rel="noreferrer">
          @LUSTKILLS__ <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
