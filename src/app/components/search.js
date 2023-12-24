import Image from 'next/image'

import SearchIcon from '../../../public/icon/Search.svg';
import '../styles/search.scss'

export default function Search() {
  return (
    <div className='search'>
      <input className='search-bar' placeholder='Search'/>
      <Image
        alt='Search'
        src={ SearchIcon }
      />
    </div>
  )
}