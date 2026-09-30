import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Nav from "./components/Nav";
import HeroBanner from "./components/HeroBanner";
import Icon from "./components/Icon";
import EnquiryForm from "./components/EnquiryForm";
import { steps, zones, serves } from "./data";

const sizes = [
  ["2 L", "Home and office"],
  ["1 L", "Table and desk"],
  ["500 ml", "Bag and travel"],
  ["250 ml", "Events and small hands"],
];
const why = [
  ["Added minerals", "Packaged drinking water with added minerals in every bottle."],
  ["Batch-coded", "Batch number, MFG and EXP printed on each bottle."],
  ["FSSAI licensed", "Lic. No. 11422030000121."],
  ["Best within 6 months", "Drink within six months of manufacture, then crush the bottle."],
];
const faqs = [
  ["What is Purova?", "Purova is our packaged drinking water with added minerals, made by Puris Food & Beverages in Mandideep, Madhya Pradesh."],
  ["Which sizes can I order?", "2 litre, 1 litre, 500 ml and 250 ml."],
  ["How long does a bottle stay good?", "Best before 6 months from the date of manufacture, printed on the bottle."],
  ["Can I order in bulk or become a dealer?", "Yes. Fill in the enquiry form or call +91 91117 77175."],
  ["Why does the label say to crush the bottle?", "So it isn't refilled or reused, and takes less space in the recycling bin."],
];
const ticker = ["With added minerals", "2 L", "1 L", "500 ml", "250 ml", "FSSAI licensed", "Batch-coded", "Made in Mandideep"];

const has = (f) => fs.existsSync(path.join(process.cwd(), "public", f));
const Wave = ({ fill, flip }) => (
  <svg className={flip ? "wave flip" : "wave"} viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
    <path fill={fill} d="M0 60c240 60 480 60 720 0s480-60 720 0v60H0z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <a className="announce" href="#coming-soon"><span className="dot" /> Something new from Puris is being unveiled. See the teaser</a>
      <Nav />

      <main id="top">
        <HeroBanner />

        {/* HERO */}
        <section className="hero">
          <div className="bubbles" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <i key={i} style={{ "--i": i }} />)}</div>
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="pill">Puris Food &amp; Beverages, Mandideep</p>
              <h1>Pure water, packed with care.</h1>
              <p className="lead">Purova is packaged drinking water with added minerals, treated, tested and bottled at our own plant in Mandideep.</p>
              <div className="actions">
                <a className="btn solid" href="#enquire">Order or become a dealer</a>
                <a className="btn line" href="#process">See how it&rsquo;s made</a>
              </div>
            </div>
            <div className="hero-art">
              <span className="ring" aria-hidden="true" />
              <span className="vword" aria-hidden="true">PUROVA</span>
              <Image src="/puris-bottle.png" alt="Puris packaged drinking water 1 litre bottle" width={375} height={665} priority sizes="(max-width: 860px) 60vw, 380px" className="hero-bottle" />
              <span className="chip c1">With added minerals</span>
              <span className="chip c2">FSSAI licensed</span>
              <span className="chip c3">4 sizes</span>
            </div>
          </div>
          <svg className="wave-anim" viewBox="0 0 2880 160" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#bcd3f7" fillOpacity=".6" d="M0 80c240 60 480 60 720 0s480-60 720 0 480 60 720 0 480-60 720 0v80H0z" />
          </svg>
          <svg className="wave-anim w2" viewBox="0 0 2880 160" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#14205f" d="M0 100c240-50 480-50 720 0s480 50 720 0 480-50 720 0 480 50 720 0v60H0z" />
          </svg>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>{[...ticker, ...ticker, ...ticker].map((t, i) => <span key={i}>{t}</span>)}</div>
        </div>

        {/* ABOUT */}
        <section id="about" className="sec">
          <div className="wrap split">
            <Image src="/puris-bottle.png" alt="Puris packaged drinking water 1 litre bottle" width={375} height={665} sizes="(max-width: 860px) 70vw, 340px" className="photo photo-png" />
            <div>
              <h2>Made close to home, checked bottle by bottle.</h2>
              <p className="lead">Puris Food &amp; Beverages runs its own bottling unit in the New Industrial Area, Mandideep. Purova is the label we put our name behind.</p>
              <dl className="why">{why.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="dark">
          <Wave fill="#fff" flip />
          <div className="wrap">
            <h2>From source to sealed cap in eight steps.</h2>
            <p className="lead light">Every bottle of Purova follows the same path, so every bottle tastes the same.</p>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <span className="ico"><Icon name={s.icon} /></span>
                  <span className="n">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <div className="shots">
              <figure>
                <div className="shot"><Image src="/process-filling.jpg" alt="Labels being applied to bottles on the filling line" fill sizes="(max-width: 520px) 100vw, 400px" style={{ objectFit: "cover" }} /></div>
                <figcaption><strong>Steps 7 and 8</strong> Filled, capped and labelled on our filling line.</figcaption>
              </figure>
              <figure>
                <div className="shot"><Image src="/process-packing.jpeg" alt="Bottles being shrink-wrapped into packs" fill sizes="(max-width: 520px) 100vw, 400px" style={{ objectFit: "cover" }} /></div>
                <figcaption><strong>Then packed</strong> Bottles are shrink-wrapped into packs for dispatch.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* PLANT */}
        <section id="plant" className="sec plant">
          <div className="wrap">
            <h2>Inside our Mandideep plant</h2>
            <p className="lead">Four areas, each kept separate so the water stays clean from first filter to final carton.</p>
            <div className="zones">
              {zones.map((z) => (
                <article key={z.title} className="zone">
                  <div className="zone-img">
                    {has(z.img) ? <Image src={`/${z.img}`} alt={z.title} fill sizes="(max-width: 860px) 100vw, 260px" style={{ objectFit: "cover" }} /> : <Icon name={z.icon} size={64} />}
                  </div>
                  <h3>{z.title}</h3>
                  <p>{z.text}</p>
                </article>
              ))}
            </div>
            <ul className="serves">{serves.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </section>

        {/* RANGE */}
        <section id="range" className="sec tint">
          <div className="wrap">
            <h2>Four sizes of Purova</h2>
            <div className="range">
              <Image src="/puris-range-poster.jpg" alt="Puris packaged drinking water bottles in four sizes: 2 litre, 1 litre, 500 ml and 250 ml" width={1122} height={1402} sizes="(max-width: 860px) 100vw, 620px" className="range-img" />
              <div>
                <ul className="sizes">{sizes.map(([s, u]) => <li key={s}><strong>{s}</strong><span>{u}</span></li>)}</ul>
                <div className="classic">
                  <Image src="/puris-bottle.png" alt="Puris packaged drinking water 1 litre bottle" width={375} height={665} sizes="64px" />
                  <div><h3>Puris, 1 litre</h3><p>Our original Puris bottle, from an ISO 22000:2018 certified company.</p></div>
                </div>
                <a className="btn solid" href="#enquire">Enquire about sizes</a>
              </div>
            </div>
          </div>
        </section>

        {/* COMING SOON */}
        <section id="coming-soon" className="soon">
          <Image src="/coming-soon.jpg" alt="A bottle covered in red velvet on a marble stand, with the words Coming Soon" width={1122} height={1402} sizes="(max-width: 860px) 100vw, 900px" className="soon-img" />
          <div className="soon-cta">
            <h2>The cloth comes off soon.</h2>
            <p>A new bottle from Puris is nearly ready. Message us and we&rsquo;ll tell you first.</p>
            <div className="actions center">
              <a className="btn gold" href="https://wa.me/919111777175?text=Please%20tell%20me%20when%20the%20new%20Puris%20bottle%20launches." target="_blank" rel="noopener noreferrer">Tell me on WhatsApp</a>
              <a className="btn goldline" href="https://www.instagram.com/puris_water/" target="_blank" rel="noopener noreferrer">Follow @puris_water</a>
            </div>
          </div>
        </section>

        {/* ENQUIRE */}
        <section id="enquire" className="sec">
          <div className="wrap split-c">
            <div>
              <h2>Order, bulk supply or dealership.</h2>
              <p className="lead">Tell us what you need. Your enquiry opens in WhatsApp, and we reply the same day.</p>
              <p className="lead">Prefer to talk? <a href="tel:+919111777175">+91 91117 77175</a></p>
            </div>
            <EnquiryForm />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="sec tint">
          <div className="wrap narrow">
            <h2>Questions people ask</h2>
            {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact">
          <div className="wrap split-c">
            <div>
              <h2>Visit or call us.</h2>
              <div className="actions">
                <a className="btn white" href="tel:+919111777175">Call 91117 77175</a>
                <a className="btn whiteline" href="https://wa.me/919111777175" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
              </div>
            </div>
            <address>
              <strong>Puris Food &amp; Beverages</strong>
              F-25, Phase II, New Industrial Area, Mandideep,<br />Teh. Goharganj, Dist. Raisen (M.P.) 462046<br />
              <a href="mailto:purisfoodandbeverages@gmail.com">purisfoodandbeverages@gmail.com</a><br />
              <a href="https://www.instagram.com/puris_water/" target="_blank" rel="noopener noreferrer">Instagram: @puris_water</a><br />
              <a href="https://www.facebook.com/puris-water" target="_blank" rel="noopener noreferrer">Facebook: puris-water</a>
            </address>
          </div>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap">
          <Image src="/logo-white.png" alt="Puris" width={700} height={662} className="foot-logo" />
          <span>&copy; {new Date().getFullYear()} Puris Food &amp; Beverages. Purova&trade; is a trademark of its owner.</span>
          <span>FSSAI Lic. No. 11422030000121</span>
        </div>
      </footer>
    </>
  );
}