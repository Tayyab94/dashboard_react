import React from 'react'
import "./RightSidebar.css"
import Updates from '../Updates/Updates'
import CustomerReviews from '../CustomerReviews/CustomerReviews'
const RightSidebar = () => {
    return (
        <div className='RightSidebar'>
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Customer Reviews</h3>
                <CustomerReviews />
            </div>
        </div>
    )
}

export default RightSidebar
