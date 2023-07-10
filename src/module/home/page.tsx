import React from 'react'
import { Navbar } from './components/navbar'
import { HeroPage } from './components/hero'
import ChooseComponent from './components/choose'
import HostelsComponents from './components/hostels'
import Testimonial from './components/testimonial'
import GetAppComponent from './components/getApp'
import { FooterComponent } from './components/footer'

export const HomePage = () => {

    return (
        <div className="p-0 m-0">

            <div className='bg-[#056DFF]  p-5 sm:p-6  md:p-6 md:pb-0  lg:p-6 lg:pb-0'>
                <Navbar />
                <HeroPage />
            </div>

            <ChooseComponent />
            <HostelsComponents />
            <Testimonial />
            <div className='bg-[#056DFF]  '>

                <GetAppComponent />
            </div>
            <div className="bg-black mt-20">
            <FooterComponent />

            </div>
        </div>



    )
}
