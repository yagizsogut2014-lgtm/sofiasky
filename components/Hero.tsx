'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Check, Copy, Gamepad2, Play, Sparkles } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';

export function DiscordIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.7 5.2a18 18 0 0 0-4.5-1.4l-.6 1.3a17 17 0 0 0-5.2 0l-.6-1.3a18 18 0 0 0-4.5 1.4C1.5 9.3.7 13.3 1.1 17.2a18 18 0 0 0 5.5 2.8l1.1-1.8-1.7-.8.4-.3a13 13 0 0 0 11.2 0l.4.3-1.7.8 1.1 1.8a18 18 0 0 0 5.5-2.8c.5-4.5-.8-8.4-3.2-12Zm-11 9.5c-1.1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.8 2.2-1.9 2.2Zm6.6 0c-1.1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.8 2.2-1.9 2.2Z" /></svg>;
}

export default function Hero({ onCopy, copied, onDiscord }: { onCopy: () => void; copied: boolean; onDiscord: () => void }) {
  const [players, setPlayers] = useState(142);
  useEffect(() => {
    const timer = setInterval(() => setPlayers(current => Math.max(135, Math.min(158, current + (Math.random() > 0.5 ? 1 : -1)))), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="anasayfa">
      <div className="hero-art" aria-hidden="true"><img src={siteConfig.heroImage} alt="" fetchPriority="high" /></div>
      <div className="hero-shade" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badges"><span className="season-badge"><Sparkles size={13} /> SINIRSIZ BİR GÖKYÜZÜ</span><span className="version-badge">JAVA {siteConfig.version}</span></div>
          <h1><span className="hero-welcome">SofiaMC’ye hoş geldin —</span>Skyblock’ta<br /><span className="gradient-text">yeni bir macera!</span></h1>
          <p className="hero-description">Küçük bir adayla başla. Büyük bir hikâye yaz.<br className="desktop-break" /> Özel ekonomi, minyonlar ve bitmeyen maceralarla<br className="desktop-break" /> gökyüzündeki yerini al.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={onCopy}><Play size={17} fill="currentColor" />Şimdi Katıl<ArrowUpRight size={18} /></button>
            <button className="btn btn-secondary" onClick={onDiscord}><DiscordIcon />Discord’a Katıl</button>
          </div>
          <button className={`ip-box ${copied ? 'is-copied' : ''}`} onClick={onCopy} aria-label={`${siteConfig.ip} sunucu adresini kopyala`}>
            <span className="ip-box-icon"><Gamepad2 size={23} /></span>
            <span className="ip-box-text"><span>SUNUCU ADRESİ</span><strong>{siteConfig.ip}</strong></span>
            <span className="ip-copy-icon">{copied ? <Check size={18} /> : <Copy size={18} />}</span>
          </button>
          <div className="hero-meta"><span className="online-dot" /><strong>{players}</strong><span>/ 500 oyuncu çevrimiçi</span><span className="meta-divider" /><span className="simulation-label" title="Oyuncu sayısı tanıtım için simüle edilmektedir; gerçek sunucu durumuna bağlı değildir.">Demo sayaç</span></div>
        </div>
        <div className="island-note" aria-hidden="true"><span className="note-icon"><Sparkles size={18} /></span><span><strong>Senin adan. Senin dünyan.</strong><small>Her blok, yeni bir başlangıç.</small></span></div>
        <a className="scroll-cue" href="#ozellikler"><ArrowDown size={14} /><span>MACERAYI KEŞFET</span></a>
      </div>
    </section>
  );
}
