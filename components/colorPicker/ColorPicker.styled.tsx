import styled from "styled-components";

interface IColorPickerContainer {
  visible: boolean;
}
export const Container = styled.div<IColorPickerContainer>`
  position: absolute;
  top: 0;
  left: ${({ visible }) => (visible ? "100%" : "-200px")};
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacings.small1};
  border: 2px solid #e4c7d0;
  border-left: none;
  box-shadow: rgb(0 0 0 / 15%) 0px 3px 12px;
  width: 180px;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
  transition: all 0.5s ease;
  align-items: center;
  z-index: -1;
`;

export const Color = styled.div`
  background-color: ${({ color }) => color};
  width: ${({ theme }) => theme.spacings.small4};
  height: ${({ theme }) => theme.spacings.small4};
  cursor: pointer;
  position: relative;

  :hover {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    box-shadow: rgb(0 0 0 / 25%) 0px 0px 5px 2px;
    z-index: 2;
  }
`;
