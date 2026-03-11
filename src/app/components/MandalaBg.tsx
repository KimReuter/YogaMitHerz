// Mandala-Hintergrund: Kachelung klassischer Mandala-Motive (heilige Geometrie)

// Blütenblatt: zwei Bézierkurven, spitze Mandelform
function petal(cx: number, cy: number, bulge: number, len: number, angleDeg: number): string {
  const a = (angleDeg - 90) * Math.PI / 180;
  const p = a + Math.PI / 2;
  const tipX = cx + len * Math.cos(a);
  const tipY = cy + len * Math.sin(a);
  const c1x = cx + bulge * Math.cos(p);
  const c1y = cy + bulge * Math.sin(p);
  const c2x = cx - bulge * Math.cos(p);
  const c2y = cy - bulge * Math.sin(p);
  return `M${cx} ${cy} Q${c1x} ${c1y} ${tipX} ${tipY} Q${c2x} ${c2y} ${cx} ${cy}Z`;
}

// Ring aus n Blütenblättern
function petalRing(cx: number, cy: number, n: number, bulge: number, len: number, rotOffset = 0): string[] {
  return Array.from({ length: n }, (_, i) =>
    petal(cx, cy, bulge, len, (360 / n) * i + rotOffset)
  );
}

// Punkte auf Kreis
function ring(cx: number, cy: number, n: number, r: number, rotOffset = 0): [number, number][] {
  return Array.from({ length: n }, (_, i) => {
    const a = ((360 / n) * i + rotOffset - 90) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
}

// Ein Mandala bei (cx, cy) mit Außenradius ~160
function MandalaPaths({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g transform={`translate(${cx},${cy})`} fill="none" stroke="#8E3821">
      {/* Kern */}
      <circle cx={0} cy={0} r={6} strokeWidth="1.5" />
      <circle cx={0} cy={0} r={18} strokeWidth="0.8" />

      {/* Ring 1: 8 Blütenblätter innen */}
      <g strokeWidth="0.9">
        {petalRing(0, 0, 8, 10, 32, 0).map((d, i) => <path key={i} d={d} />)}
      </g>

      {/* Trennkreis */}
      <circle cx={0} cy={0} r={38} strokeWidth="0.6" />

      {/* Ring 2: 16 schmale Blütenblätter */}
      <g strokeWidth="0.8">
        {petalRing(0, 0, 16, 8, 52, 11.25).map((d, i) => <path key={i} d={d} />)}
      </g>

      {/* Ring 2b: 8 kleine Kreise */}
      <g strokeWidth="0.7">
        {ring(0, 0, 8, 62, 22.5).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={7} />
        ))}
      </g>

      {/* Trennkreis 2 */}
      <circle cx={0} cy={0} r={75} strokeWidth="0.6" />

      {/* Ring 3: 16 Blütenblätter */}
      <g strokeWidth="0.8">
        {petalRing(0, 0, 16, 12, 68, 0).map((d, i) => <path key={i} d={d} />)}
      </g>

      {/* Trennkreis 3 */}
      <circle cx={0} cy={0} r={115} strokeWidth="0.6" strokeDasharray="3 3" />

      {/* Ring 4: 24 schmale Blütenblätter */}
      <g strokeWidth="0.7">
        {petalRing(0, 0, 24, 10, 80, 7.5).map((d, i) => <path key={i} d={d} />)}
      </g>

      {/* Ring 4b: 12 kleine Kreise */}
      <g strokeWidth="0.6">
        {ring(0, 0, 12, 128, 15).map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={8} />
        ))}
      </g>

      {/* Äußerer Abschlusskreis */}
      <circle cx={0} cy={0} r={145} strokeWidth="1" />
      <circle cx={0} cy={0} r={150} strokeWidth="0.5" />
    </g>
  );
}

export default function MandalaBg() {
  // Gitter: Mandalas in versetzten Reihen (Brick-Layout) – Abstand 310px
  const W = 310;
  const H = 310;
  const positions: [number, number][] = [];
  for (let row = -1; row <= 3; row++) {
    const offsetX = (row % 2 !== 0) ? W / 2 : 0;
    for (let col = -1; col <= 5; col++) {
      positions.push([col * W + offsetX, row * H]);
    }
  }

  return (
    <div
      aria-hidden
      style={{ position: 'fixed', inset: 0, zIndex: 9997, pointerEvents: 'none', overflow: 'hidden' }}
    >
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.22 }}
      >
        <defs>
          <radialGradient id="m-fade" gradientUnits="userSpaceOnUse" cx="720" cy="450" r="900">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="55%"  stopColor="white" stopOpacity="0.9" />
            <stop offset="80%"  stopColor="white" stopOpacity="0.45" />
            <stop offset="100%" stopColor="white" stopOpacity="0.04" />
          </radialGradient>
          <mask id="m-mask">
            <rect x="0" y="0" width="1440" height="900" fill="url(#m-fade)" />
          </mask>
        </defs>

        <g mask="url(#m-mask)">
          {positions.map(([x, y], i) => (
            <MandalaPaths key={i} cx={x} cy={y} />
          ))}
        </g>
      </svg>
    </div>
  );
}
