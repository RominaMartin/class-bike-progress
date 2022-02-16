import { MouseEvent } from 'react';

import Bike from 'components/bike/Bike';
import { IGroup } from 'context/BikesContext';

import { BikePreview, Container, GroupName, PeopleList, Person } from './GroupListContainer.styled';

interface Props {
  activeGroupId: string | null;
  onClick: (id: string) => void;
  groups: IGroup;
}

const GroupListContainer = ({ activeGroupId, groups, onClick = () => {} }: Props) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.getAttribute('id') || '';
    onClick(id);
  };

  return (
    <Container>
      {Object.keys(groups).map((id: string) => (
        <BikePreview active={activeGroupId === id} key={id} id={id} onClick={handleClick}>
          <GroupName>{groups[id].label}</GroupName>
          <Bike {...groups[id].colors} />
          <PeopleList>
            {groups[id].names.map((name: string) => (
              <Person key={name}>{name}</Person>
            ))}
          </PeopleList>
        </BikePreview>
      ))}
    </Container>
  );
};

export default GroupListContainer;
