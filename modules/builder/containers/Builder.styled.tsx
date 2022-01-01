import styled from "styled-components";
import { device } from "styles/theme/DefaultTheme";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.spacings.small4};
  text-align: center;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: minmax(max-content, 100px) 1fr;

  svg {
    height: 100%;
    box-sizing: border-box;
    padding: 0 ${({ theme }) => theme.spacings.small3};
  }

  /* @media (max-width: ${device.mobileL}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacings.small2};
  } */
`;
