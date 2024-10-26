import React from 'react';
import Menu from '../../../components/Menu/Menu';

const Home = () => {
    return (
        <div>
            <div className='text-center'>
                <h2 className='uppercase text-3xl text-red-700 font-bold'>Chicken Crisper Combos</h2>
                <p>Welcome to Chicken Crisper Combos – your go-to spot for mouthwatering burgers, pizzas, and a wide selection of delicious treats crafted to satisfy every craving!</p>
            </div>
            <Menu></Menu>
        </div>
    );
};

export default Home;