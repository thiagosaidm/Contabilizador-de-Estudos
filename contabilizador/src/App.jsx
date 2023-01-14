//components

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


import Home from './pages/Home/Home'
import { useState } from 'react'
import Timer from './pages/Timer/Timer'


import './App.css'
import Form from './pages/Form/Form'



function App() {

  const [nome, setNome] = useState('')
  const[assunto, setAssunto] = useState('')


  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/form'  element={<Form  setNome={setNome} setAssunto={setAssunto}/>}/>
        <Route path='/timer' element={<Timer  nome = {nome} assunto= {assunto}/>}/>
      </Routes>

      
       
      
    </Router>
  )
}


export default App
