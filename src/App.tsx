import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Sparkles, BookOpen, Fingerprint, MapPin, Ghost } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="sira-container">
      <header className="sira-header">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="rune-glow">SIRA DINARI</h1>
          <p>GUARDIANS OF THE ETERNAL FRAGMENT</p>
        </motion.div>
      </header>

      <main className="sira-main">
        <section className="hero-section">
          <div className="hero-img-wrap">
            <img src="/images/sira-hero.png" alt="Sira Gateway" />
            <div className="img-overlay" />
          </div>
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="parchment hero-content"
          >
            <h2 className="text-center">The Codex of Echoes</h2>
            <p>We are the keepers of the Deep Lore. Before the Mandate, before the Axium, there was the Resonance. We study the Kybian not as fuel, but as memory.</p>
            <div className="flex-center mt-20">
              <button className="sira-btn">Decipher Runes</button>
            </div>
          </motion.div>
        </section>

        <section className="features-grid">
          <div className="parchment feature-card">
            <BookOpen size={32} className="sira-gold" />
            <h3>ANCIENT TEXTS</h3>
            <p>Recovered scrolls from the Pre-Fracture era. Translated for the worthy.</p>
          </div>
          <div className="parchment feature-card">
            <Sparkles size={32} className="sira-gold" />
            <h3>RESONANCE RITUALS</h3>
            <p>Harness the true frequency of Kybian-7 without industrial corruption.</p>
          </div>
          <div className="parchment feature-card">
            <MapPin size={32} className="sira-gold" />
            <h3>HIDDEN SANCTUARIES</h3>
            <p>Our locations are carved into the void, visible only to the enlightened.</p>
          </div>
        </section>

        <section className="artifact-display parchment">
           <div className="artifact-info">
             <Fingerprint size={48} className="rune-glow" />
             <h2>THE PRIMORDIAL CORE</h2>
             <p>A fragment of the original Kybian sun. It hums with the voices of a billion years.</p>
             <div className="status-tag">STATUS: VIBRATING</div>
           </div>
        </section>
      </main>

      <footer className="sira-footer">
        <div className="footer-links">
           <a href="https://kybian.com">HUB</a>
           <a href="#rituals">RITUALS</a>
           <a href="#lore">LORE</a>
        </div>
        <p>THE DINARI WILL ENDURE. THE RESONANCE NEVER FADES.</p>
      </footer>
    </div>
  );
}

export default App;
