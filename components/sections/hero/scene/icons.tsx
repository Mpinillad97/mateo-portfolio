// Iconos de trazo para la escena de producto (24 × 24, dibujados aquí para no
// añadir dependencias). Son decorativos: siempre se renderizan con aria-hidden.

const paths = {
  folder: ["M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],
  check: ["M4 4h16v16H4z", "m8 12 3 3 5-6"],
  sparkle: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z", "M19 16v4M17 18h4"],
  link: [
    "M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1",
    "M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1",
  ],
  cloud: ["M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9a4.5 4.5 0 0 1 0 9z"],
  cloudUp: ["M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9a4.5 4.5 0 0 1 0 9", "M12 12v8", "m9 15 3-3 3 3"],
  database: [
    "M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z",
    "M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6",
    "M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3",
  ],
  monitor: ["M3 4h18v12H3z", "M8 20h8", "M12 16v4"],
  doc: ["M6 3h8l4 4v14H6z", "M14 3v4h4", "M9 13h6M9 17h6"],
  settings: [
    "M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0",
    "M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1",
  ],
  search: ["M11 11m-7 0a7 7 0 1 0 14 0a7 7 0 1 0-14 0", "m20 20-3.5-3.5"],
  bell: ["M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z", "M10 21h4"],
  plus: ["M12 5v14M5 12h14"],
  chevronRight: ["m9 6 6 6-6 6"],
  chevronDown: ["m6 9 6 6 6-6"],
  home: ["M3 11l9-8 9 8", "M5 10v10h14V10"],
  more: ["M5 12h.01M12 12h.01M19 12h.01"],
  server: ["M4 4h16v7H4z", "M4 13h16v7H4z", "M8 7.5h.01M8 16.5h.01"],
  code: ["m8 8-4 4 4 4", "m16 8 4 4-4 4"],
  box: ["M12 3 3 7.5v9L12 21l9-4.5v-9z", "M3 7.5 12 12l9-4.5", "M12 12v9"],
  activity: ["M3 12h4l3-8 4 16 3-8h4"],
  send: ["M4 12 20 4l-6 16-3-7z"],
  file: ["M6 3h8l4 4v14H6z", "M14 3v4h4"],
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, className = "h-4 w-4" }: { name: IconName; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
