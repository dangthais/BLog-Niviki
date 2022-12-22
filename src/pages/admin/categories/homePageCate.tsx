import LayoutAdmin from '../layout'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

type Props = {}

interface Icate {
  name: string,
  _id: string
}
function ListCategory({ }: Props) {

  const [categories, setCategories] = useState<Icate[]>([])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8000/api/listCategory");
      setCategories(data.data);
    })();
  }, []);

  const removeCategory = async (id: string) => {
    if (window.confirm("Are you sure you want to remove")) {
      const { data } = await axios.delete(`http://localhost:8000/api/removeCategory/${id}`)
      setCategories(categories.filter(cate => cate._id !== id))
    }
  }
  return (
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
                        <h3 className="card-title">Categories</h3>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-end">
                      <Link to="/admin/addCategory" className="btn btn-primary text-white" style={{ height: "35px" }}>Add Category</Link>
                    </div>
                  </div>
                </div>
                <div className="card-body" style={{ padding: '30px 0' }}>
                  <div className="row">
                    <div className="table-responsive table-hover table-sales text-center ">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">NAME</th>
                            <th className="text-center">ACTION</th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories && categories.map((item, index) => (
                            <tr key={index}>
                              <td width="20%">{index + 1}</td>
                              <td width="20%">{item.name}</td>
                              <td width="20%">
                                <Link to={`/admin/UpdateCategory/${item._id}`}>
                                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                  </button>

                                </Link>
                                <button onClick={() => removeCategory(item._id!)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-[2px]">
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
  )
}

export default ListCategory