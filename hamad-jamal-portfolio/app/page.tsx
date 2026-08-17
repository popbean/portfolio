"use client";

import { useEffect, useMemo, useState } from "react";
import { photos as sourcePhotos, videos } from "./content";

const categories = ["F&B", "Lifestyle", "People", "Product", "Fashion", "Interior", "Travel", "Corporate", "Events", "Nature"];
const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [ordered, setOrdered] = useState(sourcePhotos);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => setOrdered(shuffle(sourcePhotos)), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, []);

  const visible = useMemo(() => selected.length ? ordered.filter(photo => selected.some(tag => photo.tags.includes(tag))) : ordered, [ordered, selected]);
  const toggle = (tag: string) => setSelected(current => current.includes(tag) ? current.filter(t => t !== tag) : [...current, tag]);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <a className="brand" href="#home" onClick={closeMenu}>Hamad Jamal</a>
        <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? "Close" : "Menu"}</button>
        <nav aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a><a href="#photos" onClick={closeMenu}>Photos</a>
          <a href="#videos" onClick={closeMenu}>Videos</a><a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <p className="sidebar-foot">Photographer & filmmaker<br />Bahrain</p>
      </aside>

      <section className="hero" id="home">
        <a className="hero-panel hero-photo" href="#photos"><span>Photography</span><b>Explore stills <i>↗</i></b></a>
        <a className="hero-panel hero-film" href="#videos"><span>Film</span><b>Watch films <i>↗</i></b></a>
      </section>

      <section className="photos-section" id="photos">
        <div className="section-heading"><p>Selected work</p><h2>Photography</h2></div>
        <div className="filter-bar" aria-label="Photo filters">
          <button className={selected.length === 0 ? "active" : ""} onClick={() => setSelected([])}>All</button>
          {categories.map(tag => <button key={tag} className={selected.includes(tag) ? "active" : ""} onClick={() => toggle(tag)}>{tag}</button>)}
          <button className="shuffle" onClick={() => setOrdered(shuffle(ordered))} aria-label="Shuffle photos">Shuffle ↻</button>
        </div>
        <div className="masonry">
          {visible.map(photo => (
            <button className={`photo-card ${loaded[photo.src] ? "loaded" : ""}`} key={photo.src} onClick={() => setLightbox(photo.src)}>
              <img src={photo.src} alt={photo.alt} loading="lazy" onLoad={() => setLoaded(v => ({...v, [photo.src]: true}))} />
            </button>
          ))}
        </div>
      </section>

      <section className="videos-section" id="videos">
        <div className="section-heading light"><p>Motion work</p><h2>Films</h2></div>
        <div className="video-list">{videos.map((video, index) => <a className="video-card" key={video.title} href={video.url} target="_blank" rel="noreferrer"><img src={video.thumbnail} alt="" loading="lazy" /><span className="play">Play</span><div><b>0{index + 1}</b><h3>{video.title}</h3><small>View film ↗</small></div></a>)}</div>
      </section>

      <section className="about-section">
        <div className="portrait"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1000&q=85" alt="Portrait placeholder for Hamad Jamal" loading="lazy" /></div>
        <div className="about-copy"><p className="eyebrow">About</p><h2>Observing the space<br />between moments.</h2><p>Hamad Jamal is a photographer and filmmaker based in Bahrain. His practice moves between people, places and considered commercial imagery—always grounded in natural detail and honest atmosphere.</p><dl><div><dt>Services</dt><dd>Photography<br />Film & direction<br />Creative production</dd></div><div><dt>Based in</dt><dd>Kingdom of Bahrain<br />Available worldwide</dd></div></dl></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-intro"><p className="eyebrow">Contact</p><h2>Let&apos;s make<br />something.</h2><div className="contact-links"><a href="mailto:hello@hamadjamal.com">Email ↗</a><a href="https://instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://wa.me/97300000000" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div>
        <form action="mailto:hello@hamadjamal.com" method="post" encType="text/plain"><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Project<textarea name="message" rows={4} required /></label><button type="submit">Send enquiry ↗</button></form>
        <footer>© {new Date().getFullYear()} Hamad Jamal <span>Photography & film / Bahrain</span></footer>
      </section>

      {lightbox && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Fullscreen photo" onClick={() => setLightbox(null)}><button aria-label="Close lightbox">Close</button><img src={lightbox} alt="Selected portfolio photograph" onClick={e => e.stopPropagation()} /></div>}
      <div className="grain" aria-hidden="true" />
    </main>
  );
}
