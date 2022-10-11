import * as React from 'react';

function IndividualSkills() {

    const skill = [
      {text: "JavaScript", type: "coding"},
      {text: "React", type: "coding"},
      {text: "Node.js", type: "coding"},
      {text: "Web Front End", type: "coding"},
     
      
      {text: "HTML", type: "coding"},
      {text: "CSS", type: "coding"},
      {text: "UX/UI Design", type: "creative"},
      {text: "Adobe Suite", type: "creative"},
      {text: "Videography", type: "creative"},
      
     
      
      
      
      
    ];

    let skills = skill.map(skill => <p className={skill.type}>{skill.text}</p>)

return skills
    }
    
    
    export default IndividualSkills