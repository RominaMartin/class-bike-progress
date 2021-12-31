import { FC, MouseEvent } from "react";
import Bike from "components/bike/Bike";
import ColorPicker from "components/colorPicker/ColorPicker";
import { Container } from "./Builder.styled";
import BikeComponent from "../components/BikeComponent";
import ComponentList from "./ComponentList";

const Builder: FC = () => {
  const handleComponentClick = (id: string) => {
    console.log(id);
  };

  return (
    <Container>
      <Bike />
      <ComponentList />
      {/* <ColorPicker /> */}
    </Container>
  );
};

export default Builder;
