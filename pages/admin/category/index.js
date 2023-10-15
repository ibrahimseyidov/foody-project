import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import AdminCategory from '../../../components/AdminCategory/AdminCategory'


const index = () => {
    return (
        <>
            <AdminDashboard>
                <ProductContainer>
                    <CategoryType pageName={'Category'}/>
                    <AdminCategory />
                </ProductContainer>
            </AdminDashboard>
        </>
    )
}

export default index