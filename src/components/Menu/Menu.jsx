import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MenuCard from '../MenuCard/MenuCard';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Menu = () => {

    const axiosPublic = useAxiosPublic();

    const { data: menuItems = [] } = useQuery({
        queryKey: ['menuItems'],
        queryFn: async () => {
            const res = await axiosPublic.get('/menuItems');
            return res.data;
        }
    });

    return (
        <div className='my-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 px-4 md:px-8 lg:px-16'>
            {
                menuItems.map(menu => <MenuCard
                    key={menu.id}
                    menu={menu}
                ></MenuCard>)
            }
        </div>
    );
};

export default Menu;