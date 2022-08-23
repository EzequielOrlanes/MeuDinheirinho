import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { padding } from "@mui/system";

export function Dados({ novaListadeTransacoes }) {
  function createData(titulo, preço, categoria, data) {
    return { titulo, preço, categoria, data };
  }

  function dataFormat(date) {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <TableContainer
      component={Paper}
      style={{
        maxWidth: "88%",
        marginLeft: "83px",
        marginTop: "50px",
        padding: "5px",
      }}
    >
      <TableHead>
        {" "}
        <TableRow>
          <TableCell style={{ width: "80%" }}>
            {" "}
            <strong> Titulo </strong>
          </TableCell>
          <TableCell style={{ width: "10%" }}>
            {" "}
            <strong> Preço</strong>
          </TableCell>{" "}
          <TableCell style={{ width: "10%" }}>
            {" "}
            <strong> Categoria </strong>
          </TableCell>{" "}
          <TableCell style={{ width: "10%" }}>
            {" "}
            <strong> Data </strong>
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {novaListadeTransacoes.map((row) => (
          <TableRow key={row.nome}>
            <TableCell component="th" scope="row">
              {row.nome}
            </TableCell>
            <TableCell align="right">{row.preço}</TableCell>
            <TableCell align="right">{row.categoria}</TableCell>
            <TableCell align="right"> {dataFormat(row.date)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
}