import {LuShoppingCart} from "react-icons/lu";
import Badge from 'react-bootstrap/Badge';
const CartWidget = () => {
    return(
        <>
        <LuShoppingCart color="gold" fontSize={"3rem"}/>
        <Badge bg="danger">15</Badge>
        </>
    )
}
export default CartWidget