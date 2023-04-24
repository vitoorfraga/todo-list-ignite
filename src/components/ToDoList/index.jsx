import { useState } from 'react';
import EmptyAlert from '../EmptyAlert'
import ToDoItem from '../ToDoItem'

import styles from './TaskQueue.module.css'

export default function TaksQueue({ queue, setQueue }) {

  const [doneTasksCount, setDoneTasksCount] = useState([]);

  function handleDoneTasksCount() {
    const doneTasks = queue.filter(item => {
      if(item.status) {
        return item
      }
    })


    setDoneTasksCount(doneTasks)
  }

  function handleChangeStatus(task) {
    task.status = !task.status
    handleDoneTasksCount()
  }

  function handleDelete(task) {
    setQueue(() => queue.splice(task, 1))
  }


  const renderToDoes = queue.map(item => {
    return (
      <ToDoItem
        key={item.content}
        status={item.status}
        content={item.content}
        onChangeStatus={() => handleChangeStatus(item)}
        onDeleteToDo={() => handleDelete(item)}
      />
    )
  })

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.tasksAmount}>
          <h3>Tarefas criadas</h3>
          <span className={styles.count}>{queue.length}</span>
        </div>

        <div className={styles.doneAmount}>
          <h3>Concluídas</h3>
          <span className={styles.count}>{queue.length === 0 ? 0 : doneTasksCount.length} de {queue.length}</span>
        </div>
      </header>
      
      <div className={styles.taksList}>
        {renderToDoes}
      </div>
      
      { queue.length === 0 && <EmptyAlert /> }
    </div>
  )
}
