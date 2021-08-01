import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Search.css"
const Search = ({img,channel,avt,name,views,timestamp,desc}) => {
  return (
   
   <div className="search">
          <div className="search__image">
          <img  src={img} alt=""/>
        </div>
      <div className="search__info">
        <h2>{channel}</h2>
        <p>{views}.{timestamp}</p>
          <div className="search__profile">
            <Avatar src={avt} style={{fontSize:"x-small"}}/>
            <p>{name}</p>
          </div>
        <p className="desc">{desc}</p>
      </div>
      <div className="search__footer"></div>
          </div>
      
       
  )
}

export default Search
