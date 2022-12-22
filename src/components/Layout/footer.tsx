import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaRegEnvelope } from "react-icons/fa";


type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="container mx-auto mt-3 bg-[#2B6CB0] text-white rounded py-8">
       <div className="flex items-center justify-between mb-5">
            <div className="mr-5">
                <div className="mb-3">
                    <img className="max-h-auto max-w-[50px] rounded-lg cursor-pointer" src="https://picsum.photos/200/200"/>
                </div>
                <div>
                    <span>Copyright © 2015 - 2022. All rights reserved.</span>
                </div>
            </div>
            <div>
                <div>
                <ul>
                    <li className="inline-block pt-3">
                        <a href="" className="h-5 p-3 text-lg hover:no-underline hover:bg-cyan-600 hover:text-white rounded-md font-medium ">Home</a>
                    </li>
                    <li className="inline-block">
                        <a href="" className="h-5 p-3 text-lg hover:no-underline hover:bg-cyan-600 hover:text-white rounded-md font-medium">Products</a>
                    </li>
                    <li className="inline-block">
                        <a href="" className="h-5 p-3 text-lg hover:no-underline hover:bg-cyan-600 hover:text-white rounded-md font-medium">About Us</a>
                    </li>
                    <li className="inline-block">
                        <a href="" className="h-5 p-3 text-lg hover:no-underline hover:bg-cyan-600 hover:text-white rounded-md font-medium">Contact Us</a>
                    </li>
                </ul>
                </div>
                <div className="flex">
                    <div className="text-3xl mx-4 mt-4"><FaRegEnvelope /></div>                    
                    <div className="text-3xl mx-4 mt-4"><FaFacebook /></div>                    
                    <div className="text-3xl mx-4 mt-4"><FaInstagram /></div>                    
                    <div className="text-3xl mx-4 mt-4"><FaTwitter /></div>                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer