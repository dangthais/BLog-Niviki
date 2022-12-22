import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LayoutAdmin from '../layout/index';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
type Props = {}

interface User {
  name: string,
  email: string,
  password: string,
  _id: string,
  avatar: string
}

const ListUser = (props: Props) => {
  const [users, setUser] = useState<User[]>([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8000/api/admin/listUser");
      setUser(data.data);
    })();
  }, []);

  const removeUser = async (id: string) => {
    if (window.confirm("Are you sure you want to remove")) { 
      const { data } = await axios.delete(`http://localhost:8000/api/admin/removeUser/${id}`)
      setUser(users.filter(user => user._id !== id))
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
                          <h3 className="card-title">Users</h3>
                        </div>
                      </div>
                      <div className="col-lg-6 d-flex justify-content-end">
                        {/* <Link to="/admin/post/addPost" className="btn btn-primary text-white" style={{ height: "35px" }}>Add User</Link> */}
                      </div>
                    </div>
                  </div>
                  <div className="card-body" style={{ padding: '30px 0' }}>
                    <div className="row">
                      <div className="table-responsive table-hover table-sales text-center ">
                        <table className="table">
                          <thead>
                            <tr>
                              <th className="text-center">NAME</th>
                              <th className="text-center">EMAIL</th>
                              <th className="text-center">IMAGE</th>
                              <th className="text-center">ACTION</th>
                            </tr>
                          </thead>
                          <tbody>
                            {users && users.map((item, index) => (
                              <tr key={index}>
                                <td width="20%">{item.name}</td>
                                <td width="20%">{item.email}</td>
                                <td width="30%"><img className="max-w-[60px] ml-[30%] rounded-full" src={item.avatar} alt="" /></td>
                                <td width="20%">
                                  <Link to={`/admin/post/UpdatePost/${item._id}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                      <FontAwesomeIcon icon={faPenToSquare} />
                                    </button>

                                  </Link>
                                  <button onClick={() => removeUser(item._id!)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-[2px]">
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

export default ListUser