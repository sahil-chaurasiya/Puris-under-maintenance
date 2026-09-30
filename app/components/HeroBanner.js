"use client";
import { useEffect, useState } from "react";

const slides = [
  { n: 1, alt: "Puris packaged drinking water bottle on a stone ledge. Pure water, healthier you." },
  { n: 2, alt: "A Puris bottle in a student's backpack. Stay hydrated, stay ahead." },
  { n: 3, alt: "A Puris bottle on a cafe table beside a laptop. Pure water for brighter days." },
];

export default function HeroBanner() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const [still, setStill] = useState(false);
  const go = (n) => setI((n + slides.length) % slides.length);

  useEffect(() => {
    setStill(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);
  useEffect(() => {
    if (paused || still) return;
    const t = setTimeout(() => go(i + 1), 5500);
    return () => clearTimeout(t);
  }, [i, paused, still]);

  return (
    <section
      className="banner"
      aria-roledescription="carousel"
      aria-label="Puris Water banners"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="banner-track">
        {slides.map((s, k) => (
          <picture key={s.n} className={k === i ? "slide on" : "slide"} aria-hidden={k !== i}>
            <source media="(max-width: 767px)" srcSet={`/banner-${s.n}-mobile.jpg`} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/banner-${s.n}-desktop.jpg`}
              alt={s.alt}
              loading={k === 0 ? "eager" : "lazy"}
              fetchPriority={k === 0 ? "high" : "auto"}
              decoding="async"
            />
          </picture>
        ))}
      </div>
      <button className="bn prev" aria-label="Previous banner" onClick={() => go(i - 1)}>&#8249;</button>
      <button className="bn next" aria-label="Next banner" onClick={() => go(i + 1)}>&#8250;</button>
      <div className="dots">
        {slides.map((_, k) => (
          <button key={k} className={k === i ? "d on" : "d"} aria-label={`Show banner ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />
        ))}
      </div>
    </section>
  );
}