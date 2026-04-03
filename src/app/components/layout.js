import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import Header from '../components/header'
import Footer from '../components/footer'
import Fab from '../components/fab'
import { MobileContext } from '../lib/mobileContext';

export default function Layout({ className, children, hasSearch }) {
  const [footerIsIntersecting, setFooterIntersecting] = useState(false);
  const footerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setFooterIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.25
    });
    const mobileMediaQuery = window.matchMedia('(max-width: 639px)');

    const handleMobileChange = (event) => {
      setIsMobile(event.matches);
    };

    mobileMediaQuery.addEventListener('change', handleMobileChange);
    setIsMobile(mobileMediaQuery.matches);

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
      mobileMediaQuery.removeEventListener('change', handleMobileChange);
    }
  }, [footerRef, footerIsIntersecting, isMobile]);

  return (
    <MobileContext.Provider value={ isMobile }>
      <main className={ classnames('page', className) }>
        <Header />
        <Fab hide={ footerIsIntersecting } hasSearch={ hasSearch } />
        { children }
        <Footer ref={ footerRef } />
      </main>
    </MobileContext.Provider>
  )
}
