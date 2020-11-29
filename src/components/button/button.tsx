import React, { FC } from 'react';
import './button.scss';

type ButtonProps = {
  label: string;
  isDisabled: boolean;
  isActive: boolean;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className="rp-button"
    >{props.label}</button>
  )
};

export default Button;
