import { useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/router"
import { auth } from "../firebase/config"

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth,(user)=> {
        if(user) {
            setUser(user)
        }
        else {
            setUser(USER_STATES.NOT_LOGGED)
            router.push("/")
        }
    })
  }, [])
 
  return user
}