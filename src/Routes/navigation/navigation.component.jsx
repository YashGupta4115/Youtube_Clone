import menuIcon from '../../assets/hamburger-menu.svg';
import ytIcon from '../../assets/youtube-logo.svg';
import searchIcon from '../../assets/search.svg';
import voiceSearchIcon from '../../assets/voice-search-icon.svg';
import UserImg from '../../assets/user-circle-svgrepo-com.svg';
import bellIcon from '../../assets/notifications.svg';
import createIcon from '../../assets/upload.svg';
import { useState } from 'react';
import './navigation.styles.css';
import { Outlet , Link } from 'react-router-dom';
import { Fragment } from 'react';
import { auth,createUserDocumentFromAuth, signInWithGoogleRedirect } from '../../components/Utils/firebase/firebase.utils.jsx'
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../Context/user.context';

const Navigation = ()=> {

    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    const [searchField , setSearchField] = useState('');

    const onSearchChange = (event)=> {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    useEffect(()=>{
        const asyncFn = async () => { 
            const response = await getRedirectResult(auth);
            if(response){
                const userDocRef = await createUserDocumentFromAuth (response.user);
            }
        };
        asyncFn();
        
    },[]);
    return (
        <div>
            <Fragment>
                <div className="header">
                <div className="head1">
                    <div className="menuBox"><img alt="menuIcon" className="menu" src={menuIcon}/></div>
                    <Link className='logo-container' to='/'>
                        <div className="ytlogoBox"><img alt="ytIcon" className="ytlogo" src={ytIcon}/></div>
                    </Link>
                </div>
                <div className="head2">
                    <input id="searchInput" className="search_bar" type="search" placeholder="Search"onChange={onSearchChange}/>
                    <Link to={`/search/${searchField}`}><button id="searchButton" className="search_button"><img alt="searchIcon" src={searchIcon} className="search"/></button></Link>
                    <button className="voice_search_button"><img alt="voiceSearchIcon" src={voiceSearchIcon} className="voice_search"/></button>

                </div>
                <div className="head3">
                    <img alt="createIcon" className="create_icon" src={createIcon}/>
                    <img alt="bellIcon" className="bell_icon" src={bellIcon}/>
                    <div class="sign-in-container">
                        <button onClick={signInWithGoogleRedirect} class="sign-in-button"><img alt='userDp'src={UserImg}class='sign-in-img'/><p class="sign-in-text">Sign In</p></button>
                    </div>
                </div>
                </div>
                <Outlet/>
            </Fragment>
            
        </div>
        
    )
}

export default Navigation;