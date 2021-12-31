import { ComponentType, FC, MouseEvent, useState } from "react";
import { FormattedMessage } from "react-intl";
import { Container } from "./BikeComponent.styled";
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
  const ref = useOnclickOutside(() => {
    setColorPickerVisible(false);
  });

  const handleClick = () => {
    setColorPickerVisible(true);
  };

  const handleColorHovered = (color: string) => {
    onColorHover(id, color);
  };

  return (
    <Container ref={ref} onClick={handleClick}>
      <FormattedMessage id={`builder.bike.${id}`} />
      <ColorPicker
        visible={isColorPickerVisible}
        onHover={handleColorHovered}
      />
    </Container>
  );
};

export default BikeComponent;
