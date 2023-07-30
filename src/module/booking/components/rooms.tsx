import React from 'react'

import { ApImage } from '@/components/image';
import Image1 from "../../../../public/image/image1.png"
import Image2 from "../../../../public/image/image2.png"
import Image3 from "../../../../public/image/image3.png"
import Image4 from "../../../../public/image/image4.png"

const RoomsImage = () => {
    return (
        <div className='flex gap-x-3 py-5'>
            <div className='w-[43rem] gap-x-2'>
                <ApImage
                    src={Image1}
                    width={30}
                    height={30}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="">
                <div className='w-[19rem] pb-3 '>
                    <ApImage
                        src={Image4}
                        width={30}
                        height={30}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className='w-[19rem] '>
                    <ApImage
                        src={Image3}
                        width={30}
                        height={30}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>

            <div className="">
                <div className='w-[17.8rem] '>
                    <ApImage
                        src={Image2}
                        width={30}
                        height={30}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

        </div>
    )
}

export default RoomsImage;