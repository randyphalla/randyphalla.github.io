import React, { FC } from 'react';

type CardProps = {
  title: string;
  description: string;
};

const Card: FC<CardProps> = (props: CardProps) => {
  return (
    <div className="rp-card">
      {props.title}
      {props.description}
    </div>
  );
};

Card.defaultProps = {
  title: 'Default Card Title',
  description: 'Default Card Description',
};

export default Card;
