import Showcase from '../shared/Showcase';
import Title from '../shared/Title';
import Tags from './Tags';

export default function ShowcaseOne() {
  return (
    <section
      id="vitrine-principal"
      aria-labelledby="vitrine-principal-titulo"
      className="showcase-section-container"
    >
      <Title id="vitrine-principal-titulo" />
      <Tags />
      <Showcase />
    </section>
  );
}
