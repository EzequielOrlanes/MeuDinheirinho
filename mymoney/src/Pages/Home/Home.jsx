import "./Home.css";
import { useState } from "react";
import { Cards } from "../../components/Cards";
import { Dados } from "../../components/Dados/Dados";
import { Form } from "../../components/Form/Form";

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
          <Form></Form>
        </div>
        <Cards />

        <div className="tabela">
          <Dados />
        </div>
      </div>
    </>
  );
}
