import { ApSearchInput } from '@/components/input/Search'
import React from 'react'
import { ApMessageItems } from './components/messageitems'
import { BsSearch } from 'react-icons/bs'
import { Space } from 'antd'
import UserImage from "../../../../public/image/testimonial.png"
import { ApImage } from '@/components/image'
import ChatMessage from './components/chat'


export const MessageDetail = () => {
    const handleSearch = () => {
        console.log("Yea")
    }

    const DateNow = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })

    const data = [
        {
            name: "Sodiq Abdulazeez",
            message: "Were are you at?",
            time: DateNow
        },
        {
            name: "John Doe",
            message: "Hi?",
            time: DateNow
        }
        ,
        {
            name: "James Rema",
            message: "Fun!",
            time: DateNow
        },
        {
            name: "Uthman Abdulganyi",
            message: "We are getting there!",
            time: DateNow
        }

    ]
    return (
        <div className=" flex ">
            <div className='w-[22rem] h-96 '>
                <h4 className='font-bold text-[1.6rem] my-2 flex justify-center'>Messages</h4>
                <div className='bg-white py-3'>

                    <div className=''>
                        <div className='flex gap-x-3 items-center bg-slate-200 rounded-md mx-4 mt-2 '>
                            <div className="pl-2">
                                <BsSearch size={20} />

                            </div>
                            <ApSearchInput className=" bg-slate-200 w-[27rem] rounded-md   py-2 outline-none  placeholder:px-2 focus:px-2" placeholder="Search....." onSearchChange={() => console.log("Yea!")} />
                        </div>

                    </div>
                    <div className='bg-white px-4'>
                        {data?.map((chat: any, index: number) => (
                            <div key={index}>
                                <ApMessageItems uerName={chat?.name} message={chat?.message} time={chat?.time} />

                            </div>

                        ))}

                    </div>
                </div>
            </div>

            <div className=''>
                <div className='w-[44rem] border-b-2'>
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
                            <p className="text-xs">Not Active</p>

                        </Space>
                    </Space>
                </div>

                <ChatMessage />
            </div>
        </div>
    )
}

