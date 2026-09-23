import Link from "next/link";

export const metadata = { title: "Story" };

export default function About() {
  return (
    <main className="long-page story-page">
      <header className="story-header">
        <p className="section-kicker">THE STORY</p>
        <h1>LUST KILLS</h1>
        <p>Independent graphic streetwear led by the artwork</p>
      </header>

      <nav className="jump-nav" aria-label="On this page">
        <a href="#idea">THE IDEA</a>
        <a href="#work">THE WORK</a>
        <a href="#shop">THE COLLECTION</a>
      </nav>

      <section className="story-section" id="idea">
        <p className="section-number">01</p>
        <div>
          <h2>THE IDEA</h2>
          <p>Lust Kills started with original artwork and a simple goal: make graphic clothes people would actually wear.</p>
          <p>Each release begins with the image. The garment, color, and placement are chosen around it.</p>
        </div>
      </section>

      <section className="story-section" id="work">
        <p className="section-number">02</p>
        <div>
          <h2>THE WORK</h2>
          <p>The graphics pull from vintage print, music, money, attraction, and everyday pressure.</p>
          <p>Large placements, worn-in color, and strong contrast keep every piece direct.</p>
        </div>
      </section>

      <section className="story-section story-shop" id="shop">
        <p className="section-number">03</p>
        <div>
          <h2>AVAILABLE NOW</h2>
          <p>Shop the Money Calling Tee, Desire Pays Long Sleeve, and Fatal Attraction Tee in sizes S–XL.</p>
          <Link className="primary-button inline" href="/shop">SHOP COLLECTION →</Link>
        </div>
      </section>
    </main>
  );
}
