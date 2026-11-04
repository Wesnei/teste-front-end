const footerColumns = [
  {
    title: 'Institucional',
    links: [
      { href: '/sobre', label: 'Sobre nós' },
      { href: '/movimento', label: 'Movimento' },
      { href: '/trabalhe-conosco', label: 'Trabalhe Conosco' },
    ],
  },
  {
    title: 'Ajuda',
    links: [
      { href: '/suporte', label: 'Suporte' },
      { href: '/contato', label: 'Fale Conosco' },
      { href: '/faq', label: 'Perguntas Frequentes' },
    ],
  },
  {
    title: 'Termos',
    links: [
      { href: '/termos', label: 'Termos e Condições' },
      { href: '/privacidade', label: 'Política de Privacidade' },
      { href: '/trocas', label: 'Troca e Devolução' },
    ],
  },
];

export default function Information() {
  return (
    <div className="information-container">
      <div className="social-container">
        <img loading="lazy" src="/fav.png" alt="Econverse" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <nav className="social-icons" aria-label="Redes sociais">
          <a href="https://instagram.com" aria-label="Instagram da Econverse" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="#3F3F40" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" stroke="#3F3F40" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1" fill="#3F3F40" />
            </svg>
          </a>
          <a href="https://facebook.com" aria-label="Facebook da Econverse" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v2H7v4h2v8h4v-8h3l1-4h-4V9c0-.6.4-1 1-1z" fill="#3F3F40" />
            </svg>
          </a>
          <a href="https://linkedin.com" aria-label="LinkedIn da Econverse" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="#3F3F40" strokeWidth="2" />
              <path d="M8 10v7M8 7.5v.5M12 17v-4.2c0-1.5.8-2.3 2-2.3s2 .8 2 2.3V17" stroke="#3F3F40" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </a>
        </nav>
      </div>

      <hr aria-hidden="true" />

      {footerColumns.map((column) => (
        <nav key={column.title} className="links-container" aria-label={column.title}>
          <div>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ))}
    </div>
  );
}
