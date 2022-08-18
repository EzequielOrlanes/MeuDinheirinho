import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export function Modal() {
  const [value, setValue] = React.useState('Controlled');
  const [preço, setPreço] = React.useState('Preço');
  const [nome, setNome] = React.useState('Nome');
  const [categoria, setCategoria] = React.useState('Categoria');
  const [pintaVerde, setPintaVerde] = React.useState(true);
  const [pintaVermelho, setPintaVermelho] = React.useState(false);




  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleNomeChange = (event) => {
    setValue(event.target.nome);
  };

  const handlePreçoChange = (event) => {
    setValue(event.target.preço);
  };

  const handleCategoriaChange = (event) => {
    setValue(event.target.categoria);
  };




  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '45ch' },
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
            <Button variant="contained"
                    onClick={()=> {
                        setPintaVerde(true);
                        setPintaVermelho(false);
                    }}
                    style={{backgroundColor: pintaVerde?'rgba(0,255,0,0.6)':'rgb(200,200,200)'}}
            >Entrada</Button>
                        
            <Button variant="contained"
                    onClick={()=> {
                        setPintaVerde(false);
                        setPintaVermelho(true);
                    }}
                    style={{backgroundColor: pintaVermelho?'rgba(255,0,0,0.6)':'rgb(200,200,200)'}}    
            >Saida</Button>
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
  );
}
