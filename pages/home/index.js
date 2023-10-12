import React from 'react'
import ClientHome from '../../components/ClientHome/ClientHome'
import ClientContainer from '../../components/common/ClientContainer/ClientContainer'
import ClientFooter from '../../components/common/ClientFooter/ClientFooter'
import ClientHeader from '../../components/common/ClientHeader/ClientHeader'

const index = () => {
    return (
        <>
            <ClientContainer>
                <ClientHome />
            </ClientContainer>
        </>
    )
}

export default index