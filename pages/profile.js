import useUser from "../hooks/useUser";
import { signOut } from "firebase/auth";
import { query,collection,where,getDocs } from "firebase/firestore";
import { auth,db } from "../firebase/config";
import { useEffect,useState } from "react";
import Link from "next/link";


export default function Profile(){

    const user = useUser()
    const [notes,setNotes] = useState([])
    const handleLogOut = () => {
        signOut(auth)
        .catch((err)=> {
          console.log(err)
        })
      }
    
    const handleUserNotes = async () => {
      const params = query(collection(db,'notes'), where('userId', '==', user.uid))
      const snapShot = await getDocs(params);
      const userNotes = []
      snapShot.forEach((doc)=> {
        userNotes.push(doc.data())
      })
      setNotes(userNotes)
    }
    useEffect(()=>{
      if(user){
        handleUserNotes()
      }
    },[user])

    return (
        <div className="profile-info">
            {user ? user.displayName : null}
        <button onClick={handleLogOut}>Log out</button>

        <Link href='/createNote'>
          <button>Create note</button>
        </Link>

        <h2> Mi notes:</h2>
        {notes.map((e,i)=> <div className="single-note" key={i}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
        </div>)}
        </div>
    )
}