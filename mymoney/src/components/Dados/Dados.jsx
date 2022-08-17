import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export function Dados() {
  function createData(titulo, preço, categoria, data) {
    return { titulo, preço, categoria, data };
  }

  const rows = [
    createData("Desenvolvimento de site", 159, 6.0, 24),
    createData("Hamburguer ", 237, 9.0, 37),
    createData("Aluguel do apartamento", 262, 16.0, 24),
    createData("Computador", 262, 16.0, 24),
  ];

  return (
    <TableContainer component={Paper}>
      <TableHead>
        {" "}
        <TableRow>
          <TableCell>
            {" "}
            <strong> Titulo </strong>
          </TableCell>
          <TableCell>
            {" "}
            <strong> Preço</strong>
          </TableCell>{" "}
          <TableCell>
            {" "}
            <strong> Categoria </strong>
          </TableCell>{" "}
          <TableCell>
            {" "}
            <strong> Data </strong>
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.titulo}
            </TableCell>
            <TableCell align="right">{row.preço}</TableCell>
            <TableCell align="right">{row.categoria}</TableCell>
            <TableCell align="right">{row.data}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
}
