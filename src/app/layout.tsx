import './globals.css';
import { Cookie } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MandalaBg from '@/components/MandalaBg';

const cookie = Cookie({ subsets: ['latin'], weight: '400', variable: '--font-cookie' });

export const metadata = {
  title: 'YogaMitHerz',
  description: 'Herzgeleitetes Yoga mit Iris',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${cookie.variable} m-0 p-0 overflow-x-hidden`}>
        <MandalaBg />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
