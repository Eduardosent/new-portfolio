import React from 'react'
import '../styles/Projects.css';

export const Project = ({project}) => {
  return (
    <div className='project'>
    <p className='type'>type:{project.type}</p>
    <p className='title'>{project.title}</p>
    {
      project.image ?
      <img className='imgmain' src={`/img/${project.image}`} alt="" /> :
      <video className='imgmain' autoPlay={true} muted={true} controls src={`/vid/${project.video}`}></video>
    }
    <div className='madewithimages'>
        <p>made with:</p>
        <div className='images'>
    {
        project.madeWith.map((img,index)=>(
            <img key={index} src={`/svg/${img}`} alt="" />
        ))
    }
    </div>
    </div>
    <p>{project.descripton}</p>
    <p className='created'>created: {project.created}</p>
    {
      project.download && 
      <a className='download' href={project.download}>Download {project.typedownload}<img src='/svg/download.png' /></a>
    }
    <div className='links'>
    <a className='github' href={project.github}>Github<img src='/svg/github.svg' /></a>
    {
      project.link &&
      <a className='view' href={project.link}>See</a>
    }
    </div>
</div>
  )
}
