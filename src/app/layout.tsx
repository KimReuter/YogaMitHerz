import './globals.css';
import { Cookie } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cookie = Cookie({ subsets: ['latin'], weight: '400', variable: '--font-cookie' });

export const metadata = {
  title: 'YogaMitHerz',
  description: 'Herzgeleitetes Yoga mit Iris',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${cookie.variable} m-0 p-0`}>
        <Navbar />
        {/* overflow-x-hidden darf NICHT auf body/html sitzen – das bricht position:fixed auf iOS */}
        <div className="overflow-x-hidden">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
