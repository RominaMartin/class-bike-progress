import styled from "styled-components";

export const Container = styled.button`
  border: 2px solid #a888a3;
  text-align: center;
  padding: ${({ theme }) => theme.spacings.small2};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;

  :hover {
    border-color: #e4c7d0;
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px;
    font-weight: bold;
  }

  :active,
  :focus {
    font-weight: bold;
    border-color: #e4c7d0;
    outline: none;
  }
`;
