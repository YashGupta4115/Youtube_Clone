import React from "react";
import { auth,createUserDocumentFromAuth, signInWithGoogleRedirect } from "./Utils/firebase/firebase.utils";
import { useEffect} from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {

    useEffect(()=>{
        const asyncFn = async () => { 
            const response = await getRedirectResult(auth);
            if(response){
                const userDocRef = await createUserDocumentFromAuth(response.user);
            }
        };
        asyncFn();
    },[]);
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
      </div>
    );
  };
  
export default SignIn;