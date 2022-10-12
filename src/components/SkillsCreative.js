import * as React from 'react';
import { motion } from "framer-motion"

function SkillsCreative() {

    const skill = [
      {text: "JavaScript", type: "creative"},
      {text: "React", type: "creative"},
      {text: "Node.js", type: "creative"},
      {text: "Web Front End", type: "creative"},
      {text: "Matthew", type: "creative"},
     
      
    ];

    let skills = skill.map(skill => <motion.div layout className={skill.type}>{skill.text}</motion.div>)

return skills
    }
    
    
    export default SkillsCreative