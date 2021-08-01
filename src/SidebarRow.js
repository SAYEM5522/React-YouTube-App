import React from 'react'
import "./SidebarRow.css"
const SidebarRow = ({Icon,title,show}) => {
  return (
    <div className={`sidebarrow ${show && "active__icon"}`}>
     <div className="sidebarrow__info">
       <Icon/>
     <p>{title}</p>
     </div>
    </div>
  )
}

export default SidebarRow
