import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () => {
    const {cart, clear, cartTotal, removeItem}= useContext(CartContext)
    return(
        <div>
            <div>
            {
            cart.map((item)=>{
                return(
                    <di key={item.id}>
                        <img src={item.img} alt={item.name}/>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{item.quantity}</p>
                        <p>${item.price * item.quantity}</p>
                        <button onClick={()=> removeItem(item.id)}>x</button>
                    </di>
                )
            })
            }
        </div>
        <p>total a pagar: ${cartTotal()}</p>
        <button className='btn btn-danger' onClick={clear}>vaciar carrito</button>
        <Link to='/checkout' className='btn btn-success'>terminar compra</Link>
        </div>
    )
}

export default CartView