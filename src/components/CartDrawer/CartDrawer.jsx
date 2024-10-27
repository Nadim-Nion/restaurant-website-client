import React from 'react';

const CartDrawer = () => {
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
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="Close drawer"
                        className="btn btn-sm btn-circle absolute right-4">
                        X
                    </label>

                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default CartDrawer;