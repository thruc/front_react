import React, {useState} from 'react'

const Basic1 = () => {
    const clickHandler = () => {
        console.log('clicked')
    }

    const [product, setProduct] = useState({name: '', price: ''})


    return (
        <>  
            <form>
                <input type='text' value={product.name}
                onChange={evt => setProduct({...product, name: evt.target.value})}/>
                {/* 「...product」は各要素に分解する*/}
                <input type='text' value={product.price}
                onChange={evt => setProduct({...product, price: evt.target.value})}/>


            </form>
            <h1>Product name is { product.name }</h1>
            <h1>Product price is { product.price }</h1>
        </>
    )
}

export default Basic1

