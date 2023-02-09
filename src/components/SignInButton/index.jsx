import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SignInButton() {

  const [isUserLoggedIn, setIsVerifyLoggendIn] = useState(
    {
      name: "Sing in Github",
      icon: <FaGithub color='#eba417' />,
      sign: false
    })

  const logout = () => {
    if (isUserLoggedIn.sign) {
      setIsVerifyLoggendIn(
        {
          name: "Sing in Github",
          icon: <FaGithub color='#eba417' />,
          sign: false
        }
      )
      return
    }
    setIsVerifyLoggendIn({
      name: "Tales",
      icon: <FaGithub color='#04d361' />,
      sign: true
    })
  }
  return (
    <button type="button" className={styles.singInButton}
      onClick={logout}>
      {isUserLoggedIn.icon}
      {isUserLoggedIn.name}
      {isUserLoggedIn.sign && <FiX/>}
    </button>
  )
}