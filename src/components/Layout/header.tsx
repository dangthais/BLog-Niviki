import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
type Props = {}

interface IUser {
  avatar: string,
}

const Header = (props: Props) => {
  const id = localStorage.getItem("userID")

  const [user, setUser] = useState<IUser | null>(null)

  const removeStorage = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("userID")
    setUser(null)
  }
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:8000/api/admin/readUser/${id}`)
      setUser(data)
    })()
  }, [id])

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="container lg:max-w-7xl max-w-xs mx-auto mt-3">
      <div className="flex items-center justify-between">
        <div className="mr-5">
          <Link to="/"><img className="max-h-auto max-w-[50px] rounded-lg cursor-pointer inline-block"
            src="https://picsum.photos/200/200" /></Link>
        </div>
        <div>
          <ul>
            <li className="inline-block pt-3">
              <Link to="/">
                <div className="h-14 lg:p-5 p-3 text-lg hover:underline hover:bg-cyan-600 hover:text-white rounded-md font-medium">Home</div>
              </Link>
            </li>
            <li className="inline-block">
              <Link to="/blogs">
                <div className="h-14 lg:p-3 p-3 text-lg hover:underline hover:bg-cyan-600 hover:text-white rounded-md font-medium">Blog</div>
              </Link>
            </li>
            <li className="inline-block">
              <Link to="/about">
                <div className="h-14 lg:p-3 p-3 text-lg hover:underline hover:bg-cyan-600 hover:text-white rounded-md font-medium">About</div>
              </Link>
            </li>
            <li className="inline-block">
              <Link to="/contact">
                <div className="h-14 lg:p-3 p-3 text-lg hover:underline hover:bg-cyan-600 hover:text-white rounded-md font-medium">Contact</div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <div className="ti-shopping-cart text-2xl mr-1 cursor-pointer"></div>
          <div className="flex">
            {user ? (<div>
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className=" inline-flex justify-center w-full text-sm font-medium text-gray-700  border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                    <img className="max-w-[50px] rounded-full" src={user.avatar} alt="" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link to={`/profile/${id}`}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <div>
                        <Menu.Item>
                          {({ active }) => (
                            <Link to="/" 
                            onClick={removeStorage}
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700",
                                "block w-full text-left px-4 py-2 text-sm"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>) : (
              <div>
                <Link to="/signin">
                  <div><button className="w-20 h-10 rounded-md text-lg hover:bg-cyan-600 hover:text-white p-1 font-medium">Sign In</button></div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header