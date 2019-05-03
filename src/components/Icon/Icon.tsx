import React, { FC } from 'react'
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
}

export const Icon: FC<IconProps> = ({ type, title }) => {
  const icons = iconsDict[type];
  const IconComponent = icons[title];

  return <IconComponent />;
};
