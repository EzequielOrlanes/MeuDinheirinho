import "./Home.css";
import { useState, useEffect } from "react";
import { Cards } from "../../components/Cards";
import { Dados } from "../../components/Dados/Dados";
import { Header } from "../../components/Header/header";
// import { Table } from "../../components/Table/Table";

export function Home() {
  const data = localStorage.getItem("transacoes");
  const [transacoes, setTransacoes] = useState(data ? JSON.parse(data) : []);

  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const somaSaida = transacoes
      .filter((item) => item.saida)
      .map((transaction) => Number(transaction.soma));

    const somaEntrada = transacoes
      .filter((item) => item.saida)
      .map((transaction) => Number(transaction.soma));

    const saida = somaSaida.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const entrada = somaEntrada.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const total = Math.abs(entrada - saida).toFixed(2);

    setEntrada(`R$ ${entrada}`);
    setSaida(`R$ ${saida}`);
    setTotal(`${Number(entrada) < Number(saida) ? "-" : ""} R$ ${total}`);
  }, [transacoes]);

  const handleAdd = (transaction) => {
    const newArrayTransacaoes = [...transacoes, transaction];
    setTransacoes(newArrayTransacaoes);

    localStorage.setItem("transasoes", JSON.stringify(newArrayTransacaoes));
  };

  return (
    <>
      {/* <div className="pagina"> */}
      <Header />
      <Cards entrada={entrada} saida={saida} total={total} />
      {/* <Table> </Table> */}
      {/* </div> */}
    </>
  );
}
