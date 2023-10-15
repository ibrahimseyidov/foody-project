import React from 'react'
import AdminCatagory from '../../../components/AdminCategory'
import ProductContainer from '../../../components/Products/ProductsContainer'
// import AdminDashboard from '..'
import AdminDashboard from '../index'
const Catagory = () => {
  return (
    
    <AdminDashboard>
    <ProductContainer>
      <AdminCatagory/>
      </ProductContainer>
      </AdminDashboard>
  )
}

export default Catagory