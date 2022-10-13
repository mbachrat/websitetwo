import React from 'react'
// import { ReactComponent as Game } from '../../imgs/game.svg';
import './navElements.css'
import { useState } from 'react';

import {Link} from "react-scroll"

function Navbar() {

    



//ABOUT HIGHLIGHT
const [about, setAbout] = useState(true)
const activateOne = () => {
    const height = document.getElementById('main').offsetHeight
    
    if(window.scrollY<0.5*height) {
        setAbout(true)
    } else {
        setAbout(false)
    }
}

window.addEventListener('scroll', activateOne)

//SKILLS HIGHLIGHT
const [skills, setSkills] = useState(false)
const  activateTwo= () => {
    const height = document.getElementById('main').offsetHeight
    
    if(window.scrollY< 1.5*height && window.scrollY > 0.5*height) {
        setSkills(true)
    } else {
        setSkills(false)
    }
}

window.addEventListener('scroll', activateTwo)

//PROJECTS HIGHLIGHT
const [project, setProject] = useState(false)
const activateThree = () => {
    const height = document.getElementById('main').offsetHeight
    
    if(window.scrollY< 2.5*height && window.scrollY > 1.5*height) {
        setProject(true)
    } else {
        setProject(false)
    }
}

window.addEventListener('scroll', activateThree)

//CONTACT HIGHLIGHT
const [contact, setContact] = useState(false)
const activateFour = () => {
    const height = document.getElementById('main').offsetHeight
    
    if(window.scrollY< 3.5*height && window.scrollY > 2.5*height) {
        setContact(true)
    } else {
        setContact(false)
    }
}

window.addEventListener('scroll', activateFour)


  return (
    
        
        <div className='Nav'>
            <div className={about ? 'nav_black' : 'nav_white'}>
                <div className='nav_top'>
                    <h1><Link to='main'>MB</Link></h1>
                    <h3>Web Developer</h3>

                </div>
                <div className='nav_menu'>
                    <Link to='main' className={about ? 'active' : 'about'} smooth={true} duration={100}>About</Link>
                    <Link to='mySkills' className={skills ? 'active ' : 'myskills'} smooth={true} duration={100}>My Skills</Link>
                    <Link to='project' className={project ? 'active' : 'projects'} smooth={true} duration={100}>Projects</Link>
                    <Link to='contact' className={contact ? 'active' : 'contact'} smooth={true} duration={100}>Contact</Link>
                </div>
                <div className='nav_bottom'>
                    {/* <Game className='game' /> */}
                </div>
            </div>
        </div>
        
  )
}

export default Navbar