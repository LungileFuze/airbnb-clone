import React, { useState } from "react";
import { links } from "../../assets/image-links";
import "./Filter.css"
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import { TabScrollButton } from '@mui/material';

const Banner = () => {
  const [ selectedFilter, setSelectedFilter ] = useState("")
  return (
    <>
     <div className="filter-div">
      {links.map((item, i) => (
        <div
          key={i}
          className={`links-box ${i === selectedFilter && "selected-box"}`}
          onClick={() => {
            console.log("selecting key", i);
            setSelectedFilter(i);
          }}
        >
          <img alt="" src={item.imgSrc} className="links-img" />
          <p
            className={`links-label ${i === selectedFilter && "selected-label"}`}
          >
            {item.label}
          </p>
          
        </div>
        
      ))}
      <TabScrollButton variant="scrollable"/>
      <span>
    <button><TuneRoundedIcon/>filters</button>
    </span>
    </div>
    
    </>
   
  )
}

export default Banner
