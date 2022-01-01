import { FC } from "react";
import BikeComponent from "../components/BikeComponent";
import { Container } from "./ComponentList.styled";

interface Props {
  onColorHover: (id: string, color: string) => void;
  onColorSelection: (id: string, color: string) => void;
}

const components = [
  "chain",
  "engine",
  "frame",
  "handlebar",
  "grip",
  "spoke",
  "rim",
  "saddle",
  "seatpost",
  "tire",
];

const ComponentList: FC<Props> = ({
  onColorHover = () => {},
  onColorSelection = () => {},
}) => {
  //   const handleComponentClick = (id: string) => {
  //     console.log(id);

  //   };
  //   const handleComponentClick = (id: string) => {
  //     console.log(id);
  //   };

  return (
    <Container>
      {components.map((component) => (
        <BikeComponent
          key={component}
          id={component}
          onColorHover={onColorHover}
          onColorSelection={onColorSelection}
        />
      ))}
    </Container>
  );
};

export default ComponentList;
