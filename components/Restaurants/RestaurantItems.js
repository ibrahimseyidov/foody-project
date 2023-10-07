import React from 'react'
import RestaurantItem from './RestaurantItem/RestaurantItem'
import RestaurantItemsContainer from './RestaurantItemsContainer.js/RestaurantItemsContainer'

const RestaurantItems = () => {
  return (
    <>
      <RestaurantItemsContainer>

        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />
        <RestaurantItem />

      </RestaurantItemsContainer>
    </>
  )
}

export default RestaurantItems