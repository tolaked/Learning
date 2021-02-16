import React from 'react'
import HigherOrderComp from './HigherOrderComp'
import {TestRef} from './TestRef'

// TO DEMONSTRATE HOC
const Users = ({count,handleCount}) => {

    return (
        <div>
            <button onClick={handleCount}>Clicked {count} times</button>
            <div>
                <TestRef/>
                </div>
        </div>
    )
}

export default HigherOrderComp(Users)
