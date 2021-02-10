import React, { FC } from 'react';

type ButtonProps = {
  label: string;
  isDisabled?: boolean;
  isActive?: boolean;
  type?: 'primary' | 'secondary' | 'tertiary';
  onPress?: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  let className = 'rp-button';

  const generateClassName = () => {
    if (props.type) {
      className += ` rp-button--type-${props.type}`;
    }
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
