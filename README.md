# SofiaMC

Türkçe Minecraft Skyblock landing page. Next.js App Router, React, TypeScript, Tailwind CSS v4 ve Lucide React ile hazırlanmıştır. Outfit yazı tipi yerel paket olarak sunulur. Statik dışa aktarma sayesinde veritabanı ya da Node üretim sunucusu gerektirmez.

## Çalıştırma

```bash
corepack pnpm install --frozen-lockfile
corepack pnpm dev
```

Geliştirme servisi 0.0.0.0:3000 üzerinde çalışır. Üretim çıktısı için `corepack pnpm build`; çıktılar `out/` klasöründe oluşur. Tip kontrolü: `corepack pnpm typecheck`.

## Yapılandırma

`lib/site-config.ts` dosyasında sunucu adresi `sofiamc.mcsh.gg`, Minecraft sürümü `1.21.4` ve görsel varlık yolu bulunur. `discordUrl`, `storeUrl` ve `votingSites[].url` alanlarına gerçek HTTPS bağlantıları eklendiğinde arayüz otomatik olarak dış bağlantı moduna geçer. Boşken tüm bağlantı alanları yer tutucu olarak işaretlenir ve bilgilendirici pencere açar; hayalî adrese yönlendirme ya da ödeme yapılmaz.

Rütbe fiyatları ve avantajları `components/CommunitySections.tsx` dosyasındadır ve yalnızca örnektir. Kullanılan topluluk kuralları da örnek olarak etiketlenmiştir. Oyuncu sayacı 142 / 500 ile başlayan bir tanıtım simülasyonudur; gerçek Minecraft sunucusuna bağlı değildir.

## Kaynak düzeni

`app/` statik sayfa, Türkçe metaveri ve ortak tasarım sistemini; `components/` gezinme, hero, özellikler, rütbe/topluluk ve ortak etkileşimleri; `lib/` düzenlenebilir sunucu yapılandırmasını içerir. `public/manus-routes.json` tek sayfa rotasını tanımlar.

Kullanılan hero görseli SofiaMC için özgün üretilmiş voxel/fantastik ada illüstrasyonudur. Araştırma görselleri yalnızca görsel yön için kullanılmış, siteye kopyalanmamıştır. Next.js ilk kurulum sürümündeki güvenlik uyarısı nedeniyle güncel kararlı sürüme yükseltilmiştir; resmî güncelleme kaynağı: https://nextjs.org/blog/security-update-2025-12-11.
