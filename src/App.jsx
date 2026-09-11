import { useEffect, useState } from 'react'
import Intro from './Intro'
import Navbar from './Navbar'
import BookingModal from './BookingModal'
import Footer from './Footer'
import simone from './assets/simone.webp'
import nanopigmentacao from './assets/nanopigmentacao.webp'
import design from './assets/design.webp'
import design1 from './assets/design1.webp'
import design2 from './assets/design2.webp'
import depilacao from './assets/depilacao.jpg'
import depilacao1 from './assets/depilacao1.webp'
import depilacao2 from './assets/depilacao2.webp'
import certificado from './assets/certificado.webp'
import estudioMobile from './assets/estudio-mobile.webp'
import estudioDesktop from './assets/estudio-desktop.webp'
import instagramMockup from './assets/instagram-mockup.webp'

const designSlides = [design1, design2]
const depilacaoSlides = [depilacao1, depilacao2]

function App() {
  const [introDone, setIntroDone] = useState(false)
  const [nanoOpen, setNanoOpen] = useState(false)
  const [designOpen, setDesignOpen] = useState(false)
  const [designSlide, setDesignSlide] = useState(0)
  const [depilacaoOpen, setDepilacaoOpen] = useState(false)
  const [depilacaoSlide, setDepilacaoSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setDesignSlide((slide) => (slide + 1) % designSlides.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setDepilacaoSlide((slide) => (slide + 1) % depilacaoSlides.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}

      <main className="relative min-h-screen overflow-hidden bg-white">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[35vh] bg-[linear-gradient(to_bottom,#fce7ed_0%,#fce7ed_35%,rgba(252,231,237,0.5)_60%,transparent_100%)]" />

          <div className="relative z-10">
            <Navbar />

            <h1 className="px-4 pt-24 text-center font-['Archivo'] font-medium uppercase text-4xl tracking-wide text-black sm:pt-32 sm:text-6xl">
              A{' '}
              <span className="shine-text mx-1 font-['Alex_Brush'] text-6xl normal-case tracking-normal sm:text-8xl">
                beleza
              </span>{' '}
              está em você
            </h1>

            <div className="relative flex justify-center pt-6 sm:pt-8">
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center font-['Archivo'] text-[6.5rem] font-black uppercase leading-none tracking-tight text-pink-100 sm:text-[11rem]">
                <span className="word-select" style={{ animationDelay: '0s' }}>SAMARA</span>
                <br />
                <span className="word-select" style={{ animationDelay: '0.7s' }}>PIRES</span>
                <br />
                <span className="word-select" style={{ animationDelay: '1.4s' }}>BEAUTY</span>
              </span>

              <img
                src={simone}
                alt="Samara Pires"
                className="relative w-[150vw] max-w-none translate-x-[5%] -translate-y-[8%] select-none sm:w-[100vw] sm:max-w-[1000px] sm:-translate-y-[3%]"
                draggable="false"
              />
            </div>

            <div className="flex -translate-y-[41%] justify-center pb-4 pt-4">
              <div className="rounded-full border border-white/40 bg-neutral-300/40 px-10 py-4 shadow-lg backdrop-blur-xl sm:px-16 sm:py-6">
                <span className="liquid-text font-['Cormorant_Garamond'] text-3xl italic font-semibold sm:text-5xl">
                  Vamos realçar?
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 px-4 pb-20">
              <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
              <div id="nanopigmentacao" className="w-full max-w-xs scroll-mt-28 sm:max-w-sm">
                <button
                  type="button"
                  onClick={() => setNanoOpen((open) => !open)}
                  className="group relative h-40 w-full overflow-hidden rounded-[2rem] shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-48"
                >
                  <img
                    src={nanopigmentacao}
                    alt="Nanopigmentação"
                    className="h-full w-full scale-100 object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute bottom-6 left-0 right-0 text-center font-['Archivo'] text-2xl font-medium uppercase tracking-wide text-white sm:text-3xl">
                    Nanopigmentação
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    nanoOpen ? 'max-h-48 mt-6 opacity-100' : 'max-h-0 mt-0 opacity-0'
                  }`}
                >
                  <div className="overflow-hidden rounded-[2rem]">
                    <video
                      src="/videos/nanopigmentacao.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-48 w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div id="design" className="w-full max-w-xs scroll-mt-28 translate-y-[3%] sm:max-w-sm sm:translate-y-0">
                <button
                  type="button"
                  onClick={() => setDesignOpen((open) => !open)}
                  className="group relative h-40 w-full overflow-hidden rounded-[2rem] shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-48"
                >
                  <img
                    src={design}
                    alt="Design"
                    className="h-full w-full scale-100 object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute bottom-6 left-0 right-0 text-center font-['Archivo'] text-2xl font-medium uppercase tracking-wide text-white sm:text-3xl">
                    Design
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    designOpen ? 'max-h-48 mt-6 opacity-100' : 'max-h-0 mt-0 opacity-0'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden rounded-[2rem]">
                    {designSlides.map((slide, index) => (
                      <img
                        key={slide}
                        src={slide}
                        alt="Design"
                        className={`absolute inset-0 h-full w-full scale-95 rounded-[2rem] object-cover transition-opacity duration-1000 ease-in-out ${
                          index === designSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        draggable="false"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div id="depilacao" className="w-full max-w-xs scroll-mt-28 -translate-y-[3px] sm:max-w-sm sm:translate-y-0">
                <button
                  type="button"
                  onClick={() => setDepilacaoOpen((open) => !open)}
                  className="group relative h-40 w-full overflow-hidden rounded-[2rem] shadow-lg transition-transform duration-300 hover:scale-[1.02] sm:h-48"
                >
                  <img
                    src={depilacao}
                    alt="Depilação"
                    className="h-full w-full object-cover"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-black/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="absolute bottom-6 left-0 right-0 text-center font-['Archivo'] text-2xl font-medium uppercase tracking-wide text-white sm:text-3xl">
                    Depilação
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-700 ease-out ${
                    depilacaoOpen ? 'max-h-48 mt-6 opacity-100' : 'max-h-0 mt-0 opacity-0'
                  }`}
                >
                  <div className="relative h-48 overflow-hidden rounded-[2rem]">
                    {depilacaoSlides.map((slide, index) => (
                      <img
                        key={slide}
                        src={slide}
                        alt="Depilação"
                        className={`absolute inset-0 h-full w-full ${
                          index === 0 ? 'scale-150' : 'scale-95'
                        } rounded-[2rem] object-cover transition-opacity duration-1000 ease-in-out ${
                          index === depilacaoSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        draggable="false"
                      />
                    ))}
                  </div>
                </div>
              </div>
              </div>

              <div className="flex w-full flex-col items-center gap-6">

                <h2 id="certificado" className="scroll-mt-28 pt-6 text-center font-['Archivo'] text-4xl font-medium uppercase tracking-wide text-black sm:text-6xl">
                  Certificado{' '}
                  <span className="shine-text font-['Alex_Brush'] text-6xl normal-case tracking-normal sm:text-8xl">
                    beauty
                  </span>
                </h2>

                <div className="relative flex w-full justify-center">
                  <div className="pointer-events-none absolute left-1/2 top-[26%] h-64 w-screen -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(to_bottom,transparent_0%,#fce7ed_35%,#fce7ed_65%,transparent_100%)] sm:h-80" />

                  <img
                    src={certificado}
                    alt="Certificado Beauty University"
                    className="float relative -translate-y-[28%] w-[130vw] max-w-3xl select-none pt-8 sm:max-w-6xl sm:-translate-y-[13%]"
                    draggable="false"
                  />
                </div>

                <div className="relative -translate-y-[45%] max-w-md rounded-3xl border border-pink-100 bg-pink-50/60 px-8 py-7 shadow-sm backdrop-blur-sm sm:max-w-2xl sm:px-12 sm:py-10">
                  <span className="shine-text absolute -top-5 left-8 font-['Alex_Brush'] text-5xl sm:-top-8 sm:left-10 sm:text-7xl">
                    "
                  </span>

                  <p className="text-center font-['Jost'] text-lg leading-relaxed text-black/70 sm:text-2xl">
                    Samara Pires concluiu o curso na{' '}
                    <span className="font-semibold text-pink-500">Beauty University</span> e se
                    profissionalizou ainda mais, aprimorando técnicas para entregar resultados de
                    excelência em cada atendimento.
                  </p>

                  <div className="mx-auto mt-4 h-px w-16 bg-pink-300 sm:mt-6 sm:w-20" />
                </div>

                <h2 className="-translate-y-16 text-center font-['Archivo'] text-5xl font-medium uppercase tracking-wide text-black sm:-translate-y-20 sm:text-7xl">
                  Venha já!
                </h2>
              </div>
            </div>
          </div>

          <div id="localizacao" className="relative -mt-32 h-[70vh] w-full scroll-mt-28 overflow-hidden sm:-mt-40 sm:h-[85vh]">
            <img
              src={estudioMobile}
              alt="Estúdio Samara Pires Beauty na Vila Ema, São José dos Campos"
              className="h-full w-full object-cover object-[center_20%] sm:hidden"
              draggable="false"
            />
            <img
              src={estudioDesktop}
              alt="Estúdio Samara Pires Beauty na Vila Ema, São José dos Campos"
              className="hidden h-full w-full object-cover sm:block"
              draggable="false"
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white via-white/70 to-transparent sm:h-56" />

            <a
              href="https://maps.app.goo.gl/624VFj9GHbrHHnkg8"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-pink-200 bg-white/20 px-8 py-4 font-['Archivo'] text-sm font-medium uppercase tracking-wide text-black shadow-lg backdrop-blur-xl transition-transform duration-300 hover:scale-105 sm:gap-4 sm:px-14 sm:py-7 sm:text-2xl"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="sm:h-8 sm:w-8">
                <path d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.11 11.34 6.37 11.6a1.6 1.6 0 0 0 2.26 0c.26-.26 6.37-6.35 6.37-11.6C19.5 5.36 16.14 2 12 2m0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5" />
              </svg>
              Como chegar
            </a>

            <div className="absolute inset-x-0 top-28 z-10 flex flex-col items-center gap-6 sm:top-36">
              <img
                src={instagramMockup}
                alt="Instagram Samara Pires Beauty"
                className="float w-[160vw] max-w-3xl -translate-x-[12%] select-none drop-shadow-2xl sm:max-w-6xl sm:-translate-x-[27%]"
                draggable="false"
              />

              <a
                href="https://instagram.com/samara_piresbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex -translate-y-[670%] translate-x-[55%] items-center gap-2 whitespace-nowrap rounded-full px-8 py-4 font-['Archivo'] text-sm font-medium uppercase tracking-wide text-white shadow-lg transition-transform duration-300 hover:scale-105 sm:-translate-y-[653px] sm:gap-4 sm:px-14 sm:py-7 sm:text-2xl"
                style={{
                  background:
                    'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FCAF45)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor" className="sm:h-8 sm:w-8">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
                Me siga
              </a>

              <p className="-translate-y-[230%] translate-x-[40%] text-center font-['Archivo'] text-3xl font-medium uppercase leading-tight tracking-wide text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] sm:-translate-y-[150%] sm:text-7xl">
                Acompanhe
                <br />
                <span className="text-5xl sm:text-9xl">Minha</span>
                <br />
                <span className="inline-block -translate-y-[15%] font-['Alex_Brush'] text-7xl normal-case tracking-normal text-white sm:text-[12rem]">
                  rotina
                </span>
              </p>
            </div>
          </div>
        </main>

      <Footer />

      {introDone && <BookingModal />}
    </>
  )
}

export default App
