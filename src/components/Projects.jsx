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
    </section>
  )
}
