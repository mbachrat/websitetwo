import { MotionConfig } from 'framer-motion';
import * as React from 'react';
import { motion } from "framer-motion"

function SkillsCoding() {

  

    const skill = [
      {text: "JavaScript", type: "coding"},
      {text: "React", type: "coding"},
      {text: "Node.js", type: "coding"},
      {text: "Web Front End", type: "coding"},
     
      
      {text: "HTML", type: "coding"},
      {text: "CSS", type: "coding"},
      {text: "UX/UI Design", type: "coding"},
      {text: "Adobe Suite", type: "coding"},
      {text: "Videography", type: "coding"},
      
    ];

    // const skillTest = [
    //   {text: "JavaScript", type: "creative"},
    //   {text: "React", type: "creative"},
    //   {text: "Node.js", type: "creative"},
    //   {text: "Web Front End", type: "creative"},
    //   {text: "HTML", type: "creative"},
    // ];

    // const array = [skill, skillTest]

    // let filtered = array.filter()

    let skills = skill.map(skill => <motion.div layout className={skill.type}>{skill.text}</motion.div>)

return skills
    }
    
    
    export default SkillsCoding