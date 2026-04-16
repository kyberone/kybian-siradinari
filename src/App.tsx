import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, BookOpen, Fingerprint, Eye } from 'lucide-react';
import './App.css';

const runes = [
  { symbol: 'ᚲ', name: 'KYB', meaning: 'The Source of Light' },
  { symbol: 'ᚠ', name: 'FEHU', meaning: 'The Flow of Energy' },
  { symbol: 'ᚦ', name: 'THUR', meaning: 'The Fracture Point' },
  { symbol: 'ᚨ', name: 'ANSU', meaning: 'The Voice of the Deep' },
  { symbol: 'ᚱ', name: 'RAID', meaning: 'The Veil-Diver Path' },
];

function App() {
  const [selectedRune, setSelectedRune] = useState<typeof runes[0] | null>(null);
  const [resonance, setResonance] = useState(1);
  const [showCodex, setShowCodex] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setResonance(r => (r === 1 ? 1.05 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sira-container" style={{ transform: `scale(${resonance})` }}>
      <div className="parchment-texture" />
      <div className="rune-float-bg">
        {runes.map((r, i) => (
          <span key={i} className="floating-rune">{r.symbol}</span>
        ))}
      </div>

      <header className="sira-header">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 className="rune-glow">SIRA DINARI</h1>
          <p className="subtitle">GUARDIANS OF THE ETERNAL FRAGMENT</p>
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
              <button className="sira-btn" onClick={() => setShowCodex(!showCodex)}>
                {showCodex ? 'CLOSE CODEX' : 'DECIPHER RUNES'}
              </button>
            </div>
          </motion.div>
        </section>

        <AnimatePresence>
          {showCodex && (
            <motion.section 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="rune-grid-section parchment"
            >
              <h3>ANCIENT RUNE TRANSLATION</h3>
              <div className="rune-grid">
                {runes.map((r, i) => (
                  <div 
                    key={i} 
                    className={`rune-card ${selectedRune?.name === r.name ? 'active' : ''}`}
                    onClick={() => setSelectedRune(r)}
                  >
                    <span className="rune-symbol">{r.symbol}</span>
                    <span className="rune-name">{r.name}</span>
                  </div>
                ))}
              </div>
              {selectedRune && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rune-meaning"
                >
                  <Eye size={16} /> <strong>{selectedRune.name}:</strong> {selectedRune.meaning}
                </motion.div>
              )}
            </motion.section>
          )}
        </AnimatePresence>

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
             <div className="status-tag">STATUS: VIBRATING [144.2Hz]</div>
           </div>
           <div className="resonance-waves">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="wave" style={{ animationDelay: `${i * 0.5}s` }} />
              ))}
           </div>
        </section>
      </main>

      <footer className="sira-footer">
        <div className="footer-links">
           <a href="https://kybian.com">HUB</a>
           <a href="#rituals">RITUALS</a>
           <a href="#lore">LORE</a>
        </div>
        <p className="legal">THE DINARI WILL ENDURE. THE RESONANCE NEVER FADES.</p>
      </footer>
    </div>
  );
}

export default App;

