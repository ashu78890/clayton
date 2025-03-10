import React from 'react'
import {Outlet} from 'react-router-dom'
import './Auth.scss'
function Auth() {
    return (
        <>
        <div className='Left'>
            <img src='/Claytons.png' alt='' width="200px" className='logo'/>
            <div className='Container'>
                <Outlet/>
            </div>
            
        </div>
        <div className='Right'>

        </div>

        </>
    )
}

export default Auth