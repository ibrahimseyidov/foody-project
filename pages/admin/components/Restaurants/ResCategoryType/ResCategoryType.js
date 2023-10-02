import React from 'react'
import styles from '../../Products/CategoryType/CategoryType'
import styles2 from '../ResCategoryType/rescategorytype.module.css'
import ResSelectBox from '../ResSelectBox/ResSelectBox'
import AddResBtn from '../AddResBtn/AddResBtn'

const ResCategoryType = () => {
    return (
        <>
            <div className={`${styles['category-type-bg']} ${styles2['category-type-bg']}`}>
                <div className='flex max-md:flex-col justify-between items-center py-5 px-7 max-md:px-5 max-md:items-start'>
                    <div className='max-md:mb-4'>
                        <h2 className={styles['products-head-text']}>Restaurants</h2>
                    </div>
                    <div className='flex items-center max-md:flex-col max-md:items-center'>
                        {/* <ResSelectBox /> */}
                        <AddResBtn />
                    </div>

                </div>

            </div>
        </>
    )
}

export default ResCategoryType