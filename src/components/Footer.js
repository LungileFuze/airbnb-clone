import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-terms">
        <span>&copy; 2023 AirBnB Clone, Inc</span>
        <span>Privacy . Terms . Sitemap</span>
      </div>
      <div className="footer-socials">
        <span>
            <LanguageIcon />
        </span>
         {/* <span>English</span>
        <span>R ZAR</span> */}
        
        <span>
        <FacebookIcon />
        </span>
        
        <span>
        <TwitterIcon />
        </span>
        <span>
        <InstagramIcon />
        </span>
        
      </div>
    </div>
  )
}

export default Footer
