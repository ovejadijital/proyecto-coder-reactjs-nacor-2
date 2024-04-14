import React, { useEffect, useState } from 'react'
import { getOneproduct } from '../../mock/data'
import ItemDetail from '../itemDetail/ItemDetail'
import {useParams} from "react-router-dom";
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../service/firebase';
const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const [validateItem, setValidateItem] = useState(false)
    const {itemId}= useParams()
    useEffect(()=>{
      setLoading(true)
      const collectionProd = collection(db, "productos")
      const refenciaAldoc = doc(collectionProd, itemId)
      getDoc(refenciaAldoc)
      .then((res)=> {
        if(res.data()){
          setProductDetail({id: res.id, ...res.data()}) 
        }else{
          setValidateItem(true)
        }
        console.log(res.data)
      })
      .catch((error)=> console.log(error))
      .finally(()=>setLoading(false))
    },[])

    
    if (loading) {
        return<h1>cargando detalle...</h1>
    }
  return (
    <div>
        {validateItem ? <p>este item no existe</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer