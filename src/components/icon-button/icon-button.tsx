import React, { FC } from 'react';
import './icon-button.scss';

type IconButtonProps = {
  label: string;
  isDisabled: boolean;
  isActive: boolean;
}

const IconButton: FC<IconButtonProps> = (props: IconButtonProps) => {
  return (
    <button
      className="rp-icon-button"
    >{props.label}</button>
  )
};

export default IconButton;
