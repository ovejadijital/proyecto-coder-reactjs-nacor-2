import {LuShoppingCart} from "react-icons/lu";
import Badge from 'react-bootstrap/Badge';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Navbar } from "react-bootstrap";
const CartWidget = ({counter}) => {
    const {cart, cartQuantity} = useContext(CartContext)
    console.log(cart)
    
    return(
        <div style={{display:'flex', textDecoration: 'none'}}>
        <LuShoppingCart color="gold" fontSize={"3rem"}/>
        { cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </div>
    )
}
export default CartWidget