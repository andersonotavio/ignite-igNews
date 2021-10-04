import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './styles.module.scss'

export function SignInButton(){

  const userIsLoggedIn = true;

  return userIsLoggedIn ? (
    <button 
      type="button" 
      className={styles.signInButton}
    >
      <FaGithub color="#04d361"/>
      Anderson Otavio
      <FiX color="#737380" className={styles.closed}/>
    </button>
  ) : (
    <button 
      type="button" 
      className={styles.signInButton}
    >
      <FaGithub color="#eda417"/>
      Sign in with Github
    </button>
  )
    
  
}