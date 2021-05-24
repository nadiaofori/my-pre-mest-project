import React from 'react'
import '../css/sidebar.css'
const Sidebar = ({ arrow, icon, label }) => {
    return (
        <div className="sidebar">
            <div className="side">
            <div className="sidebar_arrow">
                {icon}
                <p>{ label }</p>
            </div>
            </div>
        </div>
    )
}
export default Sidebar;

