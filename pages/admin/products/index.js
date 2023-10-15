import React from 'react'
import AdminDashboard from '../index'
import ProductContainer from '../../../components/Products/ProductsContainer'
import CategoryType from '../../../components/Products/CategoryType/CategoryType'
import ProductItems from '../../../components/Products/ProductItems/ProductItems'
import EditModal from '../../../components/common/EditModal/EditModal'
import DelModal from '../../../components/common/DelModal/DelModal'

const Products = () => {
  return (
    <AdminDashboard>
      <ProductContainer>
        <CategoryType pageName={'Products'} />
        <ProductItems />
        <DelModal />
        <EditModal />
      </ProductContainer>
    </AdminDashboard>
  )
}

export default Products