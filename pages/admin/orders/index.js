import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import AdminOrders from '../../../components/AdminOrders/AdminOrders'

const index = () => {
    return (
        <>
            <AdminDashboard>
                <ProductContainer>
                    <CategoryType pageName={'Orders'} />
                    <AdminOrders />
                </ProductContainer>
            </AdminDashboard>
        </>
    )
}

export default index