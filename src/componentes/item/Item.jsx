import React from 'react'
import {Link,} from "react-router-dom"
const Item = ({prod}) => {
    console.log(prod)
  return (
    <div className='card' style={{width:'20rem'}}>
        <img src={prod.img} alt={prod.name} className='card-img-top'/>
        <div className='card-body'>
            <p className='card-taxt'></p>
        </div>
        <Link className='btn btn-primary' to={`/item/${prod.id}`}>ver mas</Link>
    </div>
  )
}

export default Item