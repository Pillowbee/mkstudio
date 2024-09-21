import type { Metadata } from "next";
import Image from "next/image"
import Link from "next/link"
import { Roboto } from "next/font/google"
import "./globals.css";
import styles from "@/app/page.module.css";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "MK Studio",
  description: "Это портал!",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={roboto.className}>
    <body className={styles.body}>
    <Link href="/" >
      <Image src="/logo2.png" alt="MK Studio" width={300} height={90} />
    </Link>
    <main className={styles.main}>
      {children}
    </main>
    </body>
    </html>
  );
}
