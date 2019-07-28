import Dropdown from 'react-simple-dropdown';
import { styled } from '../../theme';

export const DropdownWrapper = styled(Dropdown)`
  position: relative;
  
  > div {
    position: absolute;
    display: ${p => p.active ? 'block' : 'none'};
    width: 100%;
  }
`;
