import "./Fundo.css";
import { Cards } from "../Cards/index";
import { Table } from "../Table/index";

export function Fundo() {
  return (
    <>
      <div class="pagina">
        <div class="header">
          <div class="meuDinheirinho">Meu dinheirinho</div>
          <button class="novaTransacao">Nova transação</button>
        </div>
        <Cards />
        <div class="conteudo">
          <Table />
        </div>
      </div>
    </>
  );
}
