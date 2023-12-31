import React, { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import Header from '../components/header'
import Footer from '../components/footer'
import Fab from '../components/fab'

export default function Layout({ className, children }) {
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
    <main className={ classnames('page', className) }>
      <Header />
      <Fab hide={ footerIsIntersecting } />
      { children }
      <Footer ref={ footerRef } />
    </main>
  )
}
