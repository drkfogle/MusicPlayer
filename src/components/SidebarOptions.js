import React from 'react'
import './SidebarOptions.css'

function SidebarOptions({title, Icon }) {
  return (
    <div>
      <div className="sidebarOptions">
        {Icon && <Icon className="sidebarOptions-icon"/>}
        {Icon ? <h4>{title}</h4> :<p>{title}</p>}
      </div>
    </div>
  )
}

export default SidebarOptions
