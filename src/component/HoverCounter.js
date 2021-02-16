import React from 'react'
import HigherOrderComp from './HigherOrderComp'

// TO DEMONSTRATE HOC
const HoverCounter = ({count,handleCount}) => {
    return (
        <div>
            <h3 onMouseOver={handleCount}>Hovered {count} times</h3>
        </div>
    )
}

export default HigherOrderComp(HoverCounter)
