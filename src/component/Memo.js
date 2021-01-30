import React, {useState, useMemo} from 'react'

const Memo = () => {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    
    const AddCount1 = () => {
        setCount1(prevCount1 => prevCount1 +1 )
    }

    const AddCount2 = () => {
        setCount2(prevCount2 => prevCount2 +1 )
    }
    // const isOdd = () => {
    //     let i = 0
    //     while(i < 500000000)//重い処理
    //     i++
    //     return count1 % 2 !== 0
    // }

    const isOdd = useMemo(() => {
        let i = 0
        while(i < 1000000000)//重い処理
        i++
        return count1 % 2 !== 0
    },[count1])
    return (
        <div>
            <button onClick={AddCount1}>count1: {count1}</button>
            <span>{isOdd ? 'Odd number':'even'}</span>

            <button onClick={AddCount2}>count2: {count2}</button>
            
        </div>
    )
}

export default Memo
