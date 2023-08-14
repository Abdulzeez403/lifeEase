import { ApImage } from '@/components/image'
import { ApSearchInput } from '@/components/input/Search'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Logo from "../../../../../public/image/Logo.png"
import Profile from "../../../../../public/image/testimonial.png"

const AdminHeader = () => {
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


        </div>
    )
}

export default AdminHeader;
