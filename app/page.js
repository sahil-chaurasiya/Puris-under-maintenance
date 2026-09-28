import Image from "next/image";

export default function Home() {
  return (
    <main className="page">
      <section className="copy">
        <p className="brand">Puris Packaged Drinking Water</p>
        <h1>We&rsquo;re topping up the website.</h1>
        <p className="lead">
          Our site is under maintenance and will be back shortly. Orders and enquiries are open
          as usual.
        </p>

        <div className="actions">
          <a className="btn primary" href="tel:+919111777175">
            Call 91117 77175
          </a>
          <a
            className="btn ghost"
            href="https://www.instagram.com/puris_water/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow @puris_water
          </a>
        </div>

        <address>
          Siddham Enterprise &amp; Flourish and Nourish F&amp;B
          <br />
          Plot No. F-25, Phase-2, New Industrial Area, Mandideep 462046
        </address>
      </section>

      <section className="bottle-wrap">
        <Image
          src="/puris-bottle.png"
          alt="Puris Packaged Drinking Water 1 litre bottle"
          width={496 * 0.58}
          height={900 * 0.58}
          className="bottle"
          priority
        />
      </section>
    </main>
  );
}