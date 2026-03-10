// Großes Mehndi-Mandala, rechts unten – nur ~1/4 sichtbar, sehr detailliert
// CSS viewport-units positionieren das Zentrum exakt in der Ecke

export default function MandalaBg() {
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9997,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Mandala-Form, zentriert bei (0,0), r_außen ≈ 760 */}
          <g id="iris-mandala" fill="none" stroke="#8E3821" strokeLinecap="round" strokeLinejoin="round">

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                ÄUSSERE GROSSE SPITZBLÄTTER – 8 × 45°
                Klassische Lotusform: schmal, spitz an beiden Enden
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={`olp-${i}`} transform={`rotate(${i * 45})`}>
                {/* Hauptblatt */}
                <path strokeWidth="1.6" opacity="0.58"
                  d="M0,-185 C-98,-238 -98,-604 0,-758
                     C98,-604 98,-238 0,-185Z"/>
                {/* Inneres Spitzblatt */}
                <path strokeWidth="0.85" opacity="0.38"
                  d="M0,-228 C-54,-272 -54,-590 0,-724
                     C54,-590 54,-272 0,-228Z"/>
                {/* Mittelrippe */}
                <line x1="0" y1="-192" x2="0" y2="-748"
                  strokeWidth="0.55" opacity="0.28"/>
                {/* Kleines ovales Detail in der Mitte des Blatts */}
                <path strokeWidth="0.65" opacity="0.3"
                  d="M0,-410 C-20,-410 -30,-442 -30,-466
                     C-30,-490 -16,-502 0,-502
                     C16,-502 30,-490 30,-466
                     C30,-442 20,-410 0,-410Z"/>
                {/* Seitenkurven am Blatt */}
                <path strokeWidth="0.65" opacity="0.28"
                  d="M-72,-346 C-84,-370 -84,-408 -74,-436"/>
                <path strokeWidth="0.65" opacity="0.28"
                  d="M72,-346 C84,-370 84,-408 74,-436"/>
                {/* Spitzenpunkt */}
                <circle cy="-752" r="6.5"
                  fill="#8E3821" fillOpacity="0.48" strokeWidth="0" opacity="0.62"/>
                {/* Basispunkte */}
                <circle cx="-58" cy="-200" r="4"
                  fill="#8E3821" fillOpacity="0.35" strokeWidth="0" opacity="0.5"/>
                <circle cx="58" cy="-200" r="4"
                  fill="#8E3821" fillOpacity="0.35" strokeWidth="0" opacity="0.5"/>
              </g>
            ))}

            {/* ── Mittlere Zwischenblätter – 8 × 22.5° ── */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={`omp-${i}`} transform={`rotate(${i * 45 + 22.5})`}>
                <path strokeWidth="1.15" opacity="0.44"
                  d="M0,-185 C-68,-234 -68,-498 0,-624
                     C68,-498 68,-234 0,-185Z"/>
                {/* Inneres Detail */}
                <path strokeWidth="0.7" opacity="0.3"
                  d="M0,-242 C-30,-272 -30,-430 0,-540
                     C30,-430 30,-272 0,-242Z"/>
                {/* Mittelrippe */}
                <line x1="0" y1="-192" x2="0" y2="-618"
                  strokeWidth="0.5" opacity="0.25"/>
                {/* Spitzenpunkt */}
                <circle cy="-620" r="5"
                  fill="#8E3821" fillOpacity="0.38" strokeWidth="0" opacity="0.54"/>
                {/* Kleine Seitenblättchen */}
                <path strokeWidth="0.6" opacity="0.28"
                  d="M0,-320 C-18,-338 -20,-364 -12,-382"/>
                <path strokeWidth="0.6" opacity="0.28"
                  d="M0,-320 C18,-338 20,-364 12,-382"/>
              </g>
            ))}

            {/* Schlanke Akzentblätter zwischen allem – 8 × 22.5° anders versetzt */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={`osa-${i}`} transform={`rotate(${i * 45 + 11.25})`}>
                <path strokeWidth="0.75" opacity="0.28"
                  d="M0,-185 C-36,-222 -36,-420 0,-510
                     C36,-420 36,-222 0,-185Z"/>
                <line x1="0" y1="-190" x2="0" y2="-504"
                  strokeWidth="0.4" opacity="0.22"/>
              </g>
            ))}

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                ÄUSSERER RINGRAHMEN – doppelt + Ziermarken
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <circle r="181" strokeWidth="2.6" opacity="0.44"/>
            <circle r="186" strokeWidth="0.6" opacity="0.19"/>
            <circle r="176" strokeWidth="0.5" opacity="0.15"/>

            {/* Rauten auf dem Ringrahmen (16×) */}
            {Array.from({ length: 16 }, (_, i) => {
              const a = ((i * 22.5) - 90) * (Math.PI / 180);
              const x = 181 * Math.cos(a), y = 181 * Math.sin(a);
              return (
                <g key={`rd-${i}`} transform={`translate(${x},${y}) rotate(${i * 22.5})`}>
                  <path d="M0,-7 L4.5,0 L0,7 L-4.5,0Z"
                    fill="#8E3821" fillOpacity="0.44" strokeWidth="0" opacity="0.64"/>
                </g>
              );
            })}

            {/* Kleine Kreise zwischen den Blättern am Ring (8×) */}
            {Array.from({ length: 8 }, (_, i) => {
              const a = ((i * 45 + 22.5) - 90) * (Math.PI / 180);
              const r = 202;
              return (
                <circle key={`rc-${i}`}
                  cx={r * Math.cos(a)} cy={r * Math.sin(a)}
                  r="9" strokeWidth="1"
                  fill="#8E3821" fillOpacity="0.09" opacity="0.44"/>
              );
            })}

            {/* Kleine Akzentpunkte auf dem Ring (8× an Hauptblattpositionen) */}
            {Array.from({ length: 8 }, (_, i) => {
              const a = ((i * 45) - 90) * (Math.PI / 180);
              const r = 202;
              return (
                <circle key={`rcd-${i}`}
                  cx={r * Math.cos(a)} cy={r * Math.sin(a)}
                  r="5.5" strokeWidth="0.8"
                  fill="#8E3821" fillOpacity="0.1" opacity="0.4"/>
              );
            })}

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                INNERE BLÄTTER – 8 große + 8 sekundäre
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={`imp-${i}`} transform={`rotate(${i * 45})`}>
                {/* Hauptblatt */}
                <path strokeWidth="1.3" opacity="0.56"
                  d="M0,-86 C-54,-107 -54,-150 0,-180
                     C54,-150 54,-107 0,-86Z"/>
                {/* Innerer Tropfen */}
                <path strokeWidth="0.75" opacity="0.37"
                  d="M0,-104 C-30,-120 -30,-152 0,-174
                     C30,-152 30,-120 0,-104Z"/>
                {/* Mittelrippe */}
                <line x1="0" y1="-90" x2="0" y2="-174"
                  strokeWidth="0.5" opacity="0.26"/>
                {/* Spitze */}
                <circle cy="-176" r="4.5"
                  fill="#8E3821" fillOpacity="0.34" strokeWidth="0" opacity="0.52"/>
                {/* Basispunkte */}
                <circle cx="-30" cy="-96" r="3"
                  fill="#8E3821" fillOpacity="0.3" strokeWidth="0" opacity="0.46"/>
                <circle cx="30" cy="-96" r="3"
                  fill="#8E3821" fillOpacity="0.3" strokeWidth="0" opacity="0.46"/>
              </g>
            ))}

            {/* Sekundäre innere Blätter (8 × 22.5°) */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={`isp-${i}`} transform={`rotate(${i * 45 + 22.5})`}>
                <path strokeWidth="0.95" opacity="0.38"
                  d="M0,-86 C-36,-103 -36,-138 0,-162
                     C36,-138 36,-103 0,-86Z"/>
                <line x1="0" y1="-90" x2="0" y2="-157"
                  strokeWidth="0.45" opacity="0.24"/>
                <circle cy="-159" r="3.5"
                  fill="#8E3821" fillOpacity="0.3" strokeWidth="0" opacity="0.48"/>
              </g>
            ))}

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                INNERER RINGRAHMEN
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            <circle r="82" strokeWidth="2.1" opacity="0.4"/>
            <circle r="86" strokeWidth="0.55" opacity="0.17"/>
            <circle r="78" strokeWidth="0.5" opacity="0.14"/>

            {/* Punkte innen (16×) */}
            {Array.from({ length: 16 }, (_, i) => {
              const a = ((i * 22.5) - 90) * (Math.PI / 180);
              return (
                <circle key={`id-${i}`}
                  cx={82 * Math.cos(a)} cy={82 * Math.sin(a)}
                  r="3.8" fill="#8E3821" fillOpacity="0.4"
                  strokeWidth="0" opacity="0.6"/>
              );
            })}

            {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                ZENTRALE BLÜTE – 8 Hauptblätter + 8 Zwischenblätter
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={`cf-${i}`} transform={`rotate(${i * 45})`}>
                <path strokeWidth="1.1" opacity="0.6"
                  d="M0,-10 C-27,-23 -27,-54 0,-74
                     C27,-54 27,-23 0,-10Z"/>
                {/* Inneres Blättchen */}
                <path strokeWidth="0.65" opacity="0.38"
                  d="M0,-20 C-15,-30 -15,-52 0,-68
                     C15,-52 15,-30 0,-20Z"/>
              </g>
            ))}
            {Array.from({ length: 8 }, (_, i) => (
              <g key={`cfs-${i}`} transform={`rotate(${i * 45 + 22.5})`}>
                <path strokeWidth="0.8" opacity="0.42"
                  d="M0,-10 C-17,-20 -17,-42 0,-58
                     C17,-42 17,-20 0,-10Z"/>
              </g>
            ))}

            {/* Zentrumskreise */}
            <circle r="28" strokeWidth="1.1" opacity="0.37"/>
            <circle r="24" strokeWidth="0.45" opacity="0.18"/>
            <circle r="15" strokeWidth="1.4"
              fill="#8E3821" fillOpacity="0.24" opacity="0.5"/>
            <circle r="6.5" fill="#8E3821" fillOpacity="0.68"
              strokeWidth="0" opacity="0.75"/>

          </g>
        </defs>

        {/* ── Haupt-Mandala: rechts unten, Zentrum in der Ecke ── */}
        <use
          href="#iris-mandala"
          style={{ transform: 'translate(calc(100vw), calc(100vh))' }}
          opacity="0.11"
        />

        {/* ── Kleiner Akzent: links oben, leicht gedreht ── */}
        <use
          href="#iris-mandala"
          style={{ transform: 'scale(0.38) rotate(22deg)' }}
          opacity="0.052"
        />
      </svg>
    </div>
  );
}
