'use client'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/header'
import Footer from './components/footer'

import './styles/page.scss'
import TemplateCarousel from './components/templateCarousel'
import Fab from './components/fab'
import Button from './components/button'
import { ARROW_RIGHT } from './constants/icons';

export default function Home() {
  const [footerIsIntersecting, setFooterIntersecting] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setFooterIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.25
    });

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    }
  }, [footerRef, footerIsIntersecting]);

  return (
    <main className='page'>
      <Header />
      <Fab hide={ footerIsIntersecting } />
      <section className='section home-landing'>
        <div className='content'>
          <p className='paragraph size-1 text-secondary mb-2'>Share your top picks</p>
          <h1 className='headline size-1'>Rank your favorite music</h1>
          <TemplateCarousel />
        </div>
      </section>
      <section className='section home-rankings content'>
        <h2 className='headline size-4'>Trending rankings</h2>
        <div className='rankings-row'>
          <div className='ranking-card'>
            <h3 className='headline size-5'>Anthony Fantano’s Year-end Album Ranking, 2023</h3>
            <Button as='tertiary' icon={ ARROW_RIGHT } text='Check it out' /> 
          </div>
          <div className='ranking-card'>
            <h3 className='headline size-5'>Anthony Fantano’s Year-end Album Ranking, 2023</h3>
            <Button as='tertiary' icon={ ARROW_RIGHT } text='Check it out' /> 
          </div>
          <div className='ranking-card'>
            <h3 className='headline size-5'>Anthony Fantano’s Year-end Album Ranking, 2023</h3>
            <Button as='tertiary' icon={ ARROW_RIGHT } text='Check it out' /> 
          </div>
        </div>
        <div className='rankings-row'>
          <div className='ranking-card'>
            <h3 className='headline size-5'>Anthony Fantano’s Year-end Album Ranking, 2023</h3>
            <Button as='tertiary' icon={ ARROW_RIGHT } text='Check it out' /> 
          </div>
          <div className='ranking-card'>
            <h3 className='headline size-5'>Anthony Fantano’s Year-end Album Ranking, 2023</h3>
            <Button as='tertiary' icon={ ARROW_RIGHT } text='Check it out' /> 
          </div>
          <div className='ranking-card'>
            <h3 className='headline size-5'>Anthony Fantano’s Year-end Album Ranking, 2023</h3>
            <Button as='tertiary' icon={ ARROW_RIGHT } text='Check it out' /> 
          </div>
        </div>
      </section>
      <section className='section home-about content'>
        <div className='home-about-left'>
          <h1 className='headline size-2'>We're music people</h1>
          <p className='paragraph size-1 text-secondary mb-2'>No point in making a ranking if nobody gets to see it. Tap any of the icons below to share to your favorite social media sites. No point in making a ranking if nobody gets to see it. Tap any of the icons below to share to your favorite social media sites. No point in making a ranking if nobody gets to see it. Tap any of the icons below to share to your favorite social media sites.</p>
          <Button as='secondary' icon={ ARROW_RIGHT } text='Learn more' /> 
        </div>
        <div className='home-about-right'>

        </div>
      </section>
      <Footer ref={ footerRef } />
    </main>
  )
}
