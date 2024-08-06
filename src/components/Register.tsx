import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export interface IUser {
    id?:number|string;
    name?:string;
    email:string;
    password:string
}
const Register = () => {
  const {register,handleSubmit,formState:{errors}} = useForm<IUser>()
  const navigate = useNavigate()
  const onSubmit = async(registerdata:IUser)=>{
      try {
          const {data} = await axios.post('http://localhost:3000/register',registerdata)
          alert('Đăng ký thành công')
          navigate('/login')
      } catch (error) {
          alert('Lỗi đăng ký')
      }
  }
  return (
    <section className="bg-gradient-to-b from-[#B5DCB0] to-[#FFFF]">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gradient-to-r from-[#B5DCB0] to-[#FFEDE0] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl mx-auto font-bold leading-tight tracking-tight text-[#4E7C32] md:text-2xl dark:text-white">
              Đăng ký tài khoản
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              action="#"
            >
                <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-[#4E7C32]"
                >
                  Your Name
                </label>
                <input
                  {...register("name")}
                  type="name"
                  name="name"
                  id="name"
                  className="bg-[#FFFFFF] border border-gray-300 text-[#4E7C32] rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-[#4E7C32]"
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
                  className="block mb-2 text-sm font-medium text-[#4E7C32]"
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

            <button type='submit'
                className="w-full text-white bg-[#4E7C32] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Bạn đã có tài khoản{" "}
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Đăng nhập
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
