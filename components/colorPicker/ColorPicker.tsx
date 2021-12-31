import { FC, MouseEvent } from "react";
import { Color, Container } from "./ColorPicker.styled";

interface Props {
  colors?: Array<string>;
  onChange?: (color: string | null) => void;
  onHover?: (color: string | null) => void;
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

  return (
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
  );
};

export default ColorPicker;
