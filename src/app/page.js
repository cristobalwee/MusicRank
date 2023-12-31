'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import Layout from './components/layout';

import './styles/page.scss'
import TemplateCarousel from './components/templateCarousel'
import Button from './components/button'
import RankingCard from './components/rankingCard';
import Javelin from '../../public/img/Sufjan_Stevens_Javelin.png';
import Hellmode from '../../public/img/Jeff_Rosenstock_Hellmode.jpg';
import Lahai from '../../public/img/Sampha_Lahai.png';
import Country from '../../public/img/3D_Country.jpg';
import { ARROW_RIGHT } from './constants/icons';

const homeRankings = [
  {
    title: 'Anthony Fantano’s Year-end Album Ranking, 2023',
    isLong: true,
    ranking: [
      {
        title: 'HELLMODE',
        subtitle: 'Jeff Rosenstock',
        img: Hellmode
      }, {
        title: 'Javelin',
        subtitle: 'Sufjan Stevens',
        img: Javelin
      }, {
        title: '3D Country',
        subtitle: 'Geese',
        img: Country
      }, {
        title: 'Lahai',
        subtitle: 'Sampha',
        img: Lahai
      }
    ]
  },
  {
    title: 'Anthony Fantano’s Year-end Album Ranking, 2023',
    isLong: false,
    ranking: [
      {
        title: 'Lahai',
        subtitle: 'Sampha',
        img: Lahai
      }, {
        title: 'HELLMODE',
        subtitle: 'Jeff Rosenstock',
        img: Hellmode
      }
    ]
  },
  {
    title: 'Anthony Fantano’s Year-end Album Ranking, 2023',
    isLong: false,
    ranking: [
      {
        title: 'Lahai',
        subtitle: 'Sampha',
        img: Lahai
      }, {
        title: 'HELLMODE',
        subtitle: 'Jeff Rosenstock',
        img: Hellmode
      }
    ]
  }
];

const homeRankings2 = [
  {
    title: 'Anthony Fantano’s Year-end Album Ranking, 2023',
    isLong: false,
    ranking: [
      {
        title: 'Lahai',
        subtitle: 'Sampha',
        img: Lahai
      }, {
        title: 'HELLMODE',
        subtitle: 'Jeff Rosenstock',
        img: Hellmode
      }
    ]
  },
  {
    title: 'Anthony Fantano’s Year-end Album Ranking, 2023',
    isLong: true,
    ranking: [
      {
        title: 'HELLMODE',
        subtitle: 'Jeff Rosenstock',
        img: Hellmode
      }, {
        title: 'Javelin',
        subtitle: 'Sufjan Stevens',
        img: Javelin
      }, {
        title: '3D Country',
        subtitle: 'Geese',
        img: Country
      }, {
        title: 'Lahai',
        subtitle: 'Sampha',
        img: Lahai
      }
    ]
  },
  {
    title: 'Anthony Fantano’s Year-end Album Ranking, 2023',
    isLong: false,
    ranking: [
      {
        title: 'Lahai',
        subtitle: 'Sampha',
        img: Lahai
      }, {
        title: 'HELLMODE',
        subtitle: 'Jeff Rosenstock',
        img: Hellmode
      }
    ]
  }
]

export default function Home() {
  return (
    <Layout>
      <section className='section home-landing'>
        <div className='content'>
          <p className='paragraph size-1 text-secondary mb-2'>Share your top picks</p>
          <h1 className='headline size-1'>Rank your favorite music</h1>
          <TemplateCarousel />
        </div>
      </section>
      <section className='section home-rankings content'>
        <div className='home-rankings-title'>
          <h2 className='headline size-4'>Trending rankings</h2>
          <Button as='tertiary' icon={ ARROW_RIGHT } text='Browse' href='/about' /> 
        </div>
        <div className='rankings-row'>
          { homeRankings.map((ranking, i) => (
            <RankingCard key={ i } title={ ranking.title } ranking={ ranking.ranking } long={ ranking.isLong } />
          ))}
        </div>
        <div className='rankings-row'>
          { homeRankings2.map((ranking, i) => (
            <RankingCard key={ i } title={ ranking.title } ranking={ ranking.ranking } long={ ranking.isLong } />
          ))}
        </div>
      </section>
      <section className='section home-about content'>
        <div className='home-about-left'>
          <h1 className='headline size-2'>We're music people</h1>
          <p className='paragraph size-1 text-secondary mb-2'>No point in making a ranking if nobody gets to see it. Tap any of the icons below to share to your favorite social media sites. No point in making a ranking if nobody gets to see it. Tap any of the icons below to share to your favorite social media sites. No point in making a ranking if nobody gets to see it. Tap any of the icons below to share to your favorite social media sites.</p>
          <Button as='secondary' icon={ ARROW_RIGHT } text='Learn more' href='/about' /> 
        </div>
        <div className='home-about-right'>

        </div>
      </section>
    </Layout>
  )
}
