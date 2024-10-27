import React, { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';

const useCart = () => {
    const item = useContext(CartContext);
    return item;
};

export default useCart;