import Showcase from '../shared/Showcase';
import Title from '../shared/Title';

type Props = {
  headingId: string;
};

export default function ShowcaseTwo({ headingId }: Props) {
  return (
    <section aria-labelledby={headingId} className="showcase-section-container">
      <Title id={headingId} />
      <a className="showcaseTwo-span" href="#vitrine-principal">
        Ver todos
      </a>
      <Showcase />
    </section>
  );
}
