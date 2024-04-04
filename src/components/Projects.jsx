import React from 'react'
import {projects} from '../objects/projects';
import '../styles/Projects.css';
import { Project } from './Project';

export const Projects = () => {
  return (
    <section id="proyectos">
    <h2 className='blanc'>Projects</h2>
    <div className="proyects">
        {
            projects.map((project,index)=>(
                <Project key={index} project={project}/>
            ))
        }
    </div>
    <p style={{backgroundColor:'red',fontWeight:'700',color:'white',textAlign:'center',padding:5}}>Creating a project Social Media, soon</p>
    </section>
  )
}
