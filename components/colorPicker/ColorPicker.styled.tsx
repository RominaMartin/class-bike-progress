import styled from 'styled-components';

interface IColorPickerContainer {
  visible: boolean;
  simple: boolean;
}
export const Container = styled.div<IColorPickerContainer>`
  position: absolute;
  top: 0;
  left: ${({ visible }) => (visible ? '100%' : '-200px')};
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.small1};
  border: 2px solid ${({ theme, simple }) => (simple ? 'transparent' : theme.colors.yellow)};
  border-left: none;
  width: 180px;
  /* flex-wrap: wrap; */
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  transition: all 0.5s ease;
  align-items: center;
  z-index: ${({ simple }) => (simple ? 0 : -1)};
`;

export const Color = styled.div`
  background-color: ${({ color }) => color};
  /* width: ${({ theme }) => theme.spacings.small4};
  height: ${({ theme }) => theme.spacings.small4}; */
  height: 100%;
  width: 100%;
  cursor: pointer;
  position: relative;

  :hover {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    z-index: 2;
  }
`;
