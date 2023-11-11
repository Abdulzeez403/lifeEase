import { ApImage } from '@/components/image'
import React from 'react'
import UserImage from "../../../../../public/image/testimonial.png"
import { Space } from 'antd'


export const ChatMessage = () => {
    return (
        <Space className='w-[30rem] m-4'>
            <Space>
                <div className=" flex-end">
                    <ApImage
                        src={UserImage}
                        width={40}
                        height={40}
                        alt=""
                        className="rounded-full justify-end "
                    />
                </div>

                <div>
                    <p className='border-2 rounded-md bg-blue-600 text-xs p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim, magni reprehenderit ad animi quam! Temporibus accusamus quod aut enim!</p>
                </div>
            </Space>

            <Space direction='horizontal' className=" justify-end mt-[10rem]">
                <div >
                    <ApImage
                        src={UserImage}
                        width={40}
                        height={40}
                        alt=""
                        className="rounded-full justify-end "
                    />
                </div>

                <div>
                    <p className='border-2 rounded-md bg-blue-600 text-xs p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim, magni reprehenderit ad animi quam! Temporibus accusamus quod aut enim!</p>
                </div>
            </Space>

        </Space>
    )
}
