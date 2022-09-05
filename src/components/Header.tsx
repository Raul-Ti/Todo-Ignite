import styles from './Header.module.css'
import { PlusCircle } from 'phosphor-react'

import todoLogo from '../assets/logo.svg'

export function Header(){

    return(
    <header className={styles.header}>
        <img src={todoLogo} alt="Logotipo to-do"/>

    </header>
    )
}