import { ComponentType, FC, MouseEvent, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import useOnclickOutside from 'react-cool-onclickoutside';

import ColorPicker from 'components/colorPicker/ColorPicker';

import { Container, StyledButton } from './BikeComponent.styled';

interface Props {
  id: string;
  onColorHover: (id: string, color: string) => void;
  onColorSelection: (id: string, color: string) => void;
  onColorPickerClose: () => void;
  disabled: boolean;
}

const BikeComponent: ComponentType<Props> = ({
  id,
  disabled,
  onColorHover = () => {},
  onColorSelection = () => {},
  onColorPickerClose = () => {},
}) => {
  const [isColorPickerVisible, setColorPickerVisible] = useState(false);
  const [isHoverActive, setHoverActive] = useState(false);
  const ref = useOnclickOutside(() => {
    if (isColorPickerVisible) {
      setColorPickerVisible(false);
      onColorPickerClose();
    }
  });

  const handleClick = () => {
    setColorPickerVisible(!isColorPickerVisible);
    setHoverActive(!isHoverActive);
  };

  const handleColorHovered = (color: string) => {
    if (isHoverActive) {
      onColorHover(id, color);
    }
  };
  const handleColorSelected = (color: string) => {
    onColorSelection(id, color);
    setColorPickerVisible(false);
    setHoverActive(false);
  };

  return (
    <Container ref={ref}>
      <StyledButton
        disabled={disabled}
        onClick={handleClick}
        colorPickerVisible={isColorPickerVisible}
      >
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
