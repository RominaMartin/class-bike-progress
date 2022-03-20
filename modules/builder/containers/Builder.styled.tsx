import styled from 'styled-components';

export const Container = styled.div`
  /* width: 100vw; */
  padding: ${({ theme }) => theme.spacings.small4};
  /* height: 100%; */
  text-align: center;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  div:last-child {
    flex: 1;
  }
  svg {
    height: 100%;
    box-sizing: border-box;
    /* padding: 0 ${({ theme }) => theme.spacings.small3}; */
  }
`;
