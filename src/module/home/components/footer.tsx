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

            <div className='flex justify-between px-4 py-8' >
                <div>
                    <div className='w-[100px] mb-10'>
                        <ApImage
                            src={LogoWhite}
                            width={30}
                            height={30}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <ApText size={'sm'} className='w-[20rem] text-white'>
                        Find, Join, Save, Manage, Share, Stay Updated. Sign up now to discover your ideal student accommodation, unlock exclusive features, effortlessly save and compare favorite hostels,
                    </ApText>

                    <div>
                        {/* <BsInstagram/>
                    <CiTwitter/>
                    <PiLinkedinLogo/> */}
                    </div>
                </div>

                <div>
                    <ApText className="text-white font-bold text-md mb-10">Helpfull Links</ApText>
                    <div className='flex-1'>
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
                    <ApText className="text-white font-bold text-md mb-10">Support</ApText>
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
                <div>
                    <ApText className="text-white font-bold text-md  mb-10">Contact</ApText>
                    <ApText className="w-50 text-white" size={"sm"}>
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
