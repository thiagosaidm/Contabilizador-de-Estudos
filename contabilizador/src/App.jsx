//components

import Home from './Components/Home/Home'
import { useState } from 'react'
import Timer from './Components/Timer/Timer'


import './App.css'
import Form from './Components/Form/Form'
import Saudacao from './Components/Saudacao/Saudacao'


function App() {

  const [nome, setNome] = useState('')
  const[assunto, setAssunto] = useState('')


  return (
    <div className="App">
      

        <Home />
        <Form  setNome={setNome} setAssunto={setAssunto}/>
        <Timer  nome = {nome} assunto= {assunto}/>
       
      
    </div>
  )
}


export default App
