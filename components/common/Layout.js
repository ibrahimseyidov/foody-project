import React from 'react'
import Header from '../common/Header/Header'
import Navbar from '../common/Navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <div className='px-4' style={{backgroundColor: '#1E1E30', 'min-height': '100vh'}}>
            <Header />
            <main className='flex'>
                <Navbar />
                {children}
            </main>
        </div>
    )
}

export default Layout