'use client'
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/button'
import Logo from '../../../public/img/logo_empty.svg'
import { CHEVRON_DOWN, EDIT, CHECKMARK } from '../constants/icons';
import RankingList from './rankingList';
import NonSSRWrapper from '../components/nonSSRWrapper';
import Menu from '../components/menu';
import '../styles/ranking.scss';
import { MobileContext } from '../lib/mobileContext';
import { revalidatePath } from 'next/cache';

export default function Home({ isEmpty = false }) {
  const [isReversed, setReverse] = useState(false);

  return (
    <NonSSRWrapper>
      <Layout hasSearch>
        <section className='section ranking content'>
          <p className='paragraph size-1 text-secondary mb-2'>New Ranking</p>
          <h1 className='headline size-2 text-secondary'>Untitled Ranking</h1>
          <div className='ranking-button-container'>
            <Menu
              text='Ranking: Albums'
              icon={ CHEVRON_DOWN }
              className='mobile-hide'
              items={[
                <Button 
                  as='tertiary'
                  onClick={ () => console.log('click') }
                  text='Browse'
                />,
                <Button 
                  as='tertiary'
                  text='About'
                  href='/about'
                />
              ]}
            />
            <Menu
              text='Order: Top to bottom'
              icon={ CHEVRON_DOWN }
              className='mobile-hide'
              items={[
                <Button 
                  as='tertiary'
                  onClick={ () => console.log('click') }
                  text='Browse'
                />,
                <Button 
                  as='tertiary'
                  text='About'
                  href='/about'
                />
              ]}
            />
            <Button as='secondary' icon={ CHECKMARK } text='Finish ranking' /> 
          </div>
          { isEmpty ? (
            <div className='ranking-empty-state'>
            <Image
              alt='MusicRank Logo'
              src={ Logo }
            />
            <h3 className='headline size-4'>Nothing to rank, yet</h3>
            <p className='paragraph size-1 text-secondary'>Click the add button below to start adding songs to rank.</p>
          </div>
          ) : (
            <div className='ranking-populated'>
              <RankingList isReversed={ isReversed } />
            </div>
          )}
        </section>
      </Layout>
    </NonSSRWrapper>
  )
}
