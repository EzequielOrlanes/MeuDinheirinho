import { Table, Thead, Tr, Th, Tbody } from "./style";
// import { TableItem } from "../TableItem";

export function Table() {
  return (
    <>
      <Table>
        <Thead>
          <Tr>
            <Th width={40}> Titulo </Th>
            <Th width={20}>Preço</Th>
            <Th width={20}> Categoria</Th>
            <Th width={20}> Data </Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* {novaListadeTransacoes?.map((item, index) => (
            <TableItem key={index} item={item} />
          ))} */}
        </Tbody>
      </Table>
    </>
  );
}
