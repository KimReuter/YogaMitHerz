import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'YogaMitHerz',
  description: 'Herzgeleitetes Yoga mit Iris',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="m-0 p-0 overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}