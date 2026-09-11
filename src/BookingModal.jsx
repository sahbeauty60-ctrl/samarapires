import { useState } from 'react'
import nanopigmentacao from './assets/nanopigmentacao.webp'
import design from './assets/design.webp'
import depilacao from './assets/depilacao.jpg'

const SERVICES = [
  { name: 'Nanopigmentação', image: nanopigmentacao },
  { name: 'Design', image: design },
  { name: 'Depilação', image: depilacao },
]
const WHATSAPP_NUMBER = '5512988018098'

export default function BookingModal() {
  const [open, setOpen] = useState(false)
  const [service, setService] = useState(null)
  const [message, setMessage] = useState('')

  const canSend = message.trim().length > 0 || service !== null

  const whatsappHref = () => {
    const parts = []
    if (service) parts.push(`Olá! Tenho interesse em: ${service}.`)
    if (message.trim()) parts.push(message.trim())
    const text = parts.join(' ')
    return `https://wa.me/${WHATSAPP_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ''}`
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-['Archivo'] text-sm font-medium uppercase tracking-wide text-white shadow-lg transition-transform duration-300 hover:scale-105"
      >
        <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
        Agendamento
      </button>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-out ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-md"
            onClick={closeModal}
          />

          <div
            className={`relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl transition-all duration-300 ease-out sm:p-8 ${
              open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
          >
            <button
              type="button"
              onClick={closeModal}
              aria-label="Fechar"
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full text-black/50 transition-colors hover:bg-black/5 hover:text-black"
            >
              ✕
            </button>

            <h3 className="pr-8 font-['Archivo'] text-2xl font-medium uppercase tracking-wide text-black">
              Vamos agendar?
            </h3>
            <p className="mt-1 font-['Jost'] text-sm text-black/60">
              Escolha o serviço e conte pra gente o que você precisa.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {SERVICES.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() =>
                    setService((current) => (current === item.name ? null : item.name))
                  }
                  className={`group relative h-20 overflow-hidden rounded-xl transition-all duration-200 sm:h-24 ${
                    service === item.name
                      ? 'ring-2 ring-black ring-offset-2'
                      : 'opacity-90 hover:opacity-100'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <span className="absolute inset-0 flex items-center justify-center px-2 text-center font-['Archivo'] text-lg font-medium uppercase leading-tight tracking-wide text-white sm:text-xl">
                    {item.name}
                  </span>
                </button>
              ))}
            </div>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva sua mensagem aqui..."
              rows={4}
              className="mt-5 w-full resize-none rounded-2xl border border-black/10 bg-black/[0.03] p-4 font-['Jost'] text-sm text-black outline-none transition-colors focus:border-black/30"
            />

            <a
              href={canSend ? whatsappHref() : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!canSend}
              onClick={(e) => {
                if (!canSend) e.preventDefault()
              }}
              className={`mt-5 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-['Archivo'] text-sm font-medium uppercase tracking-wide text-white transition-all duration-300 ${
                canSend
                  ? 'bg-[#25D366] shadow-lg hover:scale-[1.02]'
                  : 'pointer-events-none bg-black/15 text-white/70'
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              Enviar no WhatsApp
            </a>
          </div>
        </div>
    </>
  )
}
