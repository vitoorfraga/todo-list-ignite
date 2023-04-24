import { useState } from "react"
import Header from "./components/Header"
import NewTodo from "./components/NewTodo"
import TaksQueue from "./components/ToDoList"

import styles from './styles/App.module.css'

function App() {

  const [toDoList, setToDoList] = useState([])
  const [newToDoText, setNewToDoText] = useState("")

  return (
    <>
      <Header />
      <NewTodo
        value={newToDoText}
        setValue={setNewToDoText}

        toDoList={toDoList}
        setToDoList={setToDoList}
      />

      <div className={styles.wrapper}>
        <TaksQueue 
          queue={toDoList}
          setQueue={setToDoList}
        />
      </div>
    </>
  )
}

export default App
