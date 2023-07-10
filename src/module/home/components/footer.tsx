import { ApImage } from '@/components/image'
import React from 'react'
import LogoWhite from "../../../../public/image/LogoWhite.png"
import { ApText } from '@/components/typography'
import BsInstagram from "react-icons/bs"
import CiTwitter from "react-icons/ci"
import PiLinkedinLogo from "react-icons/pi"
import Link from 'next/link'

export const FooterComponent = () => {
    return (

        <div>

            <div className='sm:block
             md:flex md:justify-between md:px-4 md:py-8
             lg:flex lg:justify-between lg:px-4 lg:py-8' >
                <div>
                    <div className='w-[100px] mx-auto py-6
                    md:mx-0 lg:mx-0'>
                        <ApImage
                            src={LogoWhite}
                            width={30}
                            height={30}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <ApText size={'sm'} className=' text-center w-[80%] mx-auto text-white md:text-left md:w-[20rem] md:mx-0
                     lg:text-left lg:w-[20rem] lg:mx-0'>
                        Find, Join, Save, Manage, Share, Stay Updated. Sign up now to discover your ideal student accommodation, unlock exclusive features, effortlessly save and compare favorite hostels,
                    </ApText>

                    <div>
                        {/* <BsInstagram/>
                    <CiTwitter/>
                    <PiLinkedinLogo/> */}
                    </div>
                </div>

                <div>
                    <ApText className="text-center text-white font-bold text-md my-8 md:text-left lg:text-left">Helpfull Links</ApText>
                    <div className='flex-1 text-center md:text-left lg:text-left'>
                        <li>
                            <Link href="/" className='text-white'>Home</Link>

                        </li>
                        <li>
                            <Link href="/" className='text-white'>Booking</Link>

                        </li>
                        <li>
                            <Link href="/" className='text-white'>Contact Us</Link>

                        </li>
                    </div>


                </div>
                <div>
                    <ApText className="text-center text-white font-bold text-md my-8 md:text-left lg:text-left">Support</ApText>

                    <div className='flex-1 text-center md:text-left lg:text-left'>
                        <li>
                            <Link href="/" className='text-white'>Term and Condition</Link>

                        </li>
                        <li>
                            <Link href="/" className='text-white'>Support center</Link>

                        </li>
                        <li>
                            <Link href="/" className='text-white'>privacy policy</Link>

                        </li>
                    </div>
                </div>
                <div>
                    <ApText className="text-center text-white font-bold text-md  my-8 md:text-left lg:text-left">Contact</ApText>
                    <ApText className=" text-center w-[80%] mx-auto text-white md:text-left md:w-[20rem] md:mx-0
                     lg:text-left lg:w-[20rem] lg:mx-0" size={"sm"}>
                        Address: 123 Main Street, Anytown, USA <br />
                        Email: john.doe@example.com  <br />
                        Phone Number: +1 (555) 123-4567  <br />
                    </ApText>

                </div>
            </div>
            <div className='border-t-2 my-2'>
                <ApText className="text-white text-center py-4">© Copyright{new Date().getFullYear()}. All Right Reserved!.</ApText>

            </div>
        </div>

    )
}
