import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useSendCart = () => {

    const axiosPublic = useAxiosPublic();

    const { data: carts = [], refetch } = useQuery({
        queryKey: ['carts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/cartItems');
            return res.data;
        }
    });

    return [carts, refetch];
};

export default useSendCart;