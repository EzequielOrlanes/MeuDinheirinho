import React from "react";
import { Header, HeaderTitle, Container, Total } from "./Celula";

function Celula() {
  return (
    <>
      <Container>
        <Header>
          <HeaderTitle>teste</HeaderTitle>
        </Header>
        <Total> R$ 200.000</Total>
      </Container>
    </>
  );
}
export { Celula };
