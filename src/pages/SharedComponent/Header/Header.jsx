import React from 'react';
import redChili from '../../../assets/red-chili.png';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const navItems = <>
        <li><a>Menu</a></li>
        <li><a>Rewards</a></li>
        <li><a>Locations</a></li>
        <li><a>Gift Cards</a></li>
        <li><a>Login</a></li>
    </>;

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg font-semibold text-black">
                        {/* <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li> */}
                        {
                            navItems
                        }
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <img src={redChili} alt="Red Chili Icon" className='w-[45px] h-[45px]' />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold text-black">
                    {/* <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li> */}
                    {
                        navItems
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <FaShoppingCart className='text-3xl mr-4' />
                <button className="btn btn-outline bg-red-700 text-white">Order Now</button>
            </div>
        </div>
    );
};

export default Header;