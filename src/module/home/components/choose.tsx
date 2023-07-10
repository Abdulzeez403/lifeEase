import { ApText } from '@/components/typography'
import React from 'react'

const ChooseComponent = () => {
    return (
        <div className="my-[5rem] w-[90%] mx-auto">
            <h4 className='font-bold text-[2.2rem] text-center text-black my-[4rem] md:text-[2.5rem] lg:text-[2.5rem]'>Why Choose Us?</h4>
            <div className="block   md:flex md:justify-between lg:flex lg:justify-between ">
                <ChooseItems
                    title='01.'
                    subtitle='Seamless Booking Experience'
                    description='Opt for us to enjoy a hassle-free booking process, with our user-friendly 
                    interface and secure payment system, ensuring a smooth experience from searching for
                    a hostel to making a reservation.'
                    className="text-blue-600" />
                <ChooseItems
                    title='02.'
                    subtitle='User Reviews and Ratings'
                    description="Rely on our community-driven platform, where real student reviews
                     and ratings provide valuable insights to help you make informed decisions
                      and find the best hostel for your needs."
                    className="text-red-600" />
                <ChooseItems
                    title='03.'
                    subtitle='Extensive Selection'
                    description='Choose us for our vast database of hostels, offering you
                     a wide range of options to cater to your preferences and budget.'
                    className="text-green-600"
                    subStyle="md:w-[80px] lg:w-[80px] " />
            </div>

        </div>
    )
}

interface IProps {
    title: string,
    subtitle: string,
    description: string,
    className: any,
    subStyle?: any
}

const ChooseItems: React.FC<IProps> = ({ title, subtitle, description, className, subStyle }) => {
    return (
        <div className="mt-10">
            <div className=" text-center md:text-left lg:text-left">
                <h4 className={`font-bold text-[2.2rem]  ${className}`}>{title}</h4>
                <ApText className={`font-bold my-5 md:w-[200px] lg:w-[200px]  ${subStyle}`} size={"lg"} >{subtitle}</ApText>
                <ApText size={"xs"} className='my-5 w-[80%]  mx-auto leading-4  md:w-[80%] md:mx-0 lg:w-[80%] lg:mx-0 '>{description}</ApText>
            </div>
        </div>
    )


}
export default ChooseComponent;
