import React from 'react'
import './Styles/Nav.css'
import { NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <div className='nav-container'>
            <div className='image-div'>
                <NavLink exact to='/' activeClassName='active'>
                    <img className='raccoon' src='https://i.imgur.com/2bjWu4n.png'></img>
                </NavLink>
            </div>
            <h1 className='app-name'>Raddit</h1>

        </div>
    )
}

export default Nav