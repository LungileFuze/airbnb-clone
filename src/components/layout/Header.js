import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Avatar } from '@mui/material';

const Header = () => {
  return (
    <div className="header">
      <img 
      src="https://companieslogo.com/img/orig/ABNB_BIG-9ccc2025.png?t=1633511992"
      className="header-logo"
      alt="logo"/>

      <div className="header-center">
        <button>Anywhere</button>
        <span></span>
        <button>Any week</button>
        <span></span>
        <button className="guests">Add guests</button>
        <SearchIcon className="search-menu"/>
      </div>

      <div className="header-right">
        <p>Airbnb your home</p>
        <LanguageSharpIcon />
        <span className="profile">
          <MenuSharpIcon fontSize="small"/>
          <Avatar className="avatar" sx={{ width: 32, height: 32 }}/>
        </span>
        
      </div>
    </div>
  )
}

export default Header
