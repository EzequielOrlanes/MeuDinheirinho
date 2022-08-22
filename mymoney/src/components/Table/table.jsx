import { TTable, Thead, Tr, Th, Tbody } from "./style";
import { TableItem } from "../TableItem";
export function Table(itens, setItens) {
  const onDelete = (ID) => {
    const newArray = itens.filter((transacoes) => transacoes.id !== ID);
    setItens(newArray);
    localStorage.setItem("transacoes", JSON.stringify(newArray));
  };

  return (
    <>
      <TTable>
        <Thead>
          <Tr>
            <Th width={40}> Titulo </Th>
            <Th width={20}>Preço</Th>
            <Th width={20}> Categoria</Th>
            <Th width={20}> Data</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items?.map((item, index) => (
            <TableItem key={index} item={item} />
          ))}
        </Tbody>
      </TTable>
    </>
  );
}
