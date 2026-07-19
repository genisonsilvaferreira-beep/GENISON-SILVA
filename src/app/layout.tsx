import type { Metadata } from 'next';
import { Providers } from '@/components/Providers';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'PROMOS DO GS - As Melhores Promoções da Internet',
  description: 'Encontre as melhores promoções, cupons e ofertas de lojas online em um único lugar.',
  keywords: ['promoções', 'cupons', 'ofertas', 'descontos', 'shopping'],
  openGraph: {
    title: 'PROMOS DO GS',
    description: 'As melhores promoções da internet em um só lugar',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-light dark:bg-dark text-dark dark:text-light">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
