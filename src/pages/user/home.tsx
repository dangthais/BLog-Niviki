import react, { useState, useEffect } from 'react';
import axios from 'axios';
import { IPost } from '../admin/interface/index';
import { Link } from "react-router-dom"

type Props = {}

const HomePageUser = (props: Props) => {
    const [posts, setPosts] = useState<IPost[]>([])
    useEffect(() => {
        (async () => {
            const { data } = await axios.get("http://localhost:8000/api/listPost")
            setPosts(data.data.splice(0,5))
        })()
    }, [])
    return (
        <div>
            <div className="container lg:max-w-7xl max-w-xs mx-auto mt-3">
                <div className="mt-[70px] grid lg:grid-cols-2 md:grid-cols-2 gap-10">
                    <div className="mt-9">
                        <h1 className="font-black text-8xl">Share <div className="text-cyan-600 inline-block">Everything</div> & <div className="text-cyan-600 inline-block">Your Life</div></h1>
                        <p className="mt-10 text-2xl">Share everything about your life</p>
                        <div>
                            <div className="mt-7">
                                <input className="border lg:w-[50%] w-[70%] rounded-md h-12" type="text" placeholder="Enter your delivery location" />
                                <button className="rounded-md h-12 w-20 bg-cyan-600 hover:bg-cyan-800 hover:text-white">Discover</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-red-200 flex justify-center rounded-[30%] w-[90%]">
                            <div className="bg-red-500 rounded-full h-[50%]">
                                <img className="max-w-sm rounded-3xl" src="../assets/img/home/photo-satisfied-woman-holds-piece-pizza-feels-pleased-as-spends-free-time-with-friends-pizzeria-looks-happily-directly-wears-casual-outfit-isolated-yellow-wall-lunch-removebg 1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14">
                    <div>
                        <h1 className="text-center text-5xl font-bold">Technology Blog Nouns</h1>
                        <p className="text-center my-6">Slogans that rhyme with technology blog are easier to remember and grabs the attention of users. Challenge yourself to create your own rhyming slogan</p>
                    </div>
                </div>

                <h1 className="text-4xl text-center">NEWS BLOG</h1>

                <div className="mt-15 max-w-3xl mx-auto">
                    {posts.map((post, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-4 gap-5 my-10">
                                <div>
                                    <Link to={`/blog/${post._id}`}>
                                        <img className="rounded-xl" src={post.image} alt="" />
                                    </Link>
                                </div>
                                <div className="col-span-3 mb-5">
                                    <Link to={`/blog/${post._id}`}>
                                        <h3 className="text-4xl text-red-500 my-2 ">{post.title}</h3>
                                    </Link>
                                    <h3 className="my-2">November 12, 2022 | ⏰ 4 mins read</h3>
                                    <h2 className="text-xl bg-[#EDF2F7] max-w-[140px] rounded-xl pl-2"><a href="">#{post.categories}</a></h2>
                                    <Link to={`/blog/${post._id}`}>
                                        <h1 className="text-2xl mt-3"><a href="">READ MORE</a></h1>
                                    </Link>
                                </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>
                
                <h1 className="text-3xl text-center my-4"><Link to="/blogs">READ ALL BLOG</Link></h1>
                <hr />
                <div className="max-w-[60%] mx-auto my-4">
                    <div>
                        <div className="text-center text-xl">
                            <h1 className="text-center text-3xl font-bold my-3">NIVIKI.COM - Làm việc cần thiết</h1>
                            <span>Mình viết về khởi nghiệp, blockchain, crypto, nocode, indie hacker, digital nomad và đọc sách 🚀</span>
                        </div>
                        <h1 className="text-lg font-semibold my-3">About Thái:</h1>
                        <div className="grid grid-cols-6 gap-1">
                            <div className="text-center">
                                <a href="index.html"><img className="max-h-auto max-w-[100px] rounded-full cursor-pointer inline-block"
                                    src="https://picsum.photos/200/200" /></a>
                            </div>
                            <div className="col-span-5 text-xl">
                                <span>Thất nghiệp. Đang rủ rê nhiều người thất nghiệp. Chia sẻ kiến thức để nhiều người bỏ việc. Hy vọng với NIVIKI.COM có thể lan toả tinh thần thất nghiệp đến với nhiều người hơn nữa.</span>
                                <div>Join <a className="text-blue-500" href="">Discord Channel</a> để giao lưu với mình nhé 🙋‍♂️</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F7FAFC] rounded-xl text-center h-[200px] pt-5">
                <span className="text-2xl">Liên Hệ: </span>
                <div className="text-xl">Email qua địa chỉ <a className="text-blue-500" href="">khoa@niviki.com</a> hoặc Telegram <a className="text-blue-500" href="">https://t.me/khoa_nvk</a></div>
            </div>
            <div className="bg-[#E2E8F0] rounded-xl text-center h-[300px] py-14 my-5">
                <span className="text-2xl">Đăng ký nhận tin </span>
                <div className="text-xl my-2">Đăng ký nhận bài viết mới, 1390+ đọc giả đã tham gia</div>
                <div className="mt-7">
                    <input className="border lg:w-[30%] w-[50%] rounded-md h-12" type="text" placeholder="Enter your email address" />
                    <button className="rounded-md h-12 w-24 bg-cyan-600 hover:bg-cyan-800 text-white hover:text-black">SUBSCRIBE</button>
                </div>
            </div>
        </div>

    )
}

export default HomePageUser