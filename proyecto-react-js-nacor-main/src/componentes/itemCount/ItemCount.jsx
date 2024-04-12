import React from "react"
import { useState } from "react"

const ItemCount = ({stock}) =>{
    const [count, setCount]= useState(1)
    const onAdd = ()=>{


    }
    const sumar = () =>{
        if(count < stock){
             setCount(count + 1)
            }
       
    }
    const restar = () =>{
        if (count > 0) {

            setCount(count - 1)

        }
    }
    return(
        <>
        <div className="d-flex justify-content-center">
        <button className="btn btn-danger" onClick={restar}>-</button>
        <span className="btn">{count}</span>
            <button className="btn btn-success" onClick={sumar}>+</button>

        </div>
        <button className="btn btn-primary" onClick={onAdd} disabled={stock === 0}>comprar</button>
        </>
    )
}
export default ItemCount