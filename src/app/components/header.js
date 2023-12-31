import React, { useState } from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import Search from './search';
import Logo from '../../../public/img/logo_primary.svg';
import { HAMBURGER } from '../constants/icons';

import '../styles/header.scss';

export default function Header() {
  const [menuIsOpen, toggleMenu] = useState(false);

  return (
    <nav className='header'>
      <Link href='/'>
        <Image
          alt='MusicRank Logo'
          className='logo-img'
          src={ Logo }
        />
      </Link>
      <div className='menu'>
        <Button 
          as='secondary' 
          icon={ HAMBURGER } 
          onClick={ () => toggleMenu(!menuIsOpen) }
          text='Menu'
        />
        <div className={ classnames('menu-drawer', { 'is-open': menuIsOpen })} >
          <div className='menu-drawer-inner'>
            <p className='paragraph size-2 text-secondary'>Menu</p>
            <Button 
              as='tertiary'
              onClick={ () => console.log('click') }
              text='Browse'
            />
            <Button 
              as='tertiary'
              onClick={ () => console.log('click') }
              text='About'
              href='/about'
            />
            <Button 
              as='tertiary'
              onClick={ () => console.log('click') }
              text='Sign in with Spotify'
            />
          </div>
          <Search />
        </div>
      </div>
    </nav>
  )
}