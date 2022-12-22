import React from 'react'
import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { IPost } from "../admin/interface/index"
import axios from 'axios'

interface IUser {
    name: string,
    email: string,
    password: string,
}

function SignUp() {

    const { register, handleSubmit, formState: { errors } } = useForm<IUser>()

    const navigate = useNavigate()

    const onSubmit: SubmitHandler<IUser> = async (data) => {
        try {
            // const user = await axios.post("http://localhost:8000/api/signing", data)
            console.log(data);
            
            // navigate("/signin")
        } catch (error) {
            alert("Error")
        }
    }
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <h3 className="text-4xl font-bold text-purple-600">
                        Sign Up
                    </h3>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("name", { required: true, maxLength: 50 })}
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                {errors.name && errors.name.type === "required" && (
                                    <p>Bạn chưa nhập trường này!!</p>
                                )}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("email", { required: true, maxLength: 50 })}
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                 {errors.email && errors.email.type === "required" && (
                                    <p>Bạn chưa nhập trường này!!</p>
                                )}
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    {...register("password", { required: true, maxLength: 50 })}
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                                {errors.password && errors.password.type === "required" && (
                                    <p>Bạn chưa nhập trường này!!</p>
                                )}
                            </div>
                        </div>
                        
                        <div className="flex items-center justify-end mt-4">
                            <Link to="/signin">
                                <div
                                    className="font-medium text-purple-600 hover:underline"
                                >
                                    You are now signed in
                                </div>
                            </Link>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp