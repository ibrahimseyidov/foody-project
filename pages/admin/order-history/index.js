import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import AdminHistory from '../../../components/AdminHistory/AdminHistory'

const index = () => {
    return (
        <>
            <AdminDashboard>
                <ProductContainer>
                    <CategoryType pageName={'History'} />
                    <AdminHistory/>
                </ProductContainer>
            </AdminDashboard>
        </>
    )
}

export default index