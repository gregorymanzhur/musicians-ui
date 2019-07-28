declare module 'react-simple-dropdown' {
  import { Component, CSSProperties } from 'react';

  export interface DropdownProps {
    disabled?: boolean;
    active?: boolean;
    onHide?: () => void;
    onShow?: () => void;
    className?: string;
    removeElement?: boolean;
    style?: CSSProperties;
  }

  export interface DropdownTriggerProps {
    className?: string;
  }

  export interface DropdownContentProps {
    className?: string;
  }

  export default class Dropdown extends Component<DropdownProps, any> {}

  export class DropdownTrigger extends Component<DropdownTriggerProps, any> {}

  export class DropdownContent extends Component<DropdownContentProps, any> {}
}
