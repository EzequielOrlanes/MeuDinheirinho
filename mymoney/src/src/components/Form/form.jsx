import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import './form.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';


export function Form() {
  const [state, setState] = React.useState({
    novaTransacao: false,
    
  });

  const responsivo = useMediaQuery('(min-width:600px)');


  const [preço, setPreço] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [categoria, setCategoria] = React.useState('');
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
    console.log(preço);
  };

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };



  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const envia = (anchor, open) => (event) => {
    const dado = (nome,preço,categoria,pintaVerde,"abcd");
    console.log(dado);
    console.log(nome);
    console.log(preço);
    console.log(categoria);
    console.log(pintaVerde);
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={'auto'}
      role="presentation"

      
    >
        <h2>Nova transação</h2>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '90%' },
      }}
      noValidate
      autoComplete="off"
    >
      <form>
      <div>
        <TextField
          id="filled-nome"
          required
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
          placeholder="Valor"
          value={preço}
          onChange={(e) => setPreço(e.target.value)}
          multiline
          variant="filled"
        />
      </div>
      <div>
        <Stack spacing={2} direction="row" style={{
                                                    padding: '3%',
                                                    width: '90%'
        }}>
            <Button variant="contained"
                    onClick={()=> {
                        setPintaVerde(true);
                        setPintaVermelho(false);
                    }}
                    style={{backgroundColor: pintaVerde?'rgba(0,255,0,0.6)':'rgb(200,200,200)',
                            width: '50%'}}
            >Entrada</Button>
                        
            <Button variant="contained"
                    onClick={()=> {
                        setPintaVerde(false);
                        setPintaVermelho(true);
                    }}
                    style={{backgroundColor: pintaVermelho?'rgba(255,0,0,0.6)':'rgb(200,200,200)',
                            width: '50%'}}    
            >Saida</Button>
        </Stack>
      </div> 
      <div>
        <TextField
          id="filled-categoria"
          required
          placeholder="Categoria"
          multiline
          variant="filled"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
      </div>
      </form>
    </Box>
        <div class="botao" style={{ paddingLeft: '3%',
                                    width: '90%'
                                    }}>
          <Button onClick={envia(anchor, false)}
                  variant="contained"
                  color="primary"
                  style={{width: '100%'}}
                  type='submit'
                  
          >Pronto!</Button>
        </div>
        
      
    </Box>
  );

  return (
    <div>
      {['Nova transação'].map((anchor) => (
        <React.Fragment key={responsivo ? 'left' : 'bottom'}>
          <Button onClick={toggleDrawer(anchor, true)} variant="contained" color="primary">{anchor}</Button>
          <SwipeableDrawer
            class="modal"
            PaperProps={responsivo ? {sx: {
              width: '35%',
              backgroundColor: 'rgba(240,240,255,1)'
}} : {sx: {
  width: '100%',
  backgroundColor: 'rgba(240,240,255,1)'
}}}             
            anchor={responsivo ? 'left' : 'bottom'}
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