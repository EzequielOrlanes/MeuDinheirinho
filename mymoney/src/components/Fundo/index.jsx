import "./Fundo.css";
import { Cards } from "../Cards/index";
import { Table } from "../Table/index";
import { useState } from "react";

export function Fundo() {
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
        <div className="conteudo">
          <Table />
        </div>
      </div>
    </>
  );
}
