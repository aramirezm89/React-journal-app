import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider(); //instancia para utilizar el proveedor de google

//función para autenticarme con google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, uid, email, photoURL } = result.user;

    return {
      ok: true,
      displayName,
      email,
      uid,
      photoURL,
    };
  } catch (error) {
    console.log(error);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.

    return {
      ok: false,
      errorMessage,
      errorCode,
    };
  }
};

//funcion para crear usuasrio mediante email y password

export const registerUserWhitEmailPassword = async (
  email,
  password,
  displayName
) => {
  try {
    const response = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = response.user;

    //TODO actualizar el disPlayName en Firebase

    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    });
    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: error.message,
      errorCode: error.code,
    };
  }
};

export const loginWithEmailPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { photoURL, uid, displayName } = response.user;
    return {
      ok: true,
      uid,
      email,
      photoURL,
      displayName,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const singOutUserFirebase =  async () =>{

  try {
   return await FirebaseAuth.signOut();
  } catch (error) {
    console.log(error);
    return error;
  }
}
