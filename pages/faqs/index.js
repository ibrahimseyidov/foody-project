import React from 'react'
import Faq from '../../components/Faq/Faq'
import ClientContainer from '../../components/common/ClientContainer/ClientContainer'
import ClientHeader from '../../components/common/ClientHeader/ClientHeader'
import Footer from '../../components/common/Footer/Footer'

const index = () => {
    return (
        <>
            <ClientContainer>
                <ClientHeader />
                <Faq />
                <Footer />
            </ClientContainer>
        </>
    )
}

export default index