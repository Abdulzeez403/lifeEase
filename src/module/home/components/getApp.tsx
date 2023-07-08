import { ApImage } from '@/components/image'
import { ApText } from '@/components/typography'
import React from 'react'
import { BiSolidStar, BiSolidStarHalf } from 'react-icons/bi'
import GoogleIcon from "../../../../public/image/Google.png"
import AppleIcon from "../../../../public/image/Applee.png"

const GetAppComponent = () => {
    return (
        <div className="gap-y-10 p-4 py-6">
            <div className='mt-4'>
                <h4 className='text-white font-semi-bold text-[45px] leading-[60px] w-[420px] '>
                    Let’s find you the perfect home away from home.</h4>
            </div>


            <ApText className='w-[40%] text-white text-bold text-sm leading-5 mt-4 '>
                Choose us for our vast database of hostels, offering you a wide range of options to cater to your preferences and budget.
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


            </div>

        </div >
    )
}

export default GetAppComponent