import styled from 'styled-components';

interface IPreview {
  active: boolean;
}

export const Container = styled.div`
  width: calc(100% - 32px);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  height: 300px;
  margin: auto;
`;

export const BikePreview = styled.div<IPreview>`
  padding: 16px;
  font-family: Poppins;
  height: 100%;
  box-sizing: border-box;
  display: grid;
  transition: all 100ms linear;
  background-color: ${({ active }) => (active ? '#f5f5f5' : 'transparent')};
  border-radius: 6px;

  :hover {
    ${({ active }) =>
      !active &&
      `
    cursor: pointer;
    box-shadow: -2px 4px 10px rgb(0 0 0 / 10%);
    transform: scale(1.05);
    `}
  }
`;

export const PeopleList = styled.ul`
  list-style: none;
`;

export const Person = styled.li``;

export const GroupName = styled.h4`
  text-align: center;
  font-weight: bold;
`;
