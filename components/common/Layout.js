import React from 'react'
import Header from '../common/Header/Header'
import Navbar from '../common/Navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className='flex'>
                <Navbar />
                {children}
            </main>
        </>
    )
}

export default Layout