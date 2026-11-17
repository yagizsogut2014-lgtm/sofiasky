import type { Metadata } from 'next';
import '@fontsource/outfit/400.css';
import '@fontsource/outfit/500.css';
import '@fontsource/outfit/600.css';
import '@fontsource/outfit/700.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'SofiaMC — Minecraft 1.21.4 Skyblock Sunucusu',
  description: 'SofiaMC’de kendi adanı kur, minyonlarınla geliş ve dostlarınla Skyblock macerasına katıl. Minecraft 1.21.4 sunucu adresi: sofiamc.mcsh.gg.',
  keywords: ['SofiaMC', 'Minecraft', 'Skyblock', '1.21.4', 'Türkçe sunucu'],
  openGraph: {
    type: 'website',
    title: 'SofiaMC — Gökyüzünde kendi hikâyeni yaz',
    description: 'Kendi adan. Kendi kuralların. Yepyeni bir Skyblock macerası. Minecraft 1.21.4.',
    siteName: 'SofiaMC',
    locale: 'tr_TR',
  },
  twitter: {
    card: 'summary',
    title: 'SofiaMC — Skyblock Macerası',
    description: 'Minecraft 1.21.4 • sofiamc.mcsh.gg',
  },
  icons: { icon: '/logo.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
