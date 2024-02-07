import React from 'react'
import './Cards.css'
import { CardsData } from '../../Data/Data'
import Card from '../Card/Card'
const Cards = () => {
    return (
        <div className='Cards'>
            {CardsData.map((item, index) => {
                console.log(item)
                return (
                    <div key={index} className='parentContainer'>
                        <Card title={item.title}
                            color={item.color}
                            barValue={item.barValue}
                            value={item.value}
                            png={item.png}
                            series={item.series}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Cards
