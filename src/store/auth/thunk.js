
import {
  loginWithEmailPassword,
  registerUserWhitEmailPassword,
  signInWithGoogle, singOutUserFirebase
} from "../../firebase/providersAhthentications";
import { checkingCredentials, login, logout } from "./";

export const checkingauthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startGoogleSignIn = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();

    if (!result.ok) {
      console.log(result);
      return dispatch(logout(result.errorMessage));
    }

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, errorMessage } =
      await registerUserWhitEmailPassword(email, password, displayName);

    if (!ok) return dispatch(logout(errorMessage));

    console.log(ok, uid, photoURL, displayName);

    dispatch(login({ uid, photoURL, displayName, email }));
  };
};

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const { ok, uid, photoURL, displayName,errorMessage } = await loginWithEmailPassword(email, password);

    if(!ok) return dispatch(logout(errorMessage));

    dispatch(login({uid,photoURL,displayName,email}))
  };
};


export const startLogout = () =>{
  return async (dispatch) =>{
    await singOutUserFirebase();
    dispatch(logout())
  }
}