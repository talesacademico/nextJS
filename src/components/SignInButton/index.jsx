import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton() {

  const {data: session} = useSession()
  
  function login(){
    if(session){
      signOut()
      return
    }
    signIn('github')
  }

  return (
    <button type="button" className={styles.singInButton}
      onClick={login}>
      {session? <FaGithub color='#04d361' /> : <FaGithub color='#eba417' />}
      {session? session.user.name: 'Signin with Github'}
      {session && <FiX />}
    </button>
  )
}