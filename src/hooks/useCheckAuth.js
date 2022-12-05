import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { startLoadingNotes } from '../store/journal';


//implementada en el AppRouter

export const useCheckAuth = () => {

 const { status } = useSelector((state) => state.auth);
 const dispatch = useDispatch();
 useEffect(() => {
   //observable que devuelve el usuario que esta autenticado
   onAuthStateChanged(FirebaseAuth, async (user) => {

     /*en este caso como el usuario ya se encueentra en el estado llamo directamente las actions (login,logout)
    de mi slice (por que ya todo es sincrono y no necesito el thunk)
    */
     if (!user) return dispatch(logout());

     const { uid, photoURL, email, displayName } = user;

     dispatch(login({ uid, email, photoURL, displayName }));
      
     //cargar notes del usuario giardadas en fireStore
     dispatch(startLoadingNotes())
   });


 }, []);
  
 return {
    status
 }
}
