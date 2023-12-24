import React from 'react';
import Image from 'next/image';
import Button from './button';
import Search from './search';
import Logo from '../../../public/img/logo_black.svg';
import { ARROW_EXTERNAL } from '../constants/icons';

import '../styles/footer.scss';

export default function Footer({ ref }) {
  return (
    <footer ref={ ref } className='footer'>
      <div className='footer-left'>
        <div>
          <Image
            alt='MusicRank Logo'
            src={ Logo }
          />
          <p className='paragraph size-2 text-secondary'>&copy; Copyright MusicRank 2023</p>
        </div>
        <Search />
      </div>
      <div className='footer-right'>
        <div className='footer-right-navigation'>
          <p className='paragraph size-2 text-secondary'>Navigation</p>
          <Button 
            as='tertiary'
            onClick={ () => console.log('click') }
            text='Browse'
          />
          <Button 
            as='tertiary'
            onClick={ () => console.log('click') }
            text='About'
          />
          <Button 
            as='tertiary'
            onClick={ () => console.log('click') }
            text='Sign in with Spotify'
          />
        </div>
        <div className='footer-right-socials'>
        <p className='paragraph size-2 text-secondary'>Socials</p>
          <Button 
            as='tertiary' 
            icon={ ARROW_EXTERNAL } 
            onClick={ () => console.log('click') }
            text='Instagram'
          />
          <Button 
            as='tertiary' 
            icon={ ARROW_EXTERNAL } 
            onClick={ () => console.log('click') }
            text='Twitter'
          />
          <Button 
            as='tertiary' 
            icon={ ARROW_EXTERNAL } 
            onClick={ () => console.log('click') }
            text='Spotify'
          />
        </div>
      </div>
    </footer>
  );
}