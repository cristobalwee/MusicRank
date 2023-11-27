'use client';
import React from 'react';
import Image from 'next/image';
import Button from './button';
import Logo from '../../../public/img/logo_primary.svg';
import { HAMBURGER } from '../constants/icons';

import '../styles/header.scss';

export default function Header() {
  return (
    <nav className='header'>
      <Image
        alt='MusicRank Logo'
        src={ Logo }
      />
      <Button 
        as='secondary' 
        icon={ HAMBURGER } 
        onClick={ () => console.log('click') }
        text='Menu'
      />
    </nav>
  )
}