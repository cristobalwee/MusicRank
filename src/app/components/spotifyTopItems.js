import Image from 'next/image';
import classnames from 'classnames';
import '../styles/spotifyTopItems.scss';
import Spotify from '../../../public/img/Spotify_icon.svg';
import Lahai from '../../../public/img/Sampha_Lahai.png';
import Button from './button';
import { ARROW_EXTERNAL } from '../constants/icons';
import SearchItem from './searchItem';

export default function SpotifyTopItems({ items = ['1'] }) {
  const isEmpty = items.length === 0;

  const emptyState = (
    <div className='spotify-top-items-empty'>
      <Image src={ Spotify } alt='Spotify' />
      <h4 className='headline size-5'>Sign in with Spotify to view your top songs</h4>
      <Button as='secondary' icon={ ARROW_EXTERNAL } text='Connect' />
    </div>
  );
  const populatedState = (
    <div className='spotify-top-items-content'>
      <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } highDensity />
      <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } highDensity />
      <SearchItem title='Lahai' subtitle='Sampha' img={ Lahai } highDensity />
    </div>
  )

  return (
    <div className={ classnames('spotify-top-items', { 'fit-content': !isEmpty })} >
      <h4 className='headline size-6'>Your top albums</h4>
      { isEmpty ? emptyState : populatedState }
    </div>
  );
};