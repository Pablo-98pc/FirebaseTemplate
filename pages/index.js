import { signInWithPopup} from 'firebase/auth';
import { useEffect } from 'react';
import { auth,provider } from '../firebase/config'
import useUser from '../hooks/useUser';
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router'
export default function Home() {

  const user = useUser()
  const router = useRouter()

  const handleLogIn = () => {
    signInWithPopup(auth, provider)
    .catch(error => {
      console.log(error)
    })
  }


  useEffect(()=> {
    user && router.push('/profile')
  },[user])


  return (
    <div className={styles.container}>
      <button className='google_button' onClick={handleLogIn}>Sign in With Google</button>
    </div>
  )
}
