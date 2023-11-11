import React from 'react'
// import { ApText } from '@/components/typography'
import TestimonialImage from "../../../../public/image/testimonial.png"
import { ApImage } from '@/components/image'
import { ApText } from '@/components/typography'
import { AiFillStar } from "react-icons/ai"
import Slider from "react-slick";


const Testimonial = () => {
    const settings = {
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (

        <div className="my-10" >
            <h4 className='font-bold text-[2.2rem] text-center text-black my-[4rem]'>Testimonial</h4>

            {/* <div className=" sm:block md:flex md:gap-x-5 lg:flex lg:gap-x-5"> */}
            <Slider {...settings}>

                <TestimonialItems />
                <TestimonialItems />
                <TestimonialItems />
                <TestimonialItems />
                <TestimonialItems />
                <TestimonialItems />
            </Slider>


            {/* </div> */}
        </div>

    )
}

export default Testimonial

const TestimonialItems = () => {
    return (



        <div className=' rounded-lg border-2 p-4 mx-2'>
            <div className='flex gap-x-3 mb-5'>
                <div className="w-70 rounded-full">
                    <ApImage
                        src={TestimonialImage}
                        width={350}
                        height={0}
                        alt="image" />
                </div>


                <div>
                    <ApText className="font-bold">Abdulazeez</ApText>
                    <div className='flex gap-x-2 items-center'>
                        <AiFillStar color="FFBB0D" />

                        <ApText className="font-semibold text-sm">4.5</ApText>
                    </div>
                </div>
            </div>

            <div>
                <ApText size={"sm"}>Thanks to LifeEase, my hostel search was stress-free and efficient. The websites user-friendly interface, extensive search options, and responsive customer support made the entire process a breeze. I highly recommend this platform to any student looking for their ideal accommodation.</ApText>
            </div>
        </div>
    )
}