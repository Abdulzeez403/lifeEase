import ApButton from '@/components/button'
import { ApImage } from '@/components/image'
import { ApText } from '@/components/typography'
import React from 'react'
import hostelImage from "../../../../public/image/hostel1.png"
import { ApSearchInput } from '@/components/input/Search'
import { AiFillStar } from 'react-icons/ai'

const HostelsComponents = () => {
    return (
        <div >
            <div className="my-10">
                <h4 className='font-bold text-[2.2rem] text-center text-black my-[4rem] md:text-[2.5rem] lg:text-[2.5rem]'>Discover the most Popular Hostels</h4>
                <div className="hidden md:block lg:block">
                    <div className='flex gap-x-5 justify-center items-center'>
                        <ApSearchInput className="shadow-md w-[20rem]  py-2 outline-none  placeholder:px-2 focus:px-2" placeholder="Search....." onSearchChange={() => console.log("Yea!")} />
                        <ApButton title="See more" color="primary" btnSize="md" rounded="rounded-md" />

                    </div>

                </div>
            </div>
            <div className='flex overflow-scroll 
            md:grid md:grid-cols-3 md:gap-5 md:overflow-auto 
            lg:grid lg:grid-cols-3 lg:overflow-auto lg:gap-5 '>

                <div>
                <HostelItem />
                </div>
                <div>
                <HostelItem />
                </div>
                <div>
                <HostelItem />
                </div>
                <div>
                <HostelItem />
                </div>
                <div>
                <HostelItem />
                </div>
             
            </div>

        </div>
    )
}

export default HostelsComponents

const HostelItem = () => {
    return (
            <div className="w-80 border-2 shadow-lg rounded-lg
            sm:w-[30rem] md:w-[100%] 
            lg:w-[100%]  my-4">
                <div className='relative' >
                    <ApImage
                        src={hostelImage}
                        width={350}
                        height={0}
                        alt="image"
                    />

                    <div className="absolute top-[8px] right-2 ">
                        <h4 className=" text-[#E5BC28] rounded-md py-1 px-3 bg-[#FFF6D8]">Self contain</h4>
                    </div>
                </div>

                <div className='px-3'>
                    <div className='flex justify-between items-end'>
                        <div>
                            <ApText className="font-bold text-black my-2" size={"lg"}>Airclass Hostel</ApText>
                            <ApText size={"sm"} className='text-slate-200'>GRA Ilorin</ApText>
                        </div>

                        <div className='flex gap-x-1 items-center px-1'>
                            <AiFillStar color="#FFBB0D" />
                            <ApText className="font-semibold text-sm">4.5</ApText>
                        </div>
                    </div>

                    <div className='flex justify-between my-2'>
                        <ApText className="font-bold">200k <span className='text-slate-200 font-medium ml-1'>yearly</span></ApText>
                        <ApButton title="View" color="primary" btnSize="sm" rounded="rounded-md" />


                    </div>
                </div>


            </div>
    )
}