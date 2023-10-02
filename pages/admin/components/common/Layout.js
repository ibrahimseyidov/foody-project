import React from 'react'
import Header from '../common/Header/Header'
import Navbar from '../common/Navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className='flex'>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default Layout