import { ComponentType, FC, MouseEvent } from "react";
import Bike from "components/bike/Bike";
import { FormattedMessage } from "react-intl";
import { Container } from "./BikeComponent.styled";

interface Props {
  id: string;
  onClick: (id: string) => void;
}

const BikeComponent: ComponentType<Props> = ({ id, onClick = () => {} }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <Container onClick={handleClick}>
      <FormattedMessage id={`builder.bike.${id}`} />
    </Container>
  );
};

export default BikeComponent;
