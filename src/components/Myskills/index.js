import React from 'react'

import IndividualSkills from '../IndividualSkills';


function Myskills() {

  

  return (
    <div id="mySkills" className='containerTwo'>

     {/* <Titlebox/> */}
      <h1 className='header_titles'>My Skills 🧑‍💻</h1>
      <div className='mySkills_body'>
        <div className='mySkills_text'>

          <IndividualSkills className="IndividualSkills"/>
          
        </div>
         <p className='mySkills_p'> 
          Visit my <a className='boldedBlue' href='https://www.linkedin.com/in/mbachraty/' target="blank"><strong className='boldedBlue'>LinkedIn</strong></a> profile for more details or just <a className='boldedBlue' href='#contact' ><strong className='boldedBlue'>contact me.</strong></a>
         </p>
       </div>

    </div>
    

  )
}

export default Myskills