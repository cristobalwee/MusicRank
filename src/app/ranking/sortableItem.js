import React from 'react';
import Image from 'next/image';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function SortableItem(props) {
  const { title, subtitle, img } = props;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: props.id});
  
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  
  return (
    <div 
      ref={setNodeRef} 
      className='sortable-item' 
      style={style} 
      {...attributes} 
      {...listeners}
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
}