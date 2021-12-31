import styled from "styled-components";
import { device } from "styles/theme/DefaultTheme";

export const Container = styled.div`
  display: grid;
  width: 60%;
  gap: ${({ theme }) => theme.spacings.small1};
  justify-items: center;
  align-items: center;
  justify-content: center;

  grid-template-columns: repeat(5, 1fr);

  margin: auto;

  @media (max-width: ${device.mobileL}) {
    width: 90%;
  }

  @media (min-width: ${device.laptop}) {
    width: 50%;
  }
`;
