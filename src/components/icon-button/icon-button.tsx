import React, { FC } from 'react';

type IconButtonProps = {
  icon: string;
  isDisabled?: boolean;
  isActive?: boolean;
  type?: 'primary' | 'secondary' | 'tertiary';
  onPress?: () => void;
}

const IconButton: FC<IconButtonProps> = (props: IconButtonProps) => {
  return (
    <button
      className={`rp-icon-button rp-icon-button--type-${props.type}`}
      onClick={props.onPress}
      type="button"
    >{props.icon}</button>
  )
};

// IconButton.defaultProps = {
//   icon: ''
// };

export default IconButton;
