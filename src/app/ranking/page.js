'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import Layout from '../components/layout'
import Button from '../components/button'
import Logo from '../../../public/img/logo_empty.svg'
import Javelin from '../../../public/img/Sufjan_Stevens_Javelin.png';
import Hellmode from '../../../public/img/Jeff_Rosenstock_Hellmode.jpg';
import Country from '../../../public/img/3D_Country.jpg';
import SortableItem from './sortableItem'
import { CHEVRON_DOWN, EDIT, CHECKMARK } from '../constants/icons';
import '../styles/ranking.scss'

export default function Home({ isEmpty = false }) {
  const [items, setItems] = useState([
    {
      title: 'HELLMODE',
      subtitle: 'Jeff Rosenstock',
      img: Hellmode,
      id: 1
    }, {
      title: 'Javelin',
      subtitle: 'Sufjan Stevens',
      img: Javelin,
      id: 2
    }, {
      title: '3D Country',
      subtitle: 'Geese',
      img: Country,
      id: 3
    }
  ]);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event) => {
    const {active, over} = event;
    
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <Layout>
      <section className='section ranking content'>
        <p className='paragraph size-1 text-secondary mb-2'>New Ranking</p>
        <h1 className='headline size-2 text-secondary'>Untitled Ranking</h1>
        <div className='ranking-button-container'>
          <Button as='secondary' icon={ CHEVRON_DOWN } text='Ranking: Songs' /> 
          <Button as='secondary' icon={ EDIT } text='Edit title' /> 
          <Button as='secondary' icon={ CHECKMARK } text='Finish ranking' /> 
        </div>
        { isEmpty ? (
          <div className='ranking-empty-state'>
          <Image
            alt='MusicRank Logo'
            src={ Logo }
          />
          <h3 className='headline size-4'>Nothing to rank, yet</h3>
          <p className='paragraph size-1 text-secondary'>Click the add button below to start adding songs to rank.</p>
        </div>
        ) : (
          <div className='ranking-populated'>
            <DndContext 
              sensors={ sensors }
              collisionDetection={ closestCenter }
              onDragEnd={ handleDragEnd }
            >
              <SortableContext 
                items={ items }
                strategy={ verticalListSortingStrategy }
              >
                {items.map(item => 
                  <SortableItem key={ item.id } id={ item.id } title={ item.title } subtitle={ item.subtitle } img={ item.img } />
                )}
              </SortableContext>
            </DndContext>
          </div>
        )}
      </section>
    </Layout>
  )
}
