import React, { useState, useEffect } from 'react'
import { Image } from 'antd';

interface IUser {
    avatar: string,
    name: string,
    email: string
  }
  
type Props = {
    user: IUser | undefined
}

function ShowImage(props : Props) {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className="my-3">
                <Image
                className="rounded-xl"
                    preview={{ visible: false }}
                    width={200}
                    src={props?.user?.avatar}
                    onClick={() => setVisible(true)}
                />
                <div style={{ display: 'none' }}>
                    <Image.PreviewGroup preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }} >
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
                        <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
                    </Image.PreviewGroup>
                </div>
            </div>
        </>
    )
}

export default ShowImage