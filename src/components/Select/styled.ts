import { styled } from '../../theme';

interface TextFieldWrapperInterface {
  editable: boolean;
}

export const TextFieldWrapper = styled.div<TextFieldWrapperInterface>`
  & [name='arrowIcon'] {
    pointer-events: none;
  }

  & input {
    cursor: ${p => p.editable ? 'text' : 'pointer'};
  }
`;

export const MenuWrapper = styled.ul`
  margin-top: 4px;
  min-width: 100%;
  background-color: ${p => p.theme.core.palette.grayLighten100};
  box-shadow: 0 4px 6px rgba(213, 10, 92, 0.25);
  border-radius: 4px;
  list-style: none;
  padding: 4px 0;
`;

interface MenuItemWrapperInterface {
  current: boolean;
}

export const MenuItemWrapper = styled.li<MenuItemWrapperInterface>`
  height: 40px;
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.15s;
  background-color: ${p => p.current ? p.theme.core.palette.crimsonLighten80 : p.theme.core.palette.grayLighten100};
  
  &:hover {
    background-color: ${p => p.theme.core.palette.crimsonLighten90};
  }
`;