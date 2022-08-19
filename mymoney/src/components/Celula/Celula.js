import styled from "styled-components";

export const Container = styled.div`
  margin-top: -68px;
  display: flex;
  gap: 30px;
  margin-left: 160px;

  @media (max-width: 750px) {
    width: 20%;
    p {
      font-size: 12px;
    }

    span {
      font-size: 20px;
    }

    svg {
      display: none;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;

  svg {
    width: 25px;
    height: 25px;
  }
`;
export const HeaderTitle = styled.p`
  font-size: 20px;
`;
export const Total = styled.spam`
  font-size: 30px;
  font-weight: bold;
`;
