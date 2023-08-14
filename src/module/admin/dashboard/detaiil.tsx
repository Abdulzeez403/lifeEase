import React from 'react'
import cave from "../../../../public/image/cave.png"
import { ApImage } from '@/components/image'
import { PiArrowUpRight, PiDotOutlineBold } from 'react-icons/pi'
import { MdOutlineAddCircle, MdVerified } from 'react-icons/md'
import Profile from "../../../../public/image/testimonial.png";
import { HostelListing } from './components/hostelListing'

export const DashboardDetaiil = () => {
    return (
        <div className='px-[4rem] pt-[2rem] overflow-auto h-[100vh] pb-[2rem]'>
            <h3 className='font-semibold text-[1.5rem]'>Dashboard</h3>
            <div className='flex gap-x-10 items-end'>

                <div className='w-[70%] bg-white  rounded-md mt-4'>
                    <div className="flex justify-around items-center">
                        <div className='py-2'>
                            <h4 className=' py-3'>Total Listing Views</h4>
                            <h4 className='font-bold text-[2rem] py-6'>1k+</h4>
                            <div className="flex gap-x-2 items-center">
                                <PiArrowUpRight size={24} color="green" />
                                <h4 className="py-3">+17% vs previous week</h4>

                            </div>
                        </div>
                        <div>
                            <div className='w-[200px] rounded-full '>
                                <ApImage
                                    src={cave}
                                    width={50}
                                    height={50}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                    </div>

                </div>


                <div className="bg-white rounded-lg flex justify-center w-[40%] py-10 mx-auto gap-x-5 ">
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

            </div>

            <div className="flex gap-x-10  ">
                <div className='w-[70%]' >
                    <h4 className="py-6 font-bold text-[1.4rem]">My Listings</h4>



                    <div>

                        <div className="pb-4">
                            <HostelListing />
                        </div > <div className="pb-4">
                            <HostelListing />
                        </div> <div className="pb-4">
                            <HostelListing />
                        </div>
                    </div>



                </div>
                <div className=" w-[40%] py-6 ">
                    <div className="  bg-white rounded-md px-2 py-3">

                        <h4 className="   font-bold text-[1.4rem] pl-8 pb-[2rem]">Activities</h4>

                        <div>
                            <h4 className=" font-bold pl-8 ">Today</h4>
                            <div className="flex  items-center">
                                <PiDotOutlineBold color="green" size={35} />
                                <h4 className='text-[12px] font-semibold'>You have a new message from Olushola</h4>

                            </div>

                            <div>
                                <h4 className=" font-bold pl-8 pt-3 ">April</h4>
                                <div className="flex gap-x-1 items-center">
                                    <div className='block'>
                                        <h4 className='text-[12px] pb-2 pl-8'>You added a new listing.</h4>
                                        <h4 className='text-[12px] pl-8'>3 peop;e added Airclass to favourite.</h4>
                                    </div>


                                </div>
                            </div>
                            <div>
                                <h4 className=" font-bold pl-8 pt-3 ">March</h4>
                                <div className="flex gap-x-1 items-center">

                                    <h4 className='text-[12px] pl-8'>Pablo viewed Sangra Hostel.</h4>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center m-0 py-5">
                        <MdOutlineAddCircle color="blue" size={45} />
                    </div>
                </div>
            </div>


        </div>
    )
}
