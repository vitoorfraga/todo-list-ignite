import { useState } from 'react'
import { ReactComponent as TrashIcon } from './../../assets/trash.svg'

import styles from './ToDoItem.module.css'

export default function ToDoItem({ status, content, onChangeStatus, onDeleteToDo }) {

  // States
  const [checked, setChecked] = useState(status);

  function handleCheck() {
    setChecked((state) => !state)
    onChangeStatus(status)
  }

  return (
    <div className={styles.wrapper}>

      <div className={styles.radio}>
        <input 
        type="checkbox" 
        name="done" 
        onChange={handleCheck}
        checked={checked}/>
      </div>

      <div className={checked ? styles.contentDone : styles.content}>
        <p>{content}</p>
      </div>

      <div onClick={onDeleteToDo} className={styles.delete}>
        <TrashIcon className={styles.deleteIcon}/>
      </div>
    </div>
  )
}
