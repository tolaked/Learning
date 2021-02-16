import React,{useMemo,useState} from 'react'

const TestMemo = () => {
    const [counterOne,setCounterOne] = useState(0)
    const [counterTwo,setCounterTwo] = useState(2)
    const increment = () =>{
       
        setCounterOne(prevCount=>prevCount + 1)
    }

    const incrementCounterTwo = ()=>{
        setCounterTwo(prevCount=>prevCount + 1 )
    }

    //Demonstrates useMemo
    const isEven =useMemo(()=>{
        let i = 0;
        while(i<2000000000) i++
        return counterTwo % 2 === 0
    },[counterTwo])

    return (
        <>
        <div>
            count is {counterOne}
        </div>
        <button onClick={increment}>increment</button>
        <button onClick={incrementCounterTwo}>DECREMENT</button><span>count is {counterTwo}</span>
        <span>{isEven ? ' Even' : ' Odd'}</span>
        </>
    )
}

export default TestMemo
