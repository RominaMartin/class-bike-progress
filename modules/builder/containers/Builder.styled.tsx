import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacings.small4};
  height: 100%;
  text-align: center;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: minmax(max-content, 100px) 1fr;
  align-items: center;

  svg {
    height: 100%;
    box-sizing: border-box;
    padding: 0 ${({ theme }) => theme.spacings.small3};
  }
`;
