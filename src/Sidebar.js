import React from 'react'
import "./Sidebar.css"
import SidebarRow from './SidebarRow';
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Link to="/">
        <MenuIcon className="menue__icon2" />
        </Link>
        <Link to="/">
      <img className="header__logo" src="data:image/png;base64,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" alt=""/>
        </Link>
      </div>
      <SidebarRow Icon={HomeIcon} title="Home" show />
      <SidebarRow Icon={WhatshotIcon} title="Trending"/>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
      <hr/>
      <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={WatchLaterIcon} title="Watch later"/>
      <SidebarRow Icon={ThumbUpIcon} title="Liked"/>
      <SidebarRow Icon={ExpandMoreIcon} title="More "/>
     


      <hr/>

    </div>
  )
}

export default Sidebar
