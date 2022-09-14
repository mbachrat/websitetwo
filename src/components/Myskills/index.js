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
            
                &nbsp; &nbsp;<strong className='boldedRed'>I’ve had a interesting journey to get me where I am today.</strong> I studied mechanical engineering and worked in the field for 2 years before making my first career change. I took courses in <strong className='boldedRed'>product managment and UX/UI design</strong> trying to build up my skills and eventually find a job that would satisfy my creative side. I landed a marketing position at a startup. Luckily for me, they also gave me a small role working on the front end (some UI and Blog work), I had basic experience with coding from courses I took in university. 
      
                <br/>
                <br />
                &nbsp; &nbsp; This small role sparked my interest in becoming a dev. It had a perfect balance of creative AND technical work (which I missed). 

                <br/>
                <br />
                &nbsp; &nbsp;Since then I have been a freelance Javascript developer. Working mostly <strong className='boldedRed'>Front-end work (HTML, CSS, JS)</strong> for small startups. I also have some experience working with the <strong className='boldedRed'>PERN stack (PostgreSQL, Express, React, and Node).</strong>

                <br/>
                <br />
                Visit my <strong className='boldedBlue'>LinkedIn</strong> profile for more details or just <strong className='boldedBlue'>contact me.</strong>
          </p>
        </div>
        <div className='mySkills_exp'>
          <div>
            <h1>Marketing/<br/>Frontend Dev</h1>
            <h3>PHROS</h3>
            <h4>2021-2022</h4>
            <p>Tools for on-demand videos, online classes, in-person sessions, payment processing, and website hosting</p>

          </div>
          <div>
          <h1>Frontend <br/> Developer</h1>
            <h3>Cloud Safari</h3>
            <h4>2022</h4>
            <p>Discover your private & local African adventure. Safely pay and plan your trip</p>
          </div>
        </div>
      </div>
      <div className='mySkills_timeline' >
      <img src={logo} alt="Logo" />
      </div>
    </div>
    

  )
}

export default Myskills