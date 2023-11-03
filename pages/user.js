'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import ProfileLayout from '../components/common/ProfileLayout/ProfileLayout'
import UserProfile from '../components/ClientUser/UserProfile/UserProfile'
import UserBasket from '../components/ClientUser/UserBasket/UserBasket'
import UserOrders from '../components/ClientUser/UserOrders/UserOrders'
import UserCheckout from '../components/ClientUser/UserCheckout/UserCheckout'
import axios from 'axios'
import { useMutation, useQuery } from '@tanstack/react-query'

const user = () => {
    const router = useRouter()
    const [isShowProfile, setIsShowProfile] = useState(false)
    const [isShowBasket, setIsShowBasket] = useState(false)
    const [isShowOrders, setIsShowOrders] = useState(false)
    const [isShowCheckout, setIsShowCheckout] = useState(false)

    // const { data, isLoading, isError } = useQuery({
    //     queryKey: ['user'],
    //     queryFn: async () => {
    //         const { data } = await axios.get('/api/auth/user',{
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('access_token')}`
    //             }
    //         })
    //         return data
    //     },
    // })
    const { mutate: singInUser } = useMutation({
        mutationFn: async () => await axios.post('/api/auth/signin',{
            "email": "test@gmail.com",
            "password": "test123"
        }),
        onSuccess: (data) => {
            console.log(data);
            // localStorage.setItem('access_token', data.data.user.access_token)
            alert('success')
        },
        onError: () => {
            alert('error')
        }
    })


    useEffect(() => {
        if (router.asPath === '/user?page=profile') {
            setIsShowProfile(true)
            setIsShowCheckout(false)
            setIsShowOrders(false)
            setIsShowBasket(false)
        } else if (router.asPath === '/user?page=basket') {
            setIsShowBasket(true)
            setIsShowProfile(false)
            setIsShowCheckout(false)
            setIsShowOrders(false)
        } else if (router.asPath === '/user?page=user-orders') {
            setIsShowOrders(true)
            setIsShowProfile(false)
            setIsShowBasket(false)
            setIsShowCheckout(false)
        } else if (router.asPath === '/user?page=user-checkout') {
            setIsShowOrders(false)
            setIsShowProfile(false)
            setIsShowBasket(false)
            setIsShowCheckout(true)
        }
        else {
            setIsShowOrders(false)
            setIsShowCheckout(false)
            setIsShowBasket(false)
            setIsShowProfile(false)
            router.push('/404')
        }
    }, [router.asPath])

    return (
        <>

             <ProfileLayout>
                {
                    isShowProfile ?
                        <UserProfile  singInUser={singInUser}/>
                        : isShowBasket ?
                            <UserBasket />
                            : isShowOrders ?
                                <UserOrders />
                                : isShowCheckout ?
                                    <UserCheckout />
                                    : ''
                }
            </ProfileLayout>
        </>

    )
}

export default user;
