import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Register from './componentes/Register'
import AddUser from './tanstack/Fetching'
import Parent from './Opti/Parent'
import Users from './FetchAndLIst/FetchAndList'
import TodoApp from './todoApp/ToDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoApp/>
  )
}

export default App
