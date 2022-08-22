import React from "react";
import { LLogo } from "./style";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export function Logo() {
  return (
    <>
      <LLogo>
        <AttachMoneyIcon fontSize='large' />
      </LLogo>
        <h2 style={{marginTop: '4%',
                    fontFamily: 'Lucida Handwriting'
      }}>My little money</h2>
    </>
  );
}
