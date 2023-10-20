import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore,doc,getDoc,setDoc } from 'firebase/firestore';

import { useContext } from 'react';
import { UserContext } from '../../../Context/user.context';


const firebaseConfig = {
    apiKey: "AIzaSyD8F6dIEfm156UkZEbmDYv5JJGtNt7PkxE",
    authDomain: "clone-22b81.firebaseapp.com",
    projectId: "clone-22b81",
    storageBucket: "clone-22b81.appspot.com",
    messagingSenderId: "479524469773",
    appId: "1:479524469773:web:160cb51d97e4f6bc65a944",
    measurementId: "G-LVW4MWCN5Z"
  };

  const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,setCurrentUser) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
    setCurrentUser(userAuth.displayName,userAuth.email);
  }

  return userDocRef;
};

const Firebase = ()=>{
    const { setCurrentUser } = useContext(UserContext);
    createUserDocumentFromAuth(setCurrentUser);
}