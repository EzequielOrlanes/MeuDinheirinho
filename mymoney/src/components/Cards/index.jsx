import React from "react";
import {
  FaDollarSign,
  FaRegArrowAltCircleDown,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";

import { Container } from "./Cards";
import { Celula } from "../Celula";

export function Cards({ entrada, saida, total }) {
  return (
    <>
      <Container>
        <Celula title="Entrada" Icon={FaRegArrowAltCircleUp} value={entrada} />
        <Celula title="Saídas" Icon={FaRegArrowAltCircleDown} value={saida} />
        <Celula title="Total" Icon={FaDollarSign} value={total} />
      </Container>
    </>
  );
}
