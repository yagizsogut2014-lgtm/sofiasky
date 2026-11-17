'use client';

import { useState } from 'react';
import { Check, ChevronRight, Copy, Menu, X } from 'lucide-react';
import Brand from './Brand';

const navigation = [
  { name: 'Ana Sayfa', href: '#anasayfa' },
  { name: 'Özellikler', href: '#ozellikler' },
  { name: 'Mağaza', href: '#magaza' },
  { name: 'Oylama', href: '#oylama' },
  { name: 'Kurallar', href: '#kurallar' },
];

export default function Navbar({ onCopy, copied }: { onCopy: () => void; copied: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a href="#anasayfa" aria-label="SofiaMC ana sayfa" onClick={() => setMenuOpen(false)}><Brand /></a>
        <nav aria-label="Ana gezinme" className="desktop-nav">
          {navigation.map((item, index) => <a key={item.href} className={index === 0 ? 'nav-active' : ''} href={item.href}>{item.name}</a>)}
          <a href="#topluluk" className="nav-discord">Discord <ChevronRight size={12} /></a>
        </nav>
        <div className="nav-actions">
          <button className={`nav-copy ${copied ? 'is-copied' : ''}`} onClick={onCopy} aria-label={copied ? 'Sunucu IP’si kopyalandı' : 'Sunucu IP’sini kopyala'}>
            {copied ? <Check size={16} /> : <Copy size={15} />}<span>{copied ? 'Kopyalandı!' : 'IP’yi Kopyala'}</span>
          </button>
          <button className="mobile-toggle" aria-label={menuOpen ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav container" id="mobile-menu" aria-label="Mobil gezinme">
          {[...navigation, { name: 'Discord', href: '#topluluk' }].map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.name}<ChevronRight size={16} /></a>)}
        </nav>
      )}
    </header>
  );
}
