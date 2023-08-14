import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WheelOfDoom } from './Components/WheelOfDoom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WheelOfDoom/>
    </>
  )
}

export default App
