import React from 'react'
import './App.css'
import { Header } from './components/Header';
import { PersonalData } from './components/PersonalData';
import { Lenguages } from './components/Lenguages';
import { Skills } from './components/Skills';
import { Tools } from './components/Tools';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className='app'>
      <div className='appchild'></div>
      <Header/>
      <PersonalData/>
      <Lenguages/>
      <Skills/>
      <Tools/>
      <Projects/>
      <Footer/>
    </div>
  )
}
export default App;
