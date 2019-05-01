import Color from 'color';
import { styled } from '../../theme';

export const Palette = styled.div`
  display: flex;
`;

export const ColorsColumn = styled.div`
  margin-right: 16px;
`;

interface ColorBlockProps {
  color: string;
}

export const ColorBlock = styled.div<ColorBlockProps>`
  width: 200px;
  height: 50px;
  border-radius: 4px;
  margin-bottom: 4px;
  padding: 2px;
  background-color: ${p => p.color};
  color: ${p => Color(p.color).isDark() ? p.theme.core.palette.grayLighten100 : p.theme.core.palette.gray}
`;
