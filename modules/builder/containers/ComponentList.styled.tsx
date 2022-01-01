import styled from "styled-components";
import { device } from "styles/theme/DefaultTheme";

export const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacings.small2};

  /* @media (max-width: ${device.mobileL}) {
    grid-template-columns: repeat(5, 1fr);
  } */
`;
