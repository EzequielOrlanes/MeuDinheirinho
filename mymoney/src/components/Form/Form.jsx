import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import "./form.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { FForm } from "./style";

export function Form() {
  const [state, setState] = React.useState({
    novaTransacao: false,
  });

  const [preço, setPreço] = React.useState("Preço");
  const [nome, setNome] = React.useState("Nome");
  const [categoria, setCategoria] = React.useState("Categoria");
  const [pintaVerde, setPintaVerde] = React.useState(true);
  const [pintaVermelho, setPintaVermelho] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handlePreçoChange = (event) => {
    setPreço(event.target.value);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const envia = (anchor, open) => (event) => {
    const dado = (nome, preço, categoria, "abcd");
    console.log(dado);
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box sx={"auto"} role="presentation">
      <h2>Nova transação</h2>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "90%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="filled-nome"
            required
            label="Nome"
            placeholder="Nome"
            onChange={handleNomeChange}
            multiline
            variant="filled"
          />
        </div>
        <div>
          <TextField
            id="filled-valor"
            required
            label="Valor"
            placeholder="Valor"
            onChange={handlePreçoChange}
            multiline
            variant="filled"
          />
        </div>
        <div>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={() => {
                setPintaVerde(true);
                setPintaVermelho(false);
              }}
              style={{
                backgroundColor: pintaVerde
                  ? "rgba(0,255,0,0.6)"
                  : "rgb(200,200,200)",
              }}
            >
              Entrada
            </Button>

            <Button
              variant="contained"
              onClick={() => {
                setPintaVerde(false);
                setPintaVermelho(true);
              }}
              style={{
                backgroundColor: pintaVermelho
                  ? "rgba(255,0,0,0.6)"
                  : "rgb(200,200,200)",
              }}
            >
              Saida
            </Button>
          </Stack>
        </div>
        <div>
          <TextField
            id="filled-categoria"
            required
            label="Categoria"
            placeholder="Categoria"
            onChange={handleCategoriaChange}
            multiline
            variant="filled"
          />
        </div>
      </Box>
      <div class="botao">
        <Button
          onClick={envia(anchor, false)}
          variant="contained"
          color="primary"
        >
          Pronto!
        </Button>
      </div>
    </Box>
  );
  return (
    <div>
      {["Nova transação"].map((anchor) => (
        <React.Fragment key={anchor}>
          <FForm>
            <Button
              onClick={toggleDrawer(anchor, true)}
              variant="contained"
              color="primary"
              align-items="right"
            >
              {anchor}
            </Button>
          </FForm>
          <SwipeableDrawer
            class="modal"
            PaperProps={{
              sx: {
                width: "35%",
                backgroundColor: "rgba(240,240,255,1)",
              },
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
