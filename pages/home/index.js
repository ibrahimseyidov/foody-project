import React from 'react'
import ClientHome from '../../components/ClientHome/ClientHome'
import ClientContainer from '../../components/common/ClientContainer/ClientContainer'
import ClientHeader from '../../components/common/ClientHeader/ClientHeader'

const index = () => {
    return (
        <>
            <ClientContainer>
                <ClientHeader />
                <ClientHome />
            </ClientContainer>
        </>
    )
}

export default index