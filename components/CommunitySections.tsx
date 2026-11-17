'use client';

import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Copy,
  Crown,
  Gem,
  HeartHandshake,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  Vote,
} from 'lucide-react';
import { siteConfig } from '@/lib/site-config';
import styles from './CommunitySections.module.css';

type CommunitySectionsProps = {
  onUnavailable: (topic: string) => void;
  onCopy: () => void;
};

const ranks = [
  {
    name: 'VIP',
    price: '₺99',
    detail: 'Günlük ayrıcalıklara ilk adım',
    icon: Gem,
    features: ['Özel sohbet etiketi', 'Kozmetik parçacık efektleri', 'Ada yaşam kalitesi bonusları'],
  },
  {
    name: 'MVP',
    price: '₺199',
    detail: 'Daha fazlasını isteyenlere',
    icon: Crown,
    popular: true,
    features: ['VIP içeriğinin tamamı', 'Ek kozmetik seçenekleri', 'Ada yönetiminde ek kolaylıklar'],
  },
  {
    name: 'Sofia+',
    price: '₺349',
    detail: 'Macerana özel bir dokunuş',
    icon: Sparkles,
    features: ['MVP içeriğinin tamamı', 'Özel profil kozmetikleri', 'Ek kişiselleştirme seçenekleri'],
  },
];

const rules = [
  {
    title: 'Birbirine saygılı ol',
    text: 'Sohbeti herkes için keyifli tut. Hakaret, taciz, ayrımcılık ve kişisel bilgileri izinsiz paylaşmak kabul edilemez.',
    icon: HeartHandshake,
  },
  {
    title: 'Adil oyna; hile kullanma',
    text: 'Haksız avantaj sağlayan hilelerden, istismar edilen açıklardan ve oyun deneyimini bozan otomasyonlardan uzak dur.',
    icon: ShieldCheck,
  },
  {
    title: 'Ekonomiyi dürüstçe kullan',
    text: 'Takaslarda açık ve dürüst ol. Dolandırıcılık, gerçek para karşılığı oyun içi işlem ve ekonomi açıklarını kötüye kullanmaktan kaçın.',
    icon: Gem,
  },
  {
    title: 'Adalarda komşuluğa dikkat et',
    text: 'Başka oyuncuların adalarına ve yapılarına izinsiz müdahale etme; ortak alanları ve topluluk düzenini gözet.',
    icon: Sparkles,
  },
];

function DiscordMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.discordMark}>
      <path
        fill="currentColor"
        d="M19.73 5.35a18.3 18.3 0 0 0-4.53-1.4.07.07 0 0 0-.08.04c-.2.36-.42.83-.57 1.2a16.9 16.9 0 0 0-5.1 0c-.15-.38-.38-.84-.58-1.2a.08.08 0 0 0-.08-.04 18.2 18.2 0 0 0-4.53 1.4.07.07 0 0 0-.03.03C1.34 9.58.55 13.68.94 17.73c0 .02.02.04.03.05a18.4 18.4 0 0 0 5.55 2.8.08.08 0 0 0 .09-.03c.43-.59.81-1.22 1.14-1.88a.08.08 0 0 0-.04-.1 12 12 0 0 1-1.74-.83.08.08 0 0 1-.01-.13l.35-.28a.08.08 0 0 1 .08-.01c3.65 1.67 7.6 1.67 11.2 0a.08.08 0 0 1 .09.01l.35.28a.08.08 0 0 1-.01.13c-.55.33-1.13.61-1.74.83a.08.08 0 0 0-.04.1c.34.66.72 1.29 1.14 1.88a.08.08 0 0 0 .09.03 18.3 18.3 0 0 0 5.56-2.8.08.08 0 0 0 .03-.05c.46-4.68-.77-8.75-3.29-12.35a.06.06 0 0 0-.03-.03ZM8.2 14.87c-1.1 0-2-.99-2-2.21 0-1.22.88-2.21 2-2.21 1.13 0 2.02 1 2 2.21 0 1.22-.88 2.21-2 2.21Zm7.6 0c-1.1 0-2-.99-2-2.21 0-1.22.88-2.21 2-2.21 1.14 0 2.02 1 2 2.21 0 1.22-.87 2.21-2 2.21Z"
      />
    </svg>
  );
}

export default function CommunitySections({ onUnavailable, onCopy }: CommunitySectionsProps) {
  const storeUrl = siteConfig.storeUrl;
  const discordUrl = siteConfig.discordUrl;

  return (
    <>
      <section id="magaza" className={styles.ranksSection} aria-labelledby="ranks-heading">
        <div className="container">
          <div className={styles.ranksIntro}>
            <div>
              <span className="eyebrow">BİR ADIM ÖNE GEÇ</span>
              <h2 id="ranks-heading" className="section-title">Maceranı bir üst seviyeye taşı.</h2>
              <p className="section-subtitle">Oyun tarzına uygun bir rütbe seç; yolculuğuna kendi imzanı kat.</p>
            </div>
            <aside className={styles.storeNotice} aria-label="Mağaza durumu">
              <span className={styles.noticeIcon}><Gem size={17} /></span>
              <span><strong>Mağaza ön izlemesi</strong><small>Örnek içerik · bağlantı eklenecek</small></span>
            </aside>
          </div>

          <div className={styles.rankGrid}>
            {ranks.map((rank) => {
              const RankIcon = rank.icon;
              const actionLabel = 'Rütbeyi Keşfet';
              return (
                <article key={rank.name} className={`${styles.rankCard} ${rank.popular ? styles.rankCardPopular : ''}`}>
                  {rank.popular && <span className={styles.popularBadge}>ÖNE ÇIKAN RÜTBE</span>}
                  <div className={`${styles.rankEmblem} ${rank.popular ? styles.rankEmblemPopular : ''}`}>
                    <RankIcon size={22} strokeWidth={1.7} />
                  </div>
                  <div className={styles.rankHeading}>
                    <div>
                      <h3>{rank.name}</h3>
                      <p>{rank.detail}</p>
                    </div>
                    <span className={styles.rankGlyph} aria-hidden="true">✦</span>
                  </div>
                  <div className={styles.priceLine}>
                    <strong>{rank.price}</strong><span>/ aylık</span>
                  </div>
                  <p className={styles.illustrativeLabel}>Örnek fiyat · aylık</p>
                  <ul className={styles.benefitList}>
                    {rank.features.map((feature) => (
                      <li key={feature}><span className={styles.checkIcon}><Check size={13} /></span>{feature}</li>
                    ))}
                  </ul>
                  {storeUrl ? (
                    <a className={`${styles.rankButton} ${rank.popular ? styles.rankButtonPrimary : ''}`} href={storeUrl} target="_blank" rel="noreferrer">
                      {actionLabel}<ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <button className={`${styles.rankButton} ${rank.popular ? styles.rankButtonPrimary : ''}`} type="button" onClick={() => onUnavailable('Mağaza')}>
                      {actionLabel}<ArrowUpRight size={16} />
                    </button>
                  )}
                </article>
              );
            })}
          </div>
          <p className={styles.storeFootnote}>Rütbe adları, fiyatlar ve avantajlar yalnızca tanıtım amaçlı örneklerdir; gerçek teklifler değildir. <span>Mağaza bağlantısı eklenecek.</span></p>
        </div>
      </section>

      <section id="oylama" className={styles.communitySection} aria-labelledby="community-heading">
        <div className="container">
          <div className={styles.communityLayout}>
            <div className={styles.communityCopy}>
              <span className="eyebrow">BİRLİKTE DAHA GÜZEL</span>
              <h2 id="community-heading" className="section-title">Bir oyun değil,<br />bir topluluk.</h2>
              <p className="section-subtitle">SofiaMC’nin gelişmesine destek ol, oyunu ver ve adadaki diğer maceracılarla tanış.</p>

              <div className={styles.voteBlock}>
                <div className={styles.voteHeading}><span className={styles.voteIcon}><Vote size={17} /></span><div><h3>Sunucuya oy ver</h3><p>Oylama bağlantıları yakında burada.</p></div></div>
                <div className={styles.voteLinks}>
                  {siteConfig.votingSites.map((site) => site.url ? (
                    <a key={site.name} className={styles.voteLink} href={site.url} target="_blank" rel="noreferrer" aria-label={`${site.name} üzerinde oy ver`}>
                      <span>{site.name}</span><ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <button key={site.name} className={styles.voteLink} type="button" onClick={() => onUnavailable('Oylama')}>
                      <span>{site.name}<small>Bağlantı eklenecek</small></span><ArrowUpRight size={15} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <aside id="topluluk" className={styles.discordCard} aria-labelledby="discord-heading">
              <div className={styles.discordGlow} aria-hidden="true" />
              <div className={styles.discordTopline}><span className={styles.discordIcon}><DiscordMark /></span><span className={styles.discordStatus}><i />TOPLULUK ALANI</span></div>
              <div className={styles.discordContent}>
                <p className={styles.discordKicker}>ADAN SENİN. TOPLULUĞUN BURADA.</p>
                <h3 id="discord-heading">Birlikte büyüyelim.</h3>
                <p>Duyuruları takip et, etkinlikleri kaçırma ve ihtiyaç duyduğunda topluluktan destek al.</p>
                {discordUrl ? (
                  <a className={styles.discordButton} href={discordUrl} target="_blank" rel="noreferrer">Discord’a Katıl<ArrowUpRight size={16} /></a>
                ) : (
                  <button className={styles.discordButton} type="button" onClick={() => onUnavailable('Discord')}>Discord’a Katıl<ArrowUpRight size={16} /></button>
                )}
                {!discordUrl && <p className={styles.discordPlaceholder}>Discord davet bağlantısı eklenecek.</p>}
              </div>
              <div className={styles.communityPills}>
                <span><CalendarDays size={15} />Duyurular</span>
                <span><Sparkles size={15} />Etkinlikler</span>
                <span><LifeBuoy size={15} />Destek</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="kurallar" className={styles.rulesSection} aria-labelledby="rules-heading">
        <div className="container">
          <div className={styles.rulesLayout}>
            <div className={styles.rulesIntro}>
              <span className="eyebrow">İYİ BİR ADA, İYİ BİR TOPLULUK</span>
              <h2 id="rules-heading" className="section-title">Herkese yer var.</h2>
              <p className="section-subtitle">Birlikte güzel bir oyun ortamı kurmak için küçük bir hatırlatma.</p>
              <span className={styles.rulesNote}>Örnek topluluk kuralları</span>
            </div>
            <div className={styles.rulesList}>
              {rules.map((rule, index) => {
                const RuleIcon = rule.icon;
                return (
                  <details key={rule.title} className={styles.ruleItem} open={index === 0}>
                    <summary>
                      <span className={styles.ruleNumber}>0{index + 1}</span>
                      <span className={styles.ruleIcon}><RuleIcon size={17} /></span>
                      <span className={styles.ruleTitle}>{rule.title}</span>
                      <ChevronDown className={styles.ruleChevron} size={17} />
                    </summary>
                    <p>{rule.text}</p>
                  </details>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerMain}>
            <div className={styles.footerBrand}>
              <a className={styles.wordmark} href="#anasayfa" aria-label="SofiaMC ana sayfa"><Gem size={20} strokeWidth={1.8} /><span>Sofia<span>MC</span></span></a>
              <p>Skyblock’ta yeni bir macera.</p>
              <button className={styles.ipButton} type="button" onClick={onCopy}><Copy size={14} />{siteConfig.ip}<span>Kopyala</span></button>
            </div>
            <nav className={styles.footerNav} aria-label="Alt menü">
              <a href="#anasayfa">Ana Sayfa</a>
              <a href="#ozellikler">Özellikler</a>
              <a href="#magaza">Rütbeler</a>
              <a href="#oylama">Oylama</a>
              <a href="#kurallar">Kurallar</a>
              <a href="#topluluk">Discord</a>
            </nav>
          </div>
          <div className={styles.footerBottom}>
            <span>© 2026 SofiaMC. Tüm hakları saklıdır.</span>
            <p>Bu resmî bir Minecraft ürünü değildir. Mojang veya Microsoft tarafından onaylanmamış ya da bunlarla ilişkili değildir.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
