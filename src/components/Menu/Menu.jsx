import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import MenuCard from '../MenuCard/MenuCard';

const Menu = () => {
    const { data: menuItems = [] } = useQuery({
        queryKey: ['menuItems'],
        queryFn: async () => {
            const res = await axios.get('restaurant.json');
            return res.data;
        }
    });

    return (
        <div className='my-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
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