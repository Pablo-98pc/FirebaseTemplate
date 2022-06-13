import { useState } from "react"
import { db } from "../firebase/config"
import useUser from "../hooks/useUser"
import { useRouter } from "next/router"
import { addDoc,collection,Timestamp } from "firebase/firestore"


export default function createNote() {
    const router = useRouter()
    const user = useUser()
    const [title,setTitle] = useState(null)
    const [description,setDescription] = useState(null)

    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const notesCollectionRef = collection(db,'notes')
        try {
             await addDoc(notesCollectionRef,{
                title,
                description,
                userId:user.uid,
                createdAt: Timestamp.fromDate(new Date()),
            }) 
            router.push('profile')
        } catch (error) {
            console.error(error)
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' placeholder='title' onChange={(e)=>setTitle(e.target.value)}/>
            <input type='text' name='description' placeholder='description' onChange={(e)=>setDescription(e.target.value)}/>
            <button>Submit</button>
        </form>
    )

}