import { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'
import Timer from './Components/Timer/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <>

        <Form name={`Thiago`}/>
        <Timer />
      </>
    </div>
  )
}


export default App
