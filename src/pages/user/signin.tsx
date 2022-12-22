import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

type Props = {}
interface IUser{
    name: string,
    email: string,
    password: string,
}
function SignIn({}: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<IUser>()

    const [error, setError] = useState("")

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<IUser> = async (user) => {
        try {
            
            const users = await axios.post("http://localhost:8000/api/signing", user)
            
            localStorage.setItem("token", users.data.accessToken);
            localStorage.setItem("userID", users.data.data._id);
            navigate("/")
            
        } catch (error) {
            setError("Email or Password Invalid");
        }
    }
  return (
    <div>
       <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Sign in
                </h1>
                <form className="mt-6" onSubmit={handleSubmit(onSubmit)}> 
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                        {...register("email", { required: true})}
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {errors.email && errors.email.type === "required" && (
                                <p>Bắt buộc phải nhập trường này</p>
                            )}
                            <h1>{error}</h1>
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                        {...register("password", { required: true})}

                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                        {errors.password && errors.password.type === "required" && (
                                <p>Bắt buộc phải nhập trường này</p>
                            )}
                            <h1>{error}</h1>

                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <Link to="/signup">
                    <a
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                    </Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default SignIn