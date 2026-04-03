import React, { useState } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import Menu from './menu';
import Search from './search';
import Logo from '../../../public/img/logo_primary.svg';
import { HAMBURGER } from '../constants/icons';

import '../styles/header.scss';

export default function Header() {
  return (
    <nav className='header'>
      <Link href='/'>
        <Image
          alt='MusicRank Logo'
          className='logo-img'
          src={ Logo }
        />
      </Link>
      <Menu
        text='Menu'
        icon={ HAMBURGER }
        align='right'
        items={[
          <div className='menu-drawer-inner'>
            <p className='paragraph size-2 text-secondary'>Menu</p>
            <Button 
              as='tertiary'
              onClick={ () => console.log('click') }
              text='Browse'
            />
            <Button 
              as='tertiary'
              text='About'
              href='/about'
            />
            <Button 
              as='tertiary'
              onClick={ () => console.log('click') }
              text='Sign in with Spotify'
            />
          </div>,
          <Search />
        ]}
      />
    </nav>
  )
}