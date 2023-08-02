import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showlinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if(showlinks){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height = '0px'
    }
  },[showlinks])
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showlinks)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container'ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => { 
              const {id, url, text} = link
              return <article key={id}>
                <a href={url}>{text}</a>
              </article>
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social
            return <article key={id}>
              <a href={url}>{icon}</a>
            </article>
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
