import React from 'react';
import useSendCart from '../../hooks/useSendCart';
import SingleCart from './SingleCart/SingleCart';

const CartDrawer = () => {
    const [carts] = useSendCart();

    return (
        <div className="drawer drawer-end">

            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Add to Cart</label> */}
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

                <div>
                    <div className='flex justify-between items-center w-full p-4 bg-white'>
                        <span>Total Items: {carts.length}</span>
                        <label
                            htmlFor="my-drawer-4"
                            aria-label="Close drawer"
                            className="btn btn-sm  absolute right-7">
                            <span>Close</span>
                        </label>
                    </div>

                    <ul className="menu bg-red-500 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <div>
                            {
                                carts.map(item => <SingleCart
                                    key={item._id}
                                    item={item}
                                ></SingleCart>)
                            }
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default CartDrawer;