import { Header } from './components/Header'

import styles from './App.module.css'
import './global.css'
import { Tasks } from './components/Tasks'
import { AddTaskBar } from './components/AddTaskBar'
import { v4 as uuidv4 } from 'uuid'
import { Infotasks } from './components/InfoTasks'

const tasks = [
  {
    id: uuidv4(),
    title: 'Terminar o desafio',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'Dar banho no gato',
    isComplete: true
  },
  {
    id: uuidv4(),
    title: 'Escovar os dentes',
    isComplete: false
  }
]

function App() {
  return (
    <div>
      <Header />

      <AddTaskBar />
      <br />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
  )
}

export default App
