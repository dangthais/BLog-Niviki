import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LayoutAdmin from './layout';
import { Link } from "react-router-dom"
import { IPost } from './interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

type Props = {}


const HomePageAdmin = (props: Props) => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        (async () => {
            const { data } = await axios.get("http://localhost:8000/api/listPost");
            setPosts(data.data);
        })();
    }, []);

    const removePost= async (id: string) => {
        if (window.confirm("Are you sure you want to remove")) {
            const { data } = await axios.delete(`http://localhost:8000/api/removePost/${id}`)
            setPosts(posts.filter(post => post._id !== id))
        }
    }
    
    return (
        <div>
            <LayoutAdmin>
                <div className="content">
                    <div className="page-inner mt--10" style={{ width: '1255px', marginLeft: '253px', paddingTop: '100px' }}>
                        <div className="row-card-no-pd">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="card-head-row card-tools-still-right">
                                                    <h3 className="card-title">Blogs</h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-flex justify-content-end">
                                                <Link to="/admin/post/addPost" className="btn btn-primary text-white" style={{ height: "35px" }}>Add Blog</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body" style={{ padding: '30px 0' }}>
                                        <div className="row">
                                            <div className="table-responsive table-hover table-sales text-center ">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th className="text-center">TITLE</th>
                                                            <th className="text-center">IMAGE</th>
                                                            <th className="text-center">CATEGORY</th>
                                                            <th className="text-center">ACTION</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {posts && posts.map((item, index) => (                                                            
                                                            <tr key={index}>
                                                                <td width="20%">{item.title}</td>
                                                                <td width="30%"><img className="max-w-[100px] ml-[30%]" src={item.image} alt="" /></td>
                                                                <td width="30%">{item.categories}</td>
                                                                <td width="20%">
                                                                    <Link to={`/admin/post/UpdatePost/${item._id}`}>
                                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                                                        <FontAwesomeIcon icon={faPenToSquare} />
                                                                    </button>
                                                                        
                                                                    </Link>
                                                                    <button onClick={() => removePost(item._id!)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-[2px]">
                                                                            <FontAwesomeIcon icon={faTrashCan} />
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutAdmin>
        </div>
    )
}

export default HomePageAdmin