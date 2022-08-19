// import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
// import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
// import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

import React from "react";

import { Container } from "./Cards";
import { Celula } from "../Celula";
export function Cards() {
  return (
    <>
      <Container>
        {" "}
        <Celula />
        <Celula />
        <Celula />
      </Container>
    </>
  );
}
