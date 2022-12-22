import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
    children: React.ReactNode
}

function PrivateRouter({children}: Props) {
    const navigate = useNavigate()
    const userID = localStorage.getItem("userID")

    useEffect(() => {
        if (userID) {
            navigate("/admin")
        } else {
            navigate("/admin/login")
        }   
    }, [userID])   
  return (
    <div>{children}</div>
  )
}

export default PrivateRouter