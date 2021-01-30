import React, {useReducer} from 'react'

const initialState = 0
const redicer = (currentState, action) => {
    switch(action) {
        case 'add_1':
            return currentState +1

        case 'multiple_3':
            return currentState * 3 

        case 'reset':
            return initialState
        
        default:
            return currentState
    }
}

const BasicReducer = () => {
    const [count, dispatch] = useReducer(redicer, initialState)
    return (
        <div>
            <div>Count {count}</div>
            <button onClick={()=>dispatch('add_1')}>add + 1</button>
            <button onClick={()=>dispatch('multiple_3')}>multiple_3</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
            
        </div>
    )
}

export default BasicReducer
