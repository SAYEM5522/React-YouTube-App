import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Video.css"
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import QueueIcon from '@material-ui/icons/Queue';
const Video = ({img,avt,Icon1,name,views,timestamp,channel,Icon2}) => {
    return (
        <div className="video">
            <div className="img__container">
            <img className="video__logo" src={img} alt=""/>
            <AccessTimeIcon className="icon1"/>
            <QueueIcon className="icon2"/>
            </div>
            
            <div className="video__details">
                <Avatar src={avt}/>
                <div className="video__detail">
                    <div className="video__header">
                    <h4>{channel}</h4>
                    <Icon2/>
                    </div>
               
                <p >
                    {name} {<Icon1/>}
                </p>
                {views} views .{timestamp}
                </div>
                
            </div>
        </div>

    )
}

export default Video
