import React from "react";
import { Td, Tr } from "./style";
import { FaTrash } from "react-icons/fa";
export function TableItem({ item, onDelete }) {
  return (
    <>
      <Tr>
        <Td>{item.titulo}</Td>
        <Td>{item.preco}</Td>
        <Td>{item.categoria}</Td>
        <Td>{item.data}</Td>

        <Td>
          {" "}
          <Td alignCenter>
            <FaTrash onClick={() => onDelete(item.id)}></FaTrash>{" "}
          </Td>
        </Td>
      </Tr>
    </>
  );
}
