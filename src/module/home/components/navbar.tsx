import { ApImage } from '@/components/image'
import React from 'react'
import Logo from "../../../../public/image/LogoWhite.png"
import Link from 'next/link'
import ApButton from '@/components/button'
import { CiMenuFries } from 'react-icons/ci'

export const Navbar = () => {
    return (
        <div className='flex  items-center justify-between '>
            <div className='w-[100px] '>
                <ApImage
                    src={Logo}
                    width={30}
                    height={30}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className='flex md:hidden lg:hidden'>
                <CiMenuFries size={25} color="white"/>
            </div>
            <div className="hidden md:flex md:gap-x-4 lg:flex lg:gap-x-4 ">
                <Link href="" className='text-white'>Home</Link>
                <Link href="" className='text-white'>Bookings</Link>
                <Link href="" className='text-white'>Contact Us</Link>
                <Link href="" className='text-white'>About</Link>
            </div>
            <div className="hidden md:flex md:gap-x-8  lg:flex lg:gap-x-8">
                <ApButton title="Login" className="text-bold font-medium text-white " />
                <ApButton title="Sign Up" className=" text-bold font-medium bg-white rounded-lg px-5 py-1" />

            </div>
        </div>
    )
}
