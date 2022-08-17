import "./Home.css";
import { useState } from "react";
import { Cards } from "../../components/Cards";
import { Dados } from "../../components/Dados/Dados";

export function Home() {
  const [transacao, setTransacao] = useState();

  function novaTransacao() {
    console.log("Abrir o modal aqui");
  }

  return (
    <>
      <div className="pagina">
        <div className="header">
          <div className="meuDinheirinho">Meu dinheirinho</div>
          <button onClick={novaTransacao} className="novaTransacao">
            Nova transação
          </button>
        </div>
        <Cards />
        <div className="tabela">
          <Dados />
        </div>
      </div>
    </>
  );
}
