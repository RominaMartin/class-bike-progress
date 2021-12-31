import { FC } from "react";
import BikeComponent from "../components/BikeComponent";
import { Container } from "./ComponentList.styled";

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

const ComponentList: FC = () => {
  const handleComponentClick = (id: string) => {
    console.log(id);
  };

  return (
    <Container>
      {components.map((component) => (
        <BikeComponent
          key={component}
          id={component}
          onClick={handleComponentClick}
        />
      ))}
    </Container>
  );
};

export default ComponentList;
