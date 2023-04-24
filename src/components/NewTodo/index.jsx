import styles from './NewTodo.module.css'
import plusIcon from './../../assets/plus.svg'
import { ChangeEvent, FormEvent, useState } from 'react'


export default function NewTodo({ value, setValue, toDoList, setToDoList }) {

  function handleChangeNewToDo(event) {
    setValue(event.target.value)
  }

  function handleCreateNewToDo(event) {
    event.preventDefault()
    setValue("")
    setToDoList([...toDoList, {content: value, status: false}])
  }

  return (
    <form className={styles.wrapper} onSubmit={handleCreateNewToDo}>
      <textarea
      value={value}
      placeholder='Adicione uma nova tarefa' 
      name="to-do"
      onChange={handleChangeNewToDo}
      />

      <button>
        Criar
        <img src={plusIcon} alt="Icone de mais" />
      </button>
    </form>
  )
}
