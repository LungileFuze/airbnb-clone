import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { Avatar } from '@mui/material';
import Search from "../Search"
import { openModal } from '../../actions/modalAction';
import Login from "../Login"
import "./Header.css"

const Header = () => {
  const [showSearch, setSearch] = useState(false)
  const dispatch = useDispatch()

  const openModalHandle = () => {
    dispatch(openModal("open", <Login />))
  }
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
        {showSearch && <Search />}
        <SearchIcon className="search-menu" 
        onClick={() => setSearch(!showSearch)}/>
      </div>

      <div className="header-right">
        <p>Airbnb your home</p>
        <LanguageSharpIcon />
        <span className="profile">
          <MenuSharpIcon fontSize="small" onClick={openModalHandle}/>
          <Avatar className="avatar" sx={{ width: 32, height: 32 }}/>
        </span>
        
      </div>
    </div>
  )
}

export default Header
