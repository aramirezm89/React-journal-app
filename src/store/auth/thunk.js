import { signInWithGoogle } from "../../firebase/providersAhthentications";
import { checkingCredentials,logout,login } from "./";

export const checkingauthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};


export const startGoogleSignIn = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();

  if(!result.ok){
    console.log(result)
   return dispatch(logout(result.errorMessage));
  }

  dispatch(login(result))
  };
};
