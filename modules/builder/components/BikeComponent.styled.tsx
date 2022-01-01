import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  clip-path: inset(-100vw -100vw -100vw 0);
`;

export const StyledButton = styled.button`
  border: 2px solid #a888a3;
  text-align: center;
  padding: ${({ theme }) => theme.spacings.small1};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 100%;

  :hover {
    border-color: #e4c7d0;
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px;
    font-weight: bold;
    cursor: pointer;
  }

  :active,
  :focus {
    font-weight: bold;
    border-color: #e4c7d0;
    outline: none;
    border-right: none;
  }
`;
