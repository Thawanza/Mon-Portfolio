import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Skills_Data from '../../assets/skiils'
function Skills() {
  return (
    <div id='compétences' className='skills'>
        <div className="skill-title">
            <h1>Mes compétences</h1>
            
        </div>
        <div className="skills-container">
            {Skills_Data.map((skill,index)=>{
                return <div key={index} className="skill-format">
                    <img src={skill.s_icon} alt={skill.s_name} className="skill-icon" />
                    <h5>{skill.s_name}</h5>
                    
                </div>
            })}
        </div>
    </div>
  )
}

export default Skills