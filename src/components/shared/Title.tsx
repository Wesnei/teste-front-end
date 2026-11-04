type Props = {
  id: string;
  children?: string;
};

export default function Title({ id, children = 'Produtos Relacionados' }: Props) {
  return (
    <div className="showcase-title-container">
      <hr aria-hidden="true" />
      <h2 id={id}>{children}</h2>
      <hr aria-hidden="true" />
    </div>
  );
}
