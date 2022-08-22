import React from "react";
import { Logo } from "../Logo/logo";
import { Form } from "../Form/Form";
import { HHeader } from "./style";

export function Header({ novaListadeTransacoes, setNovaListadeTransacoes }) {
  return (
    <HHeader>
      <Logo />
      <Form
        novaListadeTransacoes={novaListadeTransacoes}
        setNovaListadeTransacoes={setNovaListadeTransacoes}
      />
    </HHeader>
  );
}
