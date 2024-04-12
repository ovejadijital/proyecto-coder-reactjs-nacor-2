import React from 'react'
import Item from '../item/Item'
const ItemList = ({products}) => {
  return (
    <div className='d-flex justify-content-between aling-items-center flex-wrap'>
        {products.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList