import React from 'react';

const SingleCart = ({ item }) => {
    const { name, price, image, quantity } = item;
    return (
        <div>
            <img src={image} alt="" className='w-[45px] h-[65px]' />
        </div>
    );
};

export default SingleCart;