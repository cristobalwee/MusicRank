'use client'
import React, {useState} from 'react';
import Image from 'next/image'
import Layout from '../components/layout'
import Button from '../components/button'
import Logo from '../../../public/img/logo_empty.svg'
import { CHEVRON_DOWN, EDIT, CHECKMARK } from '../constants/icons';
import '../styles/ranking.scss'
import RankingList from './rankingList';

export default function Home({ isEmpty = false }) {
  return (
    <Layout>
      <section className='section ranking content'>
        <p className='paragraph size-1 text-secondary mb-2'>New Ranking</p>
        <h1 className='headline size-2 text-secondary'>Untitled Ranking</h1>
        <div className='ranking-button-container'>
          <Button as='secondary' icon={ CHEVRON_DOWN } text='Ranking: Songs' /> 
          <Button as='secondary' icon={ EDIT } text='Edit title' /> 
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
            <RankingList />
          </div>
        )}
      </section>
    </Layout>
  )
}
