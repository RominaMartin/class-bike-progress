import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: ${({ theme }) => theme.spacings.small4};
  text-align: center;
  box-sizing: border-box;

  svg {
    height: calc(100% - 90px);
    box-sizing: border-box;
    padding: ${({ theme }) => theme.spacings.small3} 0;
  }
`;
