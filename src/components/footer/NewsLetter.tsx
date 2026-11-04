import type { FormEvent } from 'react';

export default function NewsLetter() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="newsletter-container" aria-labelledby="newsletter-title">
      <div className="text-container">
        <h2 id="newsletter-title">Inscreva-se na nossa newsletter</h2>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>

      <form className="inputs-container" onSubmit={handleSubmit}>
        <div className="inputs-row">
          <label htmlFor="name-input" className="sr-only">
            Nome
          </label>
          <input
            id="name-input"
            name="name"
            type="text"
            placeholder="Digite seu nome"
            autoComplete="name"
            required
          />

          <label htmlFor="email-input" className="sr-only">
            E-mail
          </label>
          <input
            id="email-input"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            autoComplete="email"
            required
          />

          <button type="submit">Inscrever</button>
        </div>
        <div className="check-box-container">
          <input id="terms-checkbox" name="terms" type="checkbox" required />
          <label htmlFor="terms-checkbox">Aceito os termos e condições</label>
        </div>
      </form>
    </section>
  );
}
