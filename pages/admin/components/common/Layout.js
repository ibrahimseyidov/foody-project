import React from 'react'
import Header from '../common/Header/Header'
import Navbar from '../common/Navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <body style={{ backgroundColor: "#1E1E30" }}>
            <Header />
            <div className='flex'>
                <Navbar />
                {children}
            </div>
        </body>
    )
}

export default Layout