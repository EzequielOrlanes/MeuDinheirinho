import React from "react";
import { Td, Tr } from "./style";
export function TableItem({ item }) {
  return (
    <>
      <Tr>
        <Td>{item.titulo}</Td>
        <Td>{item.preco}</Td>
        <Td>{item.categoria}</Td>
        <Td>{item.data}</Td>
      </Tr>
    </>
  );
}
