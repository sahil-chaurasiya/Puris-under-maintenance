"use client";
import { useState } from "react";
import Image from "next/image";

const links = [
  ["About", "#about"],
  ["Process", "#process"],
  ["Plant", "#plant"],
  ["Range", "#range"],
  ["Coming soon", "#coming-soon"],
  
  ["Contact", "#contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="nav-in">
        <a className="logo" href="#top" aria-label="Puris Water, back to top" onClick={() => setOpen(false)}>
          <Image src="/logo-navy.png" alt="Puris" width={700} height={662} priority />
        </a>
        <button
          className="burger"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="menu" className={open ? "menu open" : "menu"}>
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)}>
              {t}
            </a>
          ))}
          <a className="btn solid sm" href="tel:+919111777175">
            Call 91117 77175
          </a>
        </nav>
      </div>
    </header>
  );
}