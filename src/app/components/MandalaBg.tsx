// Zwei Eck-Blumen-Mandalas: oben-links & unten-rechts (je 1/4 sichtbar)
// z-index: 1 → sichtbar auf Hintergrundflächen, versteckt hinter Karten/Bildern (z-[2]+)

// Lotus-Blütenblatt mit gerundetem Tip: zwei Q-Beziers + kleiner Arc an der Spitze
function petal(bulge: number, len: number, deg: number): string {
  const a = (deg - 90) * Math.PI / 180;
  const p = a + Math.PI / 2;
  const tx = len * Math.cos(a), ty = len * Math.sin(a);
  const c1x = bulge * Math.cos(p), c1y = bulge * Math.sin(p);
  const r = bulge * 0.28; // Abrundungsradius an der Spitze
  const tLx = tx + r * Math.cos(p), tLy = ty + r * Math.sin(p);
  const tRx = tx - r * Math.cos(p), tRy = ty - r * Math.sin(p);
  return `M0 0 Q${c1x} ${c1y} ${tLx} ${tLy} A${r} ${r} 0 0 1 ${tRx} ${tRy} Q${-c1x} ${-c1y} 0 0Z`;
}

// n Blütenblätter auf einem Ring
function petalRing(n: number, bulge: number, len: number, off = 0): string[] {
  return Array.from({ length: n }, (_, i) => petal(bulge, len, (360 / n) * i + off));
}

// n Kreise auf Radius r
function dotRing(n: number, r: number, dotR: number, off = 0) {
  return Array.from({ length: n }, (_, i) => {
    const a = ((360 / n) * i + off - 90) * Math.PI / 180;
    return { cx: r * Math.cos(a), cy: r * Math.sin(a), r: dotR };
  });
}

// Vollständiges Blumen-Mandala, zentriert bei (0,0), Außenradius ~480px
// Viertel davon liegt im Viewport (Zentrum ist in der Ecke)
function MandalaFlower() {
  return (
    <g fill="none" stroke="#8E3821">
      {/* ── Kern ── */}
      <circle cx={0} cy={0} r={8} strokeWidth="2" />
      <circle cx={0} cy={0} r={24} strokeWidth="0.9" />

      {/* Ring 1: 6 große Lotusblätter */}
      <g strokeWidth="1.1">
        {petalRing(6, 16, 52, 0).map((d, i) => <path key={i} d={d} />)}
      </g>
      <circle cx={0} cy={0} r={64} strokeWidth="0.7" />

      {/* Ring 1b: 6 kleine Kreise zwischen Blättern */}
      {dotRing(6, 72, 9, 30).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} strokeWidth="0.7" />
      ))}

      {/* Ring 2: 12 Blütenblätter */}
      <g strokeWidth="1.0">
        {petalRing(12, 14, 80, 15).map((d, i) => <path key={i} d={d} />)}
      </g>
      <circle cx={0} cy={0} r={96} strokeWidth="0.6" />
      <circle cx={0} cy={0} r={100} strokeWidth="0.35" />

      {/* Ring 3: 12 große Blätter + 12 kleine Kreise */}
      <g strokeWidth="0.9">
        {petalRing(12, 18, 122, 0).map((d, i) => <path key={i} d={d} />)}
      </g>
      {dotRing(12, 126, 8, 15).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} strokeWidth="0.65" />
      ))}
      <circle cx={0} cy={0} r={138} strokeWidth="0.65" />

      {/* Ring 4: 24 Blütenblätter */}
      <g strokeWidth="0.85">
        {petalRing(24, 15, 155, 7.5).map((d, i) => <path key={i} d={d} />)}
      </g>
      <circle cx={0} cy={0} r={170} strokeWidth="0.45" strokeDasharray="3 3" />
      <circle cx={0} cy={0} r={175} strokeWidth="0.7" />

      {/* Ring 5: 24 Kreise + 24 kleine Blätter */}
      {dotRing(24, 188, 8, 0).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} strokeWidth="0.6" />
      ))}
      <g strokeWidth="0.75">
        {petalRing(24, 11, 192, 7.5).map((d, i) => <path key={i} d={d} />)}
      </g>
      <circle cx={0} cy={0} r={205} strokeWidth="0.6" />
      <circle cx={0} cy={0} r={209} strokeWidth="0.85" />

      {/* Ring 6: 36 Blütenblätter */}
      <g strokeWidth="0.8">
        {petalRing(36, 16, 232, 5).map((d, i) => <path key={i} d={d} />)}
      </g>
      {dotRing(18, 238, 7, 10).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} strokeWidth="0.6" />
      ))}
      <circle cx={0} cy={0} r={250} strokeWidth="0.5" strokeDasharray="4 3" />
      <circle cx={0} cy={0} r={255} strokeWidth="0.65" />

      {/* Ring 7: 36 große Blätter */}
      <g strokeWidth="0.75">
        {petalRing(36, 22, 278, 0).map((d, i) => <path key={i} d={d} />)}
      </g>
      {dotRing(36, 284, 5, 5).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} strokeWidth="0.5" />
      ))}
      <circle cx={0} cy={0} r={296} strokeWidth="0.55" />
      <circle cx={0} cy={0} r={300} strokeWidth="0.85" />

      {/* Ring 8: 48 Blütenblätter */}
      <g strokeWidth="0.65">
        {petalRing(48, 17, 318, 3.75).map((d, i) => <path key={i} d={d} />)}
      </g>
      {dotRing(24, 326, 8, 0).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} strokeWidth="0.6" />
      ))}
      <circle cx={0} cy={0} r={340} strokeWidth="0.45" strokeDasharray="3 3" />
      <circle cx={0} cy={0} r={345} strokeWidth="0.7" />

      {/* Ring 9: 48 lange Blütenblätter */}
      <g strokeWidth="0.65">
        {petalRing(48, 22, 368, 0).map((d, i) => <path key={i} d={d} />)}
      </g>
      {dotRing(48, 374, 4, 3.75).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} strokeWidth="0.45" />
      ))}
      <circle cx={0} cy={0} r={385} strokeWidth="0.5" />
      <circle cx={0} cy={0} r={389} strokeWidth="0.35" />

      {/* Ring 10: 60 schmale Außenblätter */}
      <g strokeWidth="0.6">
        {petalRing(60, 18, 408, 3).map((d, i) => <path key={i} d={d} />)}
      </g>
      {dotRing(60, 414, 3, 0).map((c, i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r={c.r} strokeWidth="0.4" />
      ))}

      {/* Äußerer Abschluss */}
      <circle cx={0} cy={0} r={424} strokeWidth="0.75" />
      <circle cx={0} cy={0} r={428} strokeWidth="0.35" />
    </g>
  );
}

export default function MandalaBg() {
  return (
    <div
      aria-hidden
      // z-index: 1 → liegt über Seitenhintergründen, aber unter Karten/Bildern (z-[2]+)
      style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none', overflow: 'hidden' }}
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        style={{ opacity: 0.30 }}
      >
        <defs>
          {/* Oben-links: hell in der Ecke, nach innen ausgeblendet */}
          <radialGradient id="tl-g" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="500">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="55%"  stopColor="white" stopOpacity="0.9" />
            <stop offset="80%"  stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0.0" />
          </radialGradient>
          {/* Unten-rechts */}
          <radialGradient id="br-g" gradientUnits="userSpaceOnUse" cx="1440" cy="900" r="500">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="55%"  stopColor="white" stopOpacity="0.9" />
            <stop offset="80%"  stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0.0" />
          </radialGradient>
          <mask id="tl-m">
            <rect x="0" y="0" width="1440" height="900" fill="url(#tl-g)" />
          </mask>
          <mask id="br-m">
            <rect x="0" y="0" width="1440" height="900" fill="url(#br-g)" />
          </mask>
        </defs>

        {/* Oben-Links – Zentrum in der Ecke, 1/4 sichtbar */}
        <g mask="url(#tl-m)">
          <MandalaFlower />
        </g>

        {/* Unten-Rechts – Zentrum in der Ecke, 1/4 sichtbar */}
        <g mask="url(#br-m)" transform="translate(1440,900)">
          <MandalaFlower />
        </g>
      </svg>
    </div>
  );
}
