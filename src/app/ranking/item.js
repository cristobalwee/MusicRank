import React from 'react';
import Image from 'next/image';
import Draggable from '../../../public/icon/Draggable.svg';

export default React.forwardRef(({ title, subtitle, id, img, withOpacity, isDragging, style, attributes, listeners, ...rest }, ref) => {
  const inlineStyles = {
    opacity: withOpacity ? '0.5' : '1',
    transformOrigin: '50% 50%',
    boxShadow: isDragging  ? '0px 2px 12px 0px rgba(0, 0, 0, 0.08)' : 'none',
    ...style,
  };
  
  return (
    <div 
      ref={ref}
      className='sortable-item' 
      style={ inlineStyles } 
      {...rest}
    >
      <div className='sortable-item-content'>
        <Image
          alt={ title }
          className='sortable-item-img'
          src={ img }
        />
        <div>
          <h4 className='headline size-5'>{ title }</h4>
          <p className='paragraph size-1 text-secondary'>{ subtitle }</p>
        </div>
      </div>
      <div
        className='sortable-item-draggable'
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        {...attributes}
        {...listeners}
      >
        <Image
          alt='Drag handle'
          src={ Draggable }
        />
      </div>
    </div>
  );
});
