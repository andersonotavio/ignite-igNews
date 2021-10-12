import { SignInButton } from '../SignInButton'
import Link from 'next/link'
import styles from './styles.module.scss'


export function Header(){
  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo do site" />
        <nav>
          <Link href='/'>
            <a  className={styles.active}>Home</a>
          </Link>
          <Link href='/posts'>
           <a>Post</a>
          </Link>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}