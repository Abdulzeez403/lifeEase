import { ApImage } from '@/components/image'
import { Badge, Space } from 'antd'
import React from 'react'
import UserImage from "../../../../../public/image/testimonial.png"

interface IProps {
    uerName: string;
    message: string,
    time: any
}

export const ApMessageItems = ({ uerName, message, time }: IProps) => {

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
                    <h3 className="text-sm font-semibold">{uerName}</h3>
                    <p className="text-xs">{message}</p>

                </Space>
            </Space>

            <Space direction="vertical">
                <div><h4 className="text-xs">{time}</h4></div>
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
