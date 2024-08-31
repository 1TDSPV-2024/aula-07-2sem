{/* PASTA PUBLIC É UMA PASTA LÓGICA */ }

export default function Error() {

  //MUDANDO O TÍTULO DA PÁGINA!!!
  document.title = "Erro 404";

  const imgPathNumber = Math.floor(Math.random() * 3) + 1;

  return (
    <div>
      <h1>ERRO 404 - PÁGINA NÃO ENCONTRADA.</h1>
      <div>
        <figure>
          <img src={`/img404/img-${imgPathNumber}-404.jpg`} alt="Error-404" />
        </figure>
      </div>
    </div>
  );
}