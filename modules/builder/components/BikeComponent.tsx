import { ComponentType, FC, MouseEvent, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Container, StyledButton } from "./BikeComponent.styled";
import ColorPicker from "components/colorPicker/ColorPicker";
import useOnclickOutside from "react-cool-onclickoutside";

interface Props {
  id: string;
  onColorHover: (id: string, color: string) => void;
  onColorSelection: (id: string, color: string) => void;
}

const BikeComponent: ComponentType<Props> = ({
  id,
  onColorHover = () => {},
  onColorSelection = () => {},
}) => {
  const [isColorPickerVisible, setColorPickerVisible] = useState(false);
  const [isHoverActive, setIsHoverActive] = useState(true);
  const ref = useOnclickOutside(() => {
    setColorPickerVisible(false);
  });

  const handleClick = () => {
    setColorPickerVisible(true);
    setIsHoverActive(true);
  };

  const handleColorHovered = (color: string) => {
    if (isHoverActive) {
      onColorHover(id, color);
    }
  };
  const handleColorSelected = (color: string) => {
    onColorSelection(id, color);
    setColorPickerVisible(false);
    setIsHoverActive(false);
  };

  return (
    <Container ref={ref}>
      <StyledButton onClick={handleClick}>
        <FormattedMessage id={`builder.bike.${id}`} />
      </StyledButton>
      <ColorPicker
        visible={isColorPickerVisible}
        onHover={handleColorHovered}
        onChange={handleColorSelected}
      />
    </Container>
  );
};

export default BikeComponent;
