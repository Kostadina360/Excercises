import React from 'react'
import ProductDate from './ProductDate.js'

function Product(props){
    return(
        <div>
            <h1>props.products.name</h1>
            <p>props.products.price</p>
            <p>props.products.description</p>
        
        </div> 
        )
          
   
}

export default Product