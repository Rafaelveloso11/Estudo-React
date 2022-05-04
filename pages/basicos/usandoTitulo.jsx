import Titulo from "../../components/Titulo";
export default function usandoTitulo() {
  return (
    <>
      <Titulo
        principal="Página de Cadastro"
        secundario="Incluir, alterar e excluir coisas!"
        pequeno={false}
      />
    </>
  );
}
