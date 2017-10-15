import React from 'react';

const Card = ({data, isDragging, isEnabled = true}) => (
  <div
    style={{
        opacity: isDragging || !isEnabled ? 0.5 : 1,
        textDecoration: isEnabled ? 'none' : 'line-through'
    }}
  >
    {data ? data.title : 'Drag here'}
  </div>
);

export default Card;