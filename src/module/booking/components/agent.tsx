import { ApImage } from '@/components/image'
import React from 'react'
import { AiFillContainer } from 'react-icons/ai'
import { FaBed } from "react-icons/fa"
import { GiBed } from "react-icons/gi"
import Profile from "../../../../public/image/testimonial.png"
import { AiOutlineMail } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import ApButton from '@/components/button'
import { MdVerified } from "react-icons/md"


export const AgentPage = () => {
    return (
        <div className='flex justify-between mt-4'>

            <div className="">
                <div className="my-5 mb-8">
                    <h4 className="font-bold text-[1.2rem]">What this Hostel offers</h4>
                </div>
                <div className="flex gap-x-8">
                    <div className="text-center px-2 py-3 border-2 rounded-md border-black w-[150px]">
                        <div className="flex justify-center m-0">
                            <FaBed size={23} />
                        </div>
                        <div>
                            <h4 className='font-semibold'>Single room</h4>
                        </div>

                    </div>

                    <div className="text-center px-2 py-3 border-2 rounded-md border-black w-[150px]">
                        <div className="flex justify-center m-0">
                            <GiBed size={23} />
                        </div>
                        <div>
                            <h4 className='font-semibold'>Bedroom</h4>
                        </div>

                    </div>

                    <div className="text-center px-2 py-3 border-2 rounded-md border-black w-[150px]">
                        <div className="flex justify-center m-0">
                            <AiFillContainer size={23} />
                        </div>
                        <div>
                            <h4 className='font-semibold'>Wardrobe</h4>
                        </div>

                    </div>

                </div>

                <div>
                    <div className="mt-12">
                        <h4 className="font-bold  text-[1.2rem] my-2">About the place</h4>
                    </div>

                    <div className="w-[33rem]">
                        <p>Introducing Airclass Hostel- the perfect blend of comfort, affordability, and vibrant ambiance. Enjoy cozy rooms, vibrant social spaces, and friendly staff. Prime location near attractions and excellent security measures. Experience affordable luxury and create unforgettable memories at Airclass Hostel. Book now and join our welcoming community!</p>
                    </div>
                </div>

            </div>
            <div>
                <div className='w-[40rem] '>
                    <h4 className="font-bold  text-[1.2rem] my-2 text-center">Meet the Agent</h4>
                    <div className="bg-slate-200 rounded-md">



                        <div className="p-6 " >
                            <div className="bg-white rounded-lg flex justify-center w-[50%] mx-auto gap-x-5 py-3">
                                <div>
                                    <div className='w-[100px] rounded-full '>
                                        <ApImage
                                            src={Profile}
                                            width={30}
                                            height={30}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className='flex'>
                                        <h4 className='font-bold'>Abdulazzez S.</h4>
                                        <MdVerified size={25} color="blue" />
                                    </div>
                                </div>
                                <div className=" w-[5rem]">
                                    <div className="my-1 ">
                                        <h4 className="font-semibold text-[1.4rem]">357</h4>
                                        <p className='text-sm'>Reviews</p>
                                    </div>
                                    <div className="w-[60px] h-[2px] bg-black"></div>
                                    <div className=" my-1 ">
                                        <h4 className="font-semibold text-[1.4rem]">4.6</h4>
                                        <p className='text-sm'>Rating</p>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[50%] mx-auto ">
                                <div>

                                    <div className='flex gap-x-4 items-center my-2 '>
                                        <AiOutlineMail size={25} />
                                        <h4 className="text-slate-600">Susabee@gmail. com</h4>
                                    </div>

                                    <div className='flex gap-x-4 items-center my-2 mb-4 '>
                                        <BsTelephone size={25} />
                                        <h4 className="text-slate-600">+2348183495859</h4>
                                    </div>

                                    <ApButton title="Message Agent" color="primary" btnSize="md" rounded="rounded-md" />
                                </div>

                            </div>

                        </div>



                    </div>


                </div>
            </div>

        </div>



    )
}
