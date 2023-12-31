'use client'
import '../styles/page.scss'
import TemplateCarousel from '../components/templateCarousel'
import Layout from '../components/layout'


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
    </Layout>
  )
}
