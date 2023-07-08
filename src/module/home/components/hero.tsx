import { ApImage } from '@/components/image'
import { ApText } from '@/components/typography'
import React from 'react'
import GoogleIcon from "../../../../public/image/Google.png"
import AppleIcon from "../../../../public/image/Applee.png"
import HeroImage from "../../../../public/image/HeroImage.png"
import { BiSolidStar, BiSolidStarHalf } from "react-icons/bi"

export const HeroPage = () => {
    return (


        <div className='relative overflow-hidden '>
            <div>
                <div className="gap-y-10 my-[7rem]">
                    <ApText size='sm' color='muted' className='text-slate-300 mt-4'>REDUCE YOUR STRESS</ApText>
                    <div className='mt-4'>
                        <h4 className='text-white font-bold text-[41px] leading-[60px] '>
                            Discover the Ultimate <br />
                            Student Accommodation <br />
                            Experience</h4>
                    </div>


                    <ApText className='w-[40%] text-white text-bold text-sm leading-5 mt-4 '>
                        Your gateway to student accommodation excellence, explore, connect, and find your perfect home
                    </ApText>


                    <div className=" ">
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

            <div className="absolute top-[2.3rem] right-0 bottom-0 w-[650px]">
                <ApImage
                    src={HeroImage}
                    width={35}
                    height={30}
                    alt=""
                // className="w-full h-full object-cover"
                />
            </div>
        </div>




    )
}
