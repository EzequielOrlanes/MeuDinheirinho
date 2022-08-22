import React from "react";
import { Logo } from "../Logo/logo";
import { Form } from "../Form/Form";
import { HHeader } from "./style";

export function Header() {
  return (
    <HHeader>
      <Logo />
      <Form />
    </HHeader>
  );
}
