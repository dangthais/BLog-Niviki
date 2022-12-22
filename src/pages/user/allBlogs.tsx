import react, { useState, useEffect } from 'react';
import axios from 'axios';
import { IPost } from '../admin/interface/index';
import { Link } from "react-router-dom"
import { Pagination } from '@mui/material';
import ReactPaginate from 'react-paginate';
import Search from '../../components/search';
import SearchComponent from '../../components/search';

type Props = {}
function AllBlogs({ }: Props) {
    // const [posts, setPosts] = useState<IPost[]>([])
    const [currentItems, setCurrentItems] = useState<IPost[]>([])
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const items = [...Array(33).keys()];

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("http://localhost:8000/api/listPost")
            const endOffset = itemOffset + 3;
            setCurrentItems(data.data.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(data.data.length / 3))
        })()
    }, [itemOffset])

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * 3) % items.length;
        setItemOffset(newOffset);
    }
        return (
            <div>
                <div className="container lg:max-w-7xl max-w-xs mt-3">
                    <SearchComponent currentItems={currentItems} />
                    <div className="mt-15 max-w-3xl mx-auto">
                        {currentItems.map((post, index) => (
                            <div key={index}>
                                <div className="my-10">
                                    <div>
                                        <Link to={`/blog/${post._id}`}>
                                            <div className="text-4xl font-bold my-2 hover:underline max-w-[80%]">{post.title}</div>
                                        </Link>

                                        <h3 className="my-2">November 12, 2022 | ⏰ 4 mins read</h3>
                                        <Link to={`/blog/${post._id}`}>
                                            <img className="rounded-xl w-full max-h-[300px]" src={post.image} alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-span-3 mb-5">
                                        <div className="text-overflow: clip; truncate hover:text-clip overflow-hidden line-height-[75px]">{post.content}</div>
                                        <h2 className="text-xl bg-[#EDF2F7] w-[80px] rounded-lg px-3 my-3"><a href="">#{post.categories}</a></h2>
                                        <Link to={`/blog/${post._id}`}>
                                            <h1 className="text-2xl mt-3"><a href="">READ MORE</a></h1>
                                        </Link>

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mb-4">
                        <ReactPaginate
                            nextLabel="next >"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={2}
                            marginPagesDisplayed={2}
                            pageCount={pageCount}
                            previousLabel="< previous"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                        />
                    </div>
                    <hr />
                    <h1 className="text-3xl text-center my-4">READ ALL BLOG</h1>
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
export default AllBlogs