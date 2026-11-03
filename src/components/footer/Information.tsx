export default function Information() {
  return (
    <div aria-label="informations" className="information-container">
      <div className="social-container">
        <img loading="lazy" src="/fav.png" alt="Econverse logo" />
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <div className="social-icons">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="#3F3F40" strokeWidth="2" />
            <circle cx="12" cy="12" r="4" stroke="#3F3F40" strokeWidth="2" />
            <circle cx="17.5" cy="6.5" r="1" fill="#3F3F40" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" fill="#3F3F40" />
          </svg>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3F3F40" strokeWidth="2" />
            <path d="M8 10v7M8 7.5v.5M12 17v-4.2c0-1.5.8-2.3 2-2.3s2 .8 2 2.3V17" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      <hr />

      <div className="links-container">
        <div>
          <h5>Institucional</h5>
          <a aria-label="Learn more about us" href="/">
            Sobre nós
          </a>
          <a aria-label="Learn more about our events" href="/">
            Movimento
          </a>
          <a aria-label="Work with us" href="/">
            Trabalhe Conosco
          </a>
        </div>
      </div>

      <div className="links-container">
        <div>
          <h5>Ajuda</h5>
          <a aria-label="customer service" href="/">
            Suporte
          </a>
          <a aria-label="contact us" href="/">
            Fale Conosco
          </a>
          <a aria-label="question asked" href="/">
            Perguntas Frequentes
          </a>
        </div>
      </div>

      <div className="links-container">
        <div>
          <h5>Termos</h5>
          <a aria-label="terms and conditions" href="/">
            Termos e Condições
          </a>
          <a aria-label="privacy policy" href="/">
            Política de Privacidade
          </a>
          <a aria-label="exchange and return" href="/">
            Troca e Devolução
          </a>
        </div>
      </div>
    </div>
  );
}
