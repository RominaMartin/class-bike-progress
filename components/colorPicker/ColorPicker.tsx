import { FC, MouseEvent } from 'react';
import { useTheme } from 'styled-components';

import { Color, Container } from './ColorPicker.styled';

interface Props {
  visible?: boolean;
  colors?: Array<string>;
  simple?: boolean;
  onChange?: (color: string) => void;
  onHover?: (color: string) => void;
}

const ColorPicker: FC<Props> = ({
  visible = false,
  simple = false,
  colors,
  onChange = () => {},
  onHover = () => {},
}) => {
  const theme = useTheme();
  const themeColors = [
    theme.colors.yellow,
    theme.colors.turquoise,
    theme.colors.red,
    theme.colors.green,
    theme.colors.salmon,
    theme.colors.purple,
    theme.colors.silver900,
  ];
  colors = colors || themeColors;
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    const color = e.currentTarget.getAttribute('color') || theme.colors.white;
    onChange(color);
  };
  const handleHover = (e: MouseEvent<HTMLDivElement>) => {
    const color = e.currentTarget.getAttribute('color') || theme.colors.white;
    onHover(color);
  };

  return (
    <Container visible={visible} simple={simple}>
      {colors.map(color => (
        <Color key={color} color={color} onClick={handleClick} onMouseOver={handleHover} />
      ))}
    </Container>
  );
};

export default ColorPicker;
