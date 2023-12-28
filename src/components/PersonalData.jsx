import React from 'react'
import '../styles/PersonalData.css'

export const PersonalData = () => {

  return (
    <main id="datos-personales">
    <div className="datos-p container"> 
        <h1>Personal Information</h1>
        <img src={"/img/perfil.png"}></img>
        <div className="informacion-personal">
            <div className="dato-separado">
                <p className="pregunta">Name:</p>
                <p className="respuesta">Eduardo Gomez</p>
            </div>
            <div className="dato-separado">
                <p className="pregunta">Age:</p>
                <p className="respuesta">23</p>
            </div>
            <div className="dato-separado">
                <p className="pregunta">Number Phone:</p>
                <p className="respuesta">+503 74489102</p>
            </div>
            <div className="dato-separado">
                <p className="pregunta">Email:</p>
                <p className="respuesta">eduardogomez.sent2 @gmail.com</p>
            </div>
            <div className="dato-separado">
                <p className="pregunta">Degree:</p>
                <p className="respuesta">Bachelor of Business Administration (10 subjects taken and with the plan to graduate)</p>
            </div>
            <div className="dato-separado">
                <p className="pregunta">Work experience:</p>
                <p className="respuesta">Textiles La Paz-chemise factory (3 and a half years)</p>
            </div>
            <div className="dato-separado">
                <p className="pregunta">Position:</p>
                <p className="respuesta">Operator-unloader (with leadership capacity and management of all screen printing machines)</p>
            </div>
        </div>
    </div>
</main>
  )
}
