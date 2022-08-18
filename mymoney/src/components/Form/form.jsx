import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import './form.css';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import {Modal} from '../Modal/Modal'



export function Form() {
  const [state, setState] = React.useState({
    novaTransacao: false,
    
  });



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

  const list = (anchor) => (
    <Box
      sx={'auto'}
      role="presentation"
      
      
    >
        <h2>Nova transação</h2>
        <Modal />
        <div class="botao">
          <Button onClick={toggleDrawer(anchor, false)}
                  variant="contained"
                  color="primary"
                  
          >Pronto!</Button>
        </div>
        
      
    </Box>
  );

  


  return (
    <div>
      {['Nova transação'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} variant="contained" color="primary">{anchor}</Button>
          <SwipeableDrawer
            PaperProps={{sx: {
                              backgroundColor: 'rgba(240,240,255,1)'
            }}}             
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
