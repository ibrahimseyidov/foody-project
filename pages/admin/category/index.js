import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import ProductItems from '../../../components/Products/ProductItems/ProductItems'
import AdminCategory from '../../../components/AdminCategory/AdminCategory'


const index = () => {
    return (
        <>
            <AdminDashboard>
                <ProductContainer>
                    <CategoryType />
                    <AdminCategory />
                </ProductContainer>
            </AdminDashboard>
        </>
    )
}

export default index