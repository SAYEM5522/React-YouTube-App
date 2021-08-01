import React from 'react'
import "./SubSidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
const SubSidebar = () => {
    return (
        <div className="subsidebar">
            <div className="subsidebar__info ">
                <HomeIcon className="active"/>
                <p>Home</p>
            </div>
            <div className="subsidebar__info">
                <WhatshotIcon/>
                <p>Trending</p>
            </div>
            <div className="subsidebar__info">
                <SubscriptionsIcon/>
                <p>Subscriptions</p>
            </div>
            <div className="subsidebar__info">
                <VideoLibraryIcon/>
                <p>Library</p>
            </div>
        </div>
    )
}

export default SubSidebar
