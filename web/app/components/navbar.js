"use client"

import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { images } from '@/app/constants/';
import './navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['Home', 'Product', 'Account', 'About' ].map((item) =>(
          <li className='app__flex p-text' key={`link-${item}`}>
            <a href={`#${item}`} className='menu'>{item}</a>
          </li>
        ))}
        <div className='app__logcart'>
        <button className='app__button'><a href='#'>LOGIN</a></button>
        <img src={images.cart} alt='cart' />
        </div>
      </ul>

      <div className='app__navbar-menu'>
        
        <HiMenuAlt4 onClick={() => setToggle(true)}/>
        {toggle && (
          <motion.div whileInView={{ x: [300, 0]}}
          transition={{duration: 0.85, ease: 'easeOut'}}
          className='Motion'>
            <HiX onClick={() => setToggle(false)} />
                    <ul>
              {['Home', 'Product', 'Account', 'About' ].map((item) =>(
          <li key={item}>
            <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
          </li>
        ))}
        <div>
        <button><a href='#'>LOGIN</a></button>
        <img src={images.cart} alt='cart' />
        </div>
        </ul>
          </motion.div>
          
        )}
      </div>

    </nav>
  )
}

export default Navbar
