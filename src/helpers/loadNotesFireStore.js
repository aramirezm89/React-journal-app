import {getDocs,collection}  from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
export const loadNotesFireStore = async (uid) =>{
if(!uid)  throw new Error('El UID del usuario no existe')

  const docs =  await getDocs(
        collection(FirebaseDB, `${uid}/journal/notes`)
      );

      const notes = [];
     docs.forEach((doc) => {
      notes.push({id:doc.id,...doc.data()})
     })

     return notes;
}