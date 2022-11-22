import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NavBar from './componets/NavBar/NavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar></NavBar>
    </div>
  )
}

export default App
