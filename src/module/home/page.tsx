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
        <div>

            <div className='bg-[#056DFF]  p-6 pb-0'>
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
