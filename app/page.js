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

      <section className="drop-wrap" aria-hidden="true">
        <svg viewBox="0 0 200 260" className="drop">
          <defs>
            <clipPath id="dropClip">
              <path d="M100 8C100 8 20 100 20 160a80 80 0 0 0 160 0C180 100 100 8 100 8Z" />
            </clipPath>
          </defs>

          <path
            className="drop-bg"
            d="M100 8C100 8 20 100 20 160a80 80 0 0 0 160 0C180 100 100 8 100 8Z"
          />

          <g clipPath="url(#dropClip)">
            <g className="level">
              <g className="wave back">
                <path d="M0 20Q25 0 50 20T100 20T150 20T200 20T250 20T300 20T350 20T400 20V300H0Z" />
              </g>
              <g className="wave front">
                <path d="M0 22Q25 42 50 22T100 22T150 22T200 22T250 22T300 22T350 22T400 22V300H0Z" />
              </g>
            </g>
            <circle className="bubble b1" cx="80" cy="230" r="4" />
            <circle className="bubble b2" cx="118" cy="240" r="6" />
            <circle className="bubble b3" cx="100" cy="225" r="3" />
          </g>

          <path
            className="shine"
            d="M58 150c0-24 14-48 28-68"
            fill="none"
          />
        </svg>
      </section>
    </main>
  );
}
