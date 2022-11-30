import React from 'react'
import './Home.css'
import instagram from '../Images/instagram.png'
import facebook from '../Images/facebook.png'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'
import pralhad1 from '../Images/pralhad1.jpg'

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>hey! I Am</span>
          <span>Pralhad Talmale.</span>
          <span>Frontend Devloper with entry level of experience
            in web designing and devlopment and <b>excited</b> to be
             a part of your orgnisation.</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://www.instagram.com"><img src={instagram} alt="1" /></a>
          <a href="https://www.facebook.com"><img src={facebook} alt="2" /></a>
          <a rel="noreferrer" href="https://www.linkedin.com/in/pralhad-talmale-b32109145/" target="_blank"><img src={linkedin} alt="3" /></a>
          <a href="/"><img src={github} alt="3" /></a>
        </div>
      </div>
      <div className="i-right">
        <img src={pralhad1} alt="" />
      </div>

    </div>

  )
}

export default Intro