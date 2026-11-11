import { type ContactChannelId } from "@/data/contact";

// Iconos de línea decorativos de los canales de contacto (aria-hidden).
export function ChannelIcon({ name, className = "h-5 w-5" }: { name: ContactChannelId; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {name === "email" && (
        <>
          <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
          <path d="m3 5.5 7 5.5 7-5.5" />
        </>
      )}
      {name === "linkedin" && (
        <>
          <rect x="2.5" y="2.5" width="15" height="15" rx="2" />
          <path d="M6.5 9v5M6.5 6.5h.01M10 14V9m0 2.5c0-1.4 1-2.5 2.3-2.5s2.2 1 2.2 2.5V14" />
        </>
      )}
      {name === "github" && (
        <>
          <circle cx="6" cy="4.5" r="1.8" />
          <circle cx="6" cy="15.5" r="1.8" />
          <circle cx="14" cy="8" r="1.8" />
          <path d="M6 6.3v7.4M14 9.8c0 2.5-2 3-5 3.2-1.5.1-3 .2-3 .8" />
        </>
      )}
      {name === "cv" && (
        <>
          <path d="M5 2.5h6.5L15.5 6.5v11H5z" />
          <path d="M11.5 2.5v4h4M7.5 10.5h5M7.5 13.5h5" />
        </>
      )}
      {name === "whatsapp" && (
        <>
          <path d="M3 17l1.1-3.8A7 7 0 1 1 7 16z" />
          <path d="M7.5 7.5c0 3 2 5 5 5l.8-1.3-1.8-.9-.7.6c-.8-.4-1.4-1-1.8-1.8l.6-.7-.9-1.8z" />
        </>
      )}
    </svg>
  );
}
