import React from "react";
import { Header, HeaderTitle, Container, Total } from "./Celula";

function Celula({ title, Icon, value }) {
  return (
    <>
      <Container>
        <Header>
          <HeaderTitle>{title} </HeaderTitle>
          <Icon />
        </Header>
        <Total>
          {" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(value)}{" "}
        </Total>
      </Container>
    </>
  );
}
export { Celula };
