import React, { useState } from 'react';
import '../css/navBar.css';

const NavBar = ({ activeTab, setActiveTab }) => {

  return (


    <div className='flex flex-row justify-start items-start pl-2 mt-[1rem]'>

      <a className={`${activeTab === 'foros' ? 'active' : ''}`} onClick={() => setActiveTab('foros')} href="#">
        Foros
      </a>
      <a className={`${activeTab === 'noticias' ? 'active' : ''}`} onClick={() => setActiveTab('noticias')} href="#">
        Noticias
      </a>
       
    </div>

  );
};

export default NavBar;
