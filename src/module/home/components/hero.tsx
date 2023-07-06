import { ApImage } from '@/components/image'
import { ApText } from '@/components/typography'
import React from 'react'
import GoogleIcon from "../../../../public/image/Google.png"
import AppleIcon from "../../../../public/image/Applee.png"
import HeroImage from "../../../../public/image/HeroImage.png"

export const HeroPage = () => {
    return (


            <div className='relative overflow-hidden '>
                <div>

                <div className="gap-y-10 my-[6rem]">
                    <ApText className='text-slate-100 mt-4'>REDUCE YOUR STRESS</ApText>
                    <div className='mt-4'>
                        <ApText className='text-white font-bold text-[3rem] leading-[70px]'>
                            Discover the Ultimate <br />
                            Student Accommodation <br />
                            Experience</ApText>
                    </div>

                    <ApText className='w-[40%] text-white text-bold text-sm leading-4 mt-4 '>
                        Your gateway to student accommodation excellence, explore, connect, and find your perfect home
                    </ApText>


                    <div>


                        <div className='flex gap-x-8 mt-6'>

                            <div className="w-[150px]">
                                <ApImage
                                    src={GoogleIcon}
                                    width={30}
                                    height={30}
                                    alt=""
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

                        <div className='flex gap-x-12 mt-2 '>
                            <div className='flex gap-x-1 items-center'>
                                <ApText size='lg' className="text-white font-bold text-[2rem]">4.5</ApText>
                                <div>
                                    <ApText className="">111111</ApText>
                                    <ApText className="mt-[-8px] text-white">+2 Reviews</ApText>
                                </div>
                            </div>

                            <div className='flex gap-x-1 items-center'>
                                <ApText size='lg' className="text-white font-bold text-[2rem]">3.5</ApText>
                                <div>
                                    <ApText className="">111111</ApText>
                                    <ApText className="mt-[-8px] text-white">+2 Reviews</ApText>
                                </div>
                            </div>

                        </div>
                    </div>

                </div >
                </div>

                <div className="absolute top-[2.8rem] right-0 bottom-0 w-[650px]">
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
