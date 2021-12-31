import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.small1};
  height: max-content;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px;
  width: 100px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Color = styled.div`
  background-color: ${({ color }) => color};
  width: ${({ theme }) => theme.spacings.small4};
  height: ${({ theme }) => theme.spacings.small4};
  cursor: pointer;
  position: relative;

  :hover {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 5px 2px;
    z-index: 2;
  }
`;
