import ApButton from '@/components/button'
import { ApText } from '@/components/typography'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import HostelsComponents from '../home/components/hostels'
import Testimonial from '../home/components/testimonial'
import { FooterComponent } from '../home/components/footer'
import ChooseComponent from '../home/components/choose'

export const Aboutpage = () => {
    return (
        <div>

            <div>
                <div className='flex justify-end rounded-lg py-4 mb-10 '>
                    <div className=" flex m-0 justify-center  bg-white w-20">
                        <Link className='font-semibold' href="/signUp">Sign Up</Link>
                    </div>
                </div>


                <div className="flex justify-between items-center">
                    <div className='w-[100%] text-center px-4 sm:w-[100%] md:w-[40%] md:text-left lg:text-left lg:w-[40%]  '>
                        <h4 className='font-bold text-[2rem] my-8'>About LifeEase</h4>
                        <p className="my-4 leading-2">Your gateway to student accommodation excellence, explore, connect, and find your perfect home Your gateway to student accommodation excellence, explore, connect, and find your perfect homeYour gateway to student accommodation excellence, explore, connect, and find your perfect homeYour gateway to student accommodation excellence, explore, connect, and find your perfect homeYour gateway to student accommodation excellence, explore, connect, and find your perfect homeYour gateway to student accommodation excellence, explore, connect, and find your perfect home</p>

                        <div className="flex mt-[5rem] gap-x-10" >

                            <ApButton
                                title="Download the app"
                                type="button"
                                className=" border-2 border-[#056DFF] text-light w-full py-3 rounded-lg font-bold mb-5"
                            />
                            <div className='flex gap-x-2 items-center   w-full py-2.5 rounded-lg border-2 justify-center mb-5 bg-[#056DFF] '>
                                <ApText className='font-semibold text-white  '>Get Started</ApText>
                                <BsArrowRight size={20} color="white" />


                            </div>
                        </div>
                    </div>

                    <div className=' hidden sm:hidden md:block md:w-[40%] lg:w-[40%] lg:block'>
                        <div className='w-[500px] h-[500px] bg-[#056DFF] rounded-full'></div>
                    </div>


                </div>
            </div>

            <div>
                <ChooseComponent />

                <HostelsComponents />
                <Testimonial />
                <div className="bg-black mt-20">
                    <FooterComponent />
                </div>

            </div>

        </div>


    )
}
