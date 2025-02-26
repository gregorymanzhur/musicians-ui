import React, { FC, MouseEvent } from 'react'
import * as faIcons from 'react-icons/fa';
import * as mdIcons from 'react-icons/md';
import { StandardProps } from '../commonTypes';

export enum IconTypes {
  FA = 'faIcons',
  MD = 'mdIcons',
}

const iconsDict: Record<IconTypes, any> = {
  [IconTypes.FA]: faIcons,
  [IconTypes.MD]: mdIcons,
};

export interface IconProps extends StandardProps {
  type: IconTypes;
  title: string;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
}

export const Icon: FC<IconProps> = ({ type, title, onClick, name }) => {
  const icons = iconsDict[type];
  const IconComponent = icons[title];

  return <IconComponent onClick={onClick} name={name} />;
};
