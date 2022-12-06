import {
  collection,
  doc,
  setDoc,
} from "firebase/firestore/lite";
import { FirebaseDB } from '../../firebase/config';
import { loadNotesFireStore } from "../../helpers";
import { addEmptyNotes,setActiveNote, setNotes, setSavigNewNote, setSaving, updateNote } from './journalSlice';

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


  //funcion para actualzar la nota que se obtiene al dar click al boton de +
  export const startSaveNote = () => {
    return async (dispatch,getState) =>{

      dispatch(setSaving())
      const { uid } = getState().auth;
      const { activeNote } = getState().journal;

      const noteToFireStore = { ...activeNote };

      //la activeNote contiene la id de la nota, por lo caul la quitamos antes de realzar el nuevo insert

      delete noteToFireStore.id;

      //referencia al documento que se encuntra en Firebase y el cual sera actualizado
      const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);

      //funcion que setea los nuevos valores para la nota
      // la opcion "merge" hace que los campos que no esten en noteToFireStore y si esten en FireStore se mantengan
      await setDoc(docRef, noteToFireStore, { merge: true });

      //actualzia la nota activa en el reducer con los nuevos valores 
      dispatch(updateNote(activeNote))
    }
  }