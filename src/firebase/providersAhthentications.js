import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new  GoogleAuthProvider();//instancia para utilizar el proveedor de google 

//función para autenticarme con google
export const signInWithGoogle = async () =>{
    try {

        const result = await signInWithPopup(FirebaseAuth,googleProvider)
        //const credentials = GoogleAuthProvider.credentialFromResult(result);

        const {displayName,uid,email,photoURL} = result.user


        return{
            ok:true,
            displayName,email,uid,photoURL
        }
    
    } catch (error) {
      console.log(error);
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.

    

      return {
        ok: false,
        errorMessage,errorCode
      };
    }
}