import { FC } from "react";
import BikeComponent from "../components/BikeComponent";
import { Container } from "./ComponentList.styled";

interface Props {
  onColorHover: (id: string, color: string) => void;
  onColorSelection: (id: string, color: string) => void;
  onColorPickerClose: () => void;
}

const components = [
  "frame",
  "rim",
  "spoke",
  "tire",
  "handlebar",
  "grip",
  "engine",
  "seatpost",
  "saddle",
];

const ComponentList: FC<Props> = ({
  onColorHover = () => {},
  onColorSelection = () => {},
  onColorPickerClose = () => {},
}) => {
  return (
    <Container>
      {components.map((component) => (
        <BikeComponent
          key={component}
          id={component}
          onColorHover={onColorHover}
          onColorSelection={onColorSelection}
          onColorPickerClose={onColorPickerClose}
        />
      ))}
    </Container>
  );
};

export default ComponentList;
