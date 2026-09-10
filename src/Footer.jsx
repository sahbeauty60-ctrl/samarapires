import { useState } from 'react'
import logo from './assets/logo.png'

export default function Footer() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <footer className="relative z-10 bg-white px-4 py-12 text-center">
        <img
          src={logo}
          alt="Samara Pires Beauty"
          className="mx-auto h-16 w-auto select-none object-contain"
          draggable="false"
        />

        <p className="mt-4 font-['Jost'] text-sm text-black/50">
          Nanopigmentação, design de sobrancelhas e depilação na Vila Ema, São José dos Campos – SP
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-['Jost'] text-sm text-black/60">
          <a
            href="https://instagram.com/samara_piresbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5512988018098"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-black"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="transition-colors hover:text-black"
          >
            Política de Privacidade
          </button>
        </div>

        <p className="mt-6 font-['Jost'] text-xs text-black/35">
          © {new Date().getFullYear()} Samara Pires Beauty. Todos os direitos reservados.
        </p>
      </footer>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ease-out ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />

        <div
          className={`relative flex w-full max-w-2xl flex-col rounded-3xl bg-white shadow-2xl transition-all duration-300 ease-out ${
            open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          style={{ maxHeight: '85vh' }}
        >
          <div className="flex items-center justify-between border-b border-black/10 px-6 py-5 sm:px-8">
            <h3 className="font-['Archivo'] text-xl font-medium uppercase tracking-wide text-black sm:text-2xl">
              Política de Privacidade
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-black/50 transition-colors hover:bg-black/5 hover:text-black"
            >
              ✕
            </button>
          </div>

          <div className="overflow-y-auto px-6 py-6 font-['Jost'] text-sm leading-relaxed text-black/70 sm:px-8">
            <p className="text-xs text-black/40">Última atualização: setembro de 2026</p>

            <p className="mt-4">
              Esta Política de Privacidade explica como a{' '}
              <strong className="text-black">Samara Pires Beauty</strong>, estúdio de
              nanopigmentação, design de sobrancelhas e depilação em São José dos Campos – SP,
              trata as informações de quem visita este site, em conformidade com a Lei Geral de
              Proteção de Dados (Lei nº 13.709/2018 – LGPD).
            </p>

            <h4 className="mt-6 font-['Archivo'] text-base font-medium uppercase tracking-wide text-black">
              1. Quais dados coletamos
            </h4>
            <p className="mt-2">
              Este site não possui cadastro, login ou formulário que armazene seus dados em um
              banco de dados. A única informação que você pode fornecer é ao clicar no botão{' '}
              <strong className="text-black">"Agendamento"</strong>: ali você pode escolher um
              serviço de interesse e escrever uma mensagem livremente. Esse conteúdo é usado
              exclusivamente para montar um link que abre uma conversa no WhatsApp. O site em si
              não armazena ou processa esses dados em servidores. No entanto, ao enviar a
              mensagem para o número da Samara Pires Beauty, os dados (como seu telefone e o
              conteúdo da mensagem) passam a ser tratados por nós exclusivamente para a
              finalidade de atendimento e agendamento de serviços, com base na execução de
              procedimentos solicitados por você.
            </p>

            <h4 className="mt-6 font-['Archivo'] text-base font-medium uppercase tracking-wide text-black">
              2. Cookies e rastreamento
            </h4>
            <p className="mt-2">
              Este site não utiliza cookies de rastreamento, pixels de publicidade ou ferramentas
              de análise de comportamento de navegação. Não coletamos dados de navegação para fins
              de marketing.
            </p>

            <h4 className="mt-6 font-['Archivo'] text-base font-medium uppercase tracking-wide text-black">
              3. Compartilhamento com terceiros
            </h4>
            <p className="mt-2">
              Ao clicar em botões como <strong className="text-black">"Enviar no WhatsApp"</strong>
              , <strong className="text-black">"Me Siga"</strong> (Instagram) ou{' '}
              <strong className="text-black">"Como Chegar"</strong> (Google Maps), você será
              redirecionado para plataformas de terceiros — Meta/WhatsApp, Instagram e Google —
              que possuem suas próprias políticas de privacidade, independentes deste site.
            </p>

            <h4 className="mt-6 font-['Archivo'] text-base font-medium uppercase tracking-wide text-black">
              4. Seus direitos como titular dos dados
            </h4>
            <p className="mt-2">
              De acordo com o Art. 18 da LGPD, você tem direito a: confirmação da existência de
              tratamento de dados; acesso aos dados; correção de dados incompletos ou
              desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários;
              portabilidade dos dados; informação sobre com quem seus dados foram compartilhados;
              e revogação do consentimento a qualquer momento.
            </p>

            <h4 className="mt-6 font-['Archivo'] text-base font-medium uppercase tracking-wide text-black">
              5. Como falar conosco
            </h4>
            <p className="mt-2">
              Para exercer qualquer um desses direitos ou tirar dúvidas sobre esta política, entre
              em contato pelo WhatsApp:{' '}
              <a
                href="https://wa.me/5512988018098"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-pink-500 hover:underline"
              >
                (12) 98801-8098
              </a>
              .
            </p>

            <h4 className="mt-6 font-['Archivo'] text-base font-medium uppercase tracking-wide text-black">
              6. Alterações nesta política
            </h4>
            <p className="mt-2">
              Esta política pode ser atualizada periodicamente para refletir melhorias ou
              mudanças no site. A data no topo desta página indica a versão mais recente.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
