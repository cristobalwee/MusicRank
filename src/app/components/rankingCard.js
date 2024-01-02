import classnames from 'classnames'
import Image from 'next/image'
import Button from './button'
import { ARROW_RIGHT } from '../constants/icons';
import '../styles/rankingCard.scss'

export default function RankingCard({ long = false, title, ranking = [] }) {
  return (
    <div className={ classnames('ranking-card', { 'ranking-card-long': long }) }>
      <div className='ranking-card-title'>
        <h3 className='headline size-6'>{ title }</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Check it out' /> 
      </div>
      <div className='ranking-card-list'>
        { ranking.map((item, i) => (
          <div className='ranking-card-list-item' key={ i }>
            <h5 className='headline size-6 text-secondary'>{ i + 1 }.</h5>
            <Image
              alt={ item.alt }
              className='ranking-card-list-item-img'
              src={ item.img }
            />
            <div className='ranking-card-list-item-content'>
              <h4 className='headline size-6'>{ item.title }</h4>
              <p className='paragraph size-2 text-secondary'>{ item.subtitle }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}