import React from 'react'
import '../styles/Header.css'

export const Header = () => {
  return (
    <header>
      <nav className="navegacion-header">
            <a href="#datos-personales">Personal Information</a>
            <a href="#idiomas">Languages</a>
            <a href="#lenguajes-frameworks">Programming Languages / Frameworks</a>
            <a href="#herramientas">Tools / Technologies</a>
            <a href="#proyectos">Projects</a>
      </nav>
    </header>
  )
}
