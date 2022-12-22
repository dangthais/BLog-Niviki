import React, { useEffect, useState } from 'react'
import LayoutAdmin from '../layout'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IPost } from "../interface/index"
import axios from 'axios'
import { useNavigate, useParams } from "react-router-dom";

interface Icate {
  name: string,
  _id: string
}
const UpdatePost = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IPost>()
  const [category, SetCategory] = useState<Icate[]>([])

  const navigate = useNavigate();

  const { id } = useParams()

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:8000/api/post/${id}`)
        const category = await axios.get("http://localhost:8000/api/listCategory")
        SetCategory(category.data.data)
        reset(data.data)
      } catch (error) {

      }
    })()
  }, [])
  const onSubmit: SubmitHandler<IPost> = async (post) => {
    try {
      const formData = new FormData();
      formData.append("file", post.image[0]);
      formData.append("upload_preset", "jvdzfca8");
      formData.append("cloud_name", "djscgepti");

      const uploadFile = await axios.post("https://api.cloudinary.com/v1_1/djscgepti/image/upload", formData).
        then(data => {
          const newPost = { ...post, image: data.data.secure_url }
          const posts = axios.post("http://localhost:8000/api/addPost", newPost)
        })
      navigate("/admin")
    } catch (error) {

    }
  }
  return (
    <LayoutAdmin>
      <div>
        <form className="pt-20 max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl text-center">Update Post</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                title
              </label>
              <input placeholder="Title" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"
                {...register("title", { required: true, maxLength: 50 })}
              />
              {errors.title && errors.title.type === "required" && (
                <p>Bắt buộc phải nhập trường này</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Description
              </label>
              <input placeholder="Description" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text"
                {...register("description", { required: true })}
              />
              {errors.description && errors.description.type === "required" && (
                <p>Bắt buộc phải nhập trường này</p>
              )}
            </div>
          </div>
          <div className="w-full mb-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
              Image
            </label>
            <input type="file" {...register("image")} />
            {errors.image && errors.image.type === "required" && (
              <p>Bắt buộc phải nhập trường này</p>
            )}
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Categories
              </label>
              <select {...register("categories", { required: true })} className="bg-gray-200 w-full h-12 rounded">
                {category && category.map((item) => (
                  <option key={item._id} value={item.name}>{item.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                Content
              </label>
              <textarea {...register("content", { required: true })} placeholder="Content" className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
              {errors.content && errors.content.type === "required" && (
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

export default UpdatePost