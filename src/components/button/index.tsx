import React from 'react'
import { AiFillEdit } from "react-icons/ai";
type Props = {}

function Button({ }: Props) {
    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[200px]">
                Connect To Facebook
            </button>
            <a className="flex my-3 ml-[20%]">
                <div className="text-xl">
                    <AiFillEdit />
                </div>
                <span className="text-xl ml-2"> Edit</span>
            </a>
        </div>
    )
}

export default Button