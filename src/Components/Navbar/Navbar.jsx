import React, { useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import MonCv from '../../assets/Mon Cv.pdf'
import downloadIcon from '../../assets/download.svg'
function Navbar() {
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right='0';
  }
   const closeMenu=()=>{
   menuRef.current.style.right='-350px';
 }
  return (
    <div className="navbar">
      <div className='name'>
            <h5> Thawanza</h5>
           
      </div>
         <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
         <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p>Accueil </p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#à propos de moi'><p >À propos de moi </p></AnchorLink></li> 
            <li><AnchorLink className='anchor-link' offset={50} href='#compétences'><p>Compétences</p></AnchorLink></li> 
            <li><AnchorLink className='anchor-link' offset={50} href='#projets'><p>Projets</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
            <div className="nav-downloadcv"><a href={MonCv} download='MonCv' className="btn-cv"> <img src={downloadIcon} alt="" />Mon Cv</a></div>
         
         </ul> 
         
    </div>
  )
}

export default Navbar