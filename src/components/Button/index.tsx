import { PlusCircle } from 'phosphor-react'
import { ButtonHTMLAttributes } from 'react'

import styles from './style.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({children,...props}: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children} <PlusCircle size={20}/>
    </button>
  )
}