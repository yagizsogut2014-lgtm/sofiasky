'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy, ExternalLink, Link2, X } from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import CommunitySections from './CommunitySections';

export default function SofiaSite() {
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState('');
  const [dialogTopic, setDialogTopic] = useState('');
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current); }, []);

  async function copyIP() {
    try {
      let clipboardCopied = false;
      if (navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(siteConfig.ip);
          clipboardCopied = true;
        } catch {
          // Embedded previews can deny the modern API; try the browser fallback.
        }
      }
      if (!clipboardCopied) {
        const input = document.createElement('textarea');
        input.value = siteConfig.ip;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        const successful = document.execCommand('copy');
        input.remove();
        if (!successful) throw new Error('Panoya erişilemiyor');
      }
      setCopied(true);
      setToast('Kopyalandı! Minecraft’ta sunucu adresine yapıştır.');
    } catch {
      setToast(`Panoya erişilemedi. Adresi elle kopyala: ${siteConfig.ip}`);
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => { setCopied(false); setToast(''); }, 4500);
  }

  function unavailable(topic: string) {
    setDialogTopic(topic);
    dialog.current?.showModal();
  }

  function openDiscord() {
    if (siteConfig.discordUrl) window.open(siteConfig.discordUrl, '_blank', 'noopener,noreferrer');
    else unavailable('Discord');
  }

  return (
    <>
      <a className="skip-link" href="#ana-icerik">İçeriğe geç</a>
      <Navbar onCopy={copyIP} copied={copied} />
      <main id="ana-icerik">
        <Hero onCopy={copyIP} copied={copied} onDiscord={openDiscord} />
        <div className="announcement"><div className="container announcement-inner"><span className="announcement-dot" /><p><strong>Kendi adan, kendi maceran.</strong><span> İlk bloğu yerleştirmeye hazır mısın?</span></p><button onClick={copyIP}>Minecraft {siteConfig.version}<ExternalLink size={12} /></button></div></div>
        <Features />
        <CommunitySections onUnavailable={unavailable} onCopy={copyIP} />
      </main>
      <div className={`toast ${toast ? 'toast-visible' : ''}`} role="status" aria-live="polite"><span className="toast-icon">{copied ? <Check size={18} /> : <Copy size={18} />}</span><span>{toast}</span></div>
      <dialog ref={dialog} className="link-dialog" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <button className="dialog-close" aria-label="Pencereyi kapat" onClick={() => dialog.current?.close()}><X size={20} /></button>
        <span className="dialog-symbol"><Link2 size={30} /></span>
        <p className="eyebrow">YAKINDA BURADA</p><h2>{dialogTopic} bağlantısı<br />henüz eklenmedi.</h2>
        <p>Bu alan sunucu sahibinin gerçek bağlantısını eklemesi için hazır. Şimdilik maceraya Minecraft üzerinden katılabilirsin.</p>
        <div className="dialog-address"><span>SUNUCU ADRESİ</span><strong>{siteConfig.ip}</strong></div>
        <button className="btn btn-primary" onClick={() => { dialog.current?.close(); void copyIP(); }}><Copy size={16} />Sunucu IP’sini Kopyala</button>
        <small>Demo bağlantı · yönlendirme ve ödeme yapılmaz</small>
      </dialog>
    </>
  );
}
