import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'




const Footer = () => {
  return (
    <div className="footer">
        <div className="f-content">
            <span>pralhadtalmale@gmail.com</span>
            <div className="f-icons">
                <Insta width="3rem"/>
                <Facebook width="3rem"/>
                <Github width="3rem"/>
                <Linkedin width="3rem"/>

            </div>
        </div>
    </div>
  )
}

export default Footer