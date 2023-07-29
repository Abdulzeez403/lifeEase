import { ApImage } from '@/components/image'
import React from 'react'
import Logo from "../../../../public/image/Logo.png"
import { ApSearchInput } from '@/components/input/Search'
import Profile from "../../../../public/image/testimonial.png"
import { BiSolidStar } from 'react-icons/bi'
import { BsSearch } from "react-icons/bs";
import { FiShare } from "react-icons/fi"
import { AiOutlineHeart } from 'react-icons/ai'

export const BookingHeader = () => {
    return (
        <div>

            <div className='flex justify-between items-center my-4'>
                <div className='w-[100px] '>
                    <ApImage
                        src={Logo}
                        width={30}
                        height={30}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className='flex gap-x-3 items-center bg-slate-200 rounded-md  '>
                    <div className="pl-2">
                        <BsSearch size={20} />

                    </div>
                    <ApSearchInput className=" bg-slate-200 w-[27rem] rounded-md   py-2 outline-none  placeholder:px-2 focus:px-2" placeholder="Search....." onSearchChange={() => console.log("Yea!")} />
                </div>
                <div className='flex justify-between gap-x-4 items-center'>
                    <div className="text-right">
                        <h4 className="font-semibold">Abdulazeez Sodiq</h4>
                        <p>The manager</p>
                    </div>
                    <div className='w-[50px] rounded-full '>
                        <ApImage
                            src={Profile}
                            width={30}
                            height={30}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h4 className="font-bold text-[2rem] pb-2">Airclass Hostel</h4>
                    <div className="flex gap-x-4" >
                        <div className="flex gap-x-2">
                            <BiSolidStar size={15} color="#FFBB0D" />
                            <h4>4.5</h4>
                        </div>
                        <h5 className='text-sm'>Oke-Odo, Tanke, Ilorin.</h5>
                    </div>
                </div>

                <div className='text-center'>
                    <h4 className="font-bold text-[1.5rem] pb-2">200k/year</h4>
                    <div className='flex gap-x-4'>

                        <div className="flex gap-x-2 items-center">
                            <AiOutlineHeart size={17} />
                            <h4>Save</h4>
                        </div>
                        <div className="flex gap-x-2 items-center">
                            <FiShare size={17} />
                            <h4>Share</h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
