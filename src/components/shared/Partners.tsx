type Props = {
  headingId: string;
};

function PartnerCard() {
  return (
    <article className="partners">
      <div className="partners-text-container">
        <h3>Parceiros</h3>
        <p>Lorem ipsum dolor sit amet, consectetur</p>
        <a className="partners-button" href="#vitrine-principal">
          Confira
        </a>
      </div>
      <img src="/parceiros.png" loading="lazy" alt="" />
    </article>
  );
}

export default function Partners({ headingId }: Props) {
  return (
    <section className="partners-container" data-aos="zoom-in" aria-labelledby={headingId}>
      <h2 id={headingId} className="sr-only">
        Parceiros
      </h2>
      <PartnerCard />
      <PartnerCard />
    </section>
  );
}
