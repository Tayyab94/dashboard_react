import React from 'react'
import './MainDashboard.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
const MainDashboard = () => {
    return (
        <div className='MainDash'>
            <h1>DashBoard</h1>
            <Cards />
            <Table />
        </div>
    )
}

export default MainDashboard
