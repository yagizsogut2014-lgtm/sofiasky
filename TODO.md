# SofiaMC — Uygulama TODO

## 1. Teknoloji temeli ve görsel sistem
- [x] Site React / Next.js ile oluşturulmalı; Tailwind CSS ve Lucide React ikonları kullanılmalı.
- [x] Bütün arayüz metinleri Türkçe olmalı.
- [x] Arayüz tamamen duyarlı olmalı ve masaüstü ile mobil cihazlara göre optimize edilmeli.
- [x] Modern oyun koyu modu; derin mor, indigo ve neon camgöbeği vurguları, glassmorphism, parlayan gradientler ve temiz modern sans-serif (Inter veya Outfit) tipografisi kullanılmalı.

## 2. Gezinme ve IP kopyalama
- [x] Gezinme çubuğunda parlayan ikonla SofiaMC logosu ve Ana Sayfa, Özellikler, Rütbeler/Mağaza, Oylama, Kurallar ve Discord bağlantıları bulunmalı.
- [x] Belirgin “IP’yi Kopyala” düğmesi `sofiamc.mcsh.gg` adresini panoya kopyalamalı ve işlem sonrası görünür “Kopyalandı!” bildirimi göstermeli.
- [x] Mobil menü açılıp kapatılabilmeli; menü bağlantıları ilgili bölümlere götürmeli.

## 3. Hero ve katılma çağrıları
- [x] Türkçe başlık “SofiaMC’ye hoş geldin — Skyblock’ta yeni bir macera!” olmalı.
- [x] Alt başlık Minecraft 1.21.4 ve özel sunucu özelliklerini vurgulamalı.
- [x] Hero bölümünde `sofiamc.mcsh.gg` için etkileşimli kopyalama kutusu bulunmalı.
- [x] Canlı sayaç görünümünde örnek “142 / 500 çevrimiçi” bilgisi gösterilmeli.
- [x] “Şimdi Katıl” çağrısı IP’yi kopyalamalı; “Discord’a Katıl” çağrısı topluluk bağlantısına yönelmeli.

## 4. Skyblock özellikleri
- [x] Özellik kartlarında Ada Geliştirmeleri ve Minyonlar; Özel Ekonomi ve Müzayede Evi; Günlük Ödüller ve Görevler; Dost Canlısı Topluluk ve Aktif Yetkililer açıklanmalı.

## 5. Rütbeler ve mağaza tanıtımı
- [x] VIP, MVP ve Sofia+ rütbeleri ayrı kartlarda gösterilmeli.
- [x] Her rütbe kartında özellikler ve fiyat bulunmalı.
- [x] Gerçek mağaza URL’si verilmediği için mağaza hedefi görünür, kolay değiştirilebilir yer tutucu olmalı; örnek fiyatlar tanıtım amaçlı olduğu açıkça belirtilmeli.

## 6. Oylama ve topluluk
- [x] Sunucuya oy verme ve destekleme için hızlı bağlantılar gösterilmeli.
- [x] Gerçek oylama URL’leri verilmediği için oylama hedefleri görünür ve kolay değiştirilebilir yer tutucular olmalı.
- [x] Discord widget’ı/topluluk çağrısı görünümü sunulmalı; gerçek davet URL’si verilmediği için Discord hedefi görünür ve kolay değiştirilebilir yer tutucu olmalı.

## 7. Altbilgi ve yasal metin
- [x] Altbilgi telif bilgisi, `sofiamc.mcsh.gg` sunucu IP’si hatırlatması ve hızlı gezinme bağlantıları içermeli.
- [x] Feragatname Türkçe olarak “Bu resmî bir Minecraft ürünü değildir. Mojang veya Microsoft tarafından onaylanmamış ya da bunlarla ilişkili değildir.” metnini göstermeli.

## 8. Durum ve bağlantı uyarıları
- [x] Henüz verilmemiş gerçek Discord, mağaza ve oylama URL’leri uydurulmamalı; yer tutucular kolayca düzenlenebilir olmalı.

Uygulama kanıtı: Next.js üretim derlemesi ve TypeScript kontrolü başarılı; statik HTML’de gerekli Türkçe içerik mevcut; tüm bölüm bağlantılarının hedefleri geçerli; `/` ve `/manus-routes.json` HTTP 200 döndürüyor. Salt okunur kaynak incelemesinde doğrulanmış hata bulunmadı. Oyuncu sayacı ve fiyatlar demo; haricî entegrasyonlar gerçek URL’ler bekliyor. Özgün hero görseli yönetilen depolama adresinden sunulur; üretim tamamlandığında yer tutucu otomatik değişir.
