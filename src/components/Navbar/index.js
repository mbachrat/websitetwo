import React from 'react'
import { ReactComponent as Game } from '../../imgs/game.svg';
import './navElements.css'
import { useState } from 'react';

import {Link} from "react-scroll"

function Navbar() {

const height = document.getElementById('main').offsetHeight

//ABOUT HIGHLIGHT
const [about, setAbout] = useState(false)
const activateOne = () => {
    
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
    
    if(window.scrollY<< 3.5*height && window.scrollY > 2.5*height) {
        setContact(true)
    } else {
        setContact(false)
    }
}

window.addEventListener('scroll', activateFour)


  return (
    
        
        <div className='Nav'>
            <div className='nav_top'>
                <h1><Link to='main'>MB</Link></h1>
                <h3>Web Developer</h3>

            </div>
            <div className='nav_menu'>
                <Link to='main' className={about ? 'active' : 'about'} smooth={true} duration={500}>About</Link>
                <Link to='mySkills' className={skills ? 'active' : 'myskills'} smooth={true} duration={500}>My Skills</Link>
                <Link to='project' className={project ? 'active' : 'projects'} smooth={true} duration={500}>Projects</Link>
                <Link to='contact' className={contact ? 'active' : 'contact'} smooth={true} duration={500}>Contact</Link>
            </div>
            <div className='nav_bottom'>
                <Game className='game' />
            </div>
        </div>
        
  )
}

export default Navbar