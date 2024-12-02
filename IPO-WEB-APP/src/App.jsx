import { useState } from 'react'

import './index.css'
import Header from './Components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header/>
  )
}

export default App
