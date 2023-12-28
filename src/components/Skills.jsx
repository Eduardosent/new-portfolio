import React from 'react'
import '../styles/Skills.css'
import {skills,coming} from  '../objects/skills'

export const Skills = () => {
  return (
    <section id="lenguajes-frameworks">
    <h2>Programming Languages, Frameworks and Libraries</h2>
    <div className="skills">
        {skills.map((skill,index)=>(
            <div className="skill" key={index}>
                <div className="skill-main">
                        <img src={`/svg/${skill.image}`} />
                        <p className="nombre-skill">{skill.name}</p>
                </div>
                <div className="barra" style={{backgroundColor: skill.baseColor}}>
                        <div className="progreso" style={{backgroundColor: skill.progressColor,
                          width: skill.progressWidth
                          }}>
                            <style>
                              {`
                              @keyframes increment{
                                0%{width:0%;}
                                100%{width:${skill.progressColor};}
                              }
                              `}
                            </style>
                          </div>
                </div>
            </div>
        ))}
    </div>
    <div>
      <h3>Coming</h3>
      <div className="proximos">
        {
          coming.map((prox,index)=>(
            <div className="proximo" key={index}>
              <img src={`/svg/${prox.image}`} alt=""/>
              <p>{prox.name == 'Blockchain' && prox.name}(Coming)</p>
            </div>
          ))
        }
      </div>
    </div>
    </section>

  )
}