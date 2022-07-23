import { PlusCircle } from 'phosphor-react'

import styles from './style.module.css'

interface ButtonProps {
  text: string;
}

export function Button({text}: ButtonProps) {
  return (
    <button className={styles.button}>
      {text} <PlusCircle size={20}/>
    </button>
  )
}