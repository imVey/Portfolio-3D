import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from'../styles';
import { navLinks } from '../constants';
import { logo, menu, close, mb } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('.');

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
        <div className="w-ful flex justify-between items-center max-w-7xl mx-auto">
          <Link 
          to="/"
          className="flex items-center mx-auto"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          >
            <img src={mb} alt="logo" className="w-9 h9 object-contain" />
            <p className=" text-white text-[18px] font-bold cursor-pointer">Marwan <span className="sm:block hidden">| Portfolio</span></p>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar