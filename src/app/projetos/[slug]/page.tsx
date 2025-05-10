// Para rotas dinâmicas, os parâmetros são passados como props
export default function ProjetoDetalhePage({ params }: { params: { slug: string } }) {
  return (
    <>
      <h1 className="text-4xl font-heading">Detalhe do Projeto: {params.slug}</h1>
    </>
  );
}