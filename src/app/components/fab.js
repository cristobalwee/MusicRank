import Link from 'next/link';
import Image from 'next/image'
import { useState, useRef } from 'react';
import Button from './button';
import classnames from 'classnames';
import { PLUS } from '../constants/icons';
import Search from './search';
import SearchItem from './searchItem';
import Lahai from '../../../public/img/Sampha_Lahai.png';
import '../styles/fab.scss';
import SpotifyTopItems from './spotifyTopItems';

export default function Fab({ hide, hasSearch }) {
  const text = hasSearch ? 'Add an album' : 'Start a ranking';
  const [drawerIsOpen, toggleDrawer] = useState(false);
  const drawerRef = useRef(null);
  
  return (
    <div className={ classnames('floating-actions', { 'is-open': drawerIsOpen }) }>
      <div className={ classnames('fab', { 'hidden': hide && !drawerIsOpen, 'fab-with-drawer': hasSearch }) }>
        <Link href='/ranking'>
          <Button as='primary' icon={ PLUS } text={ text } onClick={ hasSearch ? () => toggleDrawer(!drawerIsOpen) : null } />
        </Link>
      </div>
      { hasSearch && (
        <div className='fab-drawer' ref={ drawerRef }>
          <div className='content'>
            <Search fullWidth />
            <h3 className='headline size-5'>Trending</h3>
            <div className='fab-drawer-inner'>
              <div className='fab-drawer-inner-results'>
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
                <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } />
              </div>
              <SpotifyTopItems />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}