import React, { useEffect, useState } from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import image from '../../assets/image.jpg'

function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer=setTimeout(() => 
      setMounted(true),
    200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id='home' className='hero'>
      <div className='hero-text'> 
        <h1>Je suis Thawanza Boulanouar</h1>

        {/* Avatar animé */}
        <div className="avatar-container">
          <div className="outer-ring"></div>
          <div className={`inner-ring ${mounted ? 'scale-in' : ''}`}></div>
          <div className="avatar-image">
            <img src={image} alt="Avatar Thawanza" />
          </div>
        </div>
      </div>

      <div className='hero-description'>
        <p>
          Je suis récemment diplômée. Développeuse Full-Stack passionnée par les technologies, 
          je conçois des sites web et des applications modernes.
        </p>
      </div>

      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Contactez-moi
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default Hero
