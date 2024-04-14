import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({productDetail}) => {

  const [purchase, setPurchase]= useState(false)
  const {addItem, itemQuantity} = useContext(CartContext)
  
  const onAdd =(cantidad) =>{

    addItem(productDetail, cantidad)
    setPurchase(true)
  }
  const stockInCart = itemQuantity(productDetail.id)
  return (
    <div>
        <h3>detalle de : {productDetail.name}</h3>
        <img src={productDetail.img} alt={productDetail.name}/>
        <p>{productDetail.description}</p>
        <p>${productDetail.price}</p>
       {purchase ? <Link className='btn btn-primary' to='/cart'>ir al carrito</Link>
       :<ItemCount stock={productDetail.stock - stockInCart} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail