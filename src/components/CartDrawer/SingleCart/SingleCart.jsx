import React from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import useSendCart from '../../../hooks/useSendCart';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const SingleCart = ({ item }) => {
    const { _id, name, price, image, quantity } = item;
    const [, refetch] = useSendCart();
    const axiosPublic = useAxiosPublic();

    const handleIncrease = async () => {
        const newQuantity = quantity + 1;
        await updateCartItemQuantity(_id, newQuantity);
    };

    const handleDecrease = async () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            await updateCartItemQuantity(_id, newQuantity);
        }
    };

    const updateCartItemQuantity = async (id, newQuantity) => {
        const res = await axiosPublic.patch(`/cartItems/${id}`, { quantity: newQuantity });
        if (res.data.modifiedCount > 0) {
            refetch();
        }
    };

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(`/cartItems/${_id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: `${name} has been deleted`,
                        icon: "success"
                    });
                    refetch();
                }
            }
        });
    };


    return (
        <div className='border-2 border-white mb-2 flex justify-between m-4 relative'>
            <div className='flex justify-center items-center'>
                {/* Image */}
                <img src={image} alt="" className='w-[45px] h-[65px] m-2' />

                {/* Name and Quantity */}
                <div className='flex flex-col justify-center items-center space-y-2 py-2'>
                    <h3 className='text-white text-center'>{name}</h3>
                    <div className='join'>
                        <button onClick={handleDecrease} className='btn btn-sm'>
                            <FiMinus />
                        </button>
                        <span className='text-lg text-white mx-2'>{quantity}</span>
                        <button onClick={handleIncrease} className='btn btn-sm'>
                            <FiPlus />
                        </button>
                    </div>
                </div>
            </div>

            {/* Price */}
            <div className='self-end pr-1 pb-2'>
                <p className='font-semibold text-white'>$ {(price * quantity).toFixed(2)}</p>
            </div>

            {/* Delete Icon */}
            <button
                onClick={handleDelete}
                className='absolute top-[-8px] right-[-5px] p-1 text-red-600 bg-white'>
                <FaTrashAlt />
            </button>
        </div>
    );
};

export default SingleCart;