import React, { createContext, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useSendCart from '../hooks/useSendCart';

export const CartContext = createContext(null);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const axiosPublic = useAxiosPublic();
    const [, refetch] = useSendCart();


    const addToCart = async (item) => {
        setCartItems(prev => [...prev, item]);

        const res = await axiosPublic.post('/cartItems', item);
        console.log(res.data);

        if (res.data.insertedId) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: 'Your menu added to the cart',
                showConfirmButton: false,
                timer: 1500
            });

            refetch();
        }
    };

    const cartInfo = {
        cartItems,
        addToCart
    };

    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;