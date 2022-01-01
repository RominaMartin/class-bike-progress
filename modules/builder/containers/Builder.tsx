import { FC, MouseEvent, useState } from "react";
import Bike from "components/bike/Bike";
import ColorPicker from "components/colorPicker/ColorPicker";
import { Container } from "./Builder.styled";
import BikeComponent from "../components/BikeComponent";
import ComponentList from "./ComponentList";

const Builder: FC = () => {
  const [bikeColors, setBikeColors] = useState({});

  const handleColorHover = (id: string, color: string) => {
    setBikeColors({ ...bikeColors, [id]: color });
  };

  return (
    <Container>
      <ComponentList
        onColorHover={handleColorHover}
        onColorSelection={handleColorHover}
      />
      <Bike {...bikeColors} />
    </Container>
  );
};

export default Builder;
