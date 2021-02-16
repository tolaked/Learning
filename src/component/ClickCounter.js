import React from 'react'
import HigherOrderComp from './HigherOrderComp'


// TO DEMONSTRATE HOC
const Users = ({count,handleCount}) => {
    return (
        <div>
            <button onClick={handleCount}>Clicked {count} times</button>
        </div>
    )
}

export default HigherOrderComp(Users)
