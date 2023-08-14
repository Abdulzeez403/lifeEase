import React from 'react'
import HostelListingImage from "../../../../../public/image/hostelListing.png"
import { ApImage } from '@/components/image'


export const HostelListing = () => {
    return (
        <div className=' bg-white rounded-md py-4 px-3'>
            <div className='flex gap-x-5  '>
                <div className='w-[19rem] '>
                    <ApImage
                        src={HostelListingImage}
                        width={30}
                        height={30}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <div>
                        <h4 className="font-bold text-[1.3rem] pb-2">Airclass Hostel</h4>
                        <h4 className='my-1'>GRA Ilorin</h4>
                        <h4><span className='font-bold'>200</span> Yearly</h4>
                    </div>
                </div>
            </div>
            <div>
                <p className='text-sm py-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo magni libero voluptate dolorem, eos commodi fugit modi! Placeat corrupti .</p>
            </div>
        </div>
    )
}
