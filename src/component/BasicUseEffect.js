import React, {useEffect, useState} from 'react'



const BasicUseEffect = () => {

    const [count, setCount ] = useState(0)

    useEffect(() => {//レンダリングが実行されるたびに実行される
        console.log("use Effect")
        // effect
        // return () => {
        //     cleanup
        // }
    },[])

    return (
        <>
            <button onClick={()=> setCount(prevCount=>prevCount+1)}>click {count}</button>
            
        </>
    )
}

export default BasicUseEffect
