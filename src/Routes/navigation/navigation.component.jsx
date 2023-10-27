import menuIcon from '../../assets/hamburger-menu.svg';
import ytIcon from '../../assets/youtube-logo.svg';
import searchIcon from '../../assets/search.svg';
import voiceSearchIcon from '../../assets/voice-search-icon.svg';
import bellIcon from '../../assets/notifications.svg';
import createIcon from '../../assets/upload.svg';
import { useState } from 'react';
import './navigation.styles.css';
import { Outlet , Link } from 'react-router-dom';
import { Fragment,useContext } from 'react';
import SignIn from '../../components/SignIn/signIn.component';
import { UserContext } from '../../Context/user.context';
import { signOutUser } from '../../components/Utils/firebase/firebase.utils';


const Navigation = ()=> {
    const [searchField , setSearchField] = useState('');

    const onSearchChange = (event)=> {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    }

    const { currentUser } = useContext(UserContext);

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
                
                        {
                            currentUser ? (
                                <div className="head3">
                                    <img alt="createIcon" className="create_icon" src={createIcon}/>
                                    <img alt="bellIcon" className="bell_icon" src={bellIcon}/>
                                    <span className='nav-link' onClick={signOutUser}><img alt='userProfile' src={currentUser.photoURL} className='sign-in-img'/></span>
                                </div>
                            ): (
                               
                                    <div class="sign-in-container">
                                        <SignIn/>
                                    </div>
                            )
                        }
                </div>
                <Outlet/>
            </Fragment>
            
        </div>
        
    )
}

export default Navigation;