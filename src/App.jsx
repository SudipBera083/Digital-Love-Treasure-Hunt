import { useState } from 'react'
import Timeline from './components/Timeline'
import Landing from './components/Landing'
import Surprise from './components/Surprise'
import Memory from './components/Memory'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Landing />
      <Timeline />
      <Surprise />
      <Memory 
  memory={{
    title: "My Memory 💖",
    image: "https://via.placeholder.com/400",
    description: "Our beautiful journey started here..."
  }}
/>
    </div>

  )
}

export default App
