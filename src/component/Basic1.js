import React from 'react'

const Basic1 = (props) => {
    const clickHandler = () => {
        console.log('clicked')
    }
    return (
        <>  
            <button onClick={clickHandler}>Click</button>
            <h1>hello { props.name }</h1>
            
        </>
    )
}

export default Basic1

