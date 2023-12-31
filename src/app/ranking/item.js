import React, { forwardRef, CSSProperties } from 'react';
import Image from 'next/image';
import { useSortable } from '@dnd-kit/sortable';

export default React.forwardRef(({ title, subtitle, id, img, withOpacity, isDragging, style, ...rest }, ref) => {
  const {
    attributes,
    listeners,
    transition,
  } = useSortable({ id });
  const inlineStyles = {
    opacity: withOpacity ? '0.5' : '1',
    transformOrigin: '50% 50%',
    cursor: isDragging ? 'grabbing' : 'grab',
    boxShadow: isDragging  ? '0px 2px 12px 0px rgba(0, 0, 0, 0.08)' : 'none',
    transition,
    ...style,
  };
  
  return (
    <div 
      ref={ref}
      className='sortable-item' 
      style={inlineStyles} 
      {...attributes} 
      {...listeners}
      {...rest}
    >
      <Image
        alt={ title }
        className='ranking-card-list-item-img'
        src={ img }
      />
      <div className='ranking-card-list-item-content'>
        <h4 className='headline size-5'>{ title }</h4>
        <p className='paragraph size-1 text-secondary'>{ subtitle }</p>
      </div>
    </div>
  );
});
