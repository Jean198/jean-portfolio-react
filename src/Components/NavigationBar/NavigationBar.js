import React from 'react';
import {Fragment} from 'react';
import {Outlet, Link} from 'react-router-dom'
import './NavigationBar.scss'

const NavigationBar = () => {
    return (
        <Fragment>
            <div className='navigation-bar'>
                <div className='logo-container'>
                <Link to="/" >
                  <h1 className='logo'>JN</h1>
                </Link>
                </div>
                <div className='nav-links-container '>
                <Link to="/" className='nav-link '>
                    Home
                </Link>

                <Link to="/about" className='nav-link '>
                    About
                </Link>
                <Link to="/Certifications" className='nav-link '>
                    Certifications
                </Link>
                

                </div>
                

            </div>

            <Outlet/>
            
        </Fragment>
    );
}

export default NavigationBar;
