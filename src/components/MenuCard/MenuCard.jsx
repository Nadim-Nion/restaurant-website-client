import React from 'react';

const MenuCard = ({ menu }) => {
    const { name, price, description, quantity } = menu;

    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='mb-5'>
                        <h2 className="card-title font-bold">{name}</h2>
                        <h4>${price}/each</h4>
                    </div>
                    <p>{description}</p>
                    <div className="card-actions flex-col">
                        <button className="btn bg-red-700 w-full text-white">Add to Cart</button>
                        <button className="btn btn-outline bg-red-500 w-full text-white border-0">Customize</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuCard;