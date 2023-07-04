import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './componentcss/Layout.css';

function Layout() {
    return (
        <>
            <nav className='nav' >
                <ul className='ul'>
                    <li>
                        <NavLink to='/' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Contact' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/About' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Login' style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Login</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}

export { Layout };