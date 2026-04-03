'use client'
import '../styles/page.scss'
import TemplateCarousel from '../components/templateCarousel'
import Layout from '../components/layout'


export default function Home() {
  return (
    <Layout>
      <section className='section home-landing'>
        <div className='content'>
          <h1 className='headline size-1'>We're music people</h1>
        </div>
      </section>
    </Layout>
  )
}
