import React from 'react'
import {useState, useEffect} from 'react'
import { getProducts } from '../../mock/data'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../service/firebase'
import { productos } from '../../mock/data'

function ItemListContainer({greeting}) {
const [products, setProducts] = useState([])
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)
const {categoryId}=useParams()

useEffect(()=>{
  setLoading(true)
  const productCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)): collection(db, "productos")
  getDocs(productCollection)
  .then((res)=>{
    const data = res.docs.map((doc)=>{
      return {
        id:doc.id,
        ...doc.data()
      }
    })
    setProducts(data)
  })
  .catch((error)=> console.log(error))
  .finally(()=>setLoading(false))
},[categoryId])


if (loading) {
  return <h1>cargando...</h1>
}
if (error) {
  return <h1>hubo un error intente mas tarde</h1>
}

  return (
    <div>
      
        <h1>{greeting}</h1>
       <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer
