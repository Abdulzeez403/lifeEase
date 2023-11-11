import { ApImage } from '@/components/image'
import { Badge, Space } from 'antd'
import React from 'react'
import UserImage from "../../../../../public/image/testimonial.png"

export const ApMessageItems = () => {

    return (
        <Space className='flex justify-between items-center py-3' >
            <Space >
                <div>

                    <ApImage
                        src={UserImage}
                        width={50}
                        height={50}
                        alt=""
                        className="rounded-full "
                    />
                </div>

                <Space direction='vertical' className='leading-2'>
                    <h3 className="text-sm font-semibold">John Doe</h3>
                    <p className="text-xs">Were getting there!</p>

                </Space>
            </Space>

            <Space direction="vertical">
                <div><h4 className="text-xs">12:20pm</h4></div>
                <Badge
                    size="default"
                    className=""
                    count={1}
                    style={{ backgroundColor: 'blue' }}
                />

            </Space>

        </Space>
    )
}
