import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import { getProducts } from '../asyncmock'
import { ItemList } from './ItemList'

const ItemListContainer = ({greeting}) => {
  const [items , setItems] = useState([])
  const [cargando , setCargando ] = useState(true)

  console.log("Mi estado", items)

  useEffect(() => {
   fetch("http://fakestoreapi.com/products?limit=9&sort=desc")
   .then(res => res.json())
   .then(data => setItems(data))
   .finally(setCargando(false))
    //pedido de los datos
    //esperar que lleguen
    //guardarlos en el estado items
    //pasarlo por props a ItemList
  //  getProducts().then(prods => setItems(prods))
  //  .catch(err => err)
  //  .finally(() => setCargando(false))
  }, [])

  if(cargando){
    return (
      <h3>cargando...</h3>
    )
  }
  
  return (
    <div>
      <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer