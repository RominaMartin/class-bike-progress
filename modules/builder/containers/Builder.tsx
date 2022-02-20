import { FC, useEffect, useState } from 'react';

import Bike from 'components/bike/Bike';

import { Container } from './Builder.styled';
import ComponentList from './ComponentList';

interface Props {
  components?: { [id: string]: boolean };
  colors?: { [key: string]: string };
  onComponentChange: (colors: { [key: string]: string }) => void;
}

const Builder: FC<Props> = ({ components = {}, colors = {}, onComponentChange = () => {} }) => {
  const [bikeColors, setBikeColors] = useState(colors);
  const [bikeBaseColors, setBikeBaseColors] = useState(colors);

  useEffect(() => {
    setBikeColors(colors);
    setBikeBaseColors(colors);
  }, [colors]);

  const handleColorHover = (id: string, color: string) => {
    setBikeColors({ ...bikeColors, [id]: color });
  };

  const handleColorSelection = (id: string, color: string) => {
    setBikeColors({ ...bikeColors, [id]: color });
    setBikeBaseColors({ ...bikeBaseColors, [id]: color });
    onComponentChange({ ...bikeBaseColors, [id]: color });
  };

  const handleColorPickerClosed = () => {
    setBikeColors(bikeBaseColors);
  };

  return (
    <Container>
      {Object.keys(components).length ? (
        <ComponentList
          components={components}
          onColorHover={handleColorHover}
          onColorSelection={handleColorSelection}
          onColorPickerClose={handleColorPickerClosed}
        />
      ) : null}
      <Bike {...bikeColors} />
    </Container>
  );
};

export default Builder;
