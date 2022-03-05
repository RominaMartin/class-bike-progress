import React, { Children, FC } from 'react';
import styled from 'styled-components';

type Props = {
  disabled: boolean;
  fixed?: string[];
  onClick: () => void;
};

type IStyledButton = {
  fixed?: string[];
  disabled: boolean;
};

export const StyledButton = styled.button<IStyledButton>`
  border: ${({ theme }) => `2px solid ${theme.colors.black}`};
  text-align: center;
  padding: ${({ theme }) => theme.spacings.small1};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 12px;

  ${({ theme, disabled }) =>
    disabled &&
    `
    pointer-events: none;
    border-color: ${theme.colors.silver300};
  `};

  :hover {
    border-color: ${({ theme }) => theme.colors.yellow};
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px;
    font-weight: bold;
    cursor: pointer;
  }

  :active {
    font-weight: bold;
    border-color: ${({ theme }) => theme.colors.yellow};
    outline: none;
  }

  ${({ fixed }) =>
    fixed &&
    `
    position: fixed;
    ${fixed[0]}: 10px;
    ${fixed[1]}: 10px;
  `}
`;

const Button: FC<Props> = ({ disabled, onClick, fixed, children }) => {
  return (
    <StyledButton fixed={fixed} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
