import React, { FC } from 'react';
import './button.scss';

type ButtonProps = {
  label: string;
  isDisabled?: boolean;
  isActive?: boolean;
  type?: 'primary' | 'secondary' | 'tertiary';
  onPress?: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  console.log(props);
  let className = 'rp-button';

  const generateClassName = () => {
    if (props.type) {
      className += ` rp-button--type-${props.type}`;
    }
    console.log(className);
    return className;
  }

  return (
    <button
      className={generateClassName()}
      onClick={props.onPress}
      type="button"
    >
      {props.label}
    </button>
  )
};

Button.defaultProps = {
  label: 'Button',
  type: 'primary'
};

export default Button;
