import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacings.small2};
  height: 100%;
  max-height: 420px;
  min-height: 360px;
  min-width: 100px;
`;
