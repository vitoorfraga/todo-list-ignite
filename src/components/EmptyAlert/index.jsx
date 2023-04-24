import React from 'react'
import emptyIcon from './../../assets/clipboard.png'
import styles from './EmptyAlert.module.css'

export default function EmptyAlert() {
  return (
    <div className={styles.empty}>
    <img src={emptyIcon} alt="Icone de clipboard." />
    <div className={styles.emptyContent}>
      <strong>Você ainda não tem tarefas cadastradas</strong>
              
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  </div>
  )
}
