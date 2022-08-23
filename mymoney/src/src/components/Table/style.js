import styled from "styled-components";

export const Table = styled.div`
  width: 98%;
  background-color: red;
  padding: 20%;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1220px;
  margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
