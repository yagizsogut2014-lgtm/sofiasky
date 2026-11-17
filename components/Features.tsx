import { ArrowUpRight, Coins, Gift, Pickaxe, ShieldCheck, Sparkles } from 'lucide-react';

const features = [
  { icon: Pickaxe, number: '01', label: 'SENİN DÜNYAN', title: 'Bir adadan çok daha fazlası.', description: 'Adanı geliştir, sınırlarını genişlet. Çalışkan minyonların üretime devam etsin, sen hayalindeki dünyayı kur.', color: 'purple', tag: 'Ada geliştirmeleri & minyonlar' },
  { icon: Coins, number: '02', label: 'KENDİ YOLUN', title: 'Pazarın ritmini sen belirle.', description: 'Özel ekonomide ticaret yap, müzayede evinde fırsatları yakala. Küçük bir birikim, büyük bir imparatorluk.', color: 'cyan', tag: 'Ekonomi & müzayede evi' },
  { icon: Gift, number: '03', label: 'HER GÜN YENİSİ', title: 'Her girişte yeni bir heyecan.', description: 'Günlük ödüllerini topla, özel görevleri tamamla. Bir sonraki hedefin, her zaman bir blok uzağında.', color: 'pink', tag: 'Günlük ödüller & görevler' },
  { icon: ShieldCheck, number: '04', label: 'BİRLİKTE DAHA İYİ', title: 'Burada yalnız değilsin.', description: 'Yeni dostlar edin, birlikte büyü. Dost canlısı topluluğumuz ve aktif yetkililerimiz her adımda yanında.', color: 'blue', tag: 'Topluluk & aktif yetkililer' },
];

export default function Features() {
  return (
    <section className="features-section" id="ozellikler">
      <div className="container">
        <div className="feature-heading"><div><p className="eyebrow"><Sparkles size={13} /> SIRADAN BİR SKYBLOCK DEĞİL</p><h2 className="section-title">Küçük bir ada.<br /><span className="muted-heading">Sınırsız olasılıklar.</span></h2></div><p className="section-subtitle">Hayal et, inşa et, birlikte büyü.<br />SofiaMC’de her oyuncunun hikâyesi farklı.</p></div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, ...feature }) => (
            <article key={feature.number} className={`feature-card feature-${feature.color}`}>
              <div className="feature-top"><span className="feature-icon"><Icon size={27} strokeWidth={1.6} /></span><span className="feature-number">{feature.number}</span></div>
              <p className="feature-label">{feature.label}</p><h3>{feature.title}</h3><p className="feature-description">{feature.description}</p>
              <div className="feature-bottom"><span>{feature.tag}</span><ArrowUpRight size={15} /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
