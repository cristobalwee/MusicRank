import Image from 'next/image';
import classnames from 'classnames';
import SearchIcon from '../../../public/icon/Search.svg';
import '../styles/search.scss'

export default function Search({ fullWidth = false }) {
  return (
    <div className={ classnames('search', { 'search-full-width': fullWidth }) }>
      <input className='search-bar' placeholder='Search'/>
      <Image
        alt='Search'
        src={ SearchIcon }
      />
    </div>
  )
}