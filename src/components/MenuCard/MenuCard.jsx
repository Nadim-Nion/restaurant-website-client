import React, { useState } from 'react';
import CartDrawer from '../CartDrawer/CartDrawer';
import useCart from '../../hooks/useCart';

const MenuCard = ({ menu }) => {
    const { id, name, price, description, image, quantity } = menu;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { addToCart } = useCart();

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const handleAddToCart = () => {
        const cartItem = { menuId: id, name, price, description, image, quantity };
        addToCart(cartItem);
    };

    const handleButtonClick = () => {
        toggleDrawer();
        handleAddToCart();
    };

    return (
        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:max-w-[300px]">
            <div className="card bg-base-100 w-full shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Menu Items" />
                </figure>
                <div className="card-body">
                    <div className='mb-5'>
                        <h2 className="card-title font-bold">{name}</h2>
                        <h4>${price}/each</h4>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions flex-col">
                        <button
                            onClick={handleButtonClick}
                            // className="btn bg-red-700 w-full text-white"
                            className='w-full'
                        >
                            {/* Add to Cart */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn bg-red-700 w-full text-white">Add to Cart</label>

                        </button>
                        <button className="btn btn-outline bg-red-500 w-full text-white border-0">Customize</button>
                    </div>
                </div>
            </div>

            {/* Drawer Component */}
            <CartDrawer></CartDrawer>
        </div>
    );
};

export default MenuCard;