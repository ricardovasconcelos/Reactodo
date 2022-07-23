import Logo from '../../assets/logo.svg'

import styles from './style.module.css'

export function Header() {
  return (
    <div className={styles.container}>
      <img src={Logo} alt="Logo" />
    </div>
  )
}