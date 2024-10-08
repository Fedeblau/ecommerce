import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../servicios/firebaseConfig'


const Checkout = () => {
    const [nombre, setNombre] = useState("")
    const [mail, setMail] = useState("")
    const [direccion, setDireccion] = useState("")
    const [order, setOrder] = useState({})

    const {cart} = useContext(CartContext)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            nombre,
            mail,
            direccion
        }
        const data = {user, cart}
        const orderRef = collection(db, "ordenes")
        const orderId = await addDoc(orderRef, data)
        
        setOrder(orderId.id)


    }   
    
    console.log(order)

  return (
    <div>
        <form className='flex flex-col' onSubmit={(e)=>handleSubmit(e)}>
            <span>Nombre</span>
            <input type="text" className='border border-black mx-3 text-black' onChange={(e) => setNombre(e.target.value) }/>    
            <span>Mail</span>
            <input type="email" className='border border-black mx-3 text-black' onChange={(e) => setMail(e.target.value)}/>    
            <span>Direccion</span>
            <input type="number" className='border border-black mx-3 text-black' onChange={(e) => setDireccion(e.target.value)}/>    
            <button type='submit'>Confirmar</button>
        </form>    
    </div>
  )
}

export default Checkout