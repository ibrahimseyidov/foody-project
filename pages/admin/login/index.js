import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const index = () => {
  // const { mutate: singInUser } = useMutation({
  //   mutationFn: async () => await axios.post('/api/auth/signin', {
  //     "email": "test@gmail.com",
  //     "password": "test123"
  //   }),
  //   onSuccess: (data) => {
  //     console.log(data);
  //     alert('success')
  //   },
  //   onError: () => {
  //     alert('error')
  //   }
  // })
  const { mutate: singInUser } = useMutation({
    mutationFn: async () => await axios.post('/api/auth/signin', {
      "email": "test@gmail.com",
      "password": "test123"
    }),
    onSuccess: (data) => {
    
      const accessToken = data.data.user.access_token;
      localStorage.setItem('access_token', accessToken);
      alert('Success');
      console.log(accessToken);
    },
    onError: () => {
      alert('Error');
    }
  });
  const signIn = () => {
    singInUser()
  }

  return (
    <div className='bg-bgc h-screen'>
      <h1 className="ml-9px text-24 pt-11px sm:pt-57px sm:ml-32px font-mukta font-weight800 sm:text-28 text-logocolor">Foody<span className="text-logodotcolor">.</span></h1>
      <div className='flex justify-center mt-75px sm:mt-199px'>
        <div className='flex flex-col-reverse sm:flex-row'>
          <div className='sm:bg-loginBgc flex flex-col'>
            <h1 className="sm:mt-58px mt-18px mb-23px font-montserrat text-center text-24 sm:text-35 text-gray1 font-weight700 sm:ml-40px sm:mr-48px sm:mb-40px">Welcome Admin</h1>
            <input type='email' placeholder='E-mail' className='sm:pl-40px pl-19px inline mx-auto h-resinput w-207 text-14 sm:text-18 items-center text-gray1 font-weight400 sm:rounded-4 sm:ml-47px sm:mr-58px sm:w-318 bg-inputBg sm:h-input mb-13px sm:mb-26px'/>
            <input type='password' placeholder='Password' className='sm:pl-40px pl-19px inline mx-auto h-resinput w-207 text-14 sm:text-18 items-center text-gray1 font-weight400 sm:rounded-4 sm:ml-47px sm:mr-58px sm:w-318 bg-inputBg sm:h-input mb-23px sm:mb-26px'/>
            <button onClick={() => signIn()} type="button" className=' text-white rounded-5 sm:rounded-4 sm:mb-58px sm:ml-47px sm:mr-58px font-medium text-14 sm:text-25 hover:bg-pink00 bg-loginBtn py-6px sm:py-10px'>Sign in</button>
          </div>
          <div className='flex sm:w-405 sm:bg-white justify-center'><img src="/loginImages/adminlogin.svg" className='w-174 sm:w-346  sm:mt-55 sm:ml-30 sm:mb-52 sm:mr-30' alt='login img'/></div>
        </div>
      </div>
    </div>
  )
}
export default index;