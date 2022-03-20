import styled from 'styled-components';

interface IPreview {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const BikePreview = styled.div<IPreview>`
  padding: 0 16px;
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
  text-align: center;
  padding-top: ${({ theme }) => theme.spacings.small2};
`;

export const Person = styled.li``;

export const GroupName = styled.h4`
  text-align: center;
  font-weight: bold;
  padding-bottom: ${({ theme }) => theme.spacings.small2};
`;
