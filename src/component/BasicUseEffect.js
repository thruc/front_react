import React, {useEffect, useState} from 'react'



const BasicUseEffect = () => {

    const [count, setCount ] = useState(0)

    const [item, setItem] = useState('')

    useEffect(() => {//レンダリングが実行されるたびに実行される
        console.log("use Effect")
        // effect
        // return () => {
        //     cleanup
        // }
    },[count])

    return (
        <>
            <button onClick={()=> setCount(prevCount=>prevCount+1)}>click {count}</button>
            <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}/>
            
        </>
    )
}

export default BasicUseEffect
