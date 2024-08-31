import { useParams } from "react-router-dom"; // pacote react router dom -> só trata parâmetros
import { listaProdutos } from "../../listaProdutos";

// hooks são funções que trabalham com ações específicas -> a maioria usa 'use'. -> 
// você pode o useParams agrega todos os parametros que é enviado para ela -> destructuring

export default function EditarProdutos() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "EDITAR PRODUTOS";

  //Realizando um destructuring para recuperar o parâmetro que foi passado na rota:
  //Ex: Se a rota criada foi: /meus-dados/:dados
  //O destructuring irá recuperar o dado que foi passado na rota e atribuir a propriedade de um elemento cuja o nome é aquele criado na rota, antes do dois pontos,ou seja, (:dados)
  //Então teriamos que realizar a seguinte ação para receber esta informação.
  // const{dados} = useParams(), um detalhe aqui é que o useParams() pertence ao react-router e deve ser importado dele

  const { id } = useParams(); // função hook react

  const objProduto = listaProdutos.find((prod) => prod.id == Number(id));



  return (
    <div>
      <h1>Olá, mundo sou o EditarProdutos!</h1>
      <div>
        <h2>ID: {id}</h2>
        <div>
          <p>Nome: {objProduto?.nome}</p>
          <p>Quantidade: {objProduto?.qtd}</p>
          <p>Preço: R$ {objProduto?.preco}</p>
        </div>
      </div>
    </div>
  );
}