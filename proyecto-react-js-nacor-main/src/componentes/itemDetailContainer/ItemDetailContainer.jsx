import React, { useEffect, useState } from 'react'
import { getOneproduct } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'
import {useParams} from "react-router-dom";
const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const {itemId}= useParams()

    useEffect(()=>{
        setLoading(true)
        getOneproduct(itemId)
        .then((res)=> setProductDetail(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[itemId])

    if (loading) {
        return<h1>cargando detalle...</h1>
    }
  return (
    <div>
        <ItemDetail productDetail={productDetail}/>
    </div>
  )
}

export default ItemDetailContainer