import React from 'react';
import logo from './assets/images/logo.jpg';

const Logo = () =>
    <div className='logo'>
        <img src={logo} />
        <div className='logotext'>
            A Division of NorthGate Aviation Ltd.
        </div>
    </div>


export default Logo;