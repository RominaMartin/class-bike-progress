import { FC, MouseEvent } from "react";
import { useTheme } from "styled-components";
import { Color, Container } from "./ColorPicker.styled";

interface Props {
  visible?: boolean;
  colors?: Array<string>;
  onChange?: (color: string) => void;
  onHover?: (color: string) => void;
}

const ColorPicker: FC<Props> = ({
  visible = false,
  colors,
  onChange = () => {},
  onHover = () => {},
}) => {
  const theme = useTheme();
  const themeColors = [
    theme.colors.redsalsa,
    theme.colors.mangotango,
    theme.colors.maizecrayola,
    theme.colors.pistachio,
    theme.colors.zomp,
    theme.colors.cadetblue,
    theme.colors.cgblue,
  ];
  colors = colors || themeColors;
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const color = e.currentTarget.getAttribute("color") || theme.colors.white;
    onChange(color);
  };
  const handleHover = (e: MouseEvent<HTMLDivElement>) => {
    const color = e.currentTarget.getAttribute("color") || theme.colors.white;
    onHover(color);
  };

  return (
    <Container visible={visible}>
      {colors.map((color) => (
        <Color
          key={color}
          color={color}
          onClick={handleClick}
          onMouseOver={handleHover}
        />
      ))}
    </Container>
  );
};

export default ColorPicker;
