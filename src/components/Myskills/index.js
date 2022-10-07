import React from 'react'

import logo from '../../imgs/timeline.png';


function Myskills() {

  

  return (
    <div id="mySkills" className='containerTwo'>

     {/* <Titlebox/> */}
      <h1 className='header_titles'>My Skills</h1>
      <div className='mySkills_body'>
        <div className='mySkills_text'>
          <p className='mySkills_p'>
            
                &nbsp; &nbsp;<strong className='boldedRed'>Javascript</strong> 
      
                <br/>
                <br />
                &nbsp; &nbsp; HTML & CSS 

                <br/>
                <br />
                &nbsp; &nbsp; Front End

                <br/>
                <br />
                Visit my <a className='boldedBlue' href='https://www.linkedin.com/in/mbachraty/' target="blank"><strong className='boldedBlue'>LinkedIn</strong></a> profile for more details or just <a className='boldedBlue' href='#contact' ><strong className='boldedBlue'>contact me.</strong></a>
          </p>
        </div>
        <div className='mySkills_exp'>
          
          <a href='https://phros.ca/' target="blank" className='mySkills_card'>
            <h1>Marketing/<br/>Frontend Dev</h1>
            <h3>PHROS</h3>
            <h4>2021-2022</h4>
            <p>Tools for on-demand videos, online classes, in-person sessions, payment processing, and website hosting</p>

          </a>
          <a href='https://mycloudsafari.com/' target="blank" className='mySkills_card'>
          <h1>Frontend <br/> Developer</h1>
            <h3>Cloud Safari</h3>
            <h4>2022</h4>
            <p>Discover your private & local African adventure. Safely pay and plan your trip</p>
          </a>
        </div>
      </div>
      <div className='mySkills_timeline' >
      <img src={logo} alt="Logo" />
      </div>
    </div>
    

  )
}

export default Myskills