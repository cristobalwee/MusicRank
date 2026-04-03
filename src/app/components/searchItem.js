import Image from 'next/image';
import classnames from 'classnames';
import '../styles/searchItem.scss'
import Button from './button';
import { PLUS } from '../constants/icons';

export default function SearchItem({ title, subtitle, img, highDensity }) {
  return (
    <div className={ classnames('search-item', { 'high-density': highDensity }) }>
      <div className='search-item-left'>
        <Image
          alt={ title }
          className='search-item-img'
          src={ img }
        />
        <div className='search-item-content'>
          <h4 className='headline size-6'>{ title }</h4>
          <p className='paragraph size-1 text-secondary'>{ subtitle }</p>
        </div>
      </div>
      <Button as='icon' icon={ PLUS } highContrast={ highDensity } />
    </div>
  )
}