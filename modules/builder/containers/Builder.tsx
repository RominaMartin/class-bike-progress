import { FC, useState } from "react";
import Bike from "components/bike/Bike";
import { Container } from "./Builder.styled";
import ComponentList from "./ComponentList";

const Builder: FC = () => {
  const [bikeColors, setBikeColors] = useState({});
  const [bikeBaseColors, setBikeBaseColors] = useState({});

  const handleColorHover = (id: string, color: string) => {
    setBikeColors({ ...bikeColors, [id]: color });
  };

  const handleColorSelection = (id: string, color: string) => {
    setBikeColors({ ...bikeColors, [id]: color });
    setBikeBaseColors({ ...bikeBaseColors, [id]: color });
  };

  const handleColorPickerClosed = () => {
    setBikeColors(bikeBaseColors);
  };

  return (
    <Container>
      <ComponentList
        onColorHover={handleColorHover}
        onColorSelection={handleColorSelection}
        onColorPickerClose={handleColorPickerClosed}
      />
      <Bike {...bikeColors} />
    </Container>
  );
};

export default Builder;
