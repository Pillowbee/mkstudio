import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import './globals.css';
import styles from '@/app/page.module.css';
import FilmButton from '@/components/FilmButton/FilmButton';
import SerialButton from '@/components/SerialButton/SerialButton';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MK Studio',
  description: 'Сайт с корейскими дорамами',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru' className={montserrat.className}>
      <body>
        <div className={styles.logo}>
          <Link href='/'>
            <Image src='/logo2.png' alt='MK Studio' width={300} height={90} />
          </Link>
        </div>
        <span className={styles.border}></span>
        <FilmButton />

        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
