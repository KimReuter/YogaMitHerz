// /app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-iris-golden text-iris-charcoal">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">
        <div className="space-y-2">
          <p className="font-semibold">Yoga mit Herz</p>
          <p className="text-sm opacity-80">Come for Yoga – Stay for Happiness!</p>
        </div>

        <nav className="md:justify-self-center">
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">Über mich</Link></li>
            <li><Link href="/timetable" className="hover:underline">Stundenplan</Link></li>
            <li><Link href="/energy" className="hover:underline">Energiearbeit</Link></li>
            <li><Link href="/contact" className="hover:underline">Kontakt</Link></li>
          </ul>
        </nav>

        <div className="md:justify-self-end">
          {/* Socials optional */}
          {/* <div className="flex gap-4">…</div> */}
        </div>
      </div>

      <div className="border-t border-iris-terracotta/30">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <Link href="/privacy" className="hover:underline">Datenschutzerklärung</Link>
            <span className="opacity-40">|</span>
            <Link href="/impressum" className="hover:underline">Impressum</Link>
            {/* optional */}
            {/* <span className="opacity-40">|</span>
            <Link href="/agb" className="hover:underline">AGB</Link>
            <span className="opacity-40">|</span>
            <button className="hover:underline" data-cc="show-preferences">Cookie‑Einstellungen</button> */}
          </div>
          <p className="text-xs opacity-70">© {new Date().getFullYear()} Yoga mit Herz</p>
        </div>
      </div>
    </footer>
  );
}