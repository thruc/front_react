import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'

const CompC = () => {
    const {dispatchProvided} = useContext(AppContext)
    return (
        <div>
            <button onClick={()=> dispatchProvided('add_1')}>add</button>
            <button onClick={()=> dispatchProvided('multiple_3')}>multiple_3</button>
            <button onClick={()=> dispatchProvided('reset')}>reset</button>
        </div>
    )
}

export default CompC
