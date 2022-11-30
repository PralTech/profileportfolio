import React from 'react'
import './Work.css'
import youtube from '../Images/youtube.png'
import whatsapp from '../Images/whatsapp.jpg'
import insta from '../Images/insta.jpg'
import email from '../Images/email.png'
import linkdin from '../Images/linkdin.png'
import {motion} from 'framer-motion'




const Work = () => {
  return (
    <div className='works'>
         <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & clients</span>
                <span>I have worked in department of post (GOI).
                I worked as outsider for 2 year for delivery <br />
                management using SAP software.
                </span>
                
                <button className='button s-button'>
                Hire me
                </button>

            </div>

            {/* right side  */}

            <div className="w-right">
           
                <motion.div
                initial={{rotate:360}}
                whileInView={{rotate: 0}}
                viewport ={{margin:'-40px'}}
                transition ={{duration: 6, type:"spring"}}
                 className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={youtube} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={whatsapp} alt="" />
                    </div>

                    <div className="w-secCircle">
                        <img src={insta} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={email} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={linkdin} alt="" />
                    </div>
                </motion.div>
                {/* backgrount circle  */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>

            </div>
    </div>
  )
}

export default Work