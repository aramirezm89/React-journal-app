import {
  collection,
  doc,
  setDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from '../../firebase/config';
import { loadNotesFireStore } from "../../helpers";
import { addEmptyNotes,setActiveNote, setNotes, setSavigNewNote } from './journalSlice';

export const startNewNote = () =>{
    return async (dispatch,getState) => {

        dispatch(setSavigNewNote());
        //userId 
        const {uid} = getState().auth;

        //create newNote
        const newNote = {
            title:'',
            body:'',
            date:new Date().getTime(),
        }
       
        //apuntar al documento de fireStore donde guardare la nota

        const newDoc = doc(collection(FirebaseDB,`${uid}/journal/notes`));
        await setDoc(newDoc,newNote);
        
        newNote.id = newDoc.id;

        //TODO: dispatch

        dispatch(addEmptyNotes(newNote));
        dispatch(setActiveNote(newNote));
    }

  
}

//esta function esta siendo llamada en el hook useCheckAuth
  export const startLoadingNotes = () => {
    return async (dispatch,getState) =>{
      //userId
      const { uid } = getState().auth;

      const notes = await loadNotesFireStore(uid);
      
      dispatch(setNotes(notes));
    }
  };