import { Outlet, Link } from 'react-router-dom';

import homeIcon from '../../assets/home.svg';
import shortsIcon from '../../assets/youtube-shorts-icon.webp';
import subscriptionsIcon from '../../assets/subscriptions.svg';
import libraryIcon from '../../assets/library.svg';  

import './sidebar.styles.css';
import { Fragment } from 'react';

const Sidebar = () => {

    return (
        <div>
            <Fragment>
                <div className="sidebar">
                <Link className='sideBarIcon-container' to='/'>
                    <div className="sidebarIconBox" >
                        <img className="sidebaricon" src={homeIcon} alt="homeIcon" />
                        <p className="sidebarIconDesc">Home</p>
                    </div>
                </Link>
                <Link className='sideBarIcon-container' to='/shorts'>
                    <div className="sidebarIconBox">
                        <img className="sidebaricon" src={shortsIcon} alt="shortsIcon" />
                        <p className="sidebarIconDesc">Shorts</p>
                    </div>
                </Link>
                <Link className='sideBarIcon-container' to='/subscriptions'>
                    <div className="sidebarIconBox">
                        <img className="sidebaricon" src={subscriptionsIcon} alt="subsIcon" />
                        <p className="sidebarIconDesc" >Subsriptions</p>
                    </div>
                </Link>
                <Link className='sidebarIcon-container' to='/library'>
                    <div className="sidebarIconBox">
                        <img className="sidebaricon" src={libraryIcon} alt="libIcon" />
                        <p className="sidebarIconDesc">Library</p>
                    </div>
                </Link>
                </div>
                <Outlet/>   
            </Fragment>
        </div>
    )
}

export default Sidebar;