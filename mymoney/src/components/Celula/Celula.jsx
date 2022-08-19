import React from "react";
import { Header, HeaderTitle, Total } from "./Celula";
import { Container } from "../Cards";

export function Celula() {
  return (
    <>
      <Container>
        <Header>
          <HeaderTitle>teste</HeaderTitle>
        </Header>
        <Total> R$ 577.000 </Total>
      </Container>
    </>
  );
}
