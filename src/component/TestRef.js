import React,{useRef,useEffect,useState} from 'react'

export const TestRef = React.memo(()=>{
    const [name,setName] = useState('')
    console.log('rendered')
    const inputRef = useRef(null)
    const secondInputRef = useRef(null)

    useEffect(()=>{
        //focus the first input element
        inputRef.current.focus()
    },[])

    const handleSecondInput =(e)=>{
        if(e.key === 'Enter'){
            secondInputRef.current.focus()
        }
    }
   return(
       <div>
       <input name={name} value={name} ref={inputRef} type="text" onKeyDown={handleSecondInput} onChange={(e)=>setName(e.target.value)}/>
       <input ref={secondInputRef} type="text"/>
       </div>
   ) 

})