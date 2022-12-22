import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import { IPost } from '../admin/interface'
import { useParams } from "react-router-dom"
import axios from 'axios'

const BlogPage = () => {

  const { id } = useParams()

  const [blog, setBLog] = useState<IPost>()

  const [postRelate, setPostRelate] = useState<IPost[]>([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:8000/api/post/${id}`)
      const post = await axios.get(`http://localhost:8000/api/listPost`)

      setPostRelate(post.data.data.filter((item: { categories: any }) => item.categories == data.data.categories))
      setBLog(data.data)
    })()
  }, [id])

  return (
    <div>
      <div className="container lg:max-w-7xl max-w-xs mx-auto mt-3">
        <div className="mt-14">
          <div className="max-w-2xl mx-auto mb-5">
            <div>
              <h1 className=" text-3xl font-bold">{blog?.title}</h1>
              <p className=" my-6">{blog?.updatedAt}</p>
            </div>
            <div>
              <img className="rounded-md w-full max-h-[250px]" src={blog?.image} alt="" />
            </div>
            <div className="my-2">
              <span className="bg-[#EDF2F7] w-8 py-2 pr-20 rounded-xl mt-5 "><a href="">#{blog?.categories}</a></span>
            </div>
            <div className="my-10">
              <h1 className="text-3xl font-bold mb-10">{blog?.description}</h1>
              <span className="leading-10 text-xl">{blog?.content}</span>
            </div>
            <div className="h-[150px] bg-[#EDF2F7] grid grid-cols-4 gap-1 align-items-center px-5 rounded-xl">
              <div className="">
                <img className="rounded-full" src="https://picsum.photos/100/100" alt="" />
              </div>
              <div className="col-span-3">
                <div>
                  <span className="text-2xl font-medium">Author: Dang Thai</span>
                </div>
                <div>
                  <span>Thất nghiệp. Đang rủ rê nhiều người thất nghiệp. Hy vọng với NIVIKI.COM có thể lan toả tinh thần thất nghiệp đến với nhiều người hơn nữa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-15 max-w-3xl mx-auto">
          <hr />
          <div className="my-10">
            <span className="text-2xl font-semibold">Bình Luận</span>
          </div>
          <div className="my-10">
            <span className="text-sm font-semibold">Bạn muốn để lại bình luận hoặc góp ý về bài viết này? https://discord.gg/6SFW4yydvG nhé 💌💌💌</span>
          </div>
          <hr />
          <h1 className="text-3xl font-bold my-10 text-center">Bài Viết Liên Quan</h1>
          <div className=" bg-[#EDF2F7] grid grid-cols-7 gap-1 align-items-center pr-8 rounded-xl">
            <div className="">
            </div>
            <div className="col-span-6">
              {postRelate && postRelate.map((item, index) => (
                <div className="my-3 flex" key={index}>
                  <div>
                    <img className="max-w-[100px] rounded-full" src={item.image} alt="" />
                  </div>
                  <div className="self-center ml-2">
                    <span className="text-2xl font-semibold"><Link to={`/blog/${item._id}`}>{item.title}</Link></span>
                    <div className="text-md font-medium">{item.description}</div>
                  </div>
                </div>
              ))}
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage