interface WaveDividerProps {
  fill: string;       // Hex-Farbe der nächsten Section
  className?: string;
  flip?: boolean;     // Welle spiegeln (für von unten nach oben)
}

export default function WaveDivider({ fill, className = '', flip = false }: WaveDividerProps) {
  return (
    <div
      aria-hidden
      className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full h-14 md:h-20"
      >
        {/* Zwei Wellen-Ebenen für einen organischeren Look */}
        <path
          d="M0,50 C360,80 1080,10 1440,50 L1440,80 L0,80 Z"
          fill={fill}
          fillOpacity="0.4"
        />
        <path
          d="M0,40 C480,0 960,80 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
