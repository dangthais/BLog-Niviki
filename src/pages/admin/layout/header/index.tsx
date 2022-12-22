import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { AiFillHome, AiFillEdit, AiOutlineUser, AiOutlineAlignRight } from "react-icons/ai";
type Props = {};

interface IUser {
    avatar: string,
    name: string,
    email: string
}

const Header = (props: Props) => {

    const id = localStorage.getItem("userID")

    const [user, setUser] = useState<IUser>()

    const removeStorage = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userID")
    }
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:8000/api/admin/readUser/${id}`)
            setUser(data)
        })()
    }, [])
    console.log(user);
    
    return (
        <div>
            <div className='wrapper__header'>
                <div className="main-header">
                    <div className="logo-header" data-background-color="blue">
                        <a href="index.html" className="logo">
                            <img src="../assets/img/logo.svg" alt="navbar brand" className="navbar-brand" />
                        </a>
                        <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse"
                            data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon">
                                <i className="icon-menu"></i>
                            </span>
                        </button>
                        <button className="topbar-toggler more"><i className="icon-options-vertical"></i></button>
                        <div className="nav-toggle">
                            <button className="btn btn-toggle toggle-sidebar">
                                <i className="icon-menu"></i>
                            </button>
                        </div>
                    </div>

                    <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">
                        <div className="container-fluid">
                            <div className="collapse" id="search-nav">
                                <form className="navbar-left navbar-form nav-search mr-md-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button type="submit" className="btn btn-search pr-1">
                                                <i className="fa fa-search search-icon"></i>
                                            </button>
                                        </div>
                                        <input type="text" placeholder="Tìm kiếm ..." className="form-control" />
                                    </div>
                                </form>
                            </div>
                            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
                                <li className="nav-item dropdown hidden-caret">
                                    <a className="nav-link dropdown-toggle" href="#">
                                        <i className="fa fa-envelope"></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown hidden-caret">
                                    <a className="nav-link dropdown-toggle" href="#" role="button">
                                        <i className="fa fa-bell"></i>
                                    </a>
                                </li>
                                <li className="nav-item dropdown hidden-caret">
                                    <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#"
                                        aria-expanded="false">
                                        {user ? (<div className="avatar-sm"><img
                                            src={user.avatar}
                                            alt="image profile"
                                            className="avatar-img rounded-circle" /></div>) : (
                                            <div>
                                                <Link to="/signin">
                                                    <div><button className="w-20 h-10 rounded-md text-lg hover:bg-cyan-600 hover:text-white p-1 font-medium">Sign In</button></div>
                                                </Link>
                                            </div>
                                        )}
                                    </a>
                                    <ul className="dropdown-menu dropdown-user animated fadeIn">
                                        <div className="dropdown-user-scroll scrollbar-outer">
                                            <li>
                                                <div className="user-box">
                                                    {user ? (<div className="avatar-lg"><img
                                                            src={user.avatar}
                                                            alt="image profile"
                                                            className="avatar-img rounded" /></div>) : (
                                                            <div>
                                                            <Link to="/signin">
                                                                <div><button className="w-20 h-10 rounded-md text-lg hover:bg-cyan-600 hover:text-white p-1 font-medium">Sign In</button></div>
                                                            </Link>
                                                        </div>
                                                    )}
                                                        <div className="u-text">
                                                            <h4>{user?.name}</h4>
                                                            <p className="text-muted">{user?.email}</p><a
                                                                href="profile.html"
                                                                className="btn btn-xs btn-secondary btn-sm">View
                                                                Profile</a>
                                                        </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Account Setting</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#" onClick={removeStorage}>Logout</a>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


            </div>
            <div className="sidebar sidebar-style-2">
                <div className="sidebar-wrapper scrollbar scrollbar-inner">
                    <div className="sidebar-content">
                        <ul className="nav nav-primary">
                            <li className="nav-item active">
                                <a href="#dashboard">
                                    <i className="fas fa-home"><AiFillHome /></i>
                                    <p>ADMIN</p>
                                    <span className="caret"></span>
                                </a>
                            </li>
                            <li className="nav-section">
                                <span className="sidebar-mini-icon">
                                    <i className="fa fa-ellipsis-h"></i>
                                </span>
                                <h4 className="text-section">Components</h4>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin">
                                    <a data-toggle="collapse" href="#forms">
                                        <i className="fas fa-pen-square"></i>
                                        <span className="mr-3"> <AiFillEdit /></span>
                                        <p> Post</p>
                                        <span className="caret"></span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/user/listUser">
                                    <a data-toggle="collapse" href="#forms">
                                        <i className="fas fa-pen-square"></i>
                                        <span className="mr-3"><AiOutlineUser /></span>
                                        <p>User</p>
                                        <span className="caret"></span>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin/listCategory">
                                    <a data-toggle="collapse" href="#forms">
                                        <i className="fas fa-pen-square"></i>
                                        <span className="mr-3"><AiOutlineAlignRight /></span>
                                        <p>Category</p>
                                        <span className="caret"></span>
                                    </a>
                                </Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
