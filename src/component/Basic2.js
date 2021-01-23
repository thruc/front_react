import React, {useState} from 'react'

const Basic2 = () => {
    const [product, setProduct] = useState([])
    const newProduct = () => {
        setProduct([...product,{
            id: product.length,
            name: "Hello React"
        }])
    }


    return (
        <>  
            <button onClick={newProduct}>Add New Product</button>
            <ul>
                {product.map(product => (
                    <li Key={product.id}>{product.name} id: {product.id}</li>
                ))}
            </ul>
        </>
    )
}

export default Basic2

