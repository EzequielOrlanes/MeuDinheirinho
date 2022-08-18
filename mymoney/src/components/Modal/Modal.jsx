import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function Modal() {
  const [value, setValue] = React.useState('Controlled');
  const [preço, setPreço] = React.useState('Preço');
  const [nome, setNome] = React.useState('Nome');
  const [categoria, setCategoria] = React.useState('Categoria');

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
          id="standard-textarea"
          label="Nome"
          placeholder="Nome"
          onChange={handleNomeChange}
          multiline
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="Valor"
          placeholder="Valor"
          onChange={handlePreçoChange}
          multiline
          variant="standard"
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="Categoria"
          placeholder="Categoria"
          onChange={handleCategoriaChange}
          multiline
          variant="standard"
        />
      </div>
    </Box>
  );
}
