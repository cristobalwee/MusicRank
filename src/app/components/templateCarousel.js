'use client';
import Image from 'next/image';
import Button from './button';
import { ARROW_RIGHT } from '../constants/icons';
import Taylor from '../../../public/img/taylor_swift_1989.png';

import '../styles/templateCarousel.scss';

export default function TemplateCarousel() {
  return (
    <div className='template-carousel'>
      <div className='template-card'>
        <h3 className='headline size-5'>Taylor's eras, ranked</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Use template' />
        <Image
          alt='Taylor Swift 1989'
          src={ Taylor }
          className='template-card-img'
        />
      </div>
      <div className='template-card'>
        <h3 className='headline size-5'>Taylor's eras, ranked</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Use template' />
        <Image
          alt='Taylor Swift 1989'
          src={ Taylor }
          className='template-card-img'
        />
      </div>
      <div className='template-card'>
        <h3 className='headline size-5'>Taylor's eras, ranked</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Use template' />
        <Image
          alt='Taylor Swift 1989'
          src={ Taylor }
          className='template-card-img'
        />
      </div>
      <div className='template-card'>
        <h3 className='headline size-5'>Taylor's eras, ranked</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Use template' />
        <Image
          alt='Taylor Swift 1989'
          src={ Taylor }
          className='template-card-img'
        />
      </div>
      <div className='template-card'>
        <h3 className='headline size-5'>Taylor's eras, ranked</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Use template' />
        <Image
          alt='Taylor Swift 1989'
          src={ Taylor }
          className='template-card-img'
        />
      </div>
      <div className='template-card'>
        <h3 className='headline size-5'>Taylor's eras, ranked</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Use template' />
        <Image
          alt='Taylor Swift 1989'
          src={ Taylor }
          className='template-card-img'
        />
      </div>
      <div className='template-card'>
        <h3 className='headline size-5'>Taylor's eras, ranked</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Use template' />
        <Image
          alt='Taylor Swift 1989'
          src={ Taylor }
          className='template-card-img'
        />
      </div>
      <div className='template-card'>
        <h3 className='headline size-5'>Taylor's eras, ranked</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Use template' />
        <Image
          alt='Taylor Swift 1989'
          src={ Taylor }
          className='template-card-img'
        />
      </div>
      <div className='template-card'>
        <h3 className='headline size-5'>Taylor's eras, ranked</h3>
        <Button as='tertiary' icon={ ARROW_RIGHT } text='Use template' />
        <Image
          alt='Taylor Swift 1989'
          src={ Taylor }
          className='template-card-img'
        />
      </div>
    </div>
  )
}