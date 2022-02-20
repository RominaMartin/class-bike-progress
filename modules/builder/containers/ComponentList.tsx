import { FC } from 'react';

import BikeComponent from '../components/BikeComponent';

import { Container } from './ComponentList.styled';

interface Props {
  components: { [key: string]: boolean };
  onColorHover: (id: string, color: string) => void;
  onColorSelection: (id: string, color: string) => void;
  onColorPickerClose: () => void;
}

const ComponentList: FC<Props> = ({
  components,
  onColorHover = () => {},
  onColorSelection = () => {},
  onColorPickerClose = () => {},
}) => {
  return (
    <Container>
      {Object.keys(components).map(component => (
        <BikeComponent
          key={component}
          id={component}
          onColorHover={onColorHover}
          onColorSelection={onColorSelection}
          onColorPickerClose={onColorPickerClose}
          disabled={components[component]}
        />
      ))}
    </Container>
  );
};

export default ComponentList;
