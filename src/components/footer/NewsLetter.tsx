export default function NewsLetter() {
  return (
    <div aria-labelledby="newsletter-title" className="newsletter-container">
      <div className="text-container">
        <h4 id="newsletter-title">Inscreva-se na nossa newsletter</h4>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>

      <form className="inputs-container">
        <div className="inputs-row">
          <label htmlFor="name-input" style={{ display: "none" }}>
            Nome
          </label>
          <input
            id="name-input"
            type="text"
            placeholder="Digite seu nome"
            required
          />

          <label htmlFor="email-input" style={{ display: "none" }}>
            E-mail
          </label>
          <input
            id="email-input"
            type="email"
            placeholder="Digite seu e-mail"
            required
          />

          <button type="submit" aria-label="Inscrever na newsletter">
            Inscrever
          </button>
        </div>
        <div className="check-box-container">
          <input
            id="terms-checkbox"
            type="checkbox"
            required
            aria-label="Aceito os termos e condições"
          />
          <label htmlFor="terms-checkbox">Aceito os termos e condições</label>
        </div>
      </form>
    </div>
  );
}
