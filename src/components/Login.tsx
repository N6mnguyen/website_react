import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm } from 'react-hook-form'
import axios from 'axios'
import { IUser } from './Register';
const Login = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<IUser>()
  const navigate = useNavigate()
  const onSubmit = async(registerdata:IUser)=>{
      try {
          const {data} = await axios.post('http://localhost:3000/login',registerdata)
          alert('Đăng nhập thành công')
          sessionStorage.setItem('user',JSON.stringify(data))
          navigate('/')
      } catch (error) {
          alert('Sai tên đăng nhập hoặc mật khẩu')
      }
  }
  return (
    <section className="bg-gradient-to-b from-[#B5DCB0] to-[#FFFF]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full w-full bg-gradient-to-r from-[#B5DCB0] to-[#FFEDE0] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl mx-auto font-bold leading-tight tracking-tight text-[#4E7C32] md:text-2xl dark:text-white">
              Đăng nhập tài khoản
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              action="#"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#4E7C32] dark:text-white"
                >
                  Your email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-[#4E7C32] dark:text-white"
                >
                  Password
                </label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-[#4E7C32] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Bạn chưa có tài khoản{" "}
                <a
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Đăng ký
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
