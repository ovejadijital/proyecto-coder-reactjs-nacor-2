import React, { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { CartContext } from '../../context/CartContext'
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from '../../service/firebase';

const ChecKout = () => {
    const { cart, clear, cartTotal } = useContext(CartContext);
    const [ordenid, setOrdenid] = useState('');
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const handleOrder = (data) => {
        setLoading(true)
        let orden = {
            user: {
                nombre: data.nombre,
                correo: data.email
            },
            items: cart,
            total: cartTotal(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders");
        addDoc(ventas, orden)
        .then((res) => {
            setOrdenid(res.id);
            clear();
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
    };
    if (loading) {
        return <p>cargando...</p>
    }

    return (
        <div>
            {ordenid ? <p>Se tomó con éxito tu solicitud. El código de seguimiento es: {ordenid}</p> :
                <div>
                    <h2>ChecKout</h2>
                    <form onSubmit={handleSubmit(handleOrder)}>
                        <label>Nombre</label>
                        <input className='form.control' type='text' name='nombre' {...register("nombre", { required: true, minLength: 5 })} />
                        {errors?.nombre?.type === 'required' && <p>Nombre es requerido</p>}
                        {errors?.nombre?.type === 'minLength' && <p>El nombre debe tener al menos 5 caracteres</p>}
                        
                        <label>Email</label>
                        <input className='form.control' type='email' name='email' {...register("email", { required: true, minLength: 8 })} />
                        {errors?.email?.type === 'required' && <p>Email es requerido</p>}
                        {errors?.email?.type === 'minLength' && <p>El email debe tener al menos 8 caracteres</p>}

                        <label>Confirmar Email</label>
                        <input className='form.control' type='email' name='email2' {...register("email2", { 
                            required: true, 
                            minLength: 8, 
                            validate: {
                                equalsMail: (value) => value === getValues('email')
                            }
                        })} />
                        {errors?.email2?.type === 'required' && <p>Email es requerido</p>}
                        {errors?.email2?.type === 'minLength' && <p>El email debe tener al menos 8 caracteres</p>}
                        {errors?.email2?.type === 'equalsMail' && <p>Los correos electrónicos deben ser iguales</p>}

                        <button className='btn btn-success' type="submit">Confirmar compra</button>
                    </form>
                </div>
            }
        </div>
    );
}

export default ChecKout;
