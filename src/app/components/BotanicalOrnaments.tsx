// Wiederverwendbare dekorative Pflanzen-Ornamente für Iris' verspielten Stil

/** Kleiner Blatt-Zweig – links neben Überschriften, gespiegelt für rechts */
export function LeafSprig({
  className = '',
  flipped = false,
  size = 60,
}: {
  className?: string;
  flipped?: boolean;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 70 45"
      width={size}
      height={size * 0.65}
      fill="none"
      aria-hidden
      className={`${flipped ? '-scale-x-100' : ''} inline-block ${className}`}
    >
      {/* Stiel */}
      <path
        d="M5 40 C20 28 40 18 62 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Blatt 1 – unten */}
      <path
        d="M20 32 C9 18 22 9 27 22 C24 26 20 32 Z"
        fill="currentColor"
        opacity="0.55"
      />
      {/* Blatt 2 – oben */}
      <path
        d="M43 20 C32 5 47 0 50 14 C47 17 43 20 Z"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Kleiner Knopf an der Spitze */}
      <circle cx="62" cy="8" r="2.5" fill="currentColor" opacity="0.45" />
    </svg>
  );
}

/** Zentrierter Ornament-Trenner (Linie · Blüte · Linie) */
export function BotanicalDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden
    >
      <span className="block h-px flex-1 bg-current opacity-20" />
      <svg
        viewBox="0 0 36 22"
        width="36"
        height="22"
        fill="currentColor"
        aria-hidden
      >
        {/* Lotusblüte */}
        <path
          d="M18 20 C13 13 6 9 3 4 C9 3 14 8 18 15 C22 8 27 3 33 4 C30 9 23 13 18 20Z"
          opacity="0.65"
        />
        <path
          d="M18 20 C15 12 12 7 10 2 C15 3 18 10 18 20Z"
          opacity="0.4"
        />
        <path
          d="M18 20 C21 12 24 7 26 2 C21 3 18 10 18 20Z"
          opacity="0.4"
        />
        <circle cx="18" cy="4" r="2" opacity="0.5" />
      </svg>
      <span className="block h-px flex-1 bg-current opacity-20" />
    </div>
  );
}
