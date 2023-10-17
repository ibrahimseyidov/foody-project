'use client'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import downArrow from '../../../assets/icons/downArrow.svg'
import styles from '../../common/Selectbox/selectbox.module.css'
// import { useProductsCategory } from 'hooks/useProductsData'
// import { useNavigate, useParams } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { handleProductCategoryID } from 'redux/features/productsSlice'
import Image from 'next/image'


const people = [
    {
        id: 1,
        name: 'Category Type'
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {

    // const onSuccess = (data) => {
    //     console.log(data);
    // }

    // const { data } = useProductsCategory(onSuccess)

    // const navigate = useNavigate()
    // const dispatch = useDispatch()

    const [selected, setSelected] = useState(people[0])

    // const { t } = useTranslation()

    // const handleProductsCategory = (category, categoryID) => {
    //     dispatch(handleProductCategoryID(categoryID))
    //     navigate(`/products/${category}`)
    // }

    return (

        <>
            <Listbox value={selected} onChange={setSelected}>
                {({ open }) => (
                    <>
                        <div className="relative">
                            <Listbox.Button className={styles['category-btn']}>
                                <span className="flex justify-between items-center">
                                    <span className="block truncate">{selected.name === 'Category Type' ? "Category Type" : selected.name}</span>
                                    <span>
                                        <Image src={downArrow} alt='downArrow' />
                                    </span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                </span>
                            </Listbox.Button>
                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" id={styles['listbox-option']}>
                                    {data?.data.result.data.map((name) => (
                                        <Listbox.Option
                                            key={name.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'bg-pink text-white' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={name}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center cursor-pointer" onClick={() => handleProductsCategory(name?.slug, name?.id)}>
                                                        <span
                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                        >
                                                            {name.name}
                                                        </span>
                                                    </div>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </>

    )
}
