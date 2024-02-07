import React from 'react'
import "./Updates.css"
import { UpdatesData } from '../../Data/Data'
const Updates = () => {
    return (
        <div className='Updates'>
            {UpdatesData.map((item, index) => {
                return (
                    <div className='update' key={index}>
                        <img src={item.img} alt="photo" srcset="" />
                        <div className='noti'>
                            <div style={{ marginBottom: ".5rem" }}>
                                <span>{item.name} </span>
                                <span>{item.not1}</span>
                            </div>
                            <div>
                                <span>{item.time}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Updates
