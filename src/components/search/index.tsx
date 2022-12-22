import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { IPost } from '../../pages/admin/interface/index';

import "./style.css"

type Props = {
  currentItems: IPost[]
}

export default function SearchComponent(props: Props) {

  const [value, setValue] = useState('')

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  const onSearch = (searchTerm: any) => {
    setValue(searchTerm)
  }
  return (
    <div className="flex items-center justify-center mb-20 mt-5">
      <div className=" w-[50%]">
        <div className="search-inner w-full">
          <input className="border h-8 w-full" type="text" value={value} onChange={onChange} />
          <button className="border border-5 border-black ml-1" onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {props.currentItems
            .filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.title.toLowerCase();

              return (
                searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0, 10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.title)}
                className="dropdown-row"
                key={item.title}
              >
                <Link to={`/blog/${item._id}`}>
                  {item.title}
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}