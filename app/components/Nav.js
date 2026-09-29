"use client";
import { useState } from "react";

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
        <a className="logo" href="#top" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M12 2C8 8 5 11.5 5 15a7 7 0 0 0 14 0c0-3.5-3-7-7-13z" fill="currentColor" />
          </svg>
          Puris Water
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