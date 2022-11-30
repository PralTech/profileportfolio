import React from 'react'
import Card from '../Cards/Card'
import './Services.css'
import emoji from '../Images/emoji.jpg'
import emoji2 from '../Images/emoji2.jpg'
// import emoji3 from '../Images/emoji3.jpg'
import Resume from './Resume.pdf'


const Services = () => {
    return (
        <div className='services'>
            {/* left side */}
            <div>
            <div className="awesome">
                <span>My Awesome</span>
                <span>Skills</span>
                <span>I am frontend devloper and I am having skills in 
                 HTML, CSS, JAVASCRIPT, REACT JS,<br /> 
                REDUX, BOOTSTRAP.
                </span>
                <a href={Resume} download>
                <button className='button s-button'>
                Download CV
                </button>
                </a>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>

            </div>
            </div>

            {/* right side  */}
          <div className="s-right">
            <div className="cards">
                <div style={{ left: '18rem' }}>
                    <Card
                        emoji={emoji}
                        heading={'Experience'}
                        detail={"Worked delivery management in deptt. of post"}
                    />
                </div>
                {/* second card  */}

                <div style={{top:'15 rem', left:'4rem'}}>
                    <Card
                        emoji={emoji2}
                        heading={'Devloper'}
                        detail={" HTML, CSS, Javascript, React js"}
                    />
                </div>
                  {/* third card  */}

                  <div style={{top:'16rem', left:'10rem' }}>
                    <Card
                        emoji={emoji}
                        heading={'UI/UX'}
                        detail={
                            "I am learning react js to get hired by the orgnisations."
                        }
                    />
                </div>

            </div>
         </div>
        </div>
    )
}

export default Services