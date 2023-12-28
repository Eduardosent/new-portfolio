import React from 'react'
import '../styles/Tools.css'
import { tools } from '../objects/tools'

export const Tools = () => {
  return (
    <section id="herramientas">
      <h2>Technologies / Tools</h2>
      <div className="tecnologias">
        {   
        tools.map((tool,index)=>(
            <div className="tecnologia" key={index}>
                <img src={`/svg/${tool.image}`} alt=""/>
                <p>{tool.name}</p>
            </div>
        ))
        }
      </div>
    </section>
  )
}
