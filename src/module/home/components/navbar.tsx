import { ApImage } from '@/components/image'
import React, { useState } from 'react'
import Logo from "../../../../public/image/LogoWhite.png"
import Link from 'next/link'
import ApButton from '@/components/button'
import { CiMenuFries } from 'react-icons/ci'
import ApDrawer from '@/components/modal/drawer'

interface IProps {
    OpenModal?: () => void;
}

export const Navbar: React.FC<IProps> = ({ OpenModal }) => {

    const [toggle, setToggle] = useState(false)
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
                <CiMenuFries size={25} color="white"
                    onClick={() => setToggle(true)} />
            </div>

            <div className="hidden sm:block md:hidden lg:hidden">
                <MobileNav
                    OpenModal={OpenModal}
                    toggleFunc={() => setToggle(false)}
                    toggle={toggle} />
            </div>


            <div className="hidden md:flex md:gap-x-4 lg:flex lg:gap-x-4 ">
                <Link href="" className='text-white'>Home</Link>
                <Link href="" className='text-white'>Bookings</Link>
                <Link href="" className='text-white'>Contact Us</Link>
                <Link href="/about" className='text-white'>About</Link>
            </div>
            <div className="hidden md:flex md:gap-x-8  lg:flex lg:gap-x-8">
                <ApButton title="Login" className="text-bold font-medium text-white " onClick={OpenModal} />
                <Link href="/signUp">
                    <ApButton title="Sign Up" className=" text-bold font-medium bg-white rounded-lg px-5 py-1" />
                </Link>
            </div>
        </div>
    )
}

interface IMobile {
    OpenModal?: () => void;
    toggleFunc: () => void;
    toggle: boolean;
}


const MobileNav = ({ OpenModal, toggleFunc, toggle }: IMobile) => {

    let styleLink = "text-bold font-semibold text-[1.2rem]";

    return (
        <ApDrawer open={toggle}
            onDismiss={toggleFunc}
        >
            <div className='bg-white w-96  px-0'>
                {/* <div className="flex justify-end px-4">
                    <AiOutlineClose size={25} onClick={toggleFunc} />
                </div> */}
                <div className="text-center">
                    <li>
                        <Link href="/" className="text-bold font-semibold text-[1.2rem]">Home</Link>

                    </li>
                    <li>
                        <Link href="" className="text-bold font-semibold text-[1.2rem]" >Bookings</Link>

                    </li>
                    <li>
                        <Link href="" className="text-bold font-semibold text-[1.2rem]" >Contact Us</Link>

                    </li>
                    <li>
                        <Link href="/about" className="text-bold font-semibold text-[1.2rem]" >About</Link>

                    </li>

                    <ApButton title="Login" className="text-bold font-medium text-white bg-[#056DFF]  px-10  py-2 my-4  rounded-md " onClick={OpenModal} />
                    <li>
                        <Link href="/signUp">

                            <ApButton title="Sign Up" className=" text-bold font-medium bg-white border-2 border-[#056DFF] rounded-md px-8 py-1" />
                        </Link>
                    </li>

                </div>




            </div>
        </ApDrawer>

    )
}
