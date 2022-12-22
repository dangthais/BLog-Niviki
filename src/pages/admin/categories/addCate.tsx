import React, {useState, useEffect} from 'react'
import LayoutAdmin from '../layout'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IPost } from "../interface/index"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
type Props = {}

interface Icate {
    name: string
}
function AddCategory({ }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm<Icate>()

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<Icate> = async (cate) => {
        try {
            const category = await axios.post("http://localhost:8000/api/addCategory", cate)
            alert("Add Successfully!")
            navigate("/admin/listCategory")
        } catch (error) {

        }
    }
    return (
        <LayoutAdmin>
            <div>
                <form className="pt-20 max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-3xl text-center">Add Category</h1>
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                Name Of Category
                            </label>
                            <input placeholder="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"
                                {...register("name", { required: true, maxLength: 50 })}
                            />
                            {errors.name && errors.name.type === "required" && (
                                <p>Bắt buộc phải nhập trường này</p>
                            )}
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3">
                            <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Send
                            </button>
                        </div>
                        <div className="md:w-2/3"></div>
                    </div>
                </form>
            </div>
        </LayoutAdmin>
    )
}

export default AddCategory