import Image from 'next/image'
import Header from './components/header'

import './styles/page.scss'
import TemplateCarousel from './components/templateCarousel'
import Fab from './components/fab'
import Button from './components/button'
import { ARROW_RIGHT } from './constants/icons';

export default function Home() {
  return (
    <main className='page'>
      <Header />
      <Fab />
      <section className='section home-landing'>
        <div className='content'>
          <p className='paragraph size-1 text-secondary mb-2'>Share your top picks</p>
          <h1 className='headline size-1'>Rank your favorite music</h1>
          <TemplateCarousel />
        </div>
      </section>
      <section className='section home-rankings'>
        <div className='content'>
          <h2 className='headline size-4'>Trending rankings</h2>
          <div className='rankings-row'>
            <div className='ranking-card'>
              <h3 className='headline size-5'>Anthony Fantano’s Year-end Album Ranking, 2023</h3>
              <Button as='tertiary' icon={ ARROW_RIGHT } text='Check it out' /> 
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
