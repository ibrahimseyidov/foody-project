
import Head from "next/head";
import { useRouter } from "next/router";
import ClientHeader from "../../components/ClientHeader/ClientHeader";
export default function LoginPage() {
    const{push,query} = useRouter()
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="sm:mr-32px sm:ml-32px">
        <ClientHeader/>
        <div className="flex-col mx-3 my-3 flex sm:flex-row sm:mx-0 ">
          <div className="bg-clientRed h-fit rounded-4 sm:mr-10 ">
            <img
              alt=""
              src="/loginImages/login.svg"
              className="w-216 sm:w-507 ml-32px sm:mt-5 sm:ml-68px sm:mr-24 sm:mb-40"
            />
          </div>
          <div className="">
            <div className="flex ml-20 flex-row sm:gap-x-16 sm:ml-174px sm:mb-18 sm:mt-105px mt-11 gap-x-9 mb-15">
              <p className="text-clientRed sm:text-3xl text-xl font-medium ">
                Login
              </p>
              <p onClick={()=>push('/register')} className="cursor-pointer text-clientGray sm:text-3xl text-xl font-normal sm:mr-48">
                Register
              </p>
            </div>
            <div className="">
              <div className="mb-26px">
                <p className=" font-body text-lg sm:mb-10px  text-grayInput sm:text-xl mb-4 font-medium">
                  Username
                </p>
                <input
                  placeholder="Username"
                  className="pl-3 sm:h-68px bg-clientInput w-full h-14 text-lg font-medium"
                />
              </div>
              <div className="mb-26px">
                <p className=" font-body sm:mb-10px text-lg text-grayInput sm:text-xl mb-4 font-medium">
                  Password
                </p>
                <input
                  type="password"
                  placeholder="Password"
                  className="pl-3 sm:mb-72px sm:h-68px bg-clientInput w-full h-14 text-lg font-medium"
                />
              </div>
            </div>
            <button className="w-full text-22 text-white sm:h-68px bg-clientRed font-medium h-14">
              Login 
            </button>
          </div>
        </div>
      </main>
    </>
  );
}