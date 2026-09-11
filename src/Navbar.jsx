import { useState } from 'react'
import logo from './assets/logo.png'

const LINKS = [
  { label: 'Nanopigmentação', href: '#nanopigmentacao' },
  { label: 'Design', href: '#design' },
  { label: 'Depilação', href: '#depilacao' },
  { label: 'Certificado', href: '#certificado' },
  { label: 'Localização', href: '#localizacao' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4 sm:top-6">
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-white/50 bg-white/40 px-4 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-6">
        <img
          src={logo}
          alt="Samara Pires Beauty"
          className="h-12 w-auto select-none object-contain sm:h-14"
          draggable="false"
        />

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menu"
          className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-black/5"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`mt-3 w-full max-w-3xl overflow-hidden ${
          menuOpen
            ? 'max-h-72 transition-[max-height] duration-200 ease-out'
            : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 rounded-3xl border border-white/50 bg-white/70 p-3 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-xl">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-4 py-3 text-center font-['Archivo'] text-sm font-medium uppercase tracking-wide text-black transition-colors hover:bg-black/5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}
