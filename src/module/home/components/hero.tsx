import { ApImage } from '@/components/image'
import { ApText } from '@/components/typography'
import React from 'react'
import GoogleIcon from "../../../../public/image/Google.png"
import AppleIcon from "../../../../public/image/Applee.png"
import HeroImage from "../../../../public/image/HeroImage.png"
import HeroCropImage from "../../../../public/image/HeroCropImage.png"
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi"

export const HeroPage = () => {
    return (
        <div className=' block md:relative md:overflow-hidden  lg:relative lg:overflow-hidden '>
            <div>
                <div className="gap-y-10 my-[7rem]">

                    <ApText size='sm' color='muted' className='
                     text-slate-300
                     md:mt-4 md:text-left lg:text-left '>REDUCE YOUR STRESS</ApText>
                    <div className='mt-4'>
                        <h4 className=' text-white font-bold text-[25px] leading-[50px] md:w-[50%] md:text-white  md:text-[41px] md:leading-[60px] md:text-left lg:text-left '>
                            Discover the Ultimate  Student Accommodation Experience</h4>
                    </div>


                    <ApText className='  text-white text-sm text-bold leading-5 md:w-[40%]  md:text-left lg:text-left mt-4 '>
                        Your gateway to student accommodation excellence, explore, connect, and find your perfect home
                    </ApText>
                    <div className="  ">
                        <div className=" w-[300px] my-4 md:hidden lg:hidden ">
                            <ApImage
                                src={HeroCropImage}
                                width={45}
                                height={40}
                                alt=""
                            // className="w-full h-full object-cover"
                            />
                        </div>


                        <div className='flex gap-x-8 mt-6'>
                            <div className="w-[150px]">
                                <ApImage
                                    src={GoogleIcon}
                                    width={30}
                                    height={30}
                                    alt="image"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            <div className="w-[150px]">
                                <ApImage
                                    src={AppleIcon}
                                    width={30}
                                    height={30}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />

                            </div>
                        </div>

                        <div className='flex gap-x-[55px] mt-2 '>
                            <div className='flex gap-x-2 items-center'>
                                <h4 className="text-white font-bold text-[27px]">4.5</h4>
                                <div>
                                    <ApText className="flex gap-x-1">
                                        <BiSolidStar size={15} color="#FFBB0D" />
                                        <BiSolidStar size={15} color="#FFBB0D" />
                                        <BiSolidStar size={15} color="#FFBB0D" />
                                        <BiSolidStar size={15} color="#FFBB0D" />
                                        <BiSolidStar size={15} color="#FFBB0D" />



                                    </ApText>
                                    <ApText className="mt-[-4px] text-white text-sm">+2 Reviews</ApText>
                                </div>
                            </div>

                            <div className='flex gap-x-2 items-center'>
                                <h4 className="text-white font-bold text-[27px]">3.5</h4>
                                <div>
                                    <ApText className="flex gap-x-1">
                                        <BiSolidStar size={15} color="#FFBB0D" />
                                        <BiSolidStar size={15} color="#FFBB0D" />
                                        <BiSolidStar size={15} color="#FFBB0D" />
                                        <BiSolidStar size={15} color="#FFBB0D" />
                                        <BiSolidStar size={15} color="#FFBB0D" />
                                    </ApText>
                                    <ApText className=" mt-[-4px] text-white text-sm">+2 Reviews</ApText>
                                </div>
                            </div>

                        </div>
                    </div>

                </div >
            </div>


            <div className=" hidden md:absolute md:top-[2.3rem] md:right-0 md:bottom-0 md:w-[650px] md:block
            lg:absolute lg:top-[2.3rem] lg:right-0 lg:bottom-0 lg:w-[650px] lg:block ">
                <ApImage
                    src={HeroImage}
                    width={45}
                    height={40}
                    alt=""
                />
            </div>
        </div>
    )
}
