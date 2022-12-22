import React, {useState, useEffect} from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
} from 'antd';




interface IUser {
    avatar: string,
    name: string,
    email: string,
    password: string,
    image: string,
  }

type Props = {
    user: IUser | undefined
}

const { RangePicker } = DatePicker;
const { TextArea } = Input;

function FormProfile(props: Props) {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<IUser>(
    {
      defaultValues:props.user
    }
  )

  // const [user, setUser] = useState<IUser[]>([])

  const navigate = useNavigate();

  useEffect(() => {
    reset(props.user)  
  }, [props.user])
  console.log(props.user);

  const onSubmit: SubmitHandler<IUser> = async (user) => {
    try {
      const formData = new FormData();
      formData.append("file", user.image[0]);
      formData.append("upload_preset", "jvdzfca8");
      formData.append("cloud_name", "djscgepti");

      const uploadFile = await axios.post("https://api.cloudinary.com/v1_1/djscgepti/image/upload", formData).
        then(data => {
          const updateUser = { ...user, image: data.data.secure_url }
          const posts = axios.post("http://localhost:8000/api/addPost", updateUser)
        })
      navigate("/admin")
    } catch (error) {

    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Name">
          <Input {...register ("name", { required: true})} />
          {errors.name && errors.name.type === "required" && (
                <p>Bắt buộc phải nhập trường này</p>
              )}
        </Form.Item>
        <Form.Item label="Email">
          <Input {...register ("email", { required: true})} />
          {errors.email && errors.email.type === "required" && (
                <p>Bắt buộc phải nhập trường này</p>
              )}
        </Form.Item>
        <Form.Item label="Date of birth">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Age">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Note">
          <TextArea rows={4}/>
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <div style={{ marginLeft: 400 }}>
        <Form.Item>
          <Button>Send</Button>
        </Form.Item>
        </div>
      </Form>
    </form>
  )
}

export default FormProfile