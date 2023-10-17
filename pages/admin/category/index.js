import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import AdminCategory from '../../../components/AdminCategory/AdminCategory'
import EditModal from '../../../components/common/EditModal/EditModal'
import DelModal from '../../../components/common/DelModal/DelModal'


const index = () => {
    return (
        <>
            <AdminDashboard>
                <ProductContainer>
                    <CategoryType pageName={'Category'} />
                    <AdminCategory />
                    <DelModal />
                    <EditModal />
                </ProductContainer>
            </AdminDashboard>
        </>
    )
}

export default index