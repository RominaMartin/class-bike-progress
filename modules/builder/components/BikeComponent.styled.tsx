import styled from 'styled-components';

interface IStyledButton {
  colorPickerVisible: boolean;
  disabled: boolean;
}

export const Container = styled.div`
  position: relative;
  width: 100%;
  clip-path: inset(-100vw -100vw -100vw 0);
`;

export const StyledButton = styled.button<IStyledButton>`
  border: 2px solid
    ${({ theme, colorPickerVisible }) =>
      colorPickerVisible ? theme.colors.yellow : theme.colors.black};
  text-align: center;
  padding: ${({ theme }) => theme.spacings.small1};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  width: 100%;
  border-right: ${({ colorPickerVisible }) => (colorPickerVisible ? 'none' : 'auto')};

  ${({ theme, disabled }) =>
    disabled &&
    `
    pointer-events: none;
    border-color: ${theme.colors.silver300};
  `};

  :hover {
    border-color: ${({ theme }) => theme.colors.yellow};
    box-shadow: ${({ colorPickerVisible }) =>
      colorPickerVisible ? 'none' : 'rgb(0 0 0 / 15%) 0px 3px 12px'};
    font-weight: bold;
    cursor: pointer;
  }

  :active {
    font-weight: bold;
    border-color: ${({ theme }) => theme.colors.yellow};
    outline: none;
  }
`;
