import { auth,createUserDocumentFromAuth,signInWithGoogleRedirect } from "../Utils/firebase/firebase.utils";
import { useEffect} from "react";
import { getRedirectResult } from "firebase/auth";
import UserImg from '../../assets/user-circle-svgrepo-com.svg';


const SignIn = ()=>{
    useEffect(()=>{
        const asyncFn = async () => { 
            const response = await getRedirectResult(auth);
            if(response){
                await createUserDocumentFromAuth (response.user);
            }
        };
        asyncFn();
        
    },[]);

    return(
        <div>
            <button onClick={signInWithGoogleRedirect} className="sign-in-button"><img alt='userDp'src={UserImg}className='sign-in-img'/><p className="sign-in-text">SignIn</p></button>
        </div>
    )
}

export default SignIn;