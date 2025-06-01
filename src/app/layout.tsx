import Link from 'next/link';
import './globals.css';

export const metadata = {
  title: 'YogaMitHerz',
  description: 'Herzgeleitetes Yoga mit Iris',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="m-0 p-0 overflow-x-hidden">
        <nav className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex justify-center gap-6 text-white font-medium bg-transparent">
          <Link href="/">Home</Link>
          <Link href="/about">Über mich</Link>
          <Link href="/yoga">Yoga-Arten</Link>
          <Link href="/timetable">Timetable</Link>
          <Link href="/contact">Kontakt</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}