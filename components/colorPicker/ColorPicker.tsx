import { FC, MouseEvent } from "react";
import { Color, Container } from "./ColorPicker.styled";

interface Props {
  visible?: boolean;
  colors?: Array<string>;
  onChange?: (color: string) => void;
  onHover?: (color: string) => void;
}

const defaultColors = [
  "#B80000",
  "#DB3E00",
  "#FCCB00",
  "#008B02",
  "#006B76",
  "#1273DE",
  "#004DCF",
  "#5300EB",
];

const ColorPicker: FC<Props> = ({
  visible = false,
  colors = defaultColors,
  onChange = () => {},
  onHover = () => {},
}) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const color = e.currentTarget.getAttribute("color");
    onChange(color);
  };
  const handleHover = (e: MouseEvent<HTMLDivElement>) => {
    const color = e.currentTarget.getAttribute("color");
    onHover(color);
  };

  return visible ? (
    <Container>
      {colors.map((color) => (
        <Color
          key={color}
          color={color}
          onClick={handleClick}
          onMouseOver={handleHover}
        />
      ))}
    </Container>
  ) : null;
};

export default ColorPicker;
