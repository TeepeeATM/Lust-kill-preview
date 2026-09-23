import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="campaign-home">
      <section className="fashion-hero" aria-labelledby="campaign-title">
        <div className="fashion-slides" aria-hidden="true">
          <Image className="fashion-hero-image slide-one" src="/campaign/lust-kills-after-hours.png" alt="" fill priority sizes="100vw" />
          <Image className="fashion-hero-image slide-two" src="/campaign/lust-kills-after-hours-walk.png" alt="" fill sizes="100vw" />
          <Image className="fashion-hero-image slide-three" src="/campaign/lust-kills-after-hours-detail.png" alt="" fill sizes="100vw" />
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
        <p className="campaign-note-index">LK / 01</p>
        <div>
          <p className="section-kicker">INDEPENDENT STREETWEAR</p>
          <h2 id="campaign-note-title">ARTWORK FOR<br />AFTER DARK.</h2>
        </div>
        <div className="campaign-note-copy">
          <p>Graphic pieces made in limited runs. Built to be worn, remembered, and difficult to replace.</p>
          <Link href="/about">THE STORY <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="campaign-close" aria-label="Shop the current collection">
        <div className="campaign-close-mark" aria-hidden="true">LK</div>
        <p>THE CURRENT COLLECTION</p>
        <Link href="/shop">VIEW ALL PIECES <span aria-hidden="true">↗</span></Link>
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
