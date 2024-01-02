import React, { useState, useCallback } from "react";
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Javelin from '../../../public/img/Sufjan_Stevens_Javelin.png';
import Hellmode from '../../../public/img/Jeff_Rosenstock_Hellmode.jpg';
import Country from '../../../public/img/3D_Country.jpg';
import Lahai from '../../../public/img/Sampha_Lahai.png'
import SortableItem from "./sortableItem";
import Item from "./item";

export default function RankingList() {
  const [items, setItems] = useState([
    {
      title: 'HELLMODE',
      subtitle: 'Jeff Rosenstock',
      img: Hellmode,
      id: '1'
    }, {
      title: 'Javelin',
      subtitle: 'Sufjan Stevens',
      img: Javelin,
      id: '2'
    }, {
      title: '3D Country',
      subtitle: 'Geese',
      img: Country,
      id: '3'
    }, {
      title: 'Lahai',
      subtitle: 'Sampha',
      img: Lahai,
      id: '4'
    }
  ]);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));
  const activeItem = items.find(obj => obj.id === activeId);
  console.log(activeId, items);

  const handleDragStart = useCallback((event) => {
    setActiveId(event.active.id);
  }, []);

  const handleDragEnd = useCallback((event) => {
    const { active, over } = event;

    if (active?.id !== over?.id) {
      setItems((prev) => {
        const activeIndex = prev.findIndex((item) => item.id === active?.id);
        const overIndex = prev.findIndex((item) => item.id === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }

    setActiveId(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {items.map((item) => (
          <SortableItem 
            key={ item.id }
            id={ item.id }
            title={ item.title }
            subtitle={ item.subtitle }
            img={ item.img }
          />
        ))}
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
        {activeId ? (
          <Item
            id={ activeId }
            key={ activeId }
            title={ activeItem.title }
            subtitle={ activeItem.subtitle }
            img={ activeItem.img }
            isDragging
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
