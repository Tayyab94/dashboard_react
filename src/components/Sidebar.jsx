import React from 'react'
import './Sidebar.css'
import Logo from "../imgs/logo.png"
import { UilSignOutAlt } from "@iconscout/react-unicons"

import { SidebarData } from '../Data/Data'
import { useState } from 'react'

const Sidebar = () => {
    const [selected, setSelected] = useState(0)
    return (
        <div className='sidebar'>
            {/* logo */}
            <div className='logo'>
                <img src={Logo} alt="" />
                <span>Sh<span>O</span>ps</span>
            </div>

            {/* Menu Items */}
            <div className="menu">


                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}
                            key={index}
                            onClick={() => setSelected(index)}>
                            <div>
                                <item.icon />
                            </div>
                            <span>{item.heading}</span>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <div>
                        <UilSignOutAlt />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
