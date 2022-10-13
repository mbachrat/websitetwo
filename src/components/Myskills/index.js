import React from 'react'
import { useState } from 'react';
import { motion } from "framer-motion"




function Myskills() {
  
const [all, setAll] = useState(true) 
const [creative, setCreative] = useState(false) 
const [software, setSoftware] = useState(false) 
const [engineer, setEngineer] = useState(false) 





  const [skills, setSkills] = useState(1)
  const turnOnAll = () => {
    setSkills(1) 
    setAll(true)
    setCreative(false)
    setEngineer(false)
    setSoftware(false)
  }

  const turnOnCreative = () => {
    setSkills(2)
    setAll(false)
    setCreative(true)
    setEngineer(false)
    setSoftware(false)
  }

  const turnOnSoftware = () => {
    setSkills(3)
    setAll(false)
    setCreative(false)
    setEngineer(false)
    setSoftware(true)
    }

  const turnOnEngineer = () => {
    setSkills(4)
    setAll(false)
    setCreative(false)
    setEngineer(true)
    setSoftware(false)
    }

  const FinalSkill = () => {
    
    if(skills === 1){
     return skillsAll
    } else if(skills ===2) { 
      return skillsCreative
    } else if(skills ===3) {
      return skillsSoftware
    } else {
      return skillsEngineer
    }
  }
 





  const skillsAll = [
    {text: "JavaScript", type: "coding"},
    {text: "React", type: "coding"},
    {text: "Node.js", type: "coding"},
    {text: "Web Front End", type: "coding"},
    {text: "HTML", type: "coding"},
    {text: "CSS", type: "coding"},
    {text: "Git Control", type: "coding"},
    {text: "UX/UI Design", type: "creative"},
    {text: "Wireframing", type: "creative"},
    {text: "Photoshop", type: "creative"},
    {text: "Cinematography", type: "creative"},
    {text: "Video Editing", type: "creative"},
    {text: "Social Media Managment", type: "creative"},
    {text: "3D Modelling", type: "engineer"},
    {text: "Prototyping", type: "engineer"},
    {text: "Lean Management", type: "engineer"},
    {text: "Excel", type: "engineer"},
    {text: "Math", type: "engineer"},
    {text: "Project Managment", type: "engineer"},
  ];

  const skillsSoftware = [
    {text: "JavaScript", type: "coding"},
    {text: "React", type: "coding"},
    {text: "Node.js", type: "coding"},
    {text: "Web Front End", type: "coding"},
    {text: "HTML", type: "coding"},
    {text: "CSS", type: "coding"},
    {text: "Git Control", type: "coding"},
    
    
  ];

  const skillsCreative = [
    {text: "UX/UI Design", type: "creative"},
    {text: "Wireframing", type: "creative"},
    {text: "Photoshop", type: "creative"},
    {text: "Cinematography", type: "creative"},
    {text: "Video Editing", type: "creative"},
    {text: "Social Media Managment", type: "creative"}, 
  ];

 

  const skillsEngineer = [
    {text: "3D Modelling", type: "engineer"},
    {text: "Prototyping", type: "engineer"},
    {text: "Lean Management", type: "engineer"},
    {text: "Excel", type: "engineer"},
    {text: "Math", type: "engineer"},
    {text: "Project Managment", type: "engineer"},
    
    
  ];

  return (

    


    <div id="mySkills" className='containerTwo'>

     {/* <Titlebox/> */}
      <h1 className='header_titles'>My Skills 🧑‍💻</h1>
      <div className='mySkills_body'>
        <div className='mySkills_buttons'>
        <button className={all ? 'mySkills_buttonON' : 'mySkills_buttonOFF'} onClick={turnOnAll}>All</button>
        <button className={software ? 'mySkills_buttonON' : 'mySkills_buttonOFF'} onClick={turnOnSoftware}>Software</button>
        <button className={creative ? 'mySkills_buttonON' : 'mySkills_buttonOFF'} onClick={turnOnCreative}>Creative</button>
        <button className={engineer ? 'mySkills_buttonON' : 'mySkills_buttonOFF'} onClick={turnOnEngineer}>Engineering</button>
        
        </div>
        <motion.div layout className='mySkills_text'>
          {FinalSkill().map(skill => <motion.div layout className={skill.type}>{skill.text}</motion.div>)}
        </motion.div>
         <p className='mySkills_p'> 
          Visit my <a className='boldedBlue' href='https://www.linkedin.com/in/mbachraty/' target="blank"><strong className='boldedBlue'>LinkedIn</strong></a> profile for more details or just <a className='boldedBlue' href='#contact' ><strong className='boldedBlue'>contact me.</strong></a>
         </p>
       </div>

    </div>
    

  )
}

export default Myskills