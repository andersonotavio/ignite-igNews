import { SignInButton } from '../SignInButton'
import Link from 'next/link'
import styles from './styles.module.scss'
import { ActiveLink } from '../ActiveLink'


export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo do site" />
        <nav>
          <ActiveLink activeClassName={styles.active} href='/'>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href='/posts'>
           <a>Post</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}