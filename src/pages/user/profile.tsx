import { Row, Col } from 'antd'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Button from '../../components/button'
import FormProfile from '../../components/formProfile'
import ShowImage from '../../components/showImage'
import { useNavigate } from "react-router-dom";


type Props = {
}

interface IUser {
  avatar: string,
  name: string,
  email: string,
  password: string,
  image: string
}

function Profile({ }: Props) {
  const id = localStorage.getItem("userID")
  const [user, setUser] = useState<IUser>()

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`http://localhost:8000/api/admin/readUser/${id}`)
      setUser(data)
    })()
  }, [id])
  
  return (
    <form>
      <>
        <Row className="container lg:max-w-7xl max-w-xs mx-auto mt-3">
          <Col span={6}>
            <div>
              <ShowImage user={user} />
              <Button />
            </div>
          </Col>
          <Col span={18}>
            <h1 className="mt-3 mb-5 text-4xl font-bold text-center">My Profile</h1>
            <FormProfile user={user} />
          </Col>
        </Row>
      </>
    </form>
  )
}

export default Profile